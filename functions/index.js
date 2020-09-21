const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HSpKZCbY9RZIt8DXDiRdVS3znKWnHo3N1nKxn7MNuLID24e4em3sVSz8fzktK40Xuo8ROBMFMXy6BSJplicnNI600UKlSRBYl');

// Api

// App Config
const app = express();

// Middleware
app.use(cors({ origin: true}));
app.use(express.json());

// Api routes
app.get("/", (request, response) => response.status(200).send('hello world'));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log('payment request recieved', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency: "usd",
    });
    // Created
     response.status(201).send({
         clientSecret:paymentIntent.client_secret,
     });
});



// Listen command

exports.api = functions.https.onRequest(app);


// Emulator endpoint
// http://localhost:5001/fir-32983/us-central1/api


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
