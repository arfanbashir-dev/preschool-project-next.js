

// ✅ Remove "use client"
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

import { redirect } from "next/navigation";
import RegisterStaffForm from "./RegisteredStaffForm";

export default async function RegisterPage() {
 
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    redirect("/loginadmin");
  }

  return (
    <div className="p-10">
      <RegisterStaffForm />
    </div>
  );
}






