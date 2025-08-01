// controllers/cartController.js
// Simple in-memory cart for demonstration (per session or user should be used in production)
let cart = [];


function addToCart(req, res) {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ success: false, error: 'No product id provided.' });
    }
    // ค้นหาในตะกร้าว่ามีสินค้านี้อยู่แล้วหรือไม่
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += 1;
    } else {
        cart.push({ id, qty: 1 });
    }
    res.json({ success: true, cart });
}

function removeFromCart(req, res) {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ success: false, error: 'No product id provided.' });
    }
    // ลดจำนวน ถ้าเหลือ 1 ให้ลบออก
    const item = cart.find(i => i.id === id);
    if (item) {
        if (item.qty > 1) {
            item.qty -= 1;
        } else {
            cart = cart.filter(i => i.id !== id);
        }
    }
    res.json({ success: true, cart });
}

function getCart(req, res) {
    res.json({ cart });
}

function clearCart(req, res) {
    cart = [];
    res.json({ success: true });
}

module.exports = {
    addToCart,
    removeFromCart,
    getCart,
    clearCart
};
