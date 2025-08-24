import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongoose';
import StaffModel from '@/model/staffroleModel';

// POST
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, role } = body;

    if (!role || !email || !password || !name) {
      return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
    }

    await connectDB();

    const existing = await StaffModel.findOne({ email });
    if (existing) {
      return NextResponse.json({ success: false, message: 'Email already exists' }, { status: 409 });
    }

    const staff = await StaffModel.create({ name, email, password, role });
    return NextResponse.json({ success: true, staff });

  } catch (err) {
    console.error('❌ POST Error:', err);
    return NextResponse.json({ success: false, message: 'Failed to create staff' }, { status: 500 });
  }
}

// GET
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const role = searchParams.get('role');

    if (!role) {
      return NextResponse.json({ success: false, message: 'Role is required in query' }, { status: 400 });
    }

    await connectDB();
    const staff = await StaffModel.find({ role });  // ✅ filter in one collection

    return NextResponse.json({ success: true, staff });
  } catch (err) {
    console.error('❌ GET Error:', err);
    return NextResponse.json({ success: false, message: 'Failed to fetch staff' }, { status: 500 });
  }
}

