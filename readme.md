# My Food API

This is a simple API for fetching food data from Firestore based on food name.

## Installation

1. Clone the repository.
2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file and add your Firebase service account credentials:

    ```plaintext
    FIREBASE_SERVICE_ACCOUNT_KEY=path/to/your/serviceAccountKey.json
    ```

4. Start the server:

    ```bash
    npm start
    ```

## Endpoints

### GET `/api/food/:name`

Fetch food data by food name (e.g., `telur_rebus`).

#### Response Example:

```json
[
  {
    "name": "telur_rebus",
    "nutrition": {
      "calories": 155,
      "carbohydrate": 1.1,
      "fat": 10.6,
      "protein": 13.0
    },
    "per": "100g"
  }
]
