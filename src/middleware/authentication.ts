
import { Request, Response, NextFunction } from "express";
import jwt, { JsonWebTokenError, JwtPayload } from "jsonwebtoken";


// const authenticateUser = async (
// 	req: Request,
// 	res: Response,
// 	next: NextFunction,
// ) => {
//      const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

// 	const token = req.headers.authorization?.split(" ")[1];
// 	if (!token) {
// 		return res
// 			.status(401)
// 			.json({ status: "UNAUTHORIZED", message: "Please login to continue" });
// 	}
// 	const decoded = jwt.decode(token) as JwtPayload;

// 	if (decoded && decoded.exp && Date.now() >= decoded.exp * 1000) {
// 		return res
// 			.status(401)
// 			.json({ message: "Token has expired, please login again!" });
// 	}
// 	try {
// 		const verifiedToken = jwt.verify(
// 			token,
// 			ACCESS_TOKEN_SECRET as string,
// 		) as JwtPayload;
	
// 		next();
// 	} catch (error) {
// 		if (error instanceof jwt.TokenExpiredError) {
// 			return res
// 				.status(401)
// 				.json({ message: "Token has expired, please login again!" });
// 		} else if (error instanceof jwt.JsonWebTokenError) {
// 			return res.status(401).json({ message: "Invalid token!" });
// 		} else {
// 			return res.status(500).json({ message: "Internal server error" });
// 		}
// 	}
// };

//type TokenError = jwt.JsonWebTokenError | jwt.TokenExpiredError;

export default class AuthMiddleware {
  private static ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

  public  authenticateUser(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ status: "UNAUTHORIZED", message: "Please login to continue" });
    }

    const decoded = jwt.decode(token) as JwtPayload;
    if (decoded && decoded.exp && Date.now() >= decoded.exp * 1000) {
      return res.status(401).json({ message: "Token has expired, please login again!" });
    }

    try {
      jwt.verify(token, AuthMiddleware.ACCESS_TOKEN_SECRET as string) as JwtPayload;
      next();
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        return res.status(401).json({ message: "Token has expired, please login again!" });
      } else if (error instanceof jwt.JsonWebTokenError) {
        return res.status(401).json({ message: "Invalid token!" });
      } else {
        return res.status(500).json({ message: "Internal server error" });
      }
    }
  }
}

