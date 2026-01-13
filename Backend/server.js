import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Serve images
app.use("/uploads", express.static("uploads"));

app.use("/api/users", userRoutes);

app.listen(5002, () => {
  console.log("Server running on http://localhost:5002");
});
