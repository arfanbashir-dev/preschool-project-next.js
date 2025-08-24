"use client";

import { useEffect, useState } from "react";
import { IStaff } from "@/types/datatype";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

export default function ShowStaff() {

  const [staff, setStaff] = useState<IStaff[]>([]);
  const [role, setRole] = useState("teacher"); // default filter
  const [loading, setLoading] = useState(false);
  const { status } = useSession();
  const router = useRouter();

  

  useEffect(() => { if (status === 'unauthenticated') { router.push('/loginadmin');  return;}
    
    const fetchStaff = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/rolewisestaff?role=${role}`);
        const data = await res.json();
        setStaff(data.staff || []);   // ✅ correct extraction
      } catch (err) {
      console.error("Error fetching staff:", err);
      } finally {
      setLoading(false);
      }


        };
      fetchStaff();  
    }, [role,status,router] );
  

  

  return (
    <div className="p-32">
      <h1 className="text-2xl font-bold mb-6">Staff Record by Role</h1>

      {/* Grade Filter */}
      <select
        className="border p-2 mb-6"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="teacher">Teacher</option>
        <option value="coordinator">Coordinator</option>
        <option value="headteacher">Head Teacher</option>
        
      </select>

      {loading ? (  <p>Loading...</p> ) : (
        <div className="grid gap-4">
          {staff.map((record) => (
            <div
              key={record._id}
              className="border rounded p-4 shadow bg-medium"
            >
              <h2 className="font-bold ">
                {record.name}
              </h2>
              <p>Role: {record.role}</p>
              <p>Email: {record.email}</p>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
