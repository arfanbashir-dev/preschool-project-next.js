// 'use client';

// import Link from 'next/link';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// type Student = {
//   _id: string;
//   firstname: string;
//   lastname: string;
//   date_of_birth: string;
//   grade: string;
//   gender: string;
//   myimg?: string;
// };

// export default function StudentTableAndChartCompo({
//   students,
//   grade,
//   onDelete,
// }: {
//   students: Student[];
//   grade: string;
//   onDelete?: (id: string) => void; // optional delete handler
// }) {
//   // Group students by grade for chart
//   const gradeCounts: Record<string, number> = {};
//   students.forEach((student) => {
//     gradeCounts[student.grade] = (gradeCounts[student.grade] || 0) + 1;
//   });

//   const chartData = {
//     labels: Object.keys(gradeCounts),
//     datasets: [
//       {
//         label: 'Student Count by Grade',
//         data: Object.values(gradeCounts),
//         backgroundColor: 'green',
//         borderColor: 'yellow',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//       tooltip: { enabled: true },
//     },
//     scales: {
//       x: { ticks: { color: 'black', maxRotation: 45, minRotation: 0 } },
//       y: { ticks: { stepSize: 5, precision: 0, color: 'blue' }, beginAtZero: true, max: 20 },
//     },
//   };

//   return (
//     <div className="flex flex-col gap-4">
//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full table-fixed">
//           <thead>
//             <tr className="bg-dark">
//               <th className="border table-cell-style">First Name</th>
//               <th className="border table-cell-style">Last Name</th>
//               <th className="border table-cell-style">Date of Birth</th>
//               <th className="border table-cell-style">Grade</th>
//               <th className="border table-cell-style">Gender</th>
//               <th className="border table-cell-style">Student Image</th>
//               <th className="border table-cell-style">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student) => (
//               <tr key={student._id}>
//                 <td className="border table-cell-style">{student.firstname}</td>
//                 <td className="border table-cell-style">{student.lastname}</td>
//                 <td className="border table-cell-style">{student.date_of_birth}</td>
//                 <td className="border table-cell-style">{student.grade}</td>
//                 <td className="border table-cell-style">{student.gender}</td>
//                 <td className="border table-cell-style">
//                   {student.myimg ? (
//                     <img
//                       src={student.myimg}
//                       alt="image"
//                       className="h-16 w-16 object-cover rounded"
//                     />
//                   ) : (
//                     'No Image'
//                   )}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                   <div className="flex gap-2">
//                     <Link
//                        href={`/editanddeletestudentrecord/${student._id}?grade=${student.grade}`}                  
//                       className="text-indigo-600 hover:text-indigo-900"
//                     >
//                       Edit
//                     </Link>
//                     <button
//                       onClick={() => onDelete && onDelete(student._id)}
//                       className="text-red-600 hover:text-red-900"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Chart */}
//       <div>
//         <h2 className="text-center text-xl font-semibold mb-4">Admission Students Chart</h2>
//         <Bar data={chartData} options={chartOptions} />
//       </div>
//     </div>
//   );
// }






// // 'use client';



// // import { useState, useEffect } from 'react';
// // import Link from 'next/link';
// // import { useRouter } from 'next/navigation';





// // import { Bar } from 'react-chartjs-2';
// // import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// // ChartJS.register( BarElement, CategoryScale, LinearScale, Tooltip, Legend ) ;

// // type Student = {  _id: string;  firstname: string;  lastname: string; 
// //                   date_of_birth: string ;   grade: string; gender: string; myimg: '', };

// // export default function StudentTableAndChartCompo( { students }: { students: Student[] } ) {
// //   // Group students by grade
// //     const gradeCounts: Record<string, number> = {};
    
// //     students.forEach((student) => { gradeCounts[student.grade] = (gradeCounts[student.grade] || 0) + 1;});

// //     const chartData = {
// //       labels: Object.keys(gradeCounts),
// //       datasets: [  { label: 'Student Count by Grade',   data: Object.values(gradeCounts),     
// //       backgroundColor: 'green' , borderColor: 'yellow', borderWidth: 1, },  ],
// //     };

// //     const chartOptions = {
// //       responsive: true,
// //       plugins: {  legend: { display: false }, tooltip: { enabled: true },  },
// //       scales:  {
// //         x: { ticks: { color: 'black', maxRotation: 45, minRotation: 0, },  },
// //         y: { ticks: { stepSize:5 , precision: 0 , color:'blue'}, beginAtZero: true,  max:20, },
// //       },
// //     };


// //     // ............................................

// //     const [grade, setGrade] = useState('preschool');
// //       const [students, setStudents] = useState<any[]>([]);
// //       const [loading, setLoading] = useState(true);
// //       const [error, setError] = useState('');
// //       const router = useRouter();
    
// //       useEffect(() => {
// //         const fetchStudents = async () => {
// //           try {
// //             setLoading(true);
// //             const res = await fetch(`/api/admissionstudent?grade=${grade}`);
// //             const data = await res.json();
// //             if (!res.ok) throw new Error(data.error || 'Failed to fetch students');
// //             setStudents(data.students);
// //           } catch (err) {
// //             setError(err instanceof Error ? err.message : 'An error occurred');
// //           } finally {
// //             setLoading(false);
// //           }
// //         };
    
// //         fetchStudents();
// //       }, [grade]);
    
// //       const handleDelete = async (id: string) => {
// //         if (!confirm('Are you sure you want to delete this student?')) return;
        
// //         try {
// //           const res = await fetch(`/api/admissionstudent/${id}?grade=${grade}`, {
// //             method: 'DELETE',
// //           });
// //           const data = await res.json();
// //           if (!res.ok) throw new Error(data.error || 'Failed to delete student');
          
// //           // Refresh the list
// //           setStudents(students.filter(student => student._id !== id));
// //         } catch (err) {
// //           setError(err instanceof Error ? err.message : 'An error occurred');
// //         }
// //       };
    

// //     // ..............................................

// //     return (
// //         <div className="flex flex-col gap-4">
// //           <div className=" overflow-x-auto">
// //             <table className="w-full table-fixed">
// //               <thead>
// //                 <tr className="bg-dark ">
// //                   <th className="border table-cell-style">First Name</th>
// //                   <th className="border table-cell-style ">Last Name</th>
// //                   <th className="border table-cell-style ">Date of Birth</th>
// //                   <th className="border table-cell-style ">Grade</th>
// //                   <th className="border table-cell-style ">Gender</th>
// //                   <th className="border table-cell-style ">Student Image</th>
// //                   <th className="border table-cell-style ">Action</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {students.map((item) => (
// //                   <tr key={item._id}>
// //                     <td className="border table-cell-style ">{item.firstname}</td>
// //                     <td className="border table-cell-style ">{item.lastname}</td>
// //                     <td className="border table-cell-style">{item.date_of_birth}</td>
// //                     <td className="border table-cell-style">{item.grade}</td>
// //                     <td className="border table-cell-style">{item.gender}</td>
// //                     <td className="border table-cell-style">
// //                       {item.myimg ? (
// //                       <img src={item.myimg} alt='image' className="h-16 w-16 object-cover rounded" />
// //                       ) : ( 'No Image' )}
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
// //                     <div className="flex gap-2">
// //                       <Link
// //                         href={`/admissionrecord/${student._id}?grade=${grade}`}
// //                         className="text-indigo-600 hover:text-indigo-900"
// //                       >
// //                         Edit
// //                       </Link>
// //                       <button
// //                         onClick={() => handleDelete(student._id)}
// //                         className="text-red-600 hover:text-red-900"
// //                       >
// //                         Delete
// //                       </button>
// //                     </div>
// //                   </td>

// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>

// //           <div className="">
// //             <h2 className="text-center text-xl font-semibold mb-4">Admission Students Chart</h2>
// //             <Bar data={chartData} options={chartOptions} />
// //           </div>
// //         </div>
// //     );
// // }
