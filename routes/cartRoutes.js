const express = require('express');
const router = express.Router();

const { addToCart, removeFromCart, getCart, clearCart } = require('../controllers/cartController');

router.post('/', addToCart);
router.delete('/item', removeFromCart);
router.get('/', getCart);
router.delete('/', clearCart);

module.exports = router;
