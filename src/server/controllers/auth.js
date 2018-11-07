import bcrypt from "bcrypt";

const email = "hest@hyf.com";
const password = "jacob";
const hashedPassword = "";

const ecryptPassword = pass => {
  const saltRounds = 10;
  bcrypt.hash(pass, saltRounds, function(err, hash) {
    // make a call to the database
    console.log({ hash });
  });
};

ecryptPassword(password);

export const login = (req, res) => {
  return res.status(200).send({ success: true });
};
