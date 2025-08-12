// // import clientPromise from '@/lib/mongodb';
// // import StudentList from '@/Components/StudentList';

// // export default async function HomePage() {
// //   const client = await clientPromise;
// //   const db = client.db();
// //   const students = await db.collection('students').find().sort({ _id: -1 }).toArray();

// //   const cleaned = students.map((s) => ({
// //     _id: s._id.toString(),
// //     name: s.name,
// //     email: s.email,
// //   }));

// //   return (
// //     <div>
// //       <h1 className="text-3xl font-bold mb-4">All Students</h1>
// //       <StudentList students={cleaned} />
// //     </div>
// //   );
// // }



// // app/page.tsx



import { getAllStudents } from '@/app/api/getstudents/route';
import StudentList from '@/Components/ShowStudentData';

export default async function HomePage() {
  const v_serialized_data = await getAllStudents();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">All Students</h1>
      <StudentList mystudents={v_serialized_data} />
    </div>
  );
}





// 'use client';

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import StudentForm from '@/Components/StudentForm';
// import StudentList from '@/Components/ShowStudentData';

// export default function GetDataPage() {
//   const [students, setStudents] = useState([]);
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   const fetchStudents = async () => {
//     const res = await axios.get('/api/getstudents');
//     setStudents(res.data);
//   };

//   const handleDelete = async (id: string) => {
//     if (!confirm('Are you sure you want to delete this student?')) return;
//     await axios.delete(`/api/students/${id}`);
//     fetchStudents();
//   };

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-3xl font-bold">Student List</h1>
//       <StudentForm initialData={selectedStudent} onSuccess={fetchStudents} />
//       <StudentList
//         mystudents={students}
//         onEdit={(s) => setSelectedStudent(s)}
//         onDelete={handleDelete}
//       />
//     </div>
//   );
// }




// 'use client';

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import StudentForm from '@/Components/StudentForm';
// import StudentList from '@/Components/ShowStudentData';

// export default function GetDataPage() {
//   const [students, setStudents] = useState([]);
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   const fetchStudents = async () => {
//     try {
//       const res = await axios.get('/api/getstudents'); // ✅ FIXED URL
//       setStudents(res.data);
//     } catch (err) {
//       console.error('Failed to fetch students:', err);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     if (!confirm('Are you sure you want to delete this student?')) return;
//     try {
//       await axios.delete(`/api/students/${id}`); // ✅ FIXED URL
//       fetchStudents();
//     } catch (err) {
//       console.error('Failed to delete student:', err);
//     }
//   };

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-3xl font-bold">Student List</h1>
//       <StudentForm initialData={selectedStudent} onSuccess={fetchStudents} />
//       <StudentList
//         mystudents={students}
//         onEdit={(s) => setSelectedStudent(s)}
//         onDelete={handleDelete}
//       />
//     </div>
//   );
// }
