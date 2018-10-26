import express from "express";

import internshipsRoute from "./internships";
import eventsRoute from "./events";
import mentorsRoute from "./mentors";
import networkingsRoute from "./networkings";

const router = express.Router();

router.use("/internships", internshipsRoute);
router.use("/events", eventsRoute);
router.use("/mentors", mentorsRoute);
router.use("/networkings", networkingsRoute);

router.use((req, res, next) => {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

export default router;
