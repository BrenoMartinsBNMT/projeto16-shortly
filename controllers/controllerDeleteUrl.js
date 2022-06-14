import db from "../db.js";
import jwt from "jsonwebtoken";
export async function ControllerDeleteUrl(req, res) {
  const { id } = req.params;
  const { token } = req.body;

  const urlExist = await db.query(
    "SELECT id,user_id FROM shortly_url WHERE  id =$1",
    [id]
  );

  if (urlExist.rowCount === 0) {
    return res.sendStatus(404);
  }

  const urlUser = await db.query("SELECT id FROM users WHERE token = $1", [
    token,
  ]);

  if (!urlExist.rows[0].user_id === urlUser.rows[0].id) {
    return res.sendStatus(401);
  }

  await db.query("DELETE FROM shortly_url WHERE id = $1", [id]);
  res.sendStatus(204);
}
