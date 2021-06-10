const path = require('path')
const assert = require('assert')

const { iterateFileLines } = require('../lib/iterateFileLines')

describe('iterateFileLines', () => {
    it('generates lines', async() => {
        const lines = []

        for await (let line of iterateFileLines(path.join(__dirname, 'data', 'lines.txt'))) {
            lines.push(line)
        }

        assert.ok(lines.length === 16, 'there are 16 lines')
    })
})
