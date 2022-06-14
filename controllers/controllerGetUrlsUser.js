import db from "../db.js";

export async function ControllerGetUrlsUser(req, res) {
  const { token } = req.body;
  try {
    const infosUrl = await db.query(
      "SELECT shortly_url.shorthen_url,shortly_url.id,shortly_url.acess_count FROM users JOIN shortly_url ON token= $1  GROUP BY shortly_url.id",
      [token]
    );
    const infosUserUrl = await db.query(
      "SELECT users.id,users.name, SUM (shortly_url.acess_count) AS visitCount FROM users JOIN shortly_url ON users.token= $1 GROUP BY users.id",
      [token]
    );
    const { id, name, visitcount } = infosUserUrl.rows[0];

    return res.json({ id, name, visitcount, shortenedUrls: infosUrl.rows });
  } catch {
    return res.sendStatus(404);
  }
}
