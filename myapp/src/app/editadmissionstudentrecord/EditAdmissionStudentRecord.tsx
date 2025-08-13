'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Student = {
  _id: string;
  firstname: string;
  lastname: string;
  date_of_birth: string;
  gender: string;
  fathername: string;
  father_contact: string;
  grade: string;
  myimg?: string; // make optional in case some students don't have an image
};

export default function EditAdmissionStudentRecords() {
  const [grade, setGrade] = useState('preschool');
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/admissionstudent?grade=${grade}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to fetch students');
        setStudents(data.students);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [grade]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this student?')) return;

    try {
      const res = await fetch(`/api/admissionstudent/${id}?grade=${grade}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to delete student');

      setStudents((prev) => prev.filter((student) => student._id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <div className="container mx-auto pt-32 p-4">
      <h1 className="text-2xl font-bold mb-6">Admission Records</h1>

      <div className="mb-6 flex items-center gap-4">
        <label htmlFor="grade" className="font-medium">
          Select Grade:
        </label>
        <select
          id="grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className="p-2 border rounded w-40"
        >
          <option value="">Select Grade</option>
          <option value="preschool">Pre School</option>
          <option value="reception">Reception</option>
          <option value="preprep">Pre Prep</option>
          <option value="prep">Prep</option>
        </select>
      </div>

      {loading && <p className="text-center py-4">Loading students...</p>}
      {error && <p className="text-red-500 py-4">{error}</p>}

      {students.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr className="bg-dark">
                <th className="table-cell-style">Photo</th>
                <th className="table-cell-style">Name</th>
                <th className="table-cell-style">Grade</th>
                <th className="table-cell-style">DOB</th>
                <th className="table-cell-style">Gender</th>
                <th className="table-cell-style">Father</th>
                <th className="table-cell-style">Contact</th>
                <th className="table-cell-style">Actions</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {students.map((student) => (
                <tr key={student._id}>
                  <td className="table-cell-style">
                    {student.myimg ? (
                      <Image
                        src={student.myimg}
                        alt={`${student.firstname} ${student.lastname}`}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-xs text-white">
                        N/A
                      </div>
                    )}
                  </td>
                  <td className="table-cell-style font-medium">
                    {student.firstname} {student.lastname}
                  </td>
                  <td className="table-cell-style">{student.grade}</td>
                  <td className="table-cell-style">{student.date_of_birth}</td>
                  <td className="table-cell-style">{student.gender}</td>
                  <td className="table-cell-style">{student.fathername}</td>
                  <td className="table-cell-style">{student.father_contact}</td>
                  <td className="table-cell-style">
                    <div className="flex gap-2">
                      <Link
                        href={`/editadmissionstudentrecord/${student._id}?grade=${grade}`}
                        className="text-green-500"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(student._id)}
                        className="text-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loading && (
          <p className="text-center py-8 text-gray-500">
            No students found for this grade
          </p>
        )
      )}
    </div>
  );
}



// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// // import { useRouter } from 'next/navigation';
// import Image from 'next/image';

// type Student = {  _id: string;  firstname: string;  lastname: string;  date_of_birth: string;
//   gender: string;  fathername: string;  father_contact: string;  grade: string;  myimg: string;
// };


// export default function EditAdmissionStudentRecords() {

  

//   const [grade, setGrade] = useState('preschool');
//   const [students, setStudents] = useState<Student[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   // const router = useRouter();

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(`/api/admissionstudent?grade=${grade}`);
//         const data = await res.json();
//         if (!res.ok) throw new Error(data.error || 'Failed to fetch students');
//         setStudents(data.students);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'An error occurred');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudents();
//   }, [grade]);

//   const handleDelete = async (id: string) => {
//     if (!confirm('Are you sure you want to delete this student?')) return;
    
//     try {
//       const res = await fetch(`/api/admissionstudent/${id}?grade=${grade}`, {
//         method: 'DELETE',
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || 'Failed to delete student');
      
//       // Refresh the list
//       setStudents(students.filter(student => student._id !== id));
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'An error occurred');
//     }
//   };

//   return (
//     <div className="container mx-auto pt-32 p-4 ">
//       <h1 className="text-2xl font-bold mb-6">Admission Records</h1>
      
//       <div className="mb-6 flex items-center gap-4">
//         <label htmlFor="grade" className="font-medium">Select Grade:</label>
//         <select
//           id="grade"
//           value={grade}
//           onChange={(e) => setGrade(e.target.value)}
//           className="p-2 border rounded w-40"
//         >
//           <option>Select Grade</option>
//           <option value="preschool">Pre School</option>
//           <option value="reception">Reception</option>
//           <option value="preprep">Pre Prep</option>
//           <option value="prep">Prep</option>
//         </select>
//       </div>

//       {loading && <p className="text-center py-4">Loading students...</p>}
//       {error && <p className="text-red-500 py-4">{error}</p>}

//       {students.length > 0 ? (
//         <div className="overflow-x-auto">
//           <table className="min-w-full  border">
//             <thead className="">
//               <tr className='bg-dark '>
//                 <th className="table-cell-style">Photo</th>
//                 <th className="table-cell-style">Name</th>
//                 <th className="table-cell-style">Grade</th>
//                 <th className="table-cell-style">DOB</th>
//                 <th className="table-cell-style">Gender</th>
//                 <th className="table-cell-style">Father</th>
//                 <th className="table-cell-style">Contact</th>
//                 <th className="table-cell-style">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="text-white">
//               {students.map((student) => (
//                 <tr key={student._id} className="">
//                   <td className="table-cell-style">
//                     {student.myimg && (
//                       // <img  src={student.myimg}  alt="Student" className="h-10 w-10 rounded-full object-cover"
//                       <Image src={student.myimg!} alt="Student" width={40} height={40} className="rounded-full object-cover" 
//                       />
//                     )}
//                   </td>
//                   <td className="table-cell-style">
//                     <div className="font-medium">
//                       {student.firstname} {student.lastname}
//                     </div>
//                   </td>
//                   <td className="table-cell-style">
//                     {student.grade}
//                   </td>
//                   <td className="table-cell-style">
//                     {student.date_of_birth}
//                   </td>
//                   <td className="table-cell-style">
//                     {student.gender}
//                   </td>
//                   <td className="table-cell-style">
//                     {student.fathername}
//                   </td>
//                   <td className="table-cell-style">
//                     {student.father_contact}
//                   </td>
//                   <td className="table-cell-style ">
//                     <div className="flex gap-2">
//                       <button>
//                       <Link
//                         href={`/editadmissionstudentrecord/${student._id}?grade=${grade}`}
//                         className=" text-green-500"
//                       >
//                         Edit
//                       </Link>
//                       </button>
//                       <button
//                         onClick={() => handleDelete(student._id)}
//                         className="text-red-600 "
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         !loading && <p className="text-center py-8 text-gray-500">No students found for this grade</p>
//       )}
//     </div>
//   );
// }

