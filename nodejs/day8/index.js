const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  res.send('Hello World!')
  next()
})
app.use((req, res) => {
  res.send('hello world!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:3000/`)
})
