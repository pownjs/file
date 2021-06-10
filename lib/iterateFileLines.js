const fs = require('fs')
const readline = require('readline')

async function* iterateFileLines(file) {
    const rl = readline.createInterface({
        input: fs.createReadStream(file)
    })

    yield* rl
}

module.exports = { iterateFileLines }
