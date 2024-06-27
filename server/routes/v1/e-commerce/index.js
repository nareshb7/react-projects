const router = require("express").Router()
const { getProductData, getProductList, getHomePageData, addToCart, updateCartItem, confirmOrder } = require("../../../controllers/e-commerce")


router.get('/get-product-data', getProductData)
router.get("/get-product-list", getProductList )
router.get("/get-homepage-data", getHomePageData)
router.post("/add-to-cart",addToCart)
router.post("/update-cartitem", updateCartItem)
router.post('/confirm-order', confirmOrder)

module.exports = router