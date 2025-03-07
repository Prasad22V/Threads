const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected...");
  } catch (error) {
    console.error("DB Connection Error:", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;