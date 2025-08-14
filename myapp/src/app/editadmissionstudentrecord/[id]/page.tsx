// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';

// interface StudentForm {
//   myimg: string;
//   firstname: string;
//   lastname: string;
//   date_of_birth: string;
//   grade: string;
//   gender: string;
//   religion: string;
//   language: string;
//   address: string;
//   fathername: string;
//   mothername: string;
//   father_contact: string;
//   mother_contact: string;
//   father_nicn: string;
//   mother_nicn: string;
//   father_occupation: string;
//   job_degination: string;
// }

// interface EditProps {
//   params: { id: string };
// }

// export default function EditAdmissionRecord({ params }: EditProps) {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const grade = searchParams.get('grade') || '';

//   const [form, setForm] = useState<StudentForm>({
//     myimg: '',
//     firstname: '',
//     lastname: '',
//     date_of_birth: '',
//     grade: '',
//     gender: '',
//     religion: '',
//     language: '',
//     address: '',
//     fathername: '',
//     mothername: '',
//     father_contact: '',
//     mother_contact: '',
//     father_nicn: '',
//     mother_nicn: '',
//     father_occupation: '',
//     job_degination: '',
//   });

//   const [preview, setPreview] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   // Fetch student data on mount
//   useEffect(() => {
//     if (!grade) {
//       setError('Grade parameter is required');
//       setLoading(false);
//       return;
//     }

//     const fetchStudent = async () => {
//       try {
//         const res = await fetch(`/api/admissionstudent/${params.id}?grade=${grade}`);
//         const data = await res.json();

//         if (!res.ok) throw new Error(data.error || 'Failed to fetch student');

//         setForm(data.data); // API returns { success, data }
//         if (data.data.myimg) setPreview(data.data.myimg);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'An error occurred');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudent();
//   }, [params.id, grade]);

//   // Input change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//   };

//   // File upload
//   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (!e.target.files?.[0]) return;
//     const file = e.target.files[0];

//     // Preview locally
//     setPreview(URL.createObjectURL(file));

//     // Upload to Cloudinary
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

//     try {
//       const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
//         method: 'POST',
//         body: formData,
//       });
//       const data = await res.json();
//       setForm(prev => ({ ...prev, myimg: data.secure_url }));
//     } catch (err) {
//       console.error('Cloudinary upload error:', err);
//       setError('Failed to upload image');
//     }
//   };

//   // Submit update
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(`/api/admissionstudent/${params.id}?grade=${grade}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || 'Failed to update student');
//       router.push('/editadmissionstudentrecord'); // redirect after success
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'An error occurred');
//     }
//   };

//   if (loading) return <div className="p-4">Loading student data...</div>;
//   if (error) return (
//     <div className="p-4">
//       <p className="text-red-500">{error}</p>
//       <Link href="/editadmissionstudentrecord" className="text-blue-500 underline">Back to records</Link>
//     </div>
//   );

//   return (
//     <div className="container mx-auto pt-20 max-w-4xl">
//       <h1 className="text-2xl font-bold mb-6">Edit Admission Record</h1>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Image Upload */}
//         <div className="flex items-start gap-6">
//           <div className="border-2 border-gray-300 w-40 h-40 flex items-center justify-center bg-gray-100 rounded overflow-hidden">
//             {preview && <Image src={preview} alt="Preview" width={100} height={100} className="rounded-full object-cover" unoptimized />}
//           </div>
//           <div className="flex-1">
//             <label className="block mb-2 font-medium">Student Photo</label>
//             <input type="file" accept="image/*" onChange={handleFileChange} className="block w-full text-sm text-gray-500
//               file:mr-4 file:py-2 file:px-4 file:rounded file:border-0
//               file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700
//               hover:file:bg-blue-100"
//             />
//           </div>
//         </div>

//         {/* Student Info */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <input name="firstname" value={form.firstname} onChange={handleChange} placeholder="First Name" className="border p-2 rounded" required />
//           <input name="lastname" value={form.lastname} onChange={handleChange} placeholder="Last Name" className="border p-2 rounded" required />
//           <input type="date" name="date_of_birth" value={form.date_of_birth} onChange={handleChange} className="border p-2 rounded" required />
//           <select name="grade" value={form.grade} onChange={handleChange} className="border p-2 rounded" required>
//             <option value="">Select Grade</option>
//             <option value="preschool">Pre School</option>
//             <option value="reception">Reception</option>
//             <option value="preprep">Pre Prep</option>
//             <option value="prep">Prep</option>
//           </select>
//           <div className="md:col-span-2">
//             <label className="block mb-2">Gender</label>
//             <div className="flex gap-4">
//               <label><input type="radio" name="gender" value="male" checked={form.gender === 'male'} onChange={handleChange} required /> Male</label>
//               <label><input type="radio" name="gender" value="female" checked={form.gender === 'female'} onChange={handleChange} /> Female</label>
//             </div>
//           </div>
//           <input name="religion" value={form.religion} onChange={handleChange} placeholder="Religion" className="border p-2 rounded" required />
//           <input name="language" value={form.language} onChange={handleChange} placeholder="Language" className="border p-2 rounded" required />
//           <input name="address" value={form.address} onChange={handleChange} placeholder="Address" className="border p-2 rounded md:col-span-2" required />
//         </div>

//         {/* Family Info */}
//         <h2 className="text-xl font-bold mt-6">Family Information</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <input name="fathername" value={form.fathername} onChange={handleChange} placeholder="Father Name" className="border p-2 rounded" required />
//           <input name="mothername" value={form.mothername} onChange={handleChange} placeholder="Mother Name" className="border p-2 rounded" required />
//           <input name="father_contact" value={form.father_contact} onChange={handleChange} placeholder="Father Contact" className="border p-2 rounded" required />
//           <input name="mother_contact" value={form.mother_contact} onChange={handleChange} placeholder="Mother Contact" className="border p-2 rounded" required />
//           <input name="father_nicn" value={form.father_nicn} onChange={handleChange} placeholder="Father NIC" className="border p-2 rounded" required />
//           <input name="mother_nicn" value={form.mother_nicn} onChange={handleChange} placeholder="Mother NIC" className="border p-2 rounded" required />
//           <input name="father_occupation" value={form.father_occupation} onChange={handleChange} placeholder="Father Occupation" className="border p-2 rounded" required />
//           <input name="job_degination" value={form.job_degination} onChange={handleChange} placeholder="Job Designation" className="border p-2 rounded" required />
//         </div>

//         {/* Actions */}
//         <div className="flex justify-end gap-4 mt-6">
//           <Link href="/editadmissionstudentrecord" className="px-4 py-2 border rounded hover:bg-gray-100">Cancel</Link>
//           <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Update Record</button>
//         </div>

//         {error && <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>}
//       </form>
//     </div>
//   );
// }









// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import Link from 'next/link';

// export default function EditAdmissionRecord({ params }: { params: { id: string } }) {
//   const searchParams = useSearchParams();
//   const grade = searchParams.get('grade') || 'preschool';
//   const router = useRouter();
  
//   const [form, setForm] = useState({
//     firstname: '',
//     lastname: '',
//     date_of_birth: '',
//     grade: '',
//     myimg: '',
//     gender: '',
//     religion: '',
//     language: '',
//     address: '',
//     fathername: '',
//     mothername: '',
//     father_contact: '',
//     mother_contact: '',
//     father_nicn: '',
//     mother_nicn: '',
//     father_occupation: '',
//     job_degination: '',
//   });
  
//   const [imagePreview, setImagePreview] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const res = await fetch(`/api/admissionstudent/${params.id}?grade=${grade}`);
//         const data = await res.json();
//         if (!res.ok) throw new Error(data.error || 'Failed to fetch student');
        
//         setForm(data.student);
//         if (data.student.myimg) {
//           setImagePreview(data.student.myimg);
//         }
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'An error occurred');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudent();
//   }, [params.id, grade]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files?.[0]) {
//       const file = e.target.files[0];
//       setImagePreview(URL.createObjectURL(file));
      
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setForm(prev => ({ ...prev, myimg: reader.result as string }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     try {
//       const res = await fetch(`/api/admissionstudent/${params.id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ ...form, grade }),
//       });
      
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || 'Failed to update student');
      
//       router.push('/admissionrecords');
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'An error occurred');
//     }
//   };

//   if (loading) return <div className="container mx-auto p-32">Loading...</div>;
//   if (error) return <div className="container mx-auto p-4 text-red-500">{error}</div>;

//   return (
//     <div className="container mx-auto pt-32">
//       <h1 className="text-2xl font-bold mb-4">Edit Admission Record</h1>
      
//       <form onSubmit={handleSubmit} className="max-w-3xl space-y-4">
//         {/* Image Upload */}
//         <div className="flex items-center gap-4">
//           <div className="border-2 border-gray-300 w-40 h-40 flex items-center justify-center bg-gray-100 rounded">
//             {imagePreview ? (
//               <img
//                 src={imagePreview}
//                 alt="Preview"
//                 className="w-full h-full object-cover rounded"
//               />
//             ) : (
//               <p className="text-gray-500">No image</p>
//             )}
//           </div>
//           <div>
//             <input
//               type="file"
//               name="myimg"
//               accept="image/*"
//               onChange={handleFileChange}
//               className="p-2 border rounded"
//             />
//           </div>
//         </div>

//         {/* Personal Information */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-1">First Name</label>
//             <input
//               type="text"
//               name="firstname"
//               value={form.firstname}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-1">Last Name</label>
//             <input
//               type="text"
//               name="lastname"
//               value={form.lastname}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-1">Date of Birth</label>
//             <input
//               type="date"
//               name="date_of_birth"
//               value={form.date_of_birth}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-1">Grade</label>
//             <select
//               name="grade"
//               value={form.grade}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             >
//               <option value="preschool">Pre School</option>
//               <option value="reception">Reception</option>
//               <option value="preprep">Pre Prep</option>
//               <option value="prep">Prep</option>
//             </select>
//           </div>
//           {/* Add all other fields similarly */}
//         </div>

//         {/* Family Information */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-1">Father's Name</label>
//             <input
//               type="text"
//               name="fathername"
//               value={form.fathername}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-1">Mother's Name</label>
//             <input
//               type="text"
//               name="mothername"
//               value={form.mothername}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>
//           {/* Add all other family fields similarly */}
//         </div>

//         <div className="flex gap-2">
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             Update
//           </button>
//           <Link
//             href="/admissionrecords"
//             className="bg-gray-500 text-white px-4 py-2 rounded"
//           >
//             Cancel
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// }