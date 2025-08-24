import Link from 'next/link'
export default function UnauthorizedPage() {
  return (
    <div className="p-32">
      <div className="flex flex-col items-center justify-center text-red-600 text-xl">
        <p>🚫 You are not authorized to access this page.</p>

      </div>
      <div className='p-10'>
        <h1>Please follow these navigations</h1>
      </div>
      <div className='flex-center gap-10 '>
        <Link href='/'>Home</Link>
        <Link href='/loginadmin'>Login</Link>
        <Link href="/dashboard" className="p-4 bg-light hover:bg-dark rounded shadow">
               Go to Main Dashboard
        </Link>

      </div>
    </div>
  );
}
