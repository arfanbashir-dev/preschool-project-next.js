"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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

export default function EditAdmissionStudentRecord() {
  
  const [students, setStudents] = useState<IAdmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    
    const fetchStudents = async () => {
        try {
          setLoading(true);
          const res = await fetch("/api/admissionstudent", { cache: "no-store" });
          const data = await res.json();
          // Support either [{...}] or { students: [{...}] }
          setStudents(Array.isArray(data) ? data : data.students ?? []);
        } catch (err) {
          setError(err instanceof Error ? err.message : "Failed to fetch students");
        } finally {
          setLoading(false);
        }
      };
      fetchStudents();
  }, []);

    const handleDelete = async (id: string) => {
      if (!confirm("Are you sure you want to delete this student?")) return;
      try {
        const res = await fetch(`/api/admissionstudent/${id}`, { method: "DELETE" });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to delete student");
        setStudents((prev) => prev.filter((s) => s._id !== id));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to delete student");
      }
    };

    if (loading) return <p className="p-32">Loading...</p>;

  return (
    <div className="container mx-auto pt-32 p-4">
      <h1 className="text-2xl font-bold mb-6">Admission Records</h1>

      {error && <p className="mb-4 text-red-500">{error}</p>}

      {students.length ? (
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr className="bg-dark">
                <th className="table-cell-style">Photo</th>
                <th className="table-cell-style">Name</th>
                <th className="table-cell-style">Grade</th>
                <th className="table-cell-style">DOB</th>
                <th className="table-cell-style">Gender</th>
                <th className="table-cell-style">Father</th>
                <th className="table-cell-style">Contact</th>
                <th className="table-cell-style">Actions</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {students.map((record) => (
                <tr key={record._id}>
                  <td className="table-cell-style">
                    {record.img ? (
                      <img
                        src={record.img}
                        alt="Student"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-gray-400">No image</span>
                    )}
                  </td>
                  <td className="table-cell-style">
                    <div className="font-medium">
                      {record.firstname} {record.lastname}
                    </div>
                  </td>
                  <td className="table-cell-style">{record.grade}</td>
                  <td className="table-cell-style">{record.date_of_birth}</td>
                  <td className="table-cell-style">{record.gender}</td>
                  <td className="table-cell-style">{record.fathername}</td>
                  <td className="table-cell-style">{record.father_contact}</td>
                  <td className="table-cell-style">
                    <div className="flex gap-2">
                      <Link
                        href={`/admissionstudentrecordedit2/${record._id}`}
                        className="text-green-500"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(record._id)}
                        className="text-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center py-8 text-gray-500">No students found</p>
      )}
    </div>
  );
}
