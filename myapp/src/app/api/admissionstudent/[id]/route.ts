import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import AdmissionStudentModel from "@/model/admissionModel";

type Params = { params: Promise<{ id: string }> };

// GET /api/admissionstudent/:id
export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;  // ✅ await params
    await connectDB();
    const student = await AdmissionStudentModel.findById(id);
    if (!student) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }
    return NextResponse.json(student);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch student" }, { status: 500 });
  }
}

// PUT /api/admissionstudent/:id
export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;  // ✅ await params
    const data = await req.json();
    await connectDB();
    const updatedStudent = await AdmissionStudentModel.findByIdAndUpdate(id, data, { new: true });
    if (!updatedStudent) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }
    return NextResponse.json(updatedStudent);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update student" }, { status: 500 });
  }
}

// DELETE /api/admissionstudent/:id
export async function DELETE(_req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;  // ✅ await params
    await connectDB();
    const deletedStudent = await AdmissionStudentModel.findByIdAndDelete(id);
    if (!deletedStudent) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Student deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete student" }, { status: 500 });
  }
}




// import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongoose";
// import AdmissionStudentModel from "@/model/admissionModel";

// type Params = { params: { id: string } };

// // GET /api/admissionstudent/:id
// export async function GET(_req: NextRequest, { params }: Params) {
//   try {
//     await connectDB();
//     const student = await AdmissionStudentModel.findById(params.id);
//     if (!student) {
//       return NextResponse.json({ error: "Student not found" }, { status: 404 });
//     }
//     return NextResponse.json({ student }, { status: 200 });
//   } catch (err: unknown) {
//     const message = err instanceof Error ? err.message : "Unknown error";
//     return NextResponse.json({ error: message }, { status: 500 });
//   }
// }

// // PUT /api/admissionstudent/:id
// export async function PUT(req: NextRequest, { params }: Params) {
//   try {
//     await connectDB();
//     const payload = await req.json();
//     const updated = await AdmissionStudentModel.findByIdAndUpdate(params.id, payload, {
//       new: true,
//       runValidators: true,
//     });
//     if (!updated) {
//       return NextResponse.json({ error: "Student not found" }, { status: 404 });
//     }
//     return NextResponse.json({ student: updated }, { status: 200 });
//   } catch (err: unknown) {
//     const message = err instanceof Error ? err.message : "Unknown error";
//     return NextResponse.json({ error: message }, { status: 400 });
//   }
// }

// // DELETE /api/admissionstudent/:id
// export async function DELETE(_req: NextRequest, { params }: Params) {
//   try {
//     await connectDB();
//     const deleted = await AdmissionStudentModel.findByIdAndDelete(params.id);
//     if (!deleted) {
//       return NextResponse.json({ error: "Student not found" }, { status: 404 });
//     }
//     return NextResponse.json({ ok: true }, { status: 200 });
//   } catch (err: unknown) {
//     const message = err instanceof Error ? err.message : "Unknown error";
//     return NextResponse.json({ error: message }, { status: 400 });
//   }
// }































// import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongoose";
// import AdmissionStudentModel from "@/model/admissionModel";

// type Params = { params: { id: string } };

// // GET /api/admissionstudent/:id
// export async function GET(_req: NextRequest, { params }: Params) {
//   try {
//     await connectDB();
//     const student = await AdmissionStudentModel.findById(params.id);
//     if (!student) return NextResponse.json({ error: "Student not found" }, { status: 404 });
//     return NextResponse.json({ student }, { status: 200 });
//   } catch (err: any) {
//     return NextResponse.json({ error: err?.message || "Unknown error" }, { status: 500 });
//   }
// }

// // PUT /api/admissionstudent/:id
// export async function PUT(req: NextRequest, { params }: Params) {
//   try {
//     await connectDB();
//     const payload = await req.json();
//     const updated = await AdmissionStudentModel.findByIdAndUpdate(params.id, payload, {
//       new: true,
//       runValidators: true,
//     });
//     if (!updated) return NextResponse.json({ error: "Student not found" }, { status: 404 });
//     return NextResponse.json({ student: updated }, { status: 200 });
//   } catch (err: any) {
//     return NextResponse.json({ error: err?.message || "Unknown error" }, { status: 400 });
//   }
// }

// // DELETE /api/admissionstudent/:id
// export async function DELETE(_req: NextRequest, { params }: Params) {
//   try {
//     await connectDB();
//     const deleted = await AdmissionStudentModel.findByIdAndDelete(params.id);
//     if (!deleted) return NextResponse.json({ error: "Student not found" }, { status: 404 });
//     return NextResponse.json({ ok: true }, { status: 200 });
//   } catch (err: any) {
//     return NextResponse.json({ error: err?.message || "Unknown error" }, { status: 400 });
//   }
// }
