import { connectDB } from "@/lib/mongoose";
import StudentModel from "@/model/samplestudentModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    await connectDB();
    const student = await StudentModel.create(data);
    return NextResponse.json(student, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 400 });
  }
}




// import { connectDB } from "@/lib/mongoose";
// import StudentModel from "@/model/samplestudentModel";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     await connectDB();
//     const student = await StudentModel.create(body);
//     return NextResponse.json(student, { status: 201 });
//   } catch (err: unknown) {
//     if (err instanceof Error) {
//       return NextResponse.json({ error: err.message }, { status: 400 });
//     }
//     return NextResponse.json({ error: "Unknown error" }, { status: 400 });
//   }
// }
