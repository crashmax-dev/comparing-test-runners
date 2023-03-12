import { fullCircle, range } from '@tests/app'
import test from 'ava'

test('ava fullCircle 25', (t) => {
  range(0, 25).forEach((value) => {
    const result = fullCircle('hello', value)
    t.is(result, 'hello')
  })
})
