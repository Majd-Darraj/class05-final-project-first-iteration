import SqlString from "sqlstring";
import db from "../config/db";

/******
  GET all events
******/
export function listAllEvents(req, res) {
  // sql query definitions for db string
  const sql = SqlString.format("SELECT * FROM events WHERE active=?", [1]);
  // sql query excution and send response
  db.execute(sql, (err, rows) => {
    // error handler
    if (err) {
      res.status(500).send(err);
      return;
    }

    // success - send response with all data rows
    res.send(rows);
  });
}

/******
  CREATE new event
******/
export function createEvent(req, res) {
  // save data from request body in a variable
  const jsonData = req.body;

  // sql query definitions for db string
  const sql = SqlString.format(`INSERT INTO events SET ?`, jsonData);

  // sql query excution and send response
  db.execute(sql, (err, result) => {
    // error handler
    if (err) {
      res.status(500).send(err);
      return;
    }

    // success - send response with success confirmation
    res.send("New event item added successfuly");
  });
}

/******
  GET one event by ID
******/
export function getEventById(req, res) {
  // save event 'id' from request body parameters in a variable
  const eventId = req.params.id;

  // sql query definitions for db string
  const sql = SqlString.format(
    "SELECT * FROM events WHERE id = ? AND active = ?",
    [eventId, 1]
  );

  // sql query excution and send response
  db.execute(sql, (err, rows) => {
    // error handler
    if (err) {
      res.status(500).send(err);
      return;
    }
    // error - item not found
    if (rows.length === 0) {
      res.status(404).send("Not Found");
      return;
    }

    // success - send response with event item
    res.send(rows[0]);
  });
}

/******
  UPDATE one event data by ID
******/
export function updateEvent(req, res) {
  // save event 'id' from request body parameters in a variable
  const eventId = req.params.id;

  // save event request body in a variable
  const jsonData = req.body;

  // sql query definitions for db string
  const sql = SqlString.format(`UPDATE events SET ? WHERE id = ?`, [
    jsonData,
    eventId
  ]);

  // sql query excution and send response
  db.execute(sql, (err, result) => {
    if (err) {
      // throw err;
      res.status(500).send(err);
      return;
    }
    // error - item not found
    if (!result.affectedRows) {
      res.status(404).send("Not Found");
      return;
    }

    // success - send response with event item
    res.send("New Event item added");
  });
}

/******
  DELETE one event data by ID (change active state to 0 (false))
******/
export function deleteEvent(req, res) {
  // save event 'id' from request body parameters in a variable
  const eventId = req.params.id;

  // sql query definitions for db string
  const sql = SqlString.format(`UPDATE events SET ? WHERE id = ?`, [
    {
      active: 0
    },
    eventId
  ]);

  // sql query excution and send response
  db.execute(sql, (err, result) => {
    if (err) {
      // throw err;
      res.status(500).send(err);
      return;
    }
    // error - item not found
    if (!result.affectedRows) {
      res.status(404).send("Not Found");
      return;
    }

    // success - send response with event item
    res.send("Event Deleted");
  });
}
