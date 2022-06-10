import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export async function ValidateHeader(req, res, next) {
  const reqHeader = req.headers;

  try {
    const data = jwt.verify(reqHeader.authorization, process.env.KEY_JWT);
  } catch {
    return res.sendStatus(401);
  }

  next();
}
