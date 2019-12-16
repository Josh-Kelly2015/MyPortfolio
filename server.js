const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
//Initalize express
const app = express();
// Set PORT to Herokus chosen port, or 8080
const PORT = process.env.PORT || 8080;
// Import API Routes
const routes = require("./Routes/API");
// Initialize API Routes
app.use(routes);
// Connect to MongoDB using mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/personaldb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// Verify mongoose connection
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Serve static assets on Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// HTTP request logger
app.use(morgan("tiny"));
//Send bad requests to the build fileindex.html
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
