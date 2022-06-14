import db from "../db.js";

export async function GetRankign(req, res) {
  const infosAllUrls = await db.query(
    "SELECT users.id,users.name, SUM(shortly_url.acess_count) AS visitsCount, COUNT(shortly_url.id) AS linksCount FROM users LEFT JOIN shortly_url ON users.id=shortly_url.user_id GROUP BY users.id ORDER BY SUM(shortly_url.acess_count) LIMIT 10"
  );

  res.send(infosAllUrls.rows);
}
