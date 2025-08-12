// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function EditStudentForm({ student, grade }: any) {
//   const router = useRouter();
//   const [form, setForm] = useState({ ...student });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const res = await fetch(`/api/editanddeletestudent/${grade}/${student._id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });

//       if (res.ok) {
//         alert('Student updated successfully');
//         router.push('/dashboard');
//       } else {
//         const errorData = await res.json();
//         alert(errorData.error || 'Failed to update student');
//       }
//     } catch (error) {
//       alert('An error occurred while updating the student');
//     }
//   };

//   const handleDelete = async () => {
//     if (confirm('Are you sure you want to delete this student?')) {
//       try {
//         const res = await fetch(`/api/editanddeletestudent/${grade}/${student._id}`, {
//           method: 'DELETE',
//         });

//         if (res.ok) {
//           alert('Student deleted successfully');
//           router.push('/dashboard');
//         } else {
//           const errorData = await res.json();
//           alert(errorData.error || 'Failed to delete student');
//         }
//       } catch (error) {
//         alert('An error occurred while deleting the student');
//       }
//     }
//   };

//   return (
//     <div className="p-32 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-6">Edit Student</h1>
      
//       <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mb-6">
//         <div>
//           <label className="block font-medium mb-1">First Name</label>
//           <input  type="text"   name="firstname"  value={form.firstname}
//             onChange={handleChange}     className="w-full border rounded px-3 py-2"
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Last Name</label>
//           <input     type="text"    name="lastname"      value={form.lastname}
//             onChange={handleChange}     className="w-full border rounded px-3 py-2"
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Date of Birth</label>
//           <input    type="date"   name="date_of_birth"  value={form.date_of_birth}
//             onChange={handleChange}
//             className="w-full border rounded px-3 py-2"
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Father Contact</label>
//           <input
//             type="text"   name="father_contact"  value={form.father_contact}
//             onChange={handleChange}    className="w-full border rounded px-3 py-2"
//             required
//           />
//         </div>

//         {/* Add other fields as needed */}

//         <div className="col-span-2 flex justify-between mt-4">
//           <button   type="button"     onClick={handleDelete}
//             className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded"
//           >
//             Delete Student
//           </button>
          
//           <button
//             type="submit"  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
//           >
//             Update Student
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }




