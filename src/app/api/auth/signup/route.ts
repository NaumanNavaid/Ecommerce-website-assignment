import { NextResponse } from "next/server";
import { hashPassword } from "@/lib/auth";
import { signupSchema } from "@/lib/validation";
import { generateToken } from "@/lib/auth";
import { client } from "@/sanity/lib/client";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = signupSchema.parse(body);

    // Check if user already exists
    const existingUser = await client.fetch(
      `*[_type == "user" && email == $email][0]`,
      { email }
    );

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user in Sanity
    const newUser = await client.create({
      _type: "user",
      name,
      email,
      password: hashedPassword,
    });

    // Generate JWT
    const token = generateToken({ userId: newUser._id });

    return NextResponse.json({ message: "User created", token }, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 400 });
  }
}