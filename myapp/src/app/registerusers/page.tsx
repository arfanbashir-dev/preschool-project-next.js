
// ✅ Remove "use client"
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import RegisteredUserForm from "./RegisteredUserForm";

export default async function RegisterPage() {
 
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
      redirect("/dashboard");
  }

  return (
    <div className="p-10">
      <RegisteredUserForm />
    </div>
  );
}



// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function RegisterPage() {

  
//   const router = useRouter();
//   const [form, setForm] = useState({ email: '', password: '', role: 'user' });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     const res = await fetch('/api/register', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();

//     if (!data.success) {
//       setError(data.message);
//     } 
//     else {
//       setSuccess('Registered successfully! Redirecting...');
//       setTimeout(() => router.push('/admin'), 2000);
//     }
//   };

//   return (
//       <div className='p-32'>
      
//         <form onSubmit={handleSubmit} className="p-8 max-w-md mx-auto">
//           <h1 className="text-2xl mb-4">Register</h1>
      
//           {error && <p className="text-red-500">{error}</p>}
      
//           {success && <p className="text-green-600">{success}</p>}

//           <input  type="email"  className="block w-full mb-2 p-2 border"
//                   placeholder="Email"  value={form.email}  required                     
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}            
//           />
//           <input  type="password"  className="block w-full mb-2 p-2 border"
//                   placeholder="Password"  value={form.password} required           
//                   onChange={(e) => setForm({ ...form, password: e.target.value })}            
//           />
//           <select  className="block w-full mb-4 p-2 border"
//             value={form.role}
//             onChange={(e) => setForm({ ...form, role: e.target.value })}
//           >
//             <option value="user">User</option>
//             <option value="admin">Admin</option>
//           </select>

//           <button type="submit" className="bg-green-600 text-white px-4 py-2">
//             Register
//           </button>
//         </form>
//       </div>
//   );
// }
