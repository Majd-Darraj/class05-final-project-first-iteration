import express from "express";

import {
  searchEvents,
  searchInternships,
  searchMentors,
  searchNetworking
} from "../controllers/search";

const router = express.Router();

router.get("/searchEvents", searchEvents);
router.get("/searchInternships", searchInternships);
router.get("/searchMentors", searchMentors);
router.get("/searchNetworking", searchNetworking);

export default router;
