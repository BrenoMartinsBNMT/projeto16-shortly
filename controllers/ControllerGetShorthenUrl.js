import db from "../db.js";

export async function GetShorthenUrl(req, res) {
  const { shortUrl } = req.params;

  try {
    const isShorthenUrlExist = await db.query(
      "SELECT shortly_url.url FROM shortly_url WHERE shorthen_url = $1",
      [shortUrl]
    );
    console.log(isShorthenUrlExist.rowCount);
    if (isShorthenUrlExist.rowCount === 0) {
      return res.sendStatus(404);
    }

    await db.query("UPDATE shortly_url SET acess_count = acess_count + 1 ");
    res.redirect(isShorthenUrlExist);
  } catch {
    return res.sendStatus(400);
  }
}
