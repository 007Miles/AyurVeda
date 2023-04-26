const express = require('express')
const router = express.Router()

const {
  getAllCartItems,
  createCartItem,
  updateCartItems,
  deleteCartItem,
  deleteAllCartItems,
  getCartItemsbycusid,
  insertcartcompletedetails,
  generateCommission,
} = require('../controllers/cart')

router
  .route('/')
  .get(getAllCartItems)
  .get(getCartItemsbycusid)
  .post(createCartItem)
  .delete(deleteAllCartItems)
  .post(insertcartcompletedetails)
  .post(generateCommission)
router
  .route('/:id')
  .patch(updateCartItems)
  .delete(deleteCartItem)
  .get(getCartItemsbycusid)

module.exports = router
