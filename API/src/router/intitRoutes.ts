import { Router } from "express";
import { userEp } from "../end-points/user-ep";

const initRouter = Router();

initRouter.post(
  "/authenticate",
  userEp.authValidatioRules(),
  userEp.authenticateEp
);
initRouter.post(
  "/register",
  userEp.registerValidationRules(),
  userEp.userRegisterEp
);

initRouter.post("/getusersdata", userEp.userDetailsEp);
export default initRouter;
