const _ = require('lodash')

const strings = ['Hello', 'World!!']

function hello() {
  return _.join(strings, ', ')
}

module.exports = hello
