import { Request, Response, NextFunction, RequestHandler } from "express";
import UsersEntity, { User } from "../entities/users.entity";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
const entity = new UsersEntity();
const saltRounds = parseInt(process.env.SALT_ROUNDS as string) ?? 10;
const bcryptSecret = process.env.BCRYPT_SECRET as string;
const JWTSecret = (process.env.JWT_SECRET as string) ?? "my-secret-key";

class AuthService {
  async getall(): Promise<User[]> {
    const createdUser = await entity.index();
    return createdUser;
  }

  async register(user: User): Promise<User> {
    user.password = await bcrypt.hash(user.password + bcryptSecret, saltRounds);
    const createdUser = await entity.createUser(user);
    return createdUser;
  }

  async updateuser(user: User): Promise<User> {
    try {
      user.password = await bcrypt.hash(
        user.password + bcryptSecret,
        saltRounds
      );
      const res = await entity.updateuser(user);

      return res;
    } catch (error: any) {
      return error.message;
    }
  }

  async deleteUser(id: number): Promise<string> {
    const deletedUser = await entity.deleteUser(id);
    return deletedUser;
  }

  async login(user: User): Promise<User> {
    const { username, password } = user;

    // check user in db
    const isUser = await entity.getUserByUsername(username);
    if (isUser === undefined) throw new Error("User does not exist");
    // check if password is correct
    const isPasswordCorrect = await bcrypt.compare(
      password + bcryptSecret,
      isUser.password
    );
    if (!isPasswordCorrect) throw new Error("Password is incorrect");

    // generate token
    const token = this.generateToken(isUser);

    // remove password from user
    isUser.password = "*****secret";

    // return user with token
    return { ...isUser, token };
  }

  generateToken(user: User): string {
    // generate token
    const token = jwt.sign({ sub: user.username }, JWTSecret, {
      expiresIn: 6000, // expires in 24 hours
    });

    return token;
  }
}

const authGuard = (async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // get token from request header
    const token = req.headers.authorization?.split(" ")[1];

    // check if token exists
    if (token === undefined) throw new Error("Token is missing");

    // decode token
    const decodedToken = jwt.verify(token, JWTSecret);

    // check if token is valid
    if (decodedToken === undefined) throw new Error("Invalid token");

    // get user by username
    const user = await entity.getUserByUsername(decodedToken?.sub as string);

    // check if user exists
    if (user === undefined) throw new Error("User does not exist");

    // attach user to request object
    res.locals.user = user;

    next();
  } catch (e: any) {
    res.status(401).json({
      message: "Unauthorized",
      error: e?.message,
    });
  }
}) as RequestHandler;

export { authGuard };
export default AuthService;
