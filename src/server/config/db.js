import mysql from "mysql2";

const DATABASE_URL =
  process.env.DATABASE_URL || "mysql://admin_m:hyfpass00@127.0.0.1:3306/thread";
const connection = mysql.createConnection(DATABASE_URL);

export default connection;
