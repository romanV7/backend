const mongoose = require("mongoose");
const fs = require('fs')
const path = require('path')

const Order = require("../models/order");
const Product = require("../models/product")

const { calculate, func } = require('../shared/calculate.js')

exports.orders_get_all = async (req, res, next) => {
  try {
    const products = await Order.find().populate('product').exec()
    const response = {
      count: products.length,
      orders: products.map(product => {
        return {
          _id: product._id,
          product: product.product,
          quantity: product.quantity,
          request: {
            type: "GET",
            url: "http://localhost:3000/orders/" + product._id
          }
        }
      })
    }
    return res.status(200).json(response)
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

exports.orders_create_order = async (req, res, next) => {
  try {
    const product = await Product.findById(req.body.productId)
    console.log({ product })
    console.log({ input: req.body.productId, exists: product._id })
    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }
    const order = new Order({
      _id: mongoose.Types.ObjectId(),
      quantity: req.body.quantity,
      product: req.body.productId
    })
    try {
      const savedOrder = await order.save()
      const message = {
        message: "Order stored",
        createdOrder: {
          _id: savedOrder._id,
          product: savedOrder.product,
          quantity: savedOrder.quantity
        },
        request: {
          type: "GET",
          url: "http://localhost:3000/orders/" + savedOrder._id
        }
      }
      return res.status(201).json(message)
    } catch (err) {
      res.status(500).json({ error: err })
    }
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

exports.pay = async (req, res, next) => {
  const filePath = path.join(__dirname, '../../daily_json.js');
  try {
    const dataset = {}
    const payload = await fs.promises.readFile(filePath, 'utf8')
    const parsedFile = JSON.parse(payload)
    const orders = await Order.find().populate('product').exec()
    for (const [currency, data] of Object.entries(parsedFile.Valute)) {
      const value = data.Value
      dataset[currency] = value
    }
    const meta = []
    for (let i = 0; i < orders.length; i++) {
      const { product, quantity } = orders[i]
      const object = calculate(dataset, product, quantity, product.price)
      meta.push(object)
    }
    const valutes = func(meta)
    const response = {}
    Object.keys(valutes).forEach(key => {
     if (valutes[key] !== 0) response[key] = valutes[key]
   })
   return res.status(200).json(response)
  } catch (err) {
    res.status(500).json({ error: err })
  }
}
