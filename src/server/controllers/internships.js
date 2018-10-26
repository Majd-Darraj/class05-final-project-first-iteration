import SqlString from "sqlstring";
import db from "../config/db";

/******
  GET all internships
******/
export function listAllInternships(req, res) {
  // sql query definitions for db string
  const sql = SqlString.format("SELECT * FROM internships WHERE is_active=?", [
    1
  ]);
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
  CREATE new internship
******/
export function createInternship(req, res) {
  // save data from request body in a variable
  const jsonData = req.body;

  // sql query definitions for db string
  const sql = SqlString.format(`INSERT INTO internships SET ?`, jsonData);

  // sql query excution and send response
  db.execute(sql, (err, result) => {
    // error handler
    if (err) {
      res.status(500).send(err);
      return;
    }

    // success - send response with success confirmation
    res.send("New internship item added successfuly");
  });
}

/******
  GET one internship by ID
******/
export function getInternshipById(req, res) {
  // save internship 'id' from request body parameters in a variable
  const internshipId = req.params.id;

  // sql query definitions for db string
  const sql = SqlString.format(
    "SELECT * FROM internships WHERE id = ? AND is_active = ?",
    [internshipId, 1]
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

    // success - send response with internship item
    res.send(rows[0]);
  });
}

/******
  UPDATE one internship data by ID
******/
export function updateInternship(req, res) {
  // save internship 'id' from request body parameters in a variable
  const internshipId = req.params.id;

  // save internship request body in a variable
  const jsonData = req.body;

  // sql query definitions for db string
  const sql = SqlString.format(`UPDATE internships SET ? WHERE id = ?`, [
    jsonData,
    internshipId
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

    // success - send response with internship item
    res.send("New Internship item added");
  });
}

/******
  DELETE one internship data by ID (change is_active state to 0 (false))
******/
export function deleteInternship(req, res) {
  // save internship 'id' from request body parameters in a variable
  const internshipId = req.params.id;

  // sql query definitions for db string
  const sql = SqlString.format(`UPDATE internships SET ? WHERE id = ?`, [
    {
      is_active: 0
    },
    internshipId
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

    // success - send response with internship item
    res.send("Internship Deleted");
  });
}
