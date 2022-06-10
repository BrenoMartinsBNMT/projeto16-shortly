import db from "../db.js";
import bcrypt from "bcrypt";
export async function ControllerSignup(req, res) {
  let { name, email, password } = req.body;

  try {
    await db.query(
      `INSERT INTO users (name,email,password) VALUES ($1,$2,$3)`,
      [name, email, bcrypt.hashSync(password, 10)]
    );

    return res.send(201);
  } catch {
    return res.sendStatus(409);
  }
}
