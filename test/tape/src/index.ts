import { fullCircle, range } from '@tests/app'
import test from 'tape'

test('tape fullCircle 25', (t) => {
  t.plan(26)

  range(0, 25).forEach((value) => {
    const result = fullCircle('hello', value)
    t.equal(result, 'hello')
  })
})
