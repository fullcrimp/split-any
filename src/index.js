let splitString = (str) => 
    (str.indexOf(' ') === -1) 
        ? str.split('') 
        : str.split(' ')
            .map((item) => splitString(item))

let splitNumber = (num) => 
    splitString(num.toString())
        .map((item) => Number(item))

let splitFunction = (fn) => 
    splitAny(fn())

let splitArray = (arr) => 
    arr.map((item) => splitAny(item))

let splitObjectLiteral = (obj) => 
    Object.keys(obj)
        .map((key) => [key, obj[key]])

let splitObject = (obj) =>
    Array.isArray(obj)
        ? splitArray(obj) 
        : splitObjectLiteral(obj)

let splitBoolean = (val) => 
    TypeError()


let splitFn = {
    'number': splitNumber,
    'boolean': splitBoolean,
    'string': splitString,
    'function': splitFunction,
    'object': splitObject
}

module.exports = splitAny = (input) => 
    splitFn[typeof input](input)


