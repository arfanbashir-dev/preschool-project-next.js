"use client";

import { useEffect, useState } from "react";
import { IStudent } from "@/types/datatype";

export default function ShowStudents() {
  const [students, setStudents] = useState<IStudent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch("/api/samplestudent");
        const data: IStudent[] = await res.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-32">
      <h1 className="text-2xl font-bold mb-4">Student Records</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {students.map((record) => (
          <div key={record._id} className="border rounded p-4 shadow">
            {record.image && (
              <img  src={record.image}    alt={record.name}
                className="w-full h-40 object-cover rounded mb-2"
              />
            )}
            <h2 className="font-semibold">{record.name}</h2>
            <p className="text-sm text-gray-600">Father: {record.fatherName}</p>
            <p className="text-sm">Grade: {record.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
}




// "use client";

// import { useEffect, useState } from "react";
// import {IStudent} from "@/model/samplestudentModel";

// export default function ShowStudents() {
   


//   const [students, setStudents] = useState<IStudent[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const res = await fetch("/api/samplestudent");
//         const data = await res.json();
//         setStudents(data);
//       } catch (error) {
//         console.error("Error fetching students:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudents();
//   }, []);

//   if (loading) return <p className="p-4">Loading...</p>;

//   return (
//     <div className="p-32">
//       <h1 className="text-2xl font-bold mb-4">Student Records</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {students.map((student) => (
//           <div key={student._id} className="border rounded p-4 shadow">
//             {student.image && (
//               <img
//                 src={student.image}
//                 alt={student.name}
//                 className="w-full h-40 object-cover rounded mb-2"
//               />
//             )}
//             <h2 className="font-semibold">{student.name}</h2>
//             <p className="text-sm text-gray-600">Father: {student.fatherName}</p>
//             <p className="text-sm">Grade: {student.grade}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
