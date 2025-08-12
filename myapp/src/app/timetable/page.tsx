// app/timetable/page.tsx
'use client';
import { scheduleObj ,daysObj } from '../../Constants/TimetableObj';
import { motion } from 'framer-motion';


export default function TimetablePage() {
  
  return (
    <div className='pt-32 bg-light'>
    <div className="max-w-6xl mx-auto px-4 py-10">
      <motion.h1
        className="text-4xl font-bold  mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Preschool Weekly Timetable
      </motion.h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300  rounded-xl ">
          <thead className="bg-dark">
            <tr>
              <th className="border p-3 text-left font-semibold">Time</th>
              {daysObj.map((day) => (
                <th key={day} className="border p-3 text-center font-semibold">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {scheduleObj.map((slot, index) => (
              <tr key={index} className="hover:bg-medium transition duration-200">
                <td className="border p-3 font-medium">{slot.time}</td>
                {daysObj.map((day, idx) => (
                  <td key={idx} className="border p-3 text-center ">
                    {slot.activity}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
