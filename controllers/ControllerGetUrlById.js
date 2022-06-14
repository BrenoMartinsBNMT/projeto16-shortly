import db from "../db.js";
export async function GetUrlsById(req, res) {
  const { id } = req.params;

  try {
    let urlInfos = await db.query(
      "SELECT shortly_url.url,shortly_url.id,shortly_url.shrothen_url FROM shortly_url WHERE id=$1",
      [id]
    );
    return res.send(urlInfos.rows[0]);
  } catch {
    return res.sendStatus(404);
  }
}
