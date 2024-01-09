import express from "express";
import {
  getAllUsers,
  getNewUsers,
  specialFunc,
  getUserDetails,
  updateUserDetails,
  deleteUserDetails,
} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", getNewUsers);

router.get("/userid/special", specialFunc);

router
  .route("/userid/:id")
  .get(getUserDetails)
  .put(updateUserDetails)
  .delete(deleteUserDetails);

// router.get("/userid/:id", getUserDetails);

// router.put("/userid/:id", updateUserDetails);

// router.delete("/userid/:id", deleteUserDetails);

export default router;
