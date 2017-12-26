function splitAny(input) {
    switch (typeof input) {
        case 'number':
            return splitNumber(input)
        break

        case 'boolean':
            throw TypeError()
        break

        case 'string':
            return splitString(input)
        break

        case 'function':
            return splitFunction(input)
        break

        case 'object':
            if (Array.isArray(input)){
                return splitArray(input) 
            } else {
                return splitObject(input)
            }
        break        
    }
}

function splitString(str) {
    return (str.indexOf(' ') === -1) 
        ? str.split('') 
        : str.split(' ').map((item) => splitString(item))
}

function splitNumber(num) {
    return splitString(num.toString())
        .map((item) => Number(item))
}

function splitFunction(fn) {
    return splitAny(fn())
}

function splitArray(arr) {
    return arr.map(item => splitAny(item))
}

function splitObject(obj) {
    return Object.keys(obj).map(key => [key, obj[key]])
}

module.exports = splitAny;