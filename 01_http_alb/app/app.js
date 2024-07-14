const express = require('express')
const os = require("os");
const hostname = process.env.HOST_NAME;
const app = express()

app.get('/app', function (req, res) {
  res.send(`hello from ${hostname}`)
})

app.listen(8080)