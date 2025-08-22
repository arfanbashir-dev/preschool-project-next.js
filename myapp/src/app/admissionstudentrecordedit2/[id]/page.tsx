// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// interface IAdmissionForm {
//   img?: string;
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
//   job_designation: string;
// }

// export default function EditAdmissionStudent({ params }: { params: { id: string } }) {
  
//   const router = useRouter();
//   const [form, setForm] = useState<IAdmissionForm | null>(null);
//   const [imagePreview, setImagePreview] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Fetch one student
//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const res = await fetch(`/api/admissionstudent/${params.id}`, { cache: "no-store" });
        
//         const data = await res.json();

//         const student = data.student ?? data; // support both shapes
        
//         if (!res.ok || !student) throw new Error(data.error || "Student not found");

//         setForm({
//           img: student.img ?? "",
//           firstname: student.firstname ?? "",
//           lastname: student.lastname ?? "",
//           date_of_birth: (student.date_of_birth ?? "").toString(),
//           grade: student.grade ?? "",
//           gender: student.gender ?? "",
//           religion: student.religion ?? "",
//           language: student.language ?? "",
//           address: student.address ?? "",
//           fathername: student.fathername ?? "",
//           mothername: student.mothername ?? "",
//           father_contact: student.father_contact ?? "",
//           mother_contact: student.mother_contact ?? "",
//           father_nicn: student.father_nicn ?? "",
//           mother_nicn: student.mother_nicn ?? "",
//           father_occupation: student.father_occupation ?? "",
//           job_designation: student.job_designation ?? "",
//         });
//         setImagePreview(student.img ?? null);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "Failed to load student");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchStudent();
//   }, [params.id]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     if (!form) return;
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (!form) return;
//     const file = e.target.files?.[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       const base64 = reader.result as string;
//       setForm({ ...form, img: base64 });
//       setImagePreview(base64);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {e.preventDefault();
//     if (!form) return;

//     try {
//       const res = await fetch(`/api/admissionstudent/${params.id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form), // id comes from URL, not body
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || "Failed to update student");

//       alert("Student updated successfully!");
//       router.push("/admissionstudentrecord");
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Failed to update student");
//     }
//   };

//   if (loading) return <p className="text-center p-32">Loading...</p>;
//   if (error) return <p className="text-center p-32 text-red-500">{error}</p>;
//   if (!form) return <p className="text-center p-32">No student found.</p>;

//   return (
//     <div className="p-32 bg-medium shadow rounded">
//       <h1 className="text-2xl font-bold mb-4">Edit Student</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* IMAGE UPLOAD */}
//         <div>
//           <label className="block font-medium">Upload Image</label>
//           <input type="file" accept="image/*" onChange={handleImageUpload} className="mt-2" />
//           {imagePreview && (
//             <img src={imagePreview} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded" />
//           )}
//         </div>

//         {/* BASIC FIELDS */}
//         <div>
//           <label className="block font-medium">First Name</label>
//           <input  type="text" name="firstname" required
//             value={form.firstname}  onChange={handleChange}
//             className="w-full p-2 border rounded text-black"
            
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Last Name</label>
//           <input
//             type="text"
//             name="lastname"
//             value={form.lastname}
//             onChange={handleChange}
//             className="w-full p-2 border rounded text-black"
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Date of Birth</label>
//           <input
//             type="date"
//             name="date_of_birth"
//             value={form.date_of_birth}
//             onChange={handleChange}
//             className="w-full p-2 border rounded text-black"
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Grade</label>
//           <select
//             name="grade"
//             value={form.grade}
//             onChange={handleChange}
//             className="w-full p-2 border rounded text-black"
//           >
//             <option value="preschool">Preschool</option>
//             <option value="reception">Reception</option>
//             <option value="preprep">Pre Prep</option>
//             <option value="prep">Prep</option>
//           </select>
//         </div>

//         {/* ONE EXAMPLE GROUP FROM FAMILY INFO */}
//         <div>
//           <label className="block font-medium">Father Name</label>
//           <input
//             type="text"
//             name="fathername"
//             value={form.fathername}
//             onChange={handleChange}
//             className="w-full p-2 border rounded text-black"
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Job Designation</label>
//           <input
//             type="text"
//             name="job_designation"
//             value={form.job_designation}
//             onChange={handleChange}
//             className="w-full p-2 border rounded text-black"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Update Student
//         </button>
//       </form>
//     </div>
//   );
// }
