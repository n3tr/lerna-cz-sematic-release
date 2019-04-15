const _ = require('lodash')
const changeCase = require('change-case')

const strings = ['Hello', 'World!!']

function hello() {
  return changeCase.camel(_.join(strings, ', '))
}

module.exports = hello
