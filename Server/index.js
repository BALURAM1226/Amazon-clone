const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51ItAJ3SCvcRdNxPbdzp8Rp90PwPjubF3oKWUeiidmlWO3UuIz8Oecl1S8AMtPrSyaRY8OrktyfZ4kQ1rJScE4E7700mrWFi2vd"
);

// middlewares
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;


// Routes
app.get("/", (req, res) => {
  res.send("Home page for stripe payment gateway...");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});


// Listen

app.listen(PORT, () => {
  console.log("APP IS UP AND RUNNING PERFECTILY...");
});