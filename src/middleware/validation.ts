import { Request, Response, NextFunction } from "express";
import { employeeValidate } from "../validation/employeeValidation";
import { validateUUID } from "../validation/idValidation";
export interface ExpandedRequest extends Request {
  user?: any;
}

export default class validationMiddleware {
  public validateDataUser(req: Request, res: Response, next: NextFunction) {
    try {
      if (req.body) {
        const { error } = employeeValidate(req.body);
        if (error) {
          return res.status(400).json({
            status: "BAD REQUEST",
            message: error.details[0].message.replace(/"/g, ""),
            error,
          });
        }
      }
      next();
    } catch (error) {
      return res.status(500).json({
        status: "SERVER ERROR",
        message: "Something went wrong while updating the employee",
        error,
      });
    }
  }
  public validateId(req: Request, res: Response, next: NextFunction) {
    try {
        if (req.params) {
            const {id}=req.params
            const { error } = validateUUID({id});
            if (error) {
              return res.status(400).json({
                status: "BAD REQUEST",
                message: error.details[0].message.replace(/"/g, ""),
                error,
              });
            }
          }
          next();
    } catch (error) {
        return res.status(500).json({
            status: "SERVER ERROR",
            message: "Something went wrong while updating the employee",
            error,
          });
    }
  }
}
