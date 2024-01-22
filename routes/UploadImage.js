/**
 * @author Jigar Khalas
 */

import express from "express";
import multer from "multer";

const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      req.file = file.fieldname + "-" + Date.now() + ".jpg";
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("logo");

const uploadMiddleware = (req, res, next) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: err.message });
    } else if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
    next();
  });
};

router.post("/upload", uploadMiddleware, (req, res) => {
  res.status(200).json({ url: req.file.filename });
});

export default router;
