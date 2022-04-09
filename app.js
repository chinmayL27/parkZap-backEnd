const express = require("express");
const mongoDB = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const cors = require("cors");

const corsOptions = {
  credentials: true,
  origin: "*",
};

const app = express();
dotenv.config({ path: `${__dirname}/config.env` }); // .env file middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "10kb" }));

// connecting the database for storing data
mongoDB
  .connect(
    "mongodb+srv://room319:fSh58d8QBNmSe4LM@cluster0.6iaa9.mongodb.net/parkzap"
  )
  .then(() => {
    console.log("database connected successfully!!");
  });

app.use(cors(corsOptions));
app.use("/", routes);

// running server at port:8000
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("server started successfully!!");
});
