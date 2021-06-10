const fs = require('fs')
const util = require('util')

const writeFile = util.promisify(fs.writeFile.bind(fs))

module.exports = { writeFile }
