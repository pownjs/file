const fs = require('fs')
const util = require('util')

const readFile = util.promisify(fs.readFile.bind(fs))

module.exports = { readFile }
