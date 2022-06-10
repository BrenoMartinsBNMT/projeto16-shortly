import { Router } from "express";
import { ControllerShorthenUrl } from "../controllers/controllerPostShorthenUrl.js";
import { ValidateHeader } from "../middlewares/validadeHeader.js";
import { ValidateToken } from "../middlewares/ValidateToken.js";

const routeUrls = Router();

routeUrls.post(
  "/urls/shorten",
  ValidateToken,
  ValidateHeader,
  ControllerShorthenUrl
);

export default routeUrls;
