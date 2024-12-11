const express = require('express');
const app = express();
const routes = require('./routes');
const admin = require('firebase-admin');

// Inisialisasi Firebase Admin SDK
const serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(express.json()); // Untuk parsing request body JSON
app.use('/api', routes);  // Menambahkan semua route API ke prefix /api

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
