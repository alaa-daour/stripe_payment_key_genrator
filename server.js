const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const stripe = new Stripe(process.env.STRIPE_SECRET);
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/generate', async (req, res) => {
  const { type, amount, currency, count } = req.body;

  try {
    let results = [];

    if (type === 'payment_intent') {
      const promises = Array.from({ length: count }, () =>
        stripe.paymentIntents.create({
          amount,
          currency,
        })
      );
      const intents = await Promise.all(promises);
      results = intents.map((intent) => intent.client_secret);
    } else if (type === 'payment_method') {
      const promises = Array.from({ length: count }, () =>
        stripe.paymentMethods.create({
          type: 'card',
          card: {
            token: 'tok_visa', // Use Stripe test token
          },
        })
      );
      const methods = await Promise.all(promises);
      results = methods.map((method) => method.id);
    } else {
      return res.status(400).json({ error: 'Invalid type specified' });
    }

    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
