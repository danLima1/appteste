const express = require('express')
const app = express()
const port = 3500

app.get('/', (req, res) => {
  res.send('<h1>olá mundo!</h1>')
})

app.listen(port, () => {
   console.log(`acesse o endereço 'http://localhost:${port}' para ver o site`)
})