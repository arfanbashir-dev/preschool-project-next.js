export default function Testing (){
    return(
        <div>
            <h1>Tesing</h1>
        </div>
    )
}


// 'use client'

// import { useSession } from "next-auth/react";   //ok
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// const roleOptions = [
//   { value: 'coordinator', label: 'Coordinator' },
//   { value: 'teacherhead', label: 'Teacher Head' },
//   { value: 'teacher', label: 'Teacher' },
  
// ];

// interface StaffMember { _id: string;  name: string;  email: string;  role: string;}




// export default function AdmissionsPage({ searchParams}: {  searchParams: { role?: string }}) {
  
//     const router = useRouter();
//     const { data: session, status } = useSession();
//     const [staff, setStaff] = useState<StaffMember[]>([]);
//     const [loading, setLoading] = useState(true);

//     const selectedRole = searchParams.role || roleOptions[0].value; 

//     useEffect(() => {
//   if (status === 'unauthenticated') {
//     router.push('/loginadmin');
//     return;
//   }

//   const fetchData = async () => {
//     try {
//       const res = await fetch(`/api/rolewisestaff?role=${selectedRole}`);
//       const { staff } = await res.json();
//       setStaff(staff);
//     } catch (error) {
//       console.error('Error fetching staff:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (session?.user?.role === 'admin') {
//     fetchData();
//   } else if (status === 'authenticated') {
//     router.push('/loginadmin');
//   }
// }, [selectedRole, status, session?.user?.role, router]);

//     // useEffect(() => {if (status === 'unauthenticated') { router.push('/loginadmin');  return; }

//     //   const fetchData = async () => {
//     //     try {
//     //       const res = await fetch(`/api/rolewisestaff?role=${selectedRole}`);
//     //       const { staff } = await res.json();
//     //       setStaff(staff);
//     //     } catch (error) { console.error('Error fetching students:', error);
//     //     } finally {  setLoading(false);   }
//     //   };

//     //   if (session?.user.role === 'admin') { fetchData(); } 
//     //   else { router.push('/loginadmin'); }
//     // }, [selectedRole, session, status, router]);


//     if (loading) {   return <div className="p-32 ">Loading...</div>;  }

//     if (!session || session.user.role !== 'admin') {  return null; } // Redirect will happen in useEffect
  

//   return (
//     <div className="p-32">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold">Staff - Role: {roleOptions.find(g => g.value === selectedRole)?.label}</h1>
        
//         <div className="flex items-center gap-2">
//           <label htmlFor="role-select" className="font-medium">Select Role:</label>
//           <select id="role-select" value={selectedRole} className="border rounded px-3 py-1"
//             onChange={(e) => { router.push(`/rolewisestaffview?role=${e.target.value}`); }}
//           >
//             {roleOptions.map((opt) => (
//                 <option key={opt.value} value={opt.value}>
//                 {opt.label}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <table className="table-auto border-collapse border-2 w-full">
//         <thead>
//           <tr className="bg-dark">
          
//             <th className="table-cell-style">Name</th>
//             <th className="table-cell-style">Email</th>
//             <th className="table-cell-style">Role</th>
            
//           </tr>
//         </thead>
//         <tbody>
//           {staff.map((member) => (
//             <tr key={member._id} className="text-center">
             
//               <td className="table-cell-style">
//                 {member.name} 
//               </td>
             
//               <td className="table-cell-style">
//                 {member.email}
//               </td>
             
//               <td className="table-cell-style">
//                 {member.role}
//               </td>
              
//             </tr>
//           ))}

//         </tbody>
//       </table>
//     </div>
//   );
// }

