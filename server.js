const express = require('express')
const http = require('http')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/.well-known/acme-challenge/:content', function(req, res) {
  res.send(
    'YYFVgXtTlOl9YTMUwscvfUUuzw1v1juRX8c0ckAj_10.kzdtXxNrbjs4N4EqVmaBr5gfW7jaQrZ-2I3dFskj-lY'
  )
})

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'dist/index.html'))
)

const port = process.env.PORT || 3000
app.set('port', port)

const server = http.createServer(app)
server.listen(port, () => console.log(`Running on port ${port}`))
