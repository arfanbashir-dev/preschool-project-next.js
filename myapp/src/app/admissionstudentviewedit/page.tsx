'use client'

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
// import Image from 'next/image';

const gradeOptions = [
  { value: 'preschool', label: 'Pre School' },
  { value: 'reception', label: 'Reception' },
  { value: 'preprep', label: 'Pre Prep' },
  { value: 'prep', label: 'Prep' }
];

export default function AdmissionsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const selectedGrade = searchParams.get('grade') || gradeOptions[0].value;

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/editanddeletestudent?grade=${selectedGrade}`);
        const { students } = await res.json();
        setStudents(students);
      } catch (error) { console.error('Error fetching students:', error);
      } finally { setLoading(false);   }
    };

      if (session?.user?.role === 'admin') {
        fetchData();
      } else if (status === 'authenticated') { router.push('/login');  }
    }, [selectedGrade, session, status, router]);

  // const handleEdit = (id: string) => { router.push(`/edit/${id}`);  };
  const handleEdit = (id: string, grade: string) => { router.push(`/admissionstudentviewedit/${grade}/${id}`);};


  const handleDelete = async (id: string, grade: string) => {
    const confirm = window.confirm("Are you sure you want to delete this student?");
    if (!confirm) return;

    try {
      const res = await fetch(`/api/admissionstudentviewedit/${grade}/${id}`, {  method: 'DELETE',   });

    if (res.ok) {  alert("Deleted successfully");   router.refresh(); // Re-fetch the data
    } else {  alert("Failed to delete");  }
  } catch (error) {  console.error(error);
    alert("An error occurred");
  }
};

  if (loading) return <div className="pt-32 p-4">Loading...</div>;
  if (!session || session.user.role !== 'admin') return null;

  return (
    <div className="p-32">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          Students - Grade: {gradeOptions.find(g => g.value === selectedGrade)?.label}
        </h1>

        <div className="flex items-center gap-2">
          <label htmlFor="grade-select" className="font-medium">Select Grade:</label>
          <select
            id="grade-select"   value={selectedGrade}
            onChange={(e) => {
              router.push(`/admissionstudentviewedit?grade=${e.target.value}`);
            }}
            className="border rounded px-3 py-1"
          >
            {gradeOptions.map((grade) => (
              <option key={grade.value} value={grade.value}>
                {grade.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr className="bg-dark">
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">DOB</th>
            <th className="border border-gray-400 px-4 py-2">Gender</th>
            <th className="border border-gray-400 px-4 py-2">Father</th>
            {/* <th className="border border-gray-400 px-4 py-2">Image</th> */}
            <th className="border border-gray-400 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id} className="text-center">
              <td className="border border-gray-400 px-4 py-2">
                {student.firstname} {student.lastname}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.date_of_birth}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.gender}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.fathername}
              </td>
              {/* <td className="border border-gray-400 px-4 py-2">
                {student.myimg ? (
                  <div className="flex justify-center">
                    <Image
                      src={student.myimg}
                      width={60}
                      height={64}
                      className="rounded-lg object-cover w-16 h-16"
                      alt={`${student.firstname} ${student.lastname}`}
                      unoptimized={true}
                    />
                  </div>
                ) : (
                  <span className="text-gray-400">N/A</span>
                )}
              </td> */}
              <td className="border border-gray-400 px-4 py-2">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => handleEdit(student._id, student.grade)}

                    className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                   onClick={() => handleDelete(student._id, student.grade)}

                    className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
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
  );
}
