import User from "../models/User.js";

// Add User with Image
export const addUser = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      surname: req.body.surname,
      phone: req.body.phone,
      email: req.body.email,
      photo: req.file.filename
    });

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get Users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};
