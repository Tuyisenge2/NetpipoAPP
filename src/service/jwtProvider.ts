import jwt from "jsonwebtoken";

// const generateToken = (email: string, position: string): string => {
//   const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET as string;

//   const payload = { email, position };

//   const token = jwt.sign(payload, ACCESS_TOKEN_SECRET, {
//     expiresIn: "1h", // Token expires in 1 hour
//   });

//   return token;
// };

// export default generateToken;


type Payload = {
  email: string;
  position: string;
};

class TokenService {
  private secret: string;

  constructor() {
    this.secret = process.env.ACCESS_TOKEN_SECRET as string;
    if (!this.secret) {
      throw new Error("ACCESS_TOKEN_SECRET is not defined in environment variables");
    }
  }

  generateToken(payload: Payload): string {
    return jwt.sign(payload, this.secret, { expiresIn: "1h" });
  }
}

export default new TokenService();
