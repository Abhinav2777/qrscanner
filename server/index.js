const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3001; // or any other desired port

// Connect to your MongoDB database
mongoose.connect("mongodb://localhost:27017/your-database-name", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to the database");
});

// Define a schema and a model for your database
const itemSchema = new mongoose.Schema({
  qrCode: String,
  name: String,
  description: String,
  // Add other relevant fields here
});
const Item = mongoose.model("Item", itemSchema);

// Define your API endpoint to handle database queries
app.get("/items/:qrCode", async (req, res) => {
  const { qrCode } = req.params;
  try {
    const item = await Item.findOne({ qrCode });
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
