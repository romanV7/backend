const mongoose = require("mongoose");
const Product = require("../models/product");

exports.product_create_product = async (req, res) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
  //  quantity: req.body.quantity,
    currency: req.body.currency,
    price: req.body.price,
  })
  try {
    const savedProduct = await product.save()
    const message = {
      message: "Created product successfully",
      createdProduct: {
        _id: savedProduct._id,
        name: savedProduct.name,
      //  quantity: savedProduct.quantity,
        currency: savedProduct.currency,
        price: savedProduct.price,
        request: {
          type: 'GET',
          url: 'http://localhost:3000/products/' + savedProduct._id
        }
      }
    }
    return res.status(201).json(message)
  } catch (err) {
    res.status(500).json({ error: err })
  }
}


exports.products_get_all = async (req, res, next) => {
  try {
    const docs = await Product.find().select("name price _id").exec()
    const response = {
      count: docs.length,
      products: docs.map(doc => {
        return {
          name: doc.name,
          price: doc.price,
          _id: doc._id,
          request: {
            type: "GET",
            url: "http://localhost:3000/products/" + doc._id
          }
        }
      })
    }
    return res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err })
  }
}
