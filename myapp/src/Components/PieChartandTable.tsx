// // components/UserChartAndTable.tsx
// 'use client';

// import { Pie } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend
// } from 'chart.js';
// import React from 'react';

// ChartJS.register(ArcElement, Tooltip, Legend);

// type User = {
//   _id: string;
//   name: string;
//   email: string;
//   role: string;
// };

// export default function UserChartAndTable({ users }: { users: User[] }) {
//   const roleCounts: Record<string, number> = {};
//   users.forEach((user) => {
//     roleCounts[user.role] = (roleCounts[user.role] || 0) + 1;
//   });

//   const chartData = {
//     labels: Object.keys(roleCounts),
//     datasets: [
//       {
//         label: 'Users by Role',
//         data: Object.values(roleCounts),
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
//       },
//     ],
//   };

//   return (
//     <div className="p-8">
//       <div className="w-full md:w-1/2 mx-auto mb-8">
//         <h2 className="text-xl font-semibold text-center mb-4">User Role Distribution</h2>
//         <Pie data={chartData} />
//       </div>

//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border px-4 py-2">Name</th>
//             <th className="border px-4 py-2">Email</th>
//             <th className="border px-4 py-2">Role</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user: any) => (
//             <tr key={user._id}>
//               <td className="border px-4 py-2">{user.name}</td>
//               <td className="border px-4 py-2">{user.email}</td>
//               <td className="border px-4 py-2">{user.role}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
