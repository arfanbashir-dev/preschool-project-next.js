// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function RegisterForm() {
//   const router = useRouter();
//   const [form, setForm] = useState({name:'', email: '', password: '', role: '' });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     const res = await fetch('/api/rolewisestaff', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();

//     if (!data.success) {
//       setError(data.message);
//     } else {
//       setSuccess('Registered successfully! Redirecting...');      
//       setTimeout(() => router.push('/dashboard'), 2000);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="pt-32 max-w-md mx-auto">
//       <h1 className="text-2xl mb-4">Register Staff</h1>

//       {error && <p className="text-red-700">{error}</p>}
//       {success && <p className="text-black">{success}</p>}

//       <input        type="text"     className="block w-full mb-2 p-2 border"
//         placeholder="name"    value={form.name}       required
//         onChange={(e) => setForm({ ...form, name: e.target.value })}
//       />

//       <input        type="email"     className="block w-full mb-2 p-2 border"
//         placeholder="Email"    value={form.email}       required
//         onChange={(e) => setForm({ ...form, email: e.target.value })}
//       />
//       <input     type="password"      className="block w-full mb-2 p-2 border"
//         placeholder="Password"    value={form.password}     required
//         onChange={(e) => setForm({ ...form, password: e.target.value })}
//       />
//       <select
//         className="block w-full mb-4 p-2 border"
//         value={form.role}
//         onChange={(e) => setForm({ ...form, role: e.target.value })}
//       >
//         <option value="" disabled>Select Role</option>
//         <option value="coordinator">Coordinator</option>
//         <option value="teacherhead">Teacher Head</option>
//         <option value="teacher">Teacher </option>
//       </select>

//       <button type="submit" className="">
//         Register Staff
//       </button>
//     </form>
//   );
// }
