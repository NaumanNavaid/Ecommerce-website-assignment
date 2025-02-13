// lib/validation.ts
import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(1, "Name zaroori hai"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password kam se kam 6 characters ka hona chahiye"),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password zaroori hai"),
});

export type SignupInput = z.infer<typeof signupSchema>;
export type LoginInput = z.infer<typeof loginSchema>;