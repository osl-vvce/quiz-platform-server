const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 8080

var corsOptions = {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  maxAge: 600, // 10 minutes
  allowedHeaders: ['content-type', 'x-access-token', 'authorization', 'accept'],
  exposedHeaders: [
    // Rate limiting with dolph
    'X-RateLimit-Limit',
    'X-RateLimit-Remaining',
    'X-RateLimit-Reset'
  ]
}

const app = express()

app.use(cors(corsOptions))
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
