const router = require('express').Router()
const eCommerce = require("../routes/v1/e-commerce/index")

router.use('/e-commerce', eCommerce)

module.exports = router