const polka = require('polka')
const app = polka()
const chataja = require('../util/chataja')

/**
 * index router
 */
app.get('/', (_, res) => {
  res.end('Halo disana 😀')
})

/**
 * chataja router
 * 
 * @example /chataja/123
 */
app.get('/chataja/', (_, res) => {
  res.end('format /chataja/62xxx')
})
app.get('/chataja/:target', async (req, res) => {
  res.end(await chataja(req.params.target))
})

/**
 * start development server
 */
app.listen(3000, err => {
  if (err) throw err;
  console.log('> App listen on port 3000')
})