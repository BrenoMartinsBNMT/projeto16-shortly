import db from "../db.js";

export async function ValidateUserUrl(req, res, next) {
  const { token } = req.body;
  const { id } = req.params;

  const ifUserExist = await db.query(
    "SELECT users.id,users.token FROM users WHERE id = $1 AND token = $2",
    [id, token]
  );

  if (ifUserExist.rowCount === 0) {
    return res.sendStatus(404);
  }
  next();
}
