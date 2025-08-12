import { NextResponse } from 'next/server';  //ok
import { connectDB } from '@/lib/mongoose';
import getAdmissionModel from '@/model/admissionModel';

// Get all students by grade with pagination
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const grade = searchParams.get('grade');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');

    if (!grade) {
      return NextResponse.json(
        { success: false, error: 'Grade is required in query' },
        { status: 400 }
      );
    }

    await connectDB();
    const AdmissionModel = getAdmissionModel(grade);

    const students = await AdmissionModel.find({})
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    const totalStudents = await AdmissionModel.countDocuments();
    const totalPages = Math.ceil(totalStudents / limit);

    return NextResponse.json({
      success: true,
      students,
      pagination: { totalStudents, totalPages, currentPage: page, limit }
    });

  } catch (err) {
    console.error('❌ GET Error:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch students' },
      { status: 500 }
    );
  }
}



// import { NextResponse } from 'next/server';  //ok
// import { connectDB } from '@/lib/mongoose';
// import getAdmissionModel from '@/model/admissionModel';


// // Add a student
// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { grade } = body;

//     if (!grade) {
//       return NextResponse.json({ success: false, error: 'Grade is required' }, { status: 400 });
//     }

//     await connectDB();

//     const AdmissionModel = getAdmissionModel(grade);
//     const student = await AdmissionModel.create(body);

//     return NextResponse.json({ success: true, student });

//   } catch (err) {
//     console.error('❌ POST Error:', err);
//     return NextResponse.json({ success: false, error: 'Failed to create student' }, { status: 500 });
//   }
// }

// // Get all students by grade (use /api/admissionstudent?grade=prep)
// export async function GET(req: Request) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const grade = searchParams.get('grade');

//     if (!grade) {
//       return NextResponse.json({ success: false, error: 'Grade is required in query' }, { status: 400 });
//     }

//     await connectDB();

//     const AdmissionModel = getAdmissionModel(grade);
//     const students = await AdmissionModel.find();

//     return NextResponse.json({ success: true, students });

//   } catch (err) {
//     console.error('❌ GET Error:', err);
//     return NextResponse.json({ success: false, error: 'Failed to fetch students' }, { status: 500 });
//   }
// }



