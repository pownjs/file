const path = require('path')
const assert = require('assert')

const { yieldFileLines } = require('../lib/file')

describe('file', () => {
    describe('#yieldFileLines', () => {
        it('generates lines', async() => {
            const gen = await yieldFileLines(path.join(__dirname, 'data', 'lines.txt'))

            for (let i = 0; i < 16; i++) {
                const result = await gen.next()

                assert.ok(result.done === false, 'not done')
                assert.ok(result.value == i.toString(16), `value ${result.value} === index ${i.toString(16)}`)
            }
        })
    })
})
