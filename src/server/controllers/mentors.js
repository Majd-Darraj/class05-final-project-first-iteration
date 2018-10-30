import SqlString from "sqlstring";
import db from "../config/db";

/******
  GET all mentors
******/
export function listAllMentors(req, res) {
  // sql query definitions for db string
  const sql = SqlString.format("SELECT * FROM mentors WHERE active=?", [1]);
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
  CREATE new mentor
******/
export function createMentor(req, res) {
  // save data from request body in a variable
  const jsonData = req.body;

  // sql query definitions for db string
  const sql = SqlString.format(`INSERT INTO mentors SET ?`, jsonData);

  // sql query excution and send response
  db.execute(sql, (err, result) => {
    // error handler
    if (err) {
      res.status(500).send(err);
      return;
    }

    // success - send response with success confirmation
    res.send("New mentor item added successfuly");
  });
}

/******
  GET one mentor by ID
******/
export function getMentorById(req, res) {
  // save mentor 'id' from request body parameters in a variable
  const mentorId = req.params.id;

  // sql query definitions for db string
  const sql = SqlString.format(
    "SELECT * FROM mentors WHERE id = ? AND active = ?",
    [mentorId, 1]
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

    // success - send response with mentor item
    res.send(rows[0]);
  });
}

/******
  UPDATE one mentor data by ID
******/
export function updateMentor(req, res) {
  // save mentor 'id' from request body parameters in a variable
  const mentorId = req.params.id;

  // save mentor request body in a variable
  const jsonData = req.body;

  // sql query definitions for db string
  const sql = SqlString.format(`UPDATE mentors SET ? WHERE id = ?`, [
    jsonData,
    mentorId
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

    // success - send response with mentor item
    res.send("New Mentor item added");
  });
}

/******
  DELETE one mentor data by ID (change active state to 0 (false))
******/
export function deleteMentor(req, res) {
  // save mentor 'id' from request body parameters in a variable
  const mentorId = req.params.id;

  // sql query definitions for db string
  const sql = SqlString.format(`UPDATE mentors SET ? WHERE id = ?`, [
    {
      active: 0
    },
    mentorId
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

    // success - send response with mentor item
    res.send("Mentor Deleted");
  });
}
