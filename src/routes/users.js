import express from "express";

import { REGISTER_USER, LOGIN, GET_ALL_USERS } from "../controllers/users.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/users", auth , GET_ALL_USERS);
router.post("/users", REGISTER_USER);
router.post("/users/login", LOGIN);

export default router;