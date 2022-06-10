import { Router } from "express";
import { ControllerSignup } from "../controllers/ControllerSignup.js";
import { ValidateBodySignup } from "../middlewares/ValidateSignup.js";
import { ValidateBodySignin } from "../middlewares/ValidateSignin.js";
import { ControllerSignin } from "../controllers/controllerSignin.js";

const routeAuth = Router();

routeAuth.post("/signup", ValidateBodySignup, ControllerSignup);
routeAuth.post("/signin", ValidateBodySignin, ControllerSignin);

export default routeAuth;
