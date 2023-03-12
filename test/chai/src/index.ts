import { fullCircle, range } from '@tests/app'
import { assert, should } from 'chai'

should()

it('chai + mocha fullCircle 25', () => {
  range(0, 25).forEach((value) => {
    const result = fullCircle('hello', value)
    assert.equal(result, 'hello')
  })
})
