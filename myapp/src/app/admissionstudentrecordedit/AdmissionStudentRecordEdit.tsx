"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link'
// import { IAdmission } from "@/types/datatype";
interface IAdmission {
  _id: string;
  firstname: string;
  lastname: string;
  date_of_birth: string;
  grade: string;
  img?: string;
  gender: string;
  religion: string;
  language: string;
  address: string;
  fathername: string;
  mothername: string;
  father_contact: string;
  mother_contact: string;
  father_nicn: string;
  mother_nicn: string;
  father_occupation: string;
  job_designation: string;
}


export default function AdmissionStudentRecordEdit() {

    const [students, setStudents] = useState<IAdmission[]>([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");

  // Fetch students
  const fetchStudents = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admissionstudent");
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error("Error fetching students", err);
    } finally {
      setLoading(false);
    }
  };

  // Delete student
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this student?")) return;

    try {
      const res = await fetch("/api/admissionstudent", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to delete student");

      setMessage("Student deleted successfully!");
      fetchStudents();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Error deleting student");
    }
  };

  
  useEffect(() => { fetchStudents();  }, []);

  if (loading) return <p className="p-32">Loading...</p>;

  return (
    <div className="p-32">
      <h1 className="text-2xl font-bold mb-6">Student Records</h1>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((record:IAdmission) => (
          <div key={record._id} className="border rounded-lg p-4 shadow bg-medium">
            {record.img ? (
              <Image
                src={record.img}
                alt="Student Image"
                width={150}
                height={150}
                className="rounded object-cover"
              />
            ) : (
              <p className="text-gray-500">No Image</p>
            )}
            <h2 className="font-bold text-lg mt-2">
              {record.firstname} {record.lastname}
            </h2>
            <p>Grade: {record.grade}</p>
            <p>DOB: {record.date_of_birth}</p>
            <p>Gender: {record.gender}</p>
            <p>Father: {record.fathername}</p>
            <p>Mother: {record.mothername}</p>

            <div className="flex gap-2">
                      <button>
                      <Link
                        href={`/admissionstudentrecordedit/${record._id}`}
                        className=" text-green-500"
                      >
                        Edit
                      </Link>
                      </button>
                      <button
                        onClick={() => handleDelete(record._id)}
                        className="text-red-600 "
                      >
                        Delete
                      </button>
                    </div>
          </div>
        ))}
      </div>
    </div>
  );
}
