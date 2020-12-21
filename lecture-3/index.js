const express = require('express')
const app = express()
const port = 3000

app
  .get('/', (req, res) => {
    res.send('Hello World!')
  })
  .get('/players', (req, res) => {
    res.send('PLayers hehehe')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})