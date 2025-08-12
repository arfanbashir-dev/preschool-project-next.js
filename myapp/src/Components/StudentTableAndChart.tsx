'use client';

import Image from 'next/image';  //ok
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register( BarElement, CategoryScale, LinearScale, Tooltip, Legend ) ;

type Student = {  _id: string;  firstname: string;  lastname: string; 
                  date_of_birth: string ;   grade: string; gender: string; myimg: '', };

export default function StudentTableAndChartCompo( { students }: { students: Student[] } ) {
  // Group students by grade
    const gradeCounts: Record<string, number> = {};
    
    students.forEach((student) => { gradeCounts[student.grade] = (gradeCounts[student.grade] || 0) + 1;});

    const chartData = {
      labels: Object.keys(gradeCounts),
      datasets: [  { label: 'Student Count by Grade',   data: Object.values(gradeCounts),     
      backgroundColor: 'green' , borderColor: 'yellow', borderWidth: 1, },  ],
    };

    const chartOptions = {
      responsive: true,
      plugins: {  legend: { display: false }, tooltip: { enabled: true },  },
      scales:  {
        x: { ticks: { color: 'black', maxRotation: 45, minRotation: 0, },  },
        y: { ticks: { stepSize:5 , precision: 0 , color:'blue'}, beginAtZero: true,  max:20, },
      },
    };

    return (
        <div className="flex flex-col gap-4">
          <div className=" overflow-x-auto">
            <table className="w-full table-fixed">
              <thead>
                <tr className="bg-dark ">
                  <th className="border table-cell-style">First Name</th>
                  <th className="border table-cell-style ">Last Name</th>
                  <th className="border table-cell-style ">Date of Birth</th>
                  <th className="border table-cell-style ">Grade</th>
                  <th className="border table-cell-style ">Gender</th>
                  <th className="border table-cell-style ">Student Image</th>
                </tr>
              </thead>
              <tbody>
                {students.map((item) => (
                  <tr key={item._id}>
                    <td className="border table-cell-style ">{item.firstname}</td>
                    <td className="border table-cell-style ">{item.lastname}</td>
                    <td className="border table-cell-style">{item.date_of_birth}</td>
                    <td className="border table-cell-style">{item.grade}</td>
                    <td className="border table-cell-style">{item.gender}</td>
                    <td className="border table-cell-style">
                      {item.myimg ? (
                      <img src={item.myimg} alt='image' className="h-16 w-16 object-cover rounded" />
                      ) : ( 'No Image' )}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="">
            <h2 className="text-center text-xl font-semibold mb-4">Admission Students Chart</h2>
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
    );
}
