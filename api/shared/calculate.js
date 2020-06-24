module.exports.calculate = (dataset, product, quantity, price) => {
  const res = {}
  const array = product.currency.split(',')
  for (let j = 0; j < array.length; j++) {
    const valute = array[j]
    res[valute.trim()] = (dataset[valute.trim()] * quantity * price)
  }
  return res
}

module.exports.func = dataset => dataset.reduce((acc, cur) => {
  return {
    AUD: (cur.AUD || 0) + (acc.AUD || 0),
    AZN: (cur.AZN || 0) + (acc.AZN || 0),
    GBP: (cur.GBP || 0) + (acc.GBP || 0),
    AMD: (cur.AMD || 0) + (acc.AMD || 0),
    BYN: (cur.BYN || 0) + (acc.BYN || 0),
    BGN: (cur.BGN || 0) + (acc.BGN || 0),
    BRL: (cur.BRL || 0) + (acc.BRL || 0),
    HUF: (cur.HUF || 0) + (acc.HUF || 0),
    HKD: (cur.HKD || 0) + (acc.HKD || 0),
    DKK: (cur.DKK || 0) + (acc.DKK || 0),
    USD: (cur.USD || 0) + (acc.USD || 0),
    EUR: (cur.EUR || 0) + (acc.EUR || 0),
    INR: (cur.INR || 0) + (acc.INR || 0),
    KZT: (cur.KZT || 0) + (acc.KZT || 0),
    CAD: (cur.CAD || 0) + (acc.CAD || 0),
    KGS: (cur.KGS || 0) + (acc.KGS || 0),
    CNY: (cur.CNY || 0) + (acc.CNY || 0),
    MDL: (cur.MDL || 0) + (acc.MDL || 0),
    NOK: (cur.NOK || 0) + (acc.NOK || 0),
    PLN: (cur.PLN || 0) + (acc.PLN || 0),
    RON: (cur.RON || 0) + (acc.RON || 0),
    XDR: (cur.XDR || 0) + (acc.XDR || 0),
    SGD: (cur.SGD || 0) + (acc.SGD || 0),
    TJS: (cur.TJS || 0) + (acc.TJS || 0),
    TRY: (cur.TRY || 0) + (acc.TRY || 0),
    TMT: (cur.TMT || 0) + (acc.TMT || 0),
    UZS: (cur.UZS || 0) + (acc.UZS || 0),
    UAH: (cur.UAH || 0) + (acc.UAH || 0),
    CZK: (cur.CZK || 0) + (acc.CZK || 0),
    SEK: (cur.SEK || 0) + (acc.SEK || 0),
    CHF: (cur.CHF || 0) + (acc.CHF || 0),
    ZAR: (cur.ZAR || 0) + (acc.ZAR || 0),
    KRW: (cur.KRW || 0) + (acc.KRW || 0),
    JPY: (cur.JPY || 0) + (acc.JPY || 0),
  }
}, {})
