import db from "../db.js";
import { nanoid } from "nanoid";
("nanoid");
export async function ControllerShorthenUrl(req, res) {
  const { url } = req.body;

  const idUser = await db.query(
    `SELECT users.id FROM users WHERE token = '${req.headers.authorization}'`
  );
  const shorthenUrl = nanoid();

  try {
    db.query(
      "INSERT INTO shortly_url (url,shorthen_url,user_id,acess_count) VALUES ($1,$2,$3,$4)",
      [url, shorthenUrl, idUser.rows[0].id, 0]
    );
  } catch {
    return res.sendStatus(500);
  }
}
