import Joi from "joi";
import db from "../db.js";
import bcrypt from "bcrypt";

export async function ValidateBodySignin(req, res, next) {
  const reqBody = req.body;

  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const validateSchema = Joi.object({
    email: Joi.string().pattern(regexEmail).required(),
    password: Joi.string().required(),
  });

  const infosValidated = validateSchema.validate(reqBody);

  if (infosValidated.error) {
    return res.send(infosValidated.error);
  }
  let { email, password } = reqBody;
  const tokenUser = await db.query(
    `SELECT password FROM users WHERE email = $1`,
    [email]
  );
  if (tokenUser.rows.length === 0) {
    return res.sendStatus(401);
  }
  if (!bcrypt.compareSync(password, tokenUser.rows[0].password)) {
    return res.sendStatus(401);
  }

  next();
}
