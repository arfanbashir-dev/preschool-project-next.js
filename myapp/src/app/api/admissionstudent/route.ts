import { NextResponse, NextRequest } from 'next/server';
import { connectDB } from '@/lib/mongoose';
import getAdmissionModel from '@/model/admissionModel';

// GET all students for a grade with pagination
export async function GET(req: NextRequest) {
  try {
    const grade = req.nextUrl.searchParams.get('grade');
    const page = Math.max(1, parseInt(req.nextUrl.searchParams.get('page') || '1', 10));
    const limit = Math.max(1, parseInt(req.nextUrl.searchParams.get('limit') || '20', 10));

    if (!grade) return NextResponse.json({ success: false, error: 'Grade is required' }, { status: 400 });

    await connectDB();
    const AdmissionModel = getAdmissionModel(grade);

    const [students, totalStudents] = await Promise.all([
      AdmissionModel.find({})
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
      AdmissionModel.countDocuments(),
    ]);

    return NextResponse.json({
      success: true,
      data: students,
      pagination: {
        totalStudents,
        totalPages: Math.ceil(totalStudents / limit),
        currentPage: page,
        limit,
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: 'Failed to fetch students' }, { status: 500 });
  }
}



// import { NextResponse } from 'next/server';  //ok
// import { connectDB } from '@/lib/mongoose';
// import getAdmissionModel from '@/model/admissionModel';

// // Get all students by grade with pagination
// export async function GET(req: Request) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const grade = searchParams.get('grade');
//     const page = parseInt(searchParams.get('page') || '1');
//     const limit = parseInt(searchParams.get('limit') || '20');

//     if (!grade) {
//       return NextResponse.json(
//         { success: false, error: 'Grade is required in query' },
//         { status: 400 }
//       );
//     }

//     await connectDB();
//     const AdmissionModel = getAdmissionModel(grade);

//     const students = await AdmissionModel.find({})
//       .skip((page - 1) * limit)
//       .limit(limit)
//       .lean();

//     const totalStudents = await AdmissionModel.countDocuments();
//     const totalPages = Math.ceil(totalStudents / limit);

//     return NextResponse.json({
//       success: true,
//       students,
//       pagination: { totalStudents, totalPages, currentPage: page, limit }
//     });

//   } catch (err) {
//     console.error('❌ GET Error:', err);
//     return NextResponse.json(
//       { success: false, error: 'Failed to fetch students' },
//       { status: 500 }
//     );
//   }
// }



