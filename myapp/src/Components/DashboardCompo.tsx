// import React from 'react';
// import UserTableAndChart from './UserTableAndChart';
// import StaffTableAndChart from './StaffTableAndChart';
// import StudentTableAndChart from './StudentTableAndChart';

// type Student = {  _id: string;  firstname: string;  lastname: string;  date_of_birth: string;
//   grade: string;  gender: string;  myimg: string;
// };

// type User = { _id: string; name: string; email: string };
// type Staff = { _id: string; name: string; position: string };

// export default function DashboardCompo({ 
//    view,  users,  staff,  students
// }: { view: string;  users: User[];  staff: Staff[];  students: Student[];
// }) {
//   return (
//     <div>
//       {view === 'userstableandchart' && <UserTableAndChart users={users} />}
//       {view === 'stafftableandchart' && <StaffTableAndChart staff={staff} />}
//       {view === 'studenttableandchart' && (
//         <StudentTableAndChart students={students} />
//       )}
//     </div>
//   );
// }



'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import Card from './Card'
import {IAdmission} from '@/types/datatype'
import { IUser } from '@/types/datatype';
import { IStaff } from '@/types/datatype'; 
import UserTableAndChart from './UserTableAndChart'
import StaffTableAndChart from './StaffTableAndChart'
import StudentTableAndChart from './StudentTableAndChart'


import { 
  FaHome, FaUserPlus,   FaTable, FaGraduationCap,
  FaUserTie,  FaChalkboardTeacher,  FaUserGraduate,  FaUserShield,  FaUserCog,  
  FaUserFriends,  FaCogs,  FaUser
} from 'react-icons/fa';




type View = 'dashboard' | 'userstableandchart'|'stafftableandchart'|'studenttableandchart'



export default function Dashboard(

  {users, staff, students }: { users: IUser[]; staff: IStaff[]; students: IAdmission[]}) {
  
  const [view, setView] = useState<View>('dashboard') // default view

  return (
    
    <div className="flex-between items-start">
      
      <div className="sidebar w-60 bg-dark  p-4">     

        <div className='circle w-52 pb-3'>
          
          <div className='circle w-52 h-32  rounded-xl bg-light '>
            <h1 className="text-2xl font-bold text-center">Dashboard</h1>
            <p className="mb-6 text-justify">Overview of key metrics and analytics.</p>          
          </div>

        </div>

        <div className="sidebar-list flex-column items-start gap-2 ">        

          
          <button className="link w-56 flex items-center gap-2  border-none" 
            onClick={() => setView('dashboard')}>
            <FaHome/> Main Dashboard
          </button>          

          <button className="link w-56 flex items-center gap-2  border-none" 
            onClick={() => setView('userstableandchart')}>
            <FaTable/> Users Table and Chart
          </button>

          <button className="link w-56 flex items-center gap-2  border-none" 
            onClick={() => setView('stafftableandchart')}>
            <FaTable/> Staff Table and Chart
          </button>

          <button className="link w-56 flex items-center gap-2  border-none" >
            <Link className="link flex-center gap-2" href="/rolewisestaffview"><FaUserGraduate/>Rolewise Staff View</Link>
          </button>

          <button className="link w-56 flex items-center gap-2  border-none" >
            <Link className="link flex-center gap-2" href="/registerusers"><FaUserPlus/> Register New User</Link>
          </button>

          <button className="link w-56 flex items-center gap-2  border-none" >
            <Link className="link flex-center gap-2" href="/registerstaff"><FaUserPlus/> Register New Staff</Link>
          </button>
          
          
          <button className="link w-56 flex items-center gap-2  border-none" >
            <Link className="link flex-center gap-2" href="/admissionrecord"><FaGraduationCap/>Admission Students Record</Link>
          </button>
          <button className="link w-56 flex items-center gap-2  border-none" >
            <Link className="link flex-center gap-2" href="/admissionstudentrecord"><FaGraduationCap/>Gradewise Students Record</Link>
          </button>
          

          <button className="link w-56 flex items-center gap-2  border-none" 
            onClick={() => setView('studenttableandchart')}>
            <FaTable/> Student Table And Chart
          </button>          

          <button className="link w-56 flex items-center gap-2  border-none" >
            <Link className="flex items-center gap-2" href="/admissionstudentrecordedit"><FaGraduationCap /> Edit Students Record</Link>
          </button> 

          <button className="link w-56 flex items-center gap-2  border-none" >
            <Link className="flex items-center gap-2" href="/admissionstudentrecordedit2"><FaGraduationCap /> Edit Students Record 2</Link>
          </button> 


        </div>

      </div>

      <div className="main flex-columm w-full p-6 ">        
          <>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card icon={<FaUserFriends />} title="Users" value={users.length.toString()} />
              <Card icon={<FaUserTie />} title="Principal" value="1" />              
              <Card icon={<FaUserCog />} title="Staff" value={staff.length.toString()} />              
              <Card icon={<FaUserShield />} title="Teachers Head" value="10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card icon={<FaChalkboardTeacher />} title="Senior Teachers" value="50" />
              <Card icon={<FaUser />} title="Teacher" value='100' />              
              <Card icon={<FaUserGraduate />} title="Students" value={students.length.toString()} />
              <Card icon={<FaCogs />} title="Settings" value="10" />
            </div>
          </>      
        
        {view === 'userstableandchart'   && <UserTableAndChart  users={users} />}
        {view === 'stafftableandchart'   && <StaffTableAndChart staff={staff} />}
        {view === 'studenttableandchart' && <StudentTableAndChart students={students} />}
        

      </div>
    </div>
  )
}

