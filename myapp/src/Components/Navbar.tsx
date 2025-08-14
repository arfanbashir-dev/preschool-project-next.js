// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import LogoImg from '../../public/logopreschool.png';
// import { IoSearch } from "react-icons/io5";
// import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
// import { useSession } from "next-auth/react";
// import { useRouter } from 'next/navigation';
// import { navObj } from '@/Constants/NavObj';
// import { useState } from 'react';

// export default function Navbar() {

//   const { data: session } = useSession();
//   const router = useRouter();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLogout = () => { router.push('/signout'); };

//   return (

//     <nav className="bg-slate-600 fixed z-10 w-full h-32">
    
//       <div className="max-w-screen-xl mx-auto  sm:px-6 flex items-center justify-between h-20">

//         {/* Logo */}
//         <div className="flex-center">
//           <Image src={LogoImg} alt="logo" className="w-16 h-auto" />
//           <span className="text-white font-bold text-lg sm:text-xl whitespace-nowrap">
//             Little Genius TechSchool
//           </span>
//         </div>

//         {/* Desktop Nav Links */}
//         <div className="hidden lg:flex items-center gap-6 flex-nowrap">
//           {navObj.map((item) => (
//             <div key={item.id} className="relative group">
//               <Link
//                 href={item.href}
//                 className="text-white font-medium hover:text-gray-300 whitespace-nowrap"
//               >
//                 {item.title} {item.submenu && <FaCaretDown className="inline ml-1 text-sm" />}
//               </Link>

//               {item.submenu && (
//                 <div className="absolute left-0 hidden group-hover:block bg-slate-700 mt-2 rounded shadow-lg min-w-[150px]">
//                   {item.submenu.map((sub, idx) => (
//                     <Link
//                       key={idx}
//                       href={sub.href}
//                       className="block px-4 py-2 text-white hover:bg-slate-600"
//                     >
//                       {sub.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}

//           {session?.user?.role === 'admin' && (
//             <Link href="/dashboard" className="text-white font-medium hover:text-gray-300">
//               DASHBOARD
//             </Link>
//           )}
//         </div>

//         {/* Desktop Search */}
//         <div className="hidden lg:flex items-center gap-2 relative">
//           <input
//             type="text"
//             placeholder="Search"
//             className="px-3 py-1 rounded bg-white text-black focus:outline-none"
//           />
//           <IoSearch className="absolute right-3 text-gray-600" />
//         </div>

//         {/* Desktop Login/Logout */}
//         <div className="hidden lg:flex items-center gap-4">
//           {session?.user ? (
//             <button
//               className="bg-white text-slate-600 font-bold px-4 py-2 rounded"
//               onClick={handleLogout}
//             >
//               LogOut
//             </button>
//           ) : (
//             <Link
//               href="/loginadmin"
//               className="bg-white text-slate-600 font-bold px-4 py-2 rounded"
//             >
//               LogIn
//             </Link>
//           )}
//         </div>

//         {/* Mobile/Tablet Hamburger */}
//         <button
//           className="lg:hidden text-white text-2xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile/Tablet Menu */}
//       {menuOpen && (
//         <div className="lg:hidden bg-slate-700 px-4 py-4 space-y-3">
//           {navObj.map((item) => (
//             <div key={item.id}>
//               <Link
//                 href={item.href}
//                 className="block text-white font-medium py-2"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {item.title}
//               </Link>
//               {item.submenu && (
//                 <div className="pl-4">
//                   {item.submenu.map((sub, idx) => (
//                     <Link
//                       key={idx}
//                       href={sub.href}
//                       className="block text-gray-300 py-1"
//                       onClick={() => setMenuOpen(false)}
//                     >
//                       {sub.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}

//           {session?.user?.role === 'admin' && (
//             <Link  href="/dashboard" className="block text-white font-medium py-2"
//               onClick={() => setMenuOpen(false)}
//             >
//               DASHBOARD
//             </Link>
//           )}

//           {/* Mobile/Tablet Search */}
//           <div className="flex items-center gap-2 mt-4">
//             <input
//               type="text"
//               placeholder="Search"
//               className="flex-grow px-3 py-1 rounded bg-white text-black focus:outline-none"
//             />
//             <IoSearch className="text-white text-xl" />
//           </div>

//           {/* Mobile/Tablet Login/Logout */}
//           <div className="mt-4">
//             {session?.user ? (
//               <button
//                 className="w-full bg-white text-slate-600 font-bold px-4 py-2 rounded"
//                 onClick={handleLogout}
//               >
//                 LogOut
//               </button>
//             ) : (
//               <Link
//                 href="/loginadmin"
//                 className="block w-full bg-white text-slate-600 font-bold px-4 py-2 rounded text-center"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 LogIn
//               </Link>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }



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

  const handleLogout = () => { router.push('/signout');  };

  
  return (
    <nav className="bg-slate-600  fixed z-10 h-32 w-full  max-w-screen-xl mx-auto  sm:px-6">

    {/* <div className=" "> */}
      
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
      
        <div className="lg:flex-center gap-10 ">
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
      
    {/* </div> */}
      
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
