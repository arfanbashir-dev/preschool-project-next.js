'use client';

import { Bar } from 'react-chartjs-2';  //ok
import { Chart as ChartJS,  BarElement,  CategoryScale,  LinearScale,  Tooltip,  Legend,} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

type Staff = { _id: string; name: string; email: string; role: string };

export default function StaffTableAndChart({ staff }: { staff: Staff[] }) {
  
  const roleCounts: Record<string, number> = {};
  staff.forEach((staff) => { roleCounts[staff.role] = (roleCounts[staff.role] || 0) + 1;  });

  const chartData = {
    labels: Object.keys(roleCounts),
    datasets: [
      {
        label: 'Staff Count',
        data: Object.values(roleCounts),
        backgroundColor: 'green',
        borderColor: 'yellow',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: { ticks: { color: 'black', maxRotation: 45, minRotation: 0, },  },
      y: { ticks: { stepSize:5 , precision: 0 , color:'blue'}, beginAtZero: true,  max:20, },
    },
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-1/2">
      {/* Table */}
      <table className="w-full border-collapse border border-gray-500">
        <thead>
          <tr className="bg-dark">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((staff) => (
            <tr key={staff._id}>
              <td className="border px-4 py-2">{staff.name}</td>
              <td className="border px-4 py-2">{staff.email}</td>
              <td className="border px-4 py-2">{staff.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      <div className="md:w-1/2">
        <h2 className="text-center text-xl font-semibold mb-4">Staff by Role</h2>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}



// 'use client';

// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import React from 'react';

// ChartJS.register(ArcElement, Tooltip, Legend);

// type User = {
//   name: string;
//   email: string;
//   role: string;
// };

// export default function UserRoleChart({ users }: { users: User[] }) {
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
//     <div className="w-full md:w-1/2 mx-auto mb-8">
//       <h2 className="text-xl font-semibold text-center mb-4">User Role Distribution</h2>
//       <Pie data={chartData} />
//     </div>
//   );
// }
