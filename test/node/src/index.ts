import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { fullCircle, range } from '@tests/app'

describe('node:test', () => {
  it('fullCircle 25', () => {
    range(0, 25).forEach((value) => {
      const result = fullCircle('hello', value)
      assert.equal(result, 'hello')
    })
  })
})
