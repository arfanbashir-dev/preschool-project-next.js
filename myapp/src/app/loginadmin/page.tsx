'use client';

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getSession } from "next-auth/react";

export default function LoginPage() {
  
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    
    e.preventDefault();
    
    const res = await signIn("credentials", {  email,   password,   redirect: false  });

    if (res?.ok) {
      // Wait for session to be available
      const session = await getSession();

      // if (session?.user?.role === 'admin') { router.push("/admin"); } 
      if (session?.user?.role === 'admin') { router.push("/dashboard"); } 

      if (session?.user?.role === 'user')  { router.push("/dashboard"); } 
      
      // else { router.push("/dashboard");}
    } 
    else {  alert("Invalid credentials");  }
  };

  return (
    <div className="pt-32">
      <div className="min-h-screen flex items-center justify-center">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md space-y-4">
          <h2 className="text-xl font-bold text-center">Login</h2>
          <input    type="email" className="border p-2 w-full"
                    placeholder="Email"  value={email}          
                    onChange={(e) => setEmail(e.target.value)}
          />
          <input type="password" className="border p-2 w-full"
                placeholder="Password"  value={password}                    
                onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
            Sign In
          </button>
          <button
            onClick={() => router.back()}
            className="bg-gray-300 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}


// 'use client';

// import { useState } from "react";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const res = await signIn("credentials", { email,  password,  redirect: false  });

//     if (res?.error) { 
//       setError(res.error);
//     } 
//     else {
//       router.push("/dashboard");
//     }
//   };

//   return (
//     <div className="p-32">
//       <form onSubmit={handleLogin} className="p-8 max-w-md mx-auto">
//         <h1 className="text-2xl mb-4">Login</h1>
//         {error && <p className="text-red-500">{error}</p>}
//         <input  type="email" className="block w-full mb-2 p-2 border"
//                 placeholder="Email"   value={email}  required        
//                 onChange={(e) => setEmail(e.target.value)}
          
//         />
//         <input  type="password"  className="block w-full mb-4 p-2 border"
//           placeholder="Password"  value={password} required        
//           onChange={(e) => setPassword(e.target.value)}
          
//         />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2">Login</button>
//       </form>
//     </div>

//   );
// }
