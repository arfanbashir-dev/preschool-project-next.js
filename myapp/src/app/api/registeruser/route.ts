import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/lib/mongoose';
import User from '@/model/User';

export async function POST(req: Request) {
  try {
    const {name, email, password, role } = await req.json();

    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ success: false, message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({  name,  email, password: hashedPassword, role: role || 'user', });

    return NextResponse.json({ success: true, message: 'User registered successfully' });
  } catch (err) {
    return NextResponse.json({ success: false, message: 'Error registering user' });
  }
}
