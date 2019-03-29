import {assert} from '../src/js/assert'

test('Should doing nothing without environment', () => {
  expect.anything(() => {
    assert(false, 'do nothing ? %s', 'yes')
  })
  expect.anything(() => {
    assert(true, 'do nothing ? %s', 'yes')
  })
})

test('Should handling assertion with environment', () => {
  expect(process.env.NODE_ENV).toBe('test')
  expect.anything(() => {
    assert(true, 'do nothing ? %s', 'yes')
  })
  expect(() => {
    assert(false, 'do nothing ? %s', 'no')
  }).toThrow()
})
