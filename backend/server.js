const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import routes
const cabRoutes = require("./routes/cabRoutes");
const rentalRoutes = require("./routes/rentalRoutes");
const walkingBuddyRoutes = require("./routes/walkingBuddyRoutes");
const tripRoutes = require("./routes/tripRoutes");

// Use routes
app.use("/api/cabs", cabRoutes);
app.use("/api/rentals", rentalRoutes);
app.use("/api/walkingbuddies", walkingBuddyRoutes);
app.use("/api/trips", tripRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));