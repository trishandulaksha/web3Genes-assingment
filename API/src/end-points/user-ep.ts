import { validationResult } from "express-validator";
import { UserDao } from "../dao/user-dao";
import { Request, Response } from "express";
import { Validation } from "../common/valiadation";

export namespace userEp {
  export function authValidatioRules() {
    return [Validation.email(), Validation.password()];
  }

  export function registerValidationRules() {
    return [
      Validation.firstName(),
      Validation.lastName(),
      Validation.email(),
      Validation.dob(),
      Validation.gender(),
      Validation.mobileNumber(),
    ];
  }

  // User authentication end point
  export async function authenticateEp(req: Request, res: Response) {
    const userDataVerify = validationResult(req);
    if (!userDataVerify.isEmpty()) {
      return res.send(userDataVerify.array()[0]["msg"]);
    }

    try {
      const { email, password } = req.body;
      const userData = await UserDao.authenticateUser(email, password);

      res.send(userData);
    } catch (err: any) {
      res.send({ error: err.message });
    }
  }

  // User registration endpoint
  export async function userRegisterEp(req: Request, res: Response) {
    const userDataVerify = validationResult(req);

    if (!userDataVerify.isEmpty()) {
      return res.send({ error: userDataVerify.array()[0]["msg"] });
    }

    try {
      const userData = await UserDao.userRegistration(req.body);
      res.status(200).send(userData);
    } catch (err: any) {
      res.send({ error: err.message });
    }
  }

  // User details end point

  export async function userDetailsEp(req: Request, res: Response) {
    try {
      const users = await UserDao.getUsersData("USER");
      res.status(200).send(users);
    } catch (error) {}
  }
}
