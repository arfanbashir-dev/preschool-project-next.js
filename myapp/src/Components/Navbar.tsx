'use client'

import Link from 'next/link';
import Image from 'next/image';
import LogoImg from '../../public/logopreschool.png';
import { IoSearch } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import {navObj} from '@/Constants/NavObj';


export default function Navbar() {

  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = () => {
    router.push('/signout');
  };

  
  return (
    <nav className="bg-slate-600  fixed z-10 h-32 w-full">
      
      <div className="flex-between">

        {/* Logo + Title */}
        <div className="flex-center ">
          <Image src={LogoImg} alt="logo" className="w-24 " />
          <span>Little Genius TechSchool</span>
        </div>

        {/* Search */}
        <div className="relative flex-center gap-1">
          <input type="text" placeholder="Search" className="mr-10  bg-light "/>
          <IoSearch className="absolute top-3 right-56 text-white" />
          <div className=' rounded-md font-bold mr-10'>

            {session?.user ? (
                <button className=" link px-4 py-2 "
                  onClick={handleLogout}              
                >
                  LogOut
                </button>
              ) : ( <button  className=" link px-4 py-2 ">                      
                      <Link href="/loginadmin" > LogIn </Link>
                    </button>            
                  )
            }

          </div>
        </div>

      </div>

      {/* Nav Links */}
      
        <div className="flex-center gap-10 ">
          {navObj.map((item) => (
            <div key={item.id} className="group relative ">
              <Link href={item.href} className="link flex-center gap-1  font-medium">
                {item.title}
                {item.submenu && <FaCaretDown className="group-hover:rotate-180" />}
              </Link>
              {item.submenu && (
                <ul className="absolute  left-0 w-48 bg-light font-medium  p-2 rounded-lg shadow-lg hidden group-hover:block z-50">
                  {item.submenu.map((sub, idx) => (
                    <li key={idx}>
                      <Link href={sub.href} className="block px-4 py-2 link">
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}          
          
        
          {session?.user?.role === 'admin' && (
            <Link href="/dashboard" className="link font-medium">DASHBOARD</Link>
          )}

          

      
        
      </div>
      
    </nav>
  );
}









// 'use client'

// import Link from 'next/link';
// import Image from 'next/image';
// import LogoImg from '../../public/logopreschool.png';
// import { IoSearch } from "react-icons/io5";
// import { FaCaretDown } from "react-icons/fa";
// import { useSession } from "next-auth/react";
// import { useRouter } from 'next/navigation';
//   


// export default function Navbar() {

//   const { data: session } = useSession();
//   const router = useRouter();

//   const handleLogout = () => {
//     router.push('/signout');
//   };

  
//   return (
//     <nav className="bg-slate-600 text-white fixed z-10 h-32 w-full">
      
//       <div className="flex-between">

//         {/* Logo + Title */}
//         <div className="flex-center ">
//           <Image src={LogoImg} alt="logo" className="w-24 " />
//           <span>Little Genius TechSchool</span>
//         </div>

//         {/* Search */}
//         <div className="relative flex-center gap-1">
//           <input type="text" placeholder="Search" className="mr-10  bg-light "/>
//           <IoSearch className="absolute top-3 right-56 text-white" />
//           <div className=' rounded-md font-bold mr-10'>

//             {session?.user ? (
//                 <button className=" link px-4 py-2 "
//                   onClick={handleLogout}              
//                 >
//                   LogOut
//                 </button>
//               ) : (
//                     <button  className=" link px-4 py-2 ">
//                       <Link href="/login" >
//                         LogIn
//                       </Link>

//                     </button>
            
//                   )
//             }

//           </div>
          


//         </div>

//       </div>

//       {/* Nav Links */}
//       {objectnav.map(item =>
//         <div className="flex-center gap-10 " key={item.id}>

//           <Link href="/" className='home link'>{ item.list }</Link> 
//           <div className='group'>
//           <Link href="/curriculum" className='curriculum link  flex-center gap-1 group '
//           >{item.list}
//             <FaCaretDown  className='group-hover:rotate-180'/>

//               <ul className="curriculum-submenu">

//                 <li><Link href="/courseoutline" className=" link py-3 ">Course Outline</Link></li>
//                 <li><Link href="/syllabus" className=" link py-3">Syllabus</Link></li>
//                 <li><Link href="/timetable" className=" link py-3">Timetable</Link></li>

//               </ul>          

//           </Link>
//           </div>          
//           <div>
//           <Link href="/extracurriculum" className='extracurriculum link flex-center gap-1 group  '
//           >{item.list}
//             <FaCaretDown className='group-hover:rotate-180'/>

//             <ul className="extra-curriculum-submenu">
//               <li><Link href="/games" className=" link py-3 ">Game Competition</Link></li>
//               <li><Link href="/sports" className=" link py-3 ">Sports</Link></li>
//               <li><Link href="/health" className=" link py-3 ">Health</Link></li>
//               <li><Link href="/admissionform3" className=" link py-3 ">Admission upload</Link></li>
//             </ul>


//           </Link>
//           </div>


//           <Link href="/information" className='info link flex-center gap-1 group'
//           >INFORMATION
//             <FaCaretDown className='group-hover:rotate-180'/>

//             <ul className="info-submenu">
//               <li><Link href="/news" className=" link ">News Updates</Link></li>
//               <li><Link href="/announcements" className=" link ">Annoucements</Link></li>
//               <li><Link href="/formtest2" className=" link ">Form Testing2</Link></li>
//               <li><Link href="/display2" className=" link ">Display Testing2</Link></li>
//               <li><Link href="/formtest3" className=" link ">Form Testing3</Link></li>
//               <li><Link href="/display3" className=" link ">Display Testing3</Link></li>
//             </ul>

//           </Link>



//           <Link href="" className='admissioninfo link flex-center gap-1 group '
//           >Admission Info
//             <FaCaretDown  className='group-hover:rotate-180 '/>

//             <ul className="admissioninfo-submenu  ">

//               <li><Link href="/admissionprocess" className=" link  ">Admission Process</Link></li>
//               <li><Link href="/apply" className=" link  ">Apply</Link></li>
//               <li><Link href="/admissionform" className=" link  ">Admission Form</Link></li>
//               <li><Link href="/fee" className=" link  ">Fees</Link></li>
//               <li><Link href="/termdates" className=" link  ">Term Dates</Link></li>
//               <li><Link href="/sampleform" className=" link  ">Sample Form</Link></li>
//             </ul>

//           </Link>

//           <Link href="/contact" className="contact link">Contact</Link>  
        

//         {session?.user?.role === 'admin' && (
                      
//             <Link href="/dashboard" className=" dashboard link"> Dashboard   </Link>
            
//         )}      
        
//       </div>
//       )}
//     </nav>
//   );
// }
