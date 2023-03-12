import { fullCircle, range } from '@tests/app'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

test('uvu fullCircle 25', () => {
  range(0, 25).forEach((value) => {
    const result = fullCircle('hello', value)
    assert.equal(result, 'hello')
  })
})

test.run()
