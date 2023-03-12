import assert from 'node:assert/strict'
import { fullCircle, range } from '@tests/app'

export function test() {
  range(0, 25).forEach((value) => {
    const result = fullCircle('hello', value)
    assert.equal(result, 'hello')
  })
}
