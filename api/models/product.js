const mongoose = require('mongoose');
const Valute = require('../shared/valute')

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true
    },
    currency: {
      type: String,
      //enum: Object.keys(Valute).filter(k => typeof Valute[k] === 'number'),
      require: true,
    },
    price: {
      type: Number,
      required: true
    }
})

module.exports = mongoose.model('Product', productSchema);
