// import StudentForm from '@/Components/StudentForm';

// export default function CreatePage() {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">Add New Student</h1>
//       <StudentForm />
//     </div>
//   );
// }



// 'use client';

// import { useEffect, useState } from 'react';
// import StudentForm from '@/components/StudentForm';
// import StudentList from '@/components/ShowStudentData';
// import axios from 'axios';

// export default function StudentPage() {
//   const [students, setStudents] = useState([]);
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   const fetchStudents = async () => {
//     const res = await axios.get('/api/getstudents');
//     setStudents(res.data);
//   };

//   const handleDelete = async (id) => {
//     if (!confirm('Are you sure you want to delete this student?')) return;
//     await axios.delete(`/api/students/${id}`);
//     fetchStudents();
//   };

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   return (
//     <div className="p-6 space-y-6">
//       <StudentForm selectedStudent={selectedStudent} onSuccess={fetchStudents} />
//       <StudentList mystudents={students} onEdit={setSelectedStudent} onDelete={handleDelete} />
//     </div>
//   );
// }




import StudentForm from '@/Components/StudentForm';

export default function CreatePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add New Student</h1>
      <StudentForm />
    </div>
  );
}
