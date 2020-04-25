const express = require('express')
const path = require('path')

const app = express()
if (process.env.NODE_ENV !== 'production')
    require('dotenv').config() // devDependency to setup .env locally
const PORT = process.env.PORT

app.use(express.static('public'))

// ---------------------------------------------------------------------------------------------------------------

app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
})

// ---------------------------------------------------------------------------------------------------------------

app.listen(PORT, ()=>console.log(`Listening at ${PORT}`))