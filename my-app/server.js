const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', require('./routes/users.routes'));

const PORT = config.get("port");
const MONGOURI = config.get("mongoUri");

async function start() {
  try {
    await mongoose.connect(MONGOURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => console.log(`started at port ${PORT}`));
  } catch (error) {
    console.log("Ошибочка", e.message);
    process.exit(1);
  }
}

start();

