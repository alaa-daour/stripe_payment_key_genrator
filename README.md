# Stripe Payment Data Generator

This project allows users to generate **payment intents** or **payment methods** using the Stripe API. It provides a simple frontend and backend to interact with the Stripe service in **test mode**.

## Features

- Generate **payment intents** or **payment methods** with Stripe.
- Choose how many secrets or methods to generate.
- Use **Stripe test tokens** to ensure safe testing.

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/alaa-daour/stripe_payment_key_genrator.git
   cd stripe_payment_key_genrator

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create a `.env` file**:
   Add your Stripe secret key to the `.env` file:
   ```
   STRIPE_SECRET_KEY=sk_test_your_secret_key
   ```

4. **Run the backend server**:
   ```bash
   node server.js
   ```

5. **Open the frontend**:
   Open `http://localhost:3000` in your browser.

## Usage

- Select the type of payment data to generate: **Payment Intent** or **Payment Method**.
- Enter the amount (in cents) and the currency (default is **USD**).
- Specify how many instances to generate.
- Click **Generate** to get the results displayed on the page.

## Dependencies

- [Express](https://expressjs.com/)
- [Stripe](https://stripe.com/)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.