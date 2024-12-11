const { getFoodDataByName } = require('../services/foodService');

async function handleFoodRequest(req, res) {
  const foodName = req.params.name;

  try {
    const foodData = await getFoodDataByName(foodName);
    res.status(200).json(foodData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { handleFoodRequest };
