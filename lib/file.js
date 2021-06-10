const fs = require('fs')
const util = require('util')

const readFile = util.promisify(fs.readFile.bind(fs))
const writeFile = util.promisify(fs.writeFile.bind(fs))

async function* itrLines(input, separator = '\n') {
    let i

    while ((i = input.indexOf(separator)) > 0) {
        const line = input.slice(0, i).toString().trim()

        if (line.length) {
            yield line
        }

        input = input.slice(i + 1)
    }

    input = input.toString().trim()

    if (input.length) {
        yield input
    }
}

async function* itrFileLines(file, separator = '\n') {
    yield* itrLines(await readFile(file), separator)
}

module.exports = { readFile, writeFile, itrLines, itrFileLines }
