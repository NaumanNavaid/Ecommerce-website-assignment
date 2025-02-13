import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const saltRounds = 10;
const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

export const hashPassword = async (password: string) => {
  return bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (password: string, hashPassword: string) => {
  return bcrypt.compare(password, hashPassword);
}

export function generateToken(payload: { userId: string }): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
  }
  
  export function verifyToken(token: string): { userId: string } | null {
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
      return decoded && typeof decoded === 'object' && 'userId' in decoded ? { userId: decoded.userId as string } : null;
    } catch (error) {
      return null;
    }
  }