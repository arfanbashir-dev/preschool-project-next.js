import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Roles } from '@/lib/roles';
import { isAllowed } from '@/lib/roleCheck';
import { connectDB } from '@/lib/mongoose';
import UserModel from '@/model/User';
// import staffroleModel from '@/model/staffroleModel';
import getAdmissionModel  from '@/model/admissionModel';
import Dashboard from '@/Components/DashboardCompo';
import MotionWrapper from '@/Components/MotionWrapper';
import getStaffModel from "@/model/staffroleModel";


export default async function DashboardPage() {
  
  const session = await getServerSession(authOptions);
  if (!session) redirect('/loginadmin');
  if (!session.user?.role || !isAllowed(session.user.role, [Roles.ADMIN, Roles.USER])) {
    redirect('/unauthorized');
  }

  await connectDB();

  const users = await UserModel.find().lean();
  // const staff = await getStaffModel.find().lean();

  const roles = ['coordinator', 'teacherhead','teacher']; // Cu
  const allStaff = [];
  
  for (const role of roles) {
    const model = getStaffModel(role);
    const staff = await model.find().lean();
    allStaff.push(...staff);
  }

  
  const grades = ['preschool', 'reception','preprep', 'prep']; // Cu
  const allStudents = [];
  
  for (const grade of grades) {
    const model = getAdmissionModel(grade);
    const students = await model.find().lean();
    allStudents.push(...students);
  }


  return (
    <div className="pt-32">
      <MotionWrapper>
        <Dashboard
          users={JSON.parse(JSON.stringify(users))}
          staff={JSON.parse(JSON.stringify(allStaff))}
          students={JSON.parse(JSON.stringify(allStudents))}
          // students={JSON.parse(JSON.stringify(allStudents))}
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
