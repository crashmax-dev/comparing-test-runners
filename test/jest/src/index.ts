import { fullCircle, range } from '@tests/app'

test('jest fullCircle 25', () => {
  range(0, 25).forEach((value) => {
    const result = fullCircle('hello', value)
    expect(result).toBe('hello')
  })
})
