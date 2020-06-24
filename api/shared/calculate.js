module.exports.calculate = (dataset, product, quantity, price) => {
  const res = {}
  const array = product.currency.split(',')
  for (let j = 0; j < array.length; j++) {
    const valute = array[j]
    res[valute.trim()] = (dataset[valute.trim()] * quantity * price)
  }
  return res
}
