const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://swatibhadoriya:swati1506@mernblogapp.8jufy8o.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
