const express = require("express");
const cors = require("cors")
require("dotenv").config();
console.log("Mongo started successfully");
const app = express();
const port = process.env.port || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
//The express.urlencoded() middleware in ExpressJS is used to handle form submissions sent in application/x-www-form-urlencoded format.
const { MongoClient, ServerApiVersion } = require("mongodb");
const { default: axios, post } = require("axios");
const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@cluster0.t241ufd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("SSL is running");
});

app.post("/create-payment", async (req, res) => {
  const productInfo = req.body;

  const initiateData = {
    store_id: "rabbi67d7e79e25311",
    store_passwd: "rabbi67d7e79e25311@ssl",
    total_amount: productInfo.amount,
    currency: productInfo.currency,
    tran_id: "REF123",
    success_url: "http://localhost:5000/success-payment",
    fail_url: "http://yoursite.com/fail.php",
    cancel_url: "http://yoursite.com/cancel.php",
    cus_name: "Customer Name",
    cus_email: "cust@yahoo.com",
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: "1000",
    ship_country: "Bangladesh",
    multi_card_name: ["mastercard", "visacard", "amexcard"],
    value_a: "ref001_A",
    value_b: "ref002_B",
    value_c: "ref003_C",
    value_d: "ref004_D",
  };

  const response = await axios({
    method: "post",
    url: "https://sandbox.sslcommerz.com/gwprocess/v4/api.php",
    data: initiateData,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  console.log(response);
  res.send({
    paymentUrl:
    response.data.getWayPageUrl});
});

app.post("/success-payment", (req, res) => {
  const successData = req.body()
  console.log("sucess data", successData);
  res.send(successData.data);
});

app.listen(port, () => {
  console.log(`SSl server is running on ${port}`);
});


