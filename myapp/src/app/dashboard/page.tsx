import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Roles } from '@/lib/roles';
import { isAllowed } from '@/lib/roleCheck';
import { connectDB } from '@/lib/mongoose';
import UserModel from '@/model/User';
// import staffroleModel from '@/model/staffroleModel';
import AdmissionStudentModel  from '@/model/admissionModel';
import Dashboard from '@/Components/DashboardCompo';
import MotionWrapper from '@/Components/MotionWrapper';
import StaffModel from "@/model/staffroleModel";


export default async function DashboardPage() {
  
  const session = await getServerSession(authOptions);
  if (!session) redirect('/loginadmin');
  if (!session.user?.role || !isAllowed(session.user.role, [Roles.ADMIN, Roles.USER])) {
    redirect('/unauthorized');
  }

  await connectDB();

  const users = await UserModel.find().lean();
  
    const staff = await StaffModel.find().lean();
    const allstudents = await AdmissionStudentModel.find().lean();

  return (
    <div className="pt-32">
      <MotionWrapper>
        <Dashboard
          users={JSON.parse(JSON.stringify(users))}
          staff={JSON.parse(JSON.stringify(staff))}
          students={JSON.parse(JSON.stringify(allstudents))}          
        />
      </MotionWrapper>
    </div>
  );
}




// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";
// import { redirect } from "next/navigation";
// // import Link from "next/link";
// import { Roles } from '@/lib/roles';
// import { isAllowed } from '@/lib/roleCheck';
// import MotionWrapper from '@/Components/MotionWrapper';


// import Dashboard from '@/Components/FinalDashboard'

// import { connectDB } from '@/lib/mongoose';
// import UserModel from '@/model/User'; // Your Mongoose model


// export default async function DashboardPage() {

//   const session = await getServerSession(authOptions);
//   if (!session) redirect('/login');
//   if (!session.user?.role || !isAllowed(session.user.role, [Roles.ADMIN, Roles.USER])) {
//     redirect('/unauthorized');
//   }
//   await connectDB();
//   const users = await UserModel.find().lean(); // Fetch actual users from DB
  


//   return (
//     <div className="pt-32">
//       <MotionWrapper>      
//        {/* <Charts /> */}  

//         <div>
//           <Dashboard users={users,students}/>
//         </div>

//       </MotionWrapper>
      
//     </div>
//   );
// }
