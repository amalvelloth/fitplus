const Card = require('../Models/Card'); // Ensure you have a Card model

// Get all cards for the logged-in user
const getCards = async (req, res) => {
  try {
    const userId = req.user.id; // Get the logged-in user's ID
    const cards = await Card.find({ userId }); // Filter by user ID
    res.status(200).json(cards);
  } catch (error) {
    console.error("Error fetching cards:", error);
    res.status(500).json({ error: 'Failed to fetch cards' });
  }
};

// Get a specific card by ID
const getCardById = async (req, res) => {
  try {
    const cardId = req.params.id;
    const userId = req.user.id; // Get the logged-in user's ID

    const card = await Card.findOne({ _id: cardId, userId });
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.status(200).json(card);
  } catch (error) {
    console.error("Error fetching card:", error);
    res.status(500).json({ error: 'Failed to fetch card' });
  }
};

// Create a new card
const createCard = async (req, res) => {
  try {
    const userId = req.user.id; // Ensure the card is linked to the logged-in user
    const newCard = new Card({ ...req.body, userId });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    console.error("Error creating card:", error);
    res.status(500).json({ error: 'Failed to create card' });
  }
};

// Update a card (only if the card belongs to the user)
const updateCard = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const card = await Card.findOneAndUpdate({ _id: id, userId }, req.body, { new: true });

    if (!card) {
      return res.status(404).json({ message: "Card not found or unauthorized" });
    }

    res.status(200).json(card);
  } catch (error) {
    console.error("Error updating card:", error);
    res.status(500).json({ error: 'Failed to update card' });
  }
};

// Delete a card (only if the card belongs to the user)
const deleteCard = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const card = await Card.findOneAndDelete({ _id: id, userId });

    if (!card) {
      return res.status(404).json({ message: "Card not found or unauthorized" });
    }

    res.status(200).json({ message: 'Card deleted successfully' });
  } catch (error) {
    console.error("Error deleting card:", error);
    res.status(500).json({ error: 'Failed to delete card' });
  }
};

module.exports = { getCards, createCard, updateCard, deleteCard, getCardById };
