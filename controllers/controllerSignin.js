import db from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export async function ControllerSignin(req, res) {
  let { email } = req.body;

  const data = { email };
  const secretKey = process.env.KEY_JWT;
  const config = { expiresIn: 60 * 60 * 24 * 30 };
  const generatorToken = jwt.sign(data, secretKey, config);

  if (generatorToken) {
    await db.query(
      `UPDATE users SET token='${generatorToken}' WHERE email = '${email}'`
    );
  }
  res.status(201).send({ token: generatorToken });
}
