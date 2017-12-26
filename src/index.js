let splitString = (str) => (str.indexOf(' ') === -1) ? str.split('')  : str.split(' ').map((item) => splitString(item)),
    splitNumber = (num) => splitString(String(num)).map((item) => Number(item)),
    splitFunction = (fn) => splitAny(fn()),
    splitArray = (arr) => arr.map((item) => splitAny(item)),
    splitObjectLiteral = (obj) => Object.keys(obj).map((key) => [key, obj[key]]),
    splitObject = (obj) => Array.isArray(obj) ? splitArray(obj) : splitObjectLiteral(obj),
    splitBoolean = (val) => { throw TypeError()},
    splitRuleFn = (type) => eval('split' + type.charAt(0).toUpperCase() + type.slice(1))

module.exports = splitAny = (input) => splitRuleFn(typeof input)(input)
