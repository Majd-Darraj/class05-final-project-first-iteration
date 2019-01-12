import mysql from "mysql2";

const DATABASE_URL =
  // Mila DB (uncomment the next line)
  //  process.env.DATABASE_URL || "mysql://root:mila@127.0.0.1:3306/thread";

  // Majd DB (uncomment the next line)
  process.env.DATABASE_URL ||
  "mysql://yie6frij1tcjorvf:p45326iasi1b6w73@irkm0xtlo2pcmvvz.chr7pe7iynqr.eu-west-1.rds.amazonaws.com:3306/a8av79kcm9wqokt3";
const connection = mysql.createConnection(DATABASE_URL);

export default connection;
