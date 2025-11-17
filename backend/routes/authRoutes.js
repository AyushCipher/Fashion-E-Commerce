import express from "express";
import {
  registration,
  login,
  sendOtp,
  verifyOtp,
  resetPassword,
  logOut,
  googleLogin
} from "../controller/authController.js";

const router = express.Router();

// USER AUTH
router.post("/register", registration);
router.post("/login", login);
router.post("/googlelogin", googleLogin);

// OTP FLOW
router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/reset-password", resetPassword);

// LOGOUT
router.post("/logout", logOut);

export default router;
