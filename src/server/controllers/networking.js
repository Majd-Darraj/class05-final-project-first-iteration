import SqlString from "sqlstring";
import db from "../config/db";

/******
  GET all networkings
******/
export function listAllNetworkings(req, res) {
  // sql query definitions for db string
  const sql = SqlString.format("SELECT * FROM networking WHERE active=?", [1]);
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
  CREATE new networking
******/
export function createNetworking(req, res) {
  // save data from request body in a variable
  const jsonData = req.body;

  // sql query definitions for db string
  const sql = SqlString.format(`INSERT INTO networking SET ?`, jsonData);

  // sql query excution and send response
  db.execute(sql, (err, result) => {
    // error handler
    if (err) {
      res.status(500).send(err);
      return;
    }

    // success - send response with success confirmation
    res.send("New networking item added successfuly");
  });
}

/******
  GET one networking by ID
******/
export function getNetworkingById(req, res) {
  // save networking 'id' from request body parameters in a variable
  const networkingId = req.params.id;

  // sql query definitions for db string
  const sql = SqlString.format(
    "SELECT * FROM networking WHERE id = ? AND active = ?",
    [networkingId, 1]
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

    // success - send response with networking item
    res.send(rows[0]);
  });
}

/******
  UPDATE one networking data by ID
******/
export function updateNetworking(req, res) {
  // save networking 'id' from request body parameters in a variable
  const networkingId = req.params.id;

  // save networking request body in a variable
  const jsonData = req.body;

  // sql query definitions for db string
  const sql = SqlString.format(`UPDATE networking SET ? WHERE id = ?`, [
    jsonData,
    networkingId
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

    // success - send response with networking item
    res.send("New Networking item added");
  });
}

/******
  DELETE one networking data by ID (change active state to 0 (false))
******/
export function deleteNetworking(req, res) {
  // save networking 'id' from request body parameters in a variable
  const networkingId = req.params.id;

  // sql query definitions for db string
  const sql = SqlString.format(`UPDATE networking SET ? WHERE id = ?`, [
    {
      active: 0
    },
    networkingId
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

    // success - send response with networking item
    res.send("Networking Deleted");
  });
}
