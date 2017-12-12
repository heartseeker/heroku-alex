const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000

app.get('/', (req, res) => res.send('Hello Alex World!'))

app.listen(PORT, () => console.log('Example app listening on port 8000!'))