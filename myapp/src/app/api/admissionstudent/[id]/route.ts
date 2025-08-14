// import { NextRequest, NextResponse } from 'next/server';
// import { connectDB } from '@/lib/mongoose';
// import getAdmissionModel from '@/model/admissionModel';

// // ✅ The correct type definition for Next.js 15 route handlers
// type RouteParams = {
//   params: Promise<{
//     id: string;
//   }>;
// };

// // ✅ GET — Fetch single student
// export async function GET(req: NextRequest, context: RouteParams) {
//   const { id } = await context.params; // ✅ must await in Next.js 15
//   try {
//     await connectDB();
//     const AdmissionModel = getAdmissionModel();
//     const student = await AdmissionModel.findById(id);
//     if (!student) {
//       return NextResponse.json({ message: 'Student not found' }, { status: 404 });
//     }
//     return NextResponse.json(student);
//   } catch (error) {
//     console.error('Error fetching student:', error);
//     return NextResponse.json({ message: 'Server error' }, { status: 500 });
//   }
// }

// // ✅ PUT — Update student
// export async function PUT(req: NextRequest, context: RouteParams) {
//   const { id } = await context.params;
//   try {
//     const body = await req.json();
//     await connectDB();
//     const AdmissionModel = getAdmissionModel();
//     const updatedStudent = await AdmissionModel.findByIdAndUpdate(id, body, { new: true });
//     if (!updatedStudent) {
//       return NextResponse.json({ message: 'Student not found' }, { status: 404 });
//     }
//     return NextResponse.json(updatedStudent);
//   } catch (error) {
//     console.error('Error updating student:', error);
//     return NextResponse.json({ message: 'Server error' }, { status: 500 });
//   }
// }

// // ✅ DELETE — Remove student
// export async function DELETE(req: NextRequest, context: RouteParams) {
//   const { id } = await context.params;
//   try {
//     await connectDB();
//     const AdmissionModel = getAdmissionModel();
//     const deletedStudent = await AdmissionModel.findByIdAndDelete(id);
//     if (!deletedStudent) {
//       return NextResponse.json({ message: 'Student not found' }, { status: 404 });
//     }
//     return NextResponse.json({ message: 'Student deleted successfully' }, { status: 200 });
//   } catch (error) {
//     console.error('Error deleting student:', error);
//     return NextResponse.json({ message: 'Server error' }, { status: 500 });
//   }
// }







// import { NextResponse } from 'next/server';
// import { connectDB } from '@/lib/mongoose';
// import getAdmissionModel from '@/model/admissionModel';

// export async function GET(
//   request: Request,
//   context: { params: { id: string } }
// ) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const grade = searchParams.get('grade');

//     if (!grade) {
//       return NextResponse.json({ success: false, error: 'Grade is required' }, { status: 400 });
//     }

//     await connectDB();
//     const AdmissionModel = getAdmissionModel(grade);
//     const student = await AdmissionModel.findById(context.params.id).lean();

//     if (!student) {
//       return NextResponse.json({ success: false, error: 'Student not found' }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, data: student });
//   } catch (err) {
//     console.error('❌ GET Error:', err);
//     return NextResponse.json({ success: false, error: 'Failed to fetch student' }, { status: 500 });
//   }
// }

// // Do the same for PUT and DELETE:

// export async function PUT(
//   request: Request,
//   context: { params: { id: string } }
// ) {
//   try {
//     const body = await request.json();
//     const { grade, ...updateData } = body;

//     if (!grade) {
//       return NextResponse.json({ success: false, error: 'Grade is required' }, { status: 400 });
//     }

//     await connectDB();
//     const AdmissionModel = getAdmissionModel(grade);
//     const updatedStudent = await AdmissionModel.findByIdAndUpdate(
//       context.params.id,
//       updateData,
//       { new: true, runValidators: true }
//     ).lean();

//     if (!updatedStudent) {
//       return NextResponse.json({ success: false, error: 'Student not found' }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, data: updatedStudent });
//   } catch (err) {
//     console.error('❌ PUT Error:', err);
//     return NextResponse.json({ success: false, error: 'Failed to update student' }, { status: 500 });
//   }
// }

// export async function DELETE(
//   request: Request,
//   context: { params: { id: string } }
// ) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const grade = searchParams.get('grade');

//     if (!grade) {
//       return NextResponse.json({ success: false, error: 'Grade is required' }, { status: 400 });
//     }

//     await connectDB();
//     const AdmissionModel = getAdmissionModel(grade);
//     const deletedStudent = await AdmissionModel.findByIdAndDelete(context.params.id).lean();

//     if (!deletedStudent) {
//       return NextResponse.json({ success: false, error: 'Student not found' }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, message: 'Student deleted successfully' });
//   } catch (err) {
//     console.error('❌ DELETE Error:', err);
//     return NextResponse.json({ success: false, error: 'Failed to delete student' }, { status: 500 });
//   }
// }

















// import { NextResponse } from 'next/server';
// import { connectDB } from '@/lib/mongoose';
// import getAdmissionModel from '@/model/admissionModel';

// /**
//  * GET - Get a single student by ID
//  */
// export async function GET(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const grade = searchParams.get('grade');

//     if (!grade) {
//       return NextResponse.json({ success: false, error: 'Grade is required' }, { status: 400 });
//     }

//     await connectDB();
//     const AdmissionModel = getAdmissionModel(grade);
//     const student = await AdmissionModel.findById(params.id).lean();

//     if (!student) {
//       return NextResponse.json({ success: false, error: 'Student not found' }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, data: student });
//   } catch (err) {
//     console.error('❌ GET Error:', err);
//     return NextResponse.json({ success: false, error: 'Failed to fetch student' }, { status: 500 });
//   }
// }

// /**
//  * PUT - Update a student by ID
//  */
// export async function PUT(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const body = await req.json();
//     const { grade, ...updateData } = body;

//     if (!grade) {
//       return NextResponse.json({ success: false, error: 'Grade is required' }, { status: 400 });
//     }

//     await connectDB();
//     const AdmissionModel = getAdmissionModel(grade);
//     const updatedStudent = await AdmissionModel.findByIdAndUpdate(
//       params.id,
//       updateData,
//       { new: true, runValidators: true }
//     ).lean();

//     if (!updatedStudent) {
//       return NextResponse.json({ success: false, error: 'Student not found' }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, data: updatedStudent });
//   } catch (err) {
//     console.error('❌ PUT Error:', err);
//     return NextResponse.json({ success: false, error: 'Failed to update student' }, { status: 500 });
//   }
// }

// /**
//  * DELETE - Remove a student by ID
//  */
// export async function DELETE(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const grade = searchParams.get('grade');

//     if (!grade) {
//       return NextResponse.json({ success: false, error: 'Grade is required' }, { status: 400 });
//     }

//     await connectDB();
//     const AdmissionModel = getAdmissionModel(grade);
//     const deletedStudent = await AdmissionModel.findByIdAndDelete(params.id).lean();

//     if (!deletedStudent) {
//       return NextResponse.json({ success: false, error: 'Student not found' }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, message: 'Student deleted successfully' });
//   } catch (err) {
//     console.error('❌ DELETE Error:', err);
//     return NextResponse.json({ success: false, error: 'Failed to delete student' }, { status: 500 });
//   }
// }


















// import { NextResponse } from 'next/server';
// import { connectDB } from '@/lib/mongoose';
// import getAdmissionModel from '@/model/admissionModel';

// export async function GET( req: Request, { params }: { params: { id: string } }) {
  
//     try {
//     const { searchParams } = new URL(req.url);
//     const grade = searchParams.get('grade');

//     if (!grade) {
//       return NextResponse.json(
//         { success: false, error: 'Grade is required in query' }, { status: 400 }  );
//     }

//     await connectDB();
//     const AdmissionModel = getAdmissionModel(grade);
//     const student = await AdmissionModel.findById(params.id);

//     if (!student) {
//       return NextResponse.json(
//         { success: false, error: 'Student not found' }, { status: 404 }
//       );
//     }

//     return NextResponse.json({ success: true, student });
//   } catch (err) {    console.error('❌ GET Error:', err);
//         return NextResponse.json({ success: false, error: 'Failed to fetch student' }, {status: 500 });
//     }
// }

// export async function PUT( req: Request, { params }: { params: { id: string } }) {
  
//    try {
//     const body = await req.json();
//     const { grade } = body;

//     if (!grade) {
//       return NextResponse.json({ success: false, error: 'Grade is required'}, {status: 400 });
//     }

//     await connectDB();
//     const AdmissionModel = getAdmissionModel(grade);
//     const updatedStudent = await AdmissionModel.findByIdAndUpdate( params.id, body, {new: true });

//     if (!updatedStudent) {
//       return NextResponse.json(
//         { success: false, error: 'Student not found' },  { status: 404 }
//       );
//     }

//     return NextResponse.json({ success: true, student: updatedStudent });
//   } catch (err) {
//     console.error('❌ PUT Error:', err);
//     return NextResponse.json(
//       { success: false, error: 'Failed to update student' }, { status: 500 }
//     );
//   }
// }

// export async function DELETE( req: Request, { params }: { params: { id: string } }
// ) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const grade = searchParams.get('grade');

//     if (!grade) {
//       return NextResponse.json(
//         { success: false, error: 'Grade is required in query' },
//         { status: 400 }
//       );
//     }

//     await connectDB();
//     const AdmissionModel = getAdmissionModel(grade);
//     const deletedStudent = await AdmissionModel.findByIdAndDelete(params.id);

//     if (!deletedStudent) {
//       return NextResponse.json(
//         { success: false, error: 'Student not found' },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({
//       success: true,
//       message: 'Student deleted successfully',
//     });
//   } catch (err) {
//     console.error('❌ DELETE Error:', err);
//     return NextResponse.json(
//       { success: false, error: 'Failed to delete student' },
//       { status: 500 }
//     );
//   }
// }