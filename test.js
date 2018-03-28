const test = require('ava')
const timespan = require('.')
const delay = require('delay')

test('basic', async t => {
  let end = timespan()
  await delay(500)

  t.true((end('s') - 0.5) < 0.01)
  t.true((end('ms') - 500) < 10)

  await delay(1000)

  t.true((end('s') - 1.5) < 0.01)
  t.true((end('ms') - 1500) < 10)
})
