"use client";

import { useEffect, useState } from "react";
import { IAdmission } from "@/types/datatype";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

export default function ShowStudents() {

  const [students, setStudents] = useState<IAdmission[]>([]);
  const [grade, setGrade] = useState("preschool"); // default filter
  const [loading, setLoading] = useState(false);
  const { status } = useSession();
  const router = useRouter();

  

  useEffect(() => { if (status === 'unauthenticated') { router.push('/loginadmin');  return;}
    
    const fetchStudents = async () => {
            setLoading(true);
            try {
              const res = await fetch(`/api/admissionstudent?grade=${grade}`);
              const data: IAdmission[] = await res.json();
              setStudents(data);
            } catch (err) {
              console.error("Error fetching students:", err);
            } finally {
              setLoading(false);
            }
        };
        fetchStudents();  
    }, [grade,status,router] );
  

  

  return (
    <div className="p-32">
      <h1 className="text-2xl font-bold mb-6">Student Records by Grade</h1>

      {/* Grade Filter */}
      <select
        className="border p-2 mb-6"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      >
        <option value="preschool">Pre School</option>
        <option value="reception">Reception</option>
        <option value="preprep">Pre Prep</option>
        <option value="prep">Prep</option>
      </select>

      {loading ? (  <p>Loading...</p>
      ) : (
        <div className="grid gap-4">
          {students.map((record) => (
            <div
              key={record._id}
              className="border rounded p-4 shadow bg-medium"
            >
              <h2 className="font-bold ">
                {record.firstname} {record.lastname}
              </h2>
              <p>Grade: {record.grade}</p>
              <p>DOB: {record.date_of_birth}</p>
              <p>Father: {record.fathername}</p>
              <p>Mother: {record.mothername}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
