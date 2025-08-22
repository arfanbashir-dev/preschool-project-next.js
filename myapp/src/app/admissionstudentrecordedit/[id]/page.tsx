// app/admissionstudentrecordedit/[id]/page.tsx
import EditStudentPageClient from "./EditStudentPageClient";

export default async function EditStudentPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  return <EditStudentPageClient id={id} />;
}










// "use client";

// import { useEffect, useState, ChangeEvent, FormEvent } from "react";
// import { useRouter } from "next/navigation";
// import { IAdmission } from "@/types/datatype";

// // type PageProps = { params: { id: string };} ; // ✅ fixed

// export default function EditStudentPage( { params }: {params :{id:string}}) {
  
    
//     const router = useRouter();

//     const [form, setForm] = useState<IAdmission | null>(null);
//     const [imagePreview, setImagePreview] = useState<string | null>(null);
//     const [message, setMessage] = useState("");

//   // Fetch student by ID
//     useEffect(() => {
//       const fetchStudent = async () => {
//           try {
//             const res = await fetch(`/api/admissionstudent/${params.id}`);
//             const data = await res.json();
//             setForm(data);
//             setImagePreview(data.img || null);
//           } catch (error) {
//             console.error("Error fetching student:", error);
//           }
//         };

//         fetchStudent();
//       }, [params.id]
//     );

//   // Handle input change
//   const handleChange = ( e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {  if (!form) return;
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   // Handle image change
//   const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
//     if (!form) return;
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const base64 = reader.result as string;
//         setForm({ ...form, img: base64 });
//         setImagePreview(base64);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle submit (update)
//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!form) return;

//     try {
//       const res = await fetch(`/api/admissionstudent/${params.id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || "Failed to update student");

//       setMessage("Student updated successfully!");
//       router.push("/admissionstudentrecord");
//       // setTimeout(() => {router.push("/admissionstudentrecordedit");},1500);        // redirect back
      
//     } catch (error) {
//       setMessage(error instanceof Error ? error.message : "Update failed");
//     }
//   };

//   if (!form) return <p className="p-10">Loading student data...</p>;

//   return (
//     <div className="p-20">
//       <h1 className="text-2xl font-bold mb-6">Edit Student</h1>
//       {message && <p className="mb-4 text-green-600">{message}</p>}

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Image upload */}
//         <div className="border w-40 h-40 flex items-center justify-center">
//           {imagePreview ? (
//             <img
//               src={imagePreview}
//               alt="Preview"
//               className="w-full h-full object-cover rounded"
//             />
//           ) : (
//             <p>No Image</p>
//           )}
//         </div>
//         <input type="file" accept="image/*" onChange={handleImageChange} />

//         {/* Firstname / Lastname */}
//         <div className="flex gap-6">
//           <div>
//             <label className="block font-bold">First Name</label>
//             <input
//               type="text"
//               name="firstname"
//               value={form.firstname}
//               onChange={handleChange}
//               className="border p-2 w-80"
//             />
//           </div>
//           <div>
//             <label className="block font-bold">Last Name</label>
//             <input
//               type="text"
//               name="lastname"
//               value={form.lastname}
//               onChange={handleChange}
//               className="border p-2 w-80"
//             />
//           </div>
//         </div>

//         {/* Grade */}
//         <div>
//           <label className="block font-bold">Grade</label>
//           <select
//             name="grade"
//             value={form.grade}
//             onChange={handleChange}
//             className="border p-2 w-80"
//           >
//             <option value="preschool">Pre School</option>
//             <option value="reception">Reception</option>
//             <option value="preprep">Pre Prep</option>
//             <option value="prep">Prep</option>
//           </select>
//         </div>

//         {/* Father / Mother */}
//         <div className="flex gap-6">
//           <div>
//             <label className="block font-bold">Father Name</label>
//             <input
//               type="text"
//               name="fathername"
//               value={form.fathername}
//               onChange={handleChange}
//               className="border p-2 w-80"
//             />
//           </div>
//           <div>
//             <label className="block font-bold">Mother Name</label>
//             <input
//               type="text"
//               name="mothername"
//               value={form.mothername}
//               onChange={handleChange}
//               className="border p-2 w-80"
//             />
//           </div>
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Update
//         </button>
//       </form>
//     </div>
//   );
// }
