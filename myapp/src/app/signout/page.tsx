'use client';
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignoutPage() {
  const router = useRouter();

  const handleConfirm = async () => {
    await signOut({ callbackUrl: "/" });
    // await router.push("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center space-y-4">
        <h2 className="text-lg font-semibold">Are you sure you want to log out?</h2>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Log Out
          </button>
          <button
            onClick={() => router.back()}
            className="bg-gray-300 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
