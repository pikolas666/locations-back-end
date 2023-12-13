import express from "express";
import {
  ADD_LOCATION,
  GET_LOCATIONS,
  DELETE_LOCATION,
  GET_LOCATION_BY_ID,
  EDIT_LOCATION,
  GET_RANDOM_LOCATION
} from "../controllers/locations.js";

import auth from "../middleware/auth.js";


const router = express.Router();


router.post("/locations", auth, ADD_LOCATION);
router.get("/locations", auth, GET_LOCATIONS);
router.put("/locations/:id", EDIT_LOCATION);
router.get("/locations/:id", GET_LOCATION_BY_ID);
router.delete("/locations/:id", DELETE_LOCATION);
router.get("/locations/random", GET_RANDOM_LOCATION);

export default router;