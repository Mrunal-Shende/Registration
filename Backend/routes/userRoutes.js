import express from "express";
import upload from "../middleware/upload.js";
import { addUser, getUsers } from "../controllers/userController.js";

const router = express.Router();

router.post("/add", upload.single("photo"), addUser);
router.get("/", getUsers);

export default router;
