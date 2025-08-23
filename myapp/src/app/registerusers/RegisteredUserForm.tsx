'use client';

import { useState } from 'react';   //ok
import { useRouter } from 'next/navigation';

export default function RegisterUserForm() {
  const router = useRouter();
  const [form, setForm] = useState({name:'', email: '', password: '', role: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const res = await fetch('/api/registeruser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!data.success) {
      setError(data.message);
    } else {
      setSuccess('Registered successfully! Redirecting...');
      // setTimeout(() => router.push('/admin'), 2000);
      setTimeout(() => router.push('/dashboard'), 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pt-32 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Register</h1>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-dark">{success}</p>}

      <input        type="text"     className="block w-full mb-2 p-2 border"
        placeholder="name"    value={form.name}       required
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input        type="email"     className="block w-full mb-2 p-2 border"
        placeholder="Email"    value={form.email}       required
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input     type="password"      className="block w-full mb-2 p-2 border"
        placeholder="Password"    value={form.password}     required
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <select
        className="block w-full mb-4 p-2 border text-black"
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      >
        <option className='' value="" disabled>Select Role</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>

      <button type="submit" >
        Register
      </button>
    </form>
  );
}
