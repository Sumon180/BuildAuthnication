import express from "express";
import multer from "multer";

import {
  deleteContact,
  getContact,
  postContact,
  putContact,
  updateContact,
} from "../controllers/userRouter";
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

// Home pages
router.get("/", getContact);

//create user
router.post("/user", upload.single("file"), postContact);

// delete user
router.delete("/userRemove/:id", deleteContact);

// Update user
router.get("/update/:id", updateContact);
router.put("/update/:id", putContact);

export default router;
