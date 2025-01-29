const { getCards, createCard, updateCard, deleteCard } = require('../Controllers/CardController');
const { verifyToken } = require('../Middlewares/AuthMiddleware'); // Middleware to protect card routes

const router = require('express').Router();


// Card routes
router.get('/', verifyToken, getCards); // Get all cards (protected)
router.post('/', verifyToken, createCard); // Create a new card (protected)
router.put('/:id', verifyToken, updateCard); // Update a card by ID (protected)
router.delete('/:id', verifyToken, deleteCard); // Delete a card by ID (protected)
module.exports = router;
