module.exports = function () {
  const start = Date.now()
  return (type = 'ms') => (Date.now() - start) / ({s: 1000, ms: 1}[type] || 1)
}
