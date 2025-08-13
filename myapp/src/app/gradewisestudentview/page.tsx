'use client'

import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const gradeOptions = [
  { value: 'preschool', label: 'Pre School' },
  { value: 'reception', label: 'Reception' },
  { value: 'preprep', label: 'Pre Prep' },
  { value: 'prep', label: 'Prep' }
];

type Student = {  _id: string;  firstname: string;  lastname: string;  date_of_birth: string;
  gender: string;  fathername: string;  myimg: string; };




export default function AdmissionsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();

  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({ totalPages: 1, currentPage: 1 });

  // const selectedGrade = searchParams.get('grade') || gradeOptions[0].value;
  const selectedGrade = searchParams?.get('grade') ?? gradeOptions[0].value;
  const currentPage = parseInt(searchParams.get('page') || '1');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/loginadmin');
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/admissionstudent?grade=${selectedGrade}&page=${currentPage}&limit=20`);
        const { students, pagination } = await res.json();
        setStudents(students);
        setPagination(pagination);
      } catch (error) {
        console.error('Error fetching students:', error);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user.role === 'admin') {
      fetchData();
    } else {
      router.push('/loginadmin');
    }
  }, [selectedGrade, currentPage, session, status, router]);

  if (loading) return <div className="p-32">Loading...</div>;
  if (!session || session.user.role !== 'admin') return null;

  return (
    <div className="p-32">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          Students - Grade: {gradeOptions.find(g => g.value === selectedGrade)?.label}
        </h1>

        <div className="flex items-center gap-2">
          <label htmlFor="grade-select" className="font-medium">Select Grade:</label>
          <select
            id="grade-select"
            value={selectedGrade}
            className="border rounded px-3 py-1"
            onChange={(e) => router.push(`/gradewisestudentview?grade=${e.target.value}&page=1`)}
          >
            {gradeOptions.map((grade) => (
              <option key={grade.value} value={grade.value}>{grade.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <table className="table-auto border-collapse border-2 w-full">
        <thead>
          <tr className="bg-dark">
            <th className="table-cell-style">Name</th>
            <th className="table-cell-style">DOB</th>
            <th className="table-cell-style">Gender</th>
            <th className="table-cell-style">Father</th>
            <th className="table-cell-style">Image</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id} className="text-center">
              <td className="table-cell-style">{student.firstname} {student.lastname}</td>
              <td className="table-cell-style">{student.date_of_birth}</td>
              <td className="table-cell-style">{student.gender}</td>
              <td className="table-cell-style">{student.fathername}</td>
              <td className="table-cell-style">
                {student.myimg ? (
                  <div className="flex justify-center">
                    <Image  src={String(student.myimg)} width={60} height={64}
                      className="rounded-lg object-cover w-16 h-16"
                      alt={`${student.firstname} ${student.lastname}`}
                      unoptimized
                    />
                  </div>
                ) : <span>N/A</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          disabled={pagination.currentPage <= 1}
          onClick={() => router.push(`/gradewisestudentview?grade=${selectedGrade}&page=${currentPage - 1}`)}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>Page {pagination.currentPage} of {pagination.totalPages}</span>
        <button
          disabled={pagination.currentPage >= pagination.totalPages}
          onClick={() => router.push(`/gradewisestudentview?grade=${selectedGrade}&page=${currentPage + 1}`)}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}


// 'use client'
// import { connectDB } from '@/lib/mongoose';
// import getAdmissionModel from '@/model/admissionModel';
// import { useSession } from "next-auth/react";
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import { useEffect, useState } from 'react';

// const gradeOptions = [
//   { value: 'preschool', label: 'Pre School' },
//   { value: 'reception', label: 'Reception' },
//   { value: 'preprep', label: 'Pre Prep' },
//   { value: 'prep', label: 'Prep' }
// ];

// export default function AdmissionsPage({ searchParams}: {  searchParams: { grade?: string }}) {
  
//   const router = useRouter();
//   const { data: session, status } = useSession();
//   const [students, setStudents] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   const selectedGrade = searchParams.grade || gradeOptions[0].value;
//   useEffect(() => {
//   if (status === 'unauthenticated') { router.push('/loginadmin');  return;  }

//     const fetchData = async () => {
//       try {
//         const res = await fetch(`/api/admissionstudent?grade=${selectedGrade}`);
//         const { students } = await res.json();
//         setStudents(students);
//       } catch (error) {
//         console.error('Error fetching students:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (session?.user.role === 'admin') {
//       fetchData();
//     } else {
//       router.push('/loginadmin');
//     }
//   }, [selectedGrade, session, status, router]);


//   if (loading) { return <div className="p-32 ">Loading...</div>;  }

//   if (!session || session.user.role !== 'admin') {
//     return null; // Redirect will happen in useEffect
//   }

//   return (
//     <div className="p-32">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold">Students - Grade: {gradeOptions.find(g => g.value === selectedGrade)?.label}</h1>
        
//         <div className="flex items-center gap-2">
//           <label htmlFor="grade-select" className="font-medium">Select Grade:</label>
//           <select  id="grade-select"   value={selectedGrade} className="border rounded px-3 py-1"
//             onChange={(e) => {router.push(`/gradewisestudentview?grade=${e.target.value}`); }}
            
//           >
//             {gradeOptions.map((grade) => (
//               <option key={grade.value} value={grade.value}>
//                 {grade.label}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <table className="table-auto border-collapse border-2 w-full">
//         <thead>
//           <tr className="bg-dark">
//             <th className=" table-cell-style">Name</th>
//             <th className=" table-cell-style">DOB</th>
//             <th className=" table-cell-style">Gender</th>
//             <th className=" table-cell-style">Father</th>
//             <th className=" table-cell-style">Image</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student) => (
//             <tr key={student._id} className="text-center">
//               <td className="table-cell-style">
//                 {student.firstname} {student.lastname}
//               </td>
//               <td className="table-cell-style">
//                 {student.date_of_birth}
//               </td>
//               <td className="table-cell-style">
//                 {student.gender}
//               </td>
//               <td className="table-cell-style">
//                 {student.fathername}
//               </td>
//               <td className="table-cell-style">
//                 {student.myimg ? (
//                   <div className="flex justify-center">
//                     <Image  src={student.myimg}   width={60}    height={64}
//                       className="rounded-lg object-cover w-16 h-16"
//                       alt={`${student.firstname} ${student.lastname}`}
//                       unoptimized={true}
//                     />
//                   </div>
//                 ) : ( <span className="">N/A</span>   )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

