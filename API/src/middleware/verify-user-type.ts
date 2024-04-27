import { NextFunction, Request, Response } from "express";

export function isAdmin(req: Request, res: Response, next: NextFunction) {
  // const userData = req.user; // Assuming userData is attached to the request after authentication
  // if (!userData || userData.type !== "ADMIN") {
  //   return res.status(403).json({ error: "Unauthorized access" });
  // }
  // req.isAdmin = true; // Add isAdmin flag to the request object
  // next();
}
