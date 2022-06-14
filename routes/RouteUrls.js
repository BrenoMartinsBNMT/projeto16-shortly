import { Router } from "express";
import { ControllerShorthenUrl } from "../controllers/controllerPostShorthenUrl.js";
import { ValidateHeader } from "../middlewares/validadeHeader.js";
import { ValidateToken } from "../middlewares/ValidateToken.js";
import { GetUrlsById } from "../controllers/ControllerGetUrlById.js";
import { GetShorthenUrl } from "../controllers/ControllerGetShorthenUrl.js";

import { ControllerDeleteUrl } from "../controllers/controllerDeleteUrl.js";
import { ControllerGetUrlsUser } from "../controllers/controllerGetUrlsUser.js";
import { GetRankign } from "../controllers/ControllerGetRanking.js";
import { ValidateUserUrl } from "../middlewares/validateUserUrl.js";
const routeUrls = Router();

routeUrls.post(
  "/urls/shorten",
  ValidateToken,
  ValidateHeader,
  ControllerShorthenUrl
);
routeUrls.get("/urls/:id", GetUrlsById);
routeUrls.get("/urls/open/:shortUrl", GetShorthenUrl);

routeUrls.delete("/urls/:id", ControllerDeleteUrl);

routeUrls.get("/users/:id", ValidateUserUrl, ControllerGetUrlsUser);
routeUrls.get("/ranking", GetRankign);
export default routeUrls;
