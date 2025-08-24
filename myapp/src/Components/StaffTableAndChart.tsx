'use client';

import {IStaff} from '@/types/datatype'
import { Bar } from 'react-chartjs-2';  //ok
import { Chart as ChartJS,  BarElement,  CategoryScale,  LinearScale,  Tooltip,  Legend,} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);



export default function StaffTableAndChart({ staff }: { staff: IStaff[] }) {
  
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



