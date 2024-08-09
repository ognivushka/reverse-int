module.exports = function reverse (n) {
    return n<0? +parseInt(n.toString().split('').reverse().join('')): parseInt(n.toString().split('').reverse().join(''))
}
