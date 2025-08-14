'use client';

import Link from 'next/link';
import Image from 'next/image';
import LogoImg from '../../public/logopreschool.png';
import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { navObj } from '@/Constants/NavObj';
import { FaBars, FaTimes, FaCaretDown } from 'react-icons/fa';

export default function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    router.push('/signout');
  };

  return (
    <nav className="bg-slate-600 fixed z-10 h-32 w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        {/* Top Row */}
        <div className="flex items-center justify-between h-20">
          {/* Logo + Title */}
          <div className="flex-center">
            <Image src={LogoImg} alt="logo" className="w-24 h-auto" />
            <span className="text-white font-bold text-md">Little Genius TechSchool</span>
          </div>

          {/* Search + Login/Logout + Menu Toggle */}
          <div className="flex-center">
            {/* Search Input */}
            <div className="relative hidden lg:block">
              <input  type="text"  placeholder="Search"
                className="bg-white rounded-md pl-3 pr-10 py-1 text-black focus:outline-none"
              />
              <IoSearch className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600" />
            </div>

            {/* Login/Logout Button */}
            <div className="flex-center gap-3">
              {session?.user ? (
                <button
                  className="px-4 py-2 text-white font-medium rounded hover:bg-slate-500"
                  onClick={handleLogout}
                >
                  LogOut
                </button>
              ) : (
                <Link
                  href="/loginadmin"
                  className="px-4 py-2 text-white font-medium rounded hover:bg-slate-500"
                >
                  LogIn
                </Link>
              )}

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden text-white text-md"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navObj.map((item) => (
            <div key={item.id} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 text-white font-medium hover:text-gray-300"
              >
                {item.title}
                {item.submenu && <FaCaretDown className="transition-transform group-hover:rotate-180" />}
              </Link>
              {item.submenu && (
                <ul className="absolute left-0 w-48 bg-white text-black font-medium p-2 rounded-lg shadow-lg hidden group-hover:block z-50">
                  {item.submenu.map((sub, idx) => (
                    <li key={idx}>
                      <Link
                        href={sub.href}
                        className="block px-4 py-2 hover:bg-gray-100 rounded"
                      >
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {session?.user?.role === 'admin' && (
            <Link href="/dashboard" className="text-white font-medium hover:text-gray-300">
              DASHBOARD
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-700 px-4 py-4 space-y-3">
          {navObj.map((item) => (
            <div key={item.id}>
              <Link
                href={item.href}
                className="block text-white font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
              {item.submenu && (
                <div className="pl-4">
                  {item.submenu.map((sub, idx) => (
                    <Link
                      key={idx}
                      href={sub.href}
                      className="block text-gray-300 py-1"
                      onClick={() => setMenuOpen(false)}
                    >
                      {/* {sub.title} */}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {session?.user?.role === 'admin' && (
            <Link
              href="/dashboard"
              className="block text-white font-medium py-2"
              onClick={() => setMenuOpen(false)}
            >
              DASHBOARD
            </Link>
          )}

          {/* Mobile Search */}
          {/* <div className="flex items-center gap-2 mt-4">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow px-3 py-1 rounded bg-white text-black focus:outline-none"
            />
            <IoSearch className="text-white text-xl" />
          </div> */}

          {/* Mobile Login/Logout */}
          <div className="mt-4">
            {session?.user ? (
              <button
                className="w-full bg-white text-slate-600 font-bold px-4 py-2 rounded"
                onClick={handleLogout}
              >
                LogOut
              </button>
            ) : (
              <Link
                href="/loginadmin"
                className="block w-full bg-white text-slate-600 font-bold px-4 py-2 rounded text-center"
                onClick={() => setMenuOpen(false)}
              >
                LogIn
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}



// 'use client'

// import Link from 'next/link';
// import Image from 'next/image';
// import LogoImg from '../../public/logopreschool.png';
// import { useState } from 'react';
// import { IoSearch } from "react-icons/io5";
// import { useSession } from "next-auth/react";
// import { useRouter } from 'next/navigation';
// import {navObj} from '@/Constants/NavObj';
// import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";

// export default function Navbar() {

//   const { data: session } = useSession();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const router = useRouter();

//   const handleLogout = () => { router.push('/signout');  };

  
//   return (
  
//   <nav className="bg-slate-600  fixed z-10 h-32 w-full  ">

//     <div className=" max-w-screen-xl mx-auto  sm:px-6">
      
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
//               ) : ( <button  className=" link px-4 py-2 ">                      
//                       <Link href="/loginadmin" > LogIn </Link>
//                     </button>            
//                   )
//             }
//             <button  className="lg:hidden text-white text-2xl"
//                     onClick={() => setMenuOpen(!menuOpen)}
//             > Menu
//               {menuOpen ? <FaTimes /> : <FaBars />}
//             </button>

//           </div>
//         </div>

//       </div>

//       {/* Nav Links */}
      
//         <div className="lg:flex-center gap-10 ">
//           {navObj.map((item) => (
//             <div key={item.id} className="group relative ">
//               <Link href={item.href} className="link flex-center gap-1  font-medium">
//                 {item.title}
//                 {item.submenu && <FaCaretDown className="group-hover:rotate-180" />}
//               </Link>
//               {item.submenu && (
//                 <ul className="absolute  left-0 w-48 bg-light font-medium  p-2 rounded-lg shadow-lg hidden group-hover:block z-50">
//                   {item.submenu.map((sub, idx) => (
//                     <li key={idx}>
//                       <Link href={sub.href} className="block px-4 py-2 link">
//                         {sub.title}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}          
          
        
//           {session?.user?.role === 'admin' && (
//             <Link href="/dashboard" className="link font-medium">DASHBOARD</Link>
//           )}     
        
//         </div>


      

            
//         </div>
      
          
//     </nav>
//   );
// }





















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
