"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export default function StudentForm() {
  const [form, setForm] = useState({ name: "", fatherName: "", grade: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setMessage("✅ Student added successfully!");
      setForm({ name: "", fatherName: "", grade: "" });
    } else {
      const data = await res.json();
      setMessage(`❌ Error: ${data.error}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Add Student</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="fatherName"
          value={form.fatherName}
          onChange={handleChange}
          placeholder="Father Name"
          className="w-full border p-2 rounded"
          required
        />
        <select
          name="grade"
          value={form.grade}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select Grade</option>
          <option value="Preschool">Preschool</option>
          <option value="Grade 1">Grade 1</option>
          <option value="Grade 2">Grade 2</option>
          <option value="Grade 3">Grade 3</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Student
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
