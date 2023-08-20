// api/cors.js

// eslint-disable-next-line @typescript-eslint/no-var-requires
const corsProxy = require('cors-anywhere')

const host = '0.0.0.0'
const port = 8080

const server = corsProxy.createServer({
  originWhitelist: [],
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2'],
})

module.exports = (req, res) => {
  if (req.method === 'OPTIONS') {
    res.status(200).send('')
    return
  }

  server.emit('request', req, res)
}
