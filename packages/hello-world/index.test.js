const hello = require('./index')

test('Hello, World!!', () => {
  expect(hello()).toEqual('Hello, World!!')
})