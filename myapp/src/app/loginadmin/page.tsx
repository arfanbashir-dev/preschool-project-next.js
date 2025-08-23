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
    <div className="p-16">
      <div className="min-h-screen flex items-center justify-center">
        <form onSubmit={handleLogin} className="bg-medium p-8 rounded shadow-md space-y-4">
          <h2 className="text-xl font-bold text-center">Login</h2>
          <input    type="email" className="border p-2 w-full"
                    placeholder="Email"  value={email}          
                    onChange={(e) => setEmail(e.target.value)}
          />
          <input type="password" className="border p-2 w-full"
                placeholder="Password"  value={password}                    
                onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className=" w-full">
            Sign In
          </button>
          <button
            onClick={() => router.back()}
            className="w-full"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

