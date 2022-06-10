import db from "../db.js";
import { nanoid } from "nanoid";
("nanoid");
export async function ControllerShorthenUrl(req, res) {
  const { url } = req.body;

  const idUser = await db.query(
    `SELECT users.id FROM users WHERE token = '${req.headers.authorization}'`
  );
  const shorthenUrl = nanoid();
  console.log(shorthenUrl);
  try {
    db.query(
      "INSERT INTO shortly_url (url,shrothen_url,user_id) VALUES ($1,$2,$3)",
      [url, shorthenUrl, idUser.rows[0].id]
    );
  } catch {}
  console.log(idUser.rows.id);
}
