const express = require("express");
const path = require("path");


const app = express()

app.use(express.static(path.join(__dirname, './dist/static')))


// app.get('/config', (req, res) => {
//   res.send({
//     code: 0,
//     data: config
//   })
// })

// oauthRoute(app)

// app.get('/**', function (req, res) {
//   // res.header('Cache-Control', 'no-cache')
//   res.sendfile(`${path.join(__dirname, './dist/static')}/index.html`)
// })

const server = app.listen(3000, () => {
  
//   console.log('Example app listening at http://%s:%s', host, port)
})