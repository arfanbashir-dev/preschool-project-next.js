import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { isAllowed } from "@/lib/roleCheck";
import { Roles } from "@/lib/roles";
import EditAdmissionStudentRecord from "./EditAdmissionStudentRecord";

export default async function AdmissionStudentRecordPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) redirect("/loginadmin");
  
  if (!session.user?.role || !isAllowed(session.user.role, [Roles.ADMIN, Roles.USER])) {
    redirect("/unauthorized");
  }

  return <EditAdmissionStudentRecord />;
}
