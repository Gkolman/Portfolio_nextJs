
const express = require('express')
const next = require('next')
const path = require('path')
const port = parseInt(process.env.PORT, 10) || 80
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const fs = require('fs')
const https = require('https')

const options = {
key: fs.readFileSync('/etc/letsencrypt/live/gageguzman.com-0001/privkey.pem'),
cert: fs.readFileSync('/etc/letsencrypt/live/gageguzman.com-0001/fullchain.pem')
}
app.prepare().then(() => {
const app = express()
  app.all('*', (req, res) => {
  return handle(req, res)
  })
  const server = https.createServer(options,app)
  const startServer = ( async () => {
    try {
      await server.listen(443)
      console.log('https server is running')
    } catch (error) {
      console.log('https server could not connect', error)
    }
  })()
})