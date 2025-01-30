import { Request, Response } from "express";
import TokenService from "../service/jwtProvider";
import { User } from "../database/models/user";

export default class AuthenticationController {
  // Generate JWT token for an employee
  public async generateToken(req: Request, res: Response) {
    try {
      const { email, position } = req.body;
      if (!email || !position) {
        return res.status(400).json({
          status: "BAD REQUEST",
          message: "Email and position are required",
        });
      }

      const existUser = await User.findOne({where:{
        email
      }});

      if (!existUser ) {
        return res.status(400).json({
          status: "BAD REQUEST",
          message: "Email does not exist",
        });
      }

      const token = TokenService.generateToken({ email, position });
      return res.json({
        status: 200,
        message: "Token generated successfully",
        token,
      });
    } catch (error) {
      return res.status(500).json({
        status: "SERVER ERROR",
        message: "Something went wrong!",
        error,
      });
    }
  }
}
