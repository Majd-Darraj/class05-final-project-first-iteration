import express from "express";

import internshipsRoute from "./internships";
import eventsRoute from "./events";
import mentorsRoute from "./mentors";
import networkingsRoute from "./networking";
import searchRoute from "./search";

const router = express.Router();

router.use("/internships", internshipsRoute);
router.use("/events", eventsRoute);
router.use("/mentors", mentorsRoute);
router.use("/networking", networkingsRoute);
router.use("/search", searchRoute);

router.use((req, res, next) => {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

export default router;
