import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
  phone: String,
  email: String,
  photo: String   
});

export default mongoose.model("User", userSchema);
