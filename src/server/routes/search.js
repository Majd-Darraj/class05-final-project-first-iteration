import express from "express";
import SqlString from "sqlstring";
import db from "../config/db";

const router = express.Router();

router.get("/", (req, res) => {
  // const events = [
  //   "event_name",
  //   "event_type",
  //   "event_address",
  //   "event_postal_code",
  //   "event_city",
  //   "event_start_date",
  //   "event_agenda",
  //   "event_language",
  //   "contact_person",
  //   "contact_phone",
  //   "contact_email"
  // ];

  const searchQuery = `${req.query.q}`;
  // const searchQuery = `%${req.query.q}%`;
  // const searchRegion = `%${req.query.region}%`;
  // const eventDate = `%${req.query.date}%`;
  console.log(searchQuery);

  const sql = SqlString.format(
    // "SELECT * FROM events, internships where (events.event_name REGEXP ?) OR (events.event_type REGEXP ?) OR (events.event_agenda REGEXP ?) OR (events.event_language REGEXP ?) OR (events.contact_person REGEXP ?) OR (events.event_city REGEXP ?) OR internships.internship_description REGEXP ?) ) AND (events.active = 1 AND internships.active =1",
    "SELECT * FROM events where (event_name REGEXP ? OR event_type REGEXP ? OR event_city REGEXP ?  OR event_agenda REGEXP ?  OR event_language REGEXP ?  OR contact_person REGEXP ? ) AND active = 1 ",

    [
      searchQuery,
      searchQuery,
      searchQuery,
      searchQuery,
      searchQuery,
      searchQuery
    ]
    // })
  );

  // SELECT name, price, photo
  // FROM drinks, drinks_photos
  // WHERE drinks.id = drinks_id
  // GROUP BY drinks_id

  db.execute(sql, (err, serachResult) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    if (serachResult.length === 0) {
      res.status(404).send("Not Found");
      return;
    }

    res.send(serachResult);
  });
});

export default router;

///// TRASH **********************

// const searchRegion = `%${req.query.location}%`;
// const searchQuery = new RegExp(`^${req.query.q}`);

// db.execute(sql, (err, rows) => {
//   // error handler
//   if (err) {
//     res.status(500).send(err);
//     return;
//   }

//   let results = rows.filter(keyWord => {
//     console.log(keyWord);
//     const sasa = new RegExp(`^${req.query.q.toLowerCase()}`);
//     // console.log(sasa);
//     new RegExp(`^${req.query.q}`).test(keyWord);
//   });

//   // console.log(rows);
// // console.log(req.query);
// let results = rows.find(event => {
//   // console.log(event.event_name);
//   Object.entries(event).forEach(([key, value]) => {
//     // console.log(value);
//     // console.log(value.toString().toLowerCase());
//     let sa = value.toString().toLowerCase();

//     console.log(sa);
//   });

//     // return event.event_name.toLowerCase().includes(req.query.q.toLowerCase());
//   });
