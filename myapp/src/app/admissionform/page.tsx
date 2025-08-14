export default function DisabledPage() {
  return <h1>Admission Form is currently disabled</h1>;
}


// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useSearchParams, useRouter } from "next/navigation";

// interface Student {
//   _id: string;
//   firstname: string;
//   lastname: string;
//   grade: string;
//   myimg?: string;
// }

// export default function AdmissionRecords() {
//   const searchParams = useSearchParams();
//   const grade = searchParams.get("grade") || "preschool"; // default
//   const router = useRouter();

//   const [students, setStudents] = useState<Student[]>([]);
//   const [loading, setLoading] = useState(true);

//   const fetchStudents = async () => {
//     try {
//       const res = await fetch(`/api/admissionstudent?grade=${grade}`);
//       const data = await res.json();
//       if (res.ok) setStudents(data.data);
//       else console.error(data.error);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchStudents();
//   }, [grade]);

//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure to delete this student?")) return;

//     try {
//       const res = await fetch(`/api/admissionstudent/${id}?grade=${grade}`, { method: "DELETE" });
//       const data = await res.json();
//       if (res.ok) fetchStudents();
//       else alert(data.error);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to delete student");
//     }
//   };

//   if (loading) return <p className="p-4">Loading...</p>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Admission Records ({grade})</h1>

//       <Link href={`/admissionstudent?grade=${grade}`} className="mb-4 inline-block text-blue-500 underline">
//         Add New Student
//       </Link>

//       <table className="w-full border-collapse border">
//         <thead>
//           <tr>
//             <th className="border p-2">Photo</th>
//             <th className="border p-2">First Name</th>
//             <th className="border p-2">Last Name</th>
//             <th className="border p-2">Grade</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((stu) => (
//             <tr key={stu._id}>
//               <td className="border p-2">
//                 {stu.myimg && <Image src={stu.myimg} width={50} height={50} alt={stu.firstname} className="rounded-full" unoptimized />}
//               </td>
//               <td className="border p-2">{stu.firstname}</td>
//               <td className="border p-2">{stu.lastname}</td>
//               <td className="border p-2">{stu.grade}</td>
//               <td className="border p-2 space-x-2">
//                 <Link href={`/editadmissionstudentrecord/${stu._id}?grade=${stu.grade}`} className="text-blue-500 underline">
//                   Edit
//                 </Link>
//                 <button onClick={() => handleDelete(stu._id)} className="text-red-500 underline">
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }








// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';
// import Link from "next/link";

// export default function AdmissionForm() {
//   const [form, setForm] = useState({ 
//     firstname: '', lastname: '', date_of_birth: '', grade: '', myimg: '',    
//     gender: '', religion: '', language: '', address: '',
//     fathername: '', mothername: '', father_contact: '', mother_contact: '', 
//     father_nicn: '', mother_nicn: '', father_occupation: '', job_degination: '',
//   });
  
//   const [message, setMessage] = useState('');
//   const [imagePreview, setImagePreview] = useState<string | null>(null);

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
//       const res = await fetch('/api/admissionstudent', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });
      
//       const data = await res.json();
      
//       if (!res.ok) throw new Error(data.message || 'Failed to submit form');
      
//       setMessage('Student added successfully!');
//       setForm({ 
//         firstname: '', lastname: '', date_of_birth: '', grade: '', myimg: '',    
//         gender: '', religion: '', language: '', address: '',
//         fathername: '', mothername: '', father_contact: '', mother_contact: '', 
//         father_nicn: '', mother_nicn: '', father_occupation: '', job_degination: '',
//       });
//       setImagePreview(null);
//     } catch (error) {
//       setMessage(error instanceof Error ? error.message : 'An error occurred');
//     }
//   };

//       return( 


//         <div className="pt-32 ">
            
//             <div className='flex-center bg-medium gap-10 h-16 font-bold '>

//                 <Link href="/loginstudent">Login</Link>
//                 <Link href="/registerstudent">Register</Link>          
                

//             </div>
            
//             <div className="bg-white py-20">
            
//                 <div className="container-login  flex-column w-[900px] h-auto bg-[#eeeeee] text-black ml-[20%] rounded-lg px-6">
                
                                      
                
//                     <form onSubmit= {handleSubmit} className=" px-6 [&_.child]:py-5  ">


//                         <h1 className="font-bold ml-[30%] child">Admission Form</h1>
                        
//                         <div className="flex-between p-10">

//                             <div>
//                                 {/* <h1>some text here</h1> */}
//                             </div>
                            
                            
//                             <div className=" border-2 border-black w-60 h-60  flex-column ">

                                
                                
//                                 <div className="relative w-full h-full  flex items-center justify-center bg-gray-200 ">
//                                     {imagePreview ? (
//                                     // <Image src={imagePreview} alt="Preview" fill className="Image-preview rounded" />
//                                     <Image  className="object-contain rounded"
//                                         src={imagePreview}  alt="Preview"  width={100}  height={100}  />

//                                     ) : ( <p className="text-sm text-gray-600">No image selected</p>
//                                     )}
//                                 </div>

                                
//                                 <div >
                                    
//                                     <input type="file" name='myimg' accept="image/*" className='w-full' onChange={handleFileChange} />

//                                 </div>
                                


//                             </div>
                            


//                         </div>                     
                        

//                         <div className="flex-between gap-16 child">

//                             <div className="flex-column">

//                                 <label htmlFor="first-name" className="w-44 font-bold">First Name</label>
//                                 <input id="first-name" type="text" name='firstname' 
//                                     value={form.firstname}  className="w-96"
//                                     placeholder="Please enter your first name"
//                                     onChange={handleChange} 
//                                 />

//                             </div>

//                             <div className="flex-column">
                                
//                                 <label htmlFor="last-name" className="w-44 font-bold">Last Name</label>
//                                 <input id="last-name" type="text" name='lastname' 
//                                     value={form.lastname}  className="w-96"
//                                     placeholder="Please enter your last name"
//                                     onChange={handleChange} 
//                                 />

//                             </div>

//                         </div>

//                         <div className="flex-between gap-16 child">

//                             <div className="flex-column">

//                                 <label htmlFor="date" className="w-44 font-bold">Date of Birth</label>
//                                 <input id="date" type="date" name='date_of_birth' 
//                                     value={form.date_of_birth}  className="w-96"
//                                     placeholder="Please enter your first name"
//                                     onChange={handleChange} 
//                                 />

//                             </div>
//                             <div className="flex-column child">

//                                 <label htmlFor="grade" className="w-44 font-bold">Grade</label>
//                                 <select  id="grade" name="grade"  className="w-96" 
//                                     value={form.grade} onChange={handleChange} >
//                                     <option  disabled>Select your class </option>
//                                     <option value="preschool">Pre School</option>
//                                     <option value="reception">Reception</option>
//                                     <option value="preprep">Pre Prep</option>
//                                     <option value="prep">Prep</option>
//                                 </select>

//                             </div>


                            

//                         </div>
                        
                        
//                         <div className="flex-column py-5">
                            
//                             <div>
//                                 <label htmlFor="" className="font-bold">Gender</label>
//                             </div>
                            
//                             <div  className="flex-between gap-16">
                        
//                                 <div className="flex-column ">
                                    
//                                     <div className="gender w-96">
//                                         <input  id="malegender" type="radio" value='male' name='gender' className="w-8 "  
//                                                  onChange={handleChange}        
//                                         />
//                                         <label htmlFor="malegender" className=" w-8" >Male</label>
//                                     </div>

//                                 </div>

//                                 <div className="gender w-96 ">
                                    
//                                     <div className="gender w-96">
//                                         <input  id="femalegender" type="radio" value='female' name='gender' className="w-8"  
//                                                  onChange={handleChange}        
//                                         />
//                                         <label htmlFor="femalegender" className=" w-8" >Female</label>
//                                     </div>

//                                 </div>

//                             </div>
//                         </div>
 
 
//                         <div className="flex-between gap-16 child">

//                             <div className="flex-column">

//                                 <label htmlFor="relegion" className="w-44 font-bold">Religion</label>
//                                 <input id="relegion" type="text" name='religion' 
//                                     value={form.religion}  className="w-96"
//                                     placeholder="Please enter your relegion"
//                                     onChange={handleChange} 
//                                 />


//                             </div>

//                             <div className="flex-column">
 
//                                 <label htmlFor="language" className="w-44 font-bold">Language</label>
//                                 <input id="language" type="text" name='language' 
//                                     value={form.language}  className="w-96"
//                                     placeholder="Please enter your first language"
//                                     onChange={handleChange} 
//                                 />


//                             </div>

//                         </div>

//                         <div className="flex-column gap-5 child">

//                             <label htmlFor="address" className="w-44 font-bold">Address</label>
//                                 <input id="address" type="text" name='address' 
//                                     value={form.address}  className="w-[500px]"
//                                     placeholder="Please enter your address"
//                                     onChange={handleChange} 
//                                 />

//                         </div>

//                         <div className="child ">
//                             <ul className="">
//                                 <li>Child should be 3 yrs for Pre School</li>
//                                 <li>Child should be 4 yrs for Reception</li>
//                                 <li>Child should be 5 yrs for Pre Prep</li>
//                                 <li>Child should be 6 yrs for Prep</li>
                                
//                             </ul>
                        
//                         </div>   

//                         <div className="child">
//                             <h1 className="font-bold px-[30%]">Family Information</h1>
//                         </div>

//                         <div className="flex-between gap-16 child">

//                             <div className="flex-column">

//                                 <label htmlFor="father-name" className="w-44 font-bold">Father Name</label>
//                                 <input id="father-name" type="text" name='fathername' 
//                                     value={form.fathername}  className="w-96"
//                                     placeholder="Please enter your father name"
//                                     onChange={handleChange} 
//                                 />

//                             </div>

//                             <div className="flex-column">
                                
//                                 <label htmlFor="mother-name" className="w-44 font-bold">Mother Name</label>
//                                 <input id="mother-name" type="text" name='mothername' 
//                                     value={form.mothername}  className="w-96"
//                                     placeholder="Please enter your mother name"
//                                     onChange={handleChange} 
//                                 />

//                             </div>

//                         </div>

//                         <div className="flex-between gap-16 child">

//                             <div className="flex-column">

//                                 <label htmlFor="father-contact" className="w-44 font-bold">Father Contact</label>
//                                 <input id="father-contact" type="text" name='father_contact' 
//                                     value={form.father_contact}  className="w-96"
//                                     placeholder="Please enter your father contact"
//                                     onChange={handleChange} 
//                                 />

//                             </div>

//                             <div className="flex-column">
                                
//                                 <label htmlFor="mother-contact" className="w-44 font-bold">Mother Contact</label>
//                                 <input id="mother-contact" type="text" name='mother_contact' 
//                                     value={form.mother_contact}  className="w-96"
//                                     placeholder="Please enter your mother contact"
//                                     onChange={handleChange} 
//                                 />

//                             </div>

//                         </div>
                                    
                        
//                         <div className="child flex-between ">
//                             <div className="flex-column">
//                                 <label htmlFor="father-nicn" className="w-44 font-bold">Father NICN</label>
//                                 <input id="father-nicn" type="text" name='father_nicn' 
//                                     value={form.father_nicn}  className="w-96"
//                                     placeholder="Please enter your father nicn"
//                                     onChange={handleChange} 
//                                 />

//                             </div>
//                             <div className="flex-column">
//                                 <label htmlFor="mother-nicn" className="w-44 font-bold">Mother NICN</label>
//                                 <input id="mother-nicn" type="text" name='mother_nicn' 
//                                     value={form.mother_nicn}  className="w-96"
//                                     placeholder="Please enter your mother nicn"
//                                     onChange={handleChange} 
//                                 />
//                             </div>
//                         </div>             
                        
//                         <div className="child flex-between ">
//                             <div className="flex-column">
//                                 <label htmlFor="father-occupation" className="w-44 font-bold">Father Occupation</label>
//                                 <input id="father-occupation" type="text" name='father_occupation' 
//                                     value={form.father_occupation}  className="w-96"
//                                     placeholder=""
//                                     onChange={handleChange} 
//                                 />

//                             </div>
//                             <div className="flex-column">
//                                 <label htmlFor="job-designation" className="w-44 font-bold">Job Designation</label>
//                                 <input id="job-designation" type="text" name='job_degination' 
//                                     value={form.job_degination}  className="w-96"
//                                     placeholder=""
//                                     onChange={handleChange} 
//                                 />
//                             </div>
//                         </div>             
                        
                        

//                         <div className="  py-10">
                        
//                             <input id="policy" type="checkbox"  className="w-8" />
//                             <label htmlFor="policy">I agree to the privacy policy.* </label>

//                         </div>

//                         <div className="flex-center child">                         

//                             <button type="submit" className="w-96">Send</button>

//                         </div>                      
                         

//                     </form> 
//                     {message && <p className="mt-4 text-yellow-600">{message}</p>}
 
//                 </div>
//             </div>
//         </div>
            
        
//     )

  
// }

