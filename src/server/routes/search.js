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
    "SELECT * FROM events where active = ?",
    [1]

    // "SELECT * FROM events, internships WHERE events.active=? AND internships.active=?",
  );
  // sql query excution and send response
  db.execute(sql, (err, rows) => {
    // error handler
    if (err) {
      res.status(500).send(err);
      return;
    }

    // let results = rows.filter(keyWord => {
    //   console.log(keyWord);
    //   const sasa = new RegExp(`^${req.query.q.toLowerCase()}`);
    //   // console.log(sasa);
    //   new RegExp(`^${req.query.q}`).test(keyWord);
    // });

    // console.log(rows);
    // console.log(req.query);
    let results = rows.find(event => {
      // console.log(event.event_name);
      Object.entries(event).forEach(([key, value]) => {
        // console.log(value);
        // console.log(value.toString().toLowerCase());
        let sa = value.toString().toLowerCase();

        console.log(sa);
      });

      // return event.event_name.toLowerCase().includes(req.query.q.toLowerCase());
    });

    // console.log(results);

    res.send(results);
  });
});

export default router;
