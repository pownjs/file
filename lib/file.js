const fs = require('fs')
const util = require('util')

const readFile = util.promisify(fs.readFile.bind(fs))
const writeFile = util.promisify(fs.writeFile.bind(fs))

async function* yieldFileLines(file, separator = '\n') {
    // TODO: this is a placeholder function for better implementation

    const data = await readFile(file)

    yield* data.toString().split(separator)
}

async function pushFileLines(file, iterable, separator = '\n') {
    // TODO: this is a placeholder function for better implementation

    const lines = []

    for await (let line of iterable) {
        lines.push(line)
    }

    await writeFile(file, lines.join(separator))
}

module.exports = { readFile, writeFile, yieldFileLines }
