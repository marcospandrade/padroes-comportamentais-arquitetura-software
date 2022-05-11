import { Request, Response, NextFunction } from "express";
export function PermissionHandle(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { permission } = req.body;

  if (permission === "admin") {
    next();
  } else {
    res
      .status(403)
      .json({ message: "Você não tem permissão para cadastrar usuários" });
  }
}
