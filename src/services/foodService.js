const admin = require('firebase-admin');
const db = admin.firestore();

async function getFoodDataByName(foodName) {
  try {
    const foodRef = db.collection('foods');  // Koleksi 'foods' di Firestore
    const snapshot = await foodRef.where('name', '==', foodName).get();

    if (snapshot.empty) {
      throw new Error('Food not found');
    }

    const foodData = snapshot.docs.map(doc => doc.data());
    return foodData;
  } catch (error) {
    throw new Error(`Error fetching food data: ${error.message}`);
  }
}

module.exports = { getFoodDataByName };
