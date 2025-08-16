import { connectDB } from "@/lib/mongoose";
import AdmissionStudentModel from "@/model/admissionModel";
import { NextRequest, NextResponse } from "next/server";

// ================== CREATE STUDENT ==================
export async function POST(req: NextRequest) {
  try {
    const data = await req.json(); 
    await connectDB();
    const student = await AdmissionStudentModel.create(data);
    return NextResponse.json(student, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 400 });
  }
}

// ================== GET ALL STUDENTS ==================
export async function GET() {
  try {
    await connectDB();
    const students = await AdmissionStudentModel.find({});
    return NextResponse.json(students, { status: 200 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}

// ================== UPDATE STUDENT ==================
export async function PUT(req: NextRequest) {
  try {
    const { id, ...updateData } = await req.json(); // expects { id, name, fatherName, grade, image }
    if (!id) {
      return NextResponse.json({ error: "Student ID is required" }, { status: 400 });
    }

    await connectDB();
    const updatedStudent = await AdmissionStudentModel.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedStudent) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }

    return NextResponse.json(updatedStudent, { status: 200 });
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
//     const data = await req.json();
//     await connectDB();
//     const student = await StudentModel.create(data);
//     return NextResponse.json(student, { status: 201 });
//   } catch (err: unknown) {
//     if (err instanceof Error) {
//       return NextResponse.json({ error: err.message }, { status: 400 });
//     }
//     return NextResponse.json({ error: "Unknown error" }, { status: 400 });
//   }
// }




