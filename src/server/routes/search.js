import express from "express";
import SqlString from "sqlstring";
import db from "../config/db";

const app = express();

import { listAllInternships } from "../controllers/internships";
import { listAllMentors } from "../controllers/mentors";
import { listAllNetworkings } from "../controllers/networking";
import { listAllEvents } from "../controllers/events";

const router = express.Router();

router.get("/", (req, res) => {
  const sql = SqlString.format(
    // "SELECT * FROM events WHERE event_name=" +
    //   SqlString.escape(`${req.query.q}`)
    "SELECT * FROM events, internships WHERE events.active=? AND internships.active=?",
    [1]
  );
  // sql query excution and send response
  db.execute(sql, (err, rows) => {
    // error handler
    if (err) {
      res.status(500).send(err);
      return;
    }

    let results = rows.find(event =>
      event.event_name.toLowerCase().includes(req.query.q)
    );

    console.log(results);

    res.send(results);
  });
});

export default router;
