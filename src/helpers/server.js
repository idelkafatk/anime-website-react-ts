// eslint-disable-next-line @typescript-eslint/no-var-requires
const corsProxy = require('cors-anywhere')

const host = '0.0.0.0'
const port = 8080

corsProxy
  .createServer({
    originWhitelist: [], // Добавьте домены, которые вы хотите разрешить
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
  })
  .listen(port, host, () => {
    console.log(`CORS Anywhere is running on ${host}:${port}`)
  })
