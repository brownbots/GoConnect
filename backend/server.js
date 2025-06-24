const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Health check route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Import routes
const userRoutes = require("./routes/userRoutes");
const cabRoutes = require("./routes/cabRoutes");
const rentalRoutes = require("./routes/rentalRoutes");
const walkingBuddyRoutes = require("./routes/walkingBuddyRoutes");
const tripRoutes = require("./routes/tripRoutes");

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/cabs", cabRoutes);
app.use("/api/rentals", rentalRoutes);
app.use("/api/walkingbuddies", walkingBuddyRoutes);
app.use("/api/trips", tripRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
