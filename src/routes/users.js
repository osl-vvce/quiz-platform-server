const { Router } = require('express')

const userRouter = Router()

userRouter.get('/', (req, res) => {
  res.json({
    message: 'This works'
  })
})

module.exports = userRouter
