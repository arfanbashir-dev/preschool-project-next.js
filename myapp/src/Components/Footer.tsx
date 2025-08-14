import Image from "next/image"
import Link from "next/link";

import LogoImg from '../../public/logopreschool.png';

import { FaFacebook , FaInstagram , FaYoutubeSquare , FaTwitter, FaPhoneAlt, FaTicketAlt, FaBook } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="bg-slate-600 text-white w-full py-10">
      <div className="flex flex-col md:flex-row md:justify-between gap-10 px-6 md:px-20">

        {/* Logo + About */}
        <div className="flex flex-col gap-5 md:w-1/4 text-center md:text-left">
          <Image src={LogoImg} alt="logoschool" className="mx-auto md:mx-0" />
          <p>
            Little Genius TechSchool is a Part of The Islamic Group, and focuses
            on providing Affordable Educational Solutions Pan-Pakistan.
          </p>
          <div className="flex justify-center md:justify-start gap-3">
            <FaFacebook className="size-5 bg-blue-700 p-1 rounded" />
            <FaInstagram className="size-5 bg-orange-700 p-1 rounded" />
            <FaYoutubeSquare className="size-5 text-red-700" />
            <FaTwitter className="size-5 bg-blue-700 p-1 rounded" />
          </div>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col gap-4 md:w-1/4 text-center md:text-left">
          <h1 className="font-bold">Contact Us</h1>

          <div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FaPhoneAlt className="text-green-700" />
              <span>Phone</span>
            </div>
            <ul>
              <li>+92 9000 123 789</li>
              <li>+92 9000 456 789</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <MdOutlineMail className="text-orange-700" />
              <span>Email</span>
            </div>
            <Link href="/abc">info@littlegeniustechschool.com</Link>
          </div>

          <div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FaLocationDot className="text-red-700" />
              <span>Head Office</span>
            </div>
            <p>Plot No 50 Main Boulevard Lahore</p>
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col gap-3 md:w-1/4 text-center md:text-left">
          <h1 className="font-bold">Useful Links</h1>
          <Link href="/about">About</Link>
          <Link href="/abc">Our Programs</Link>
          <Link href="/about">Blog</Link>
          <Link href="/about">Contact</Link>
          <Link href="/about">Franchise</Link>
        </div>

        {/* Important Resources */}
        <div className="flex flex-col gap-3 md:w-1/4 text-center md:text-left">
          <h1 className="font-bold">Important Resources</h1>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <FaTicketAlt />
            <Link href="/abc">Raise a Ticket</Link>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <FiLogIn />
            <Link href="/login">School Login</Link>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <FaBook />
            <Link href="/abc">Book Centers</Link>
          </div>
        </div>
      </div>
    </div>
  );
}



// import Image from "next/image"
// import Link from "next/link";

// import LogoImg from '../../public/logopreschool.png';

// import { FaFacebook , FaInstagram , FaYoutubeSquare , FaTwitter, FaPhoneAlt, FaTicketAlt, FaBook } from "react-icons/fa";
// import { MdOutlineMail } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";
// import { FiLogIn } from "react-icons/fi";

// export default function Footer(){
//     return(
//         <div className="bg-slate-600   h-[450px] w-full">
             
//              <div className="flex-center gap-20">

//                 <div className="flex-column gap-5 w-60">
                    
//                     <div>

//                         <Image src={LogoImg} alt='logoschool' />

//                     </div>

//                     <div className="text-start">

//                         <p>Little Genius TechSchool is a Part of The Islamic Group, and focuses on providing Affordable Educational Solutions Pan-Pakistan.</p>

//                     </div>

//                     <div className="flex-center gap-2">

//                         <FaFacebook  className="size-5  bg-blue-700"/>
//                         <FaInstagram  className="size-5 bg-orange-700"/>
//                         <FaYoutubeSquare  className="size-5 text-red-700"/>
//                         <FaTwitter  className="size-5 bg-blue-700"/>


//                     </div>
                    
                    

//                 </div>

//                 <div className="flex-column gap-5">

//                     <div className="  ">
                        
//                         <h1>Contact Us</h1>
//                     </div>

//                     <div className="flex-column ">

//                         <div className="flex-center  gap-3">

//                             <FaPhoneAlt  className="size-5 text-green-700"/>
//                             <h1>Phone</h1>

//                         </div>
                        
//                         <li>+92 9000 123 789</li>
//                         <li>+92 9000 456 789</li>

//                     </div>

//                     <div className="flex-column">

//                         <div className="flex-center gap-3">

//                             <MdOutlineMail  className="size-5 text-orange-700"/>
//                             <h1>Email</h1>

//                         </div>

//                         <Link href='/abc'>info@littlegeniustechschool.com</Link>
                        
//                     </div>
//                     <div className="flex-column">

//                         <div className="flex-center gap-3 ">

//                             <FaLocationDot  className="size-5 text-red-700"/>
//                             <h1>Head Office</h1>

//                         </div>

//                         <p> Plot No 50 Main Bulevourd Lahore</p>
                        
//                     </div>
                    
//                 </div>

//                 <div className="flex-column pb-24">
                    
//                     <h1 className="py-10">Useful Links</h1>
                    
//                     <div className="flex-column gap-3 ">

//                         <Link href='/about' >About</Link>
//                         <Link href='/abc' >Our Programs</Link>
//                         <Link href='/about' >Blog</Link>
//                         <Link href='/about' >Contact</Link>
//                         <Link href='/about' >Franchise</Link>

//                     </div>

//                 </div>

//                 <div className="flex-column gap-5 pb-28">

//                     <h1 >Important Resources</h1>
//                     <div className=" flex-column gap-3 py-5 " >

//                         <div className="flex-center gap-3">

//                         <FaTicketAlt/>
//                         <Link  href="/abc" >Raise a Ticket </Link> 

//                     </div>

//                     <div className="flex-center gap-3">

//                         <FiLogIn />
//                         <Link  href="/login" >School Login </Link> 

//                     </div>

//                     <div className="flex-center gap-3">

//                         <FaBook />
//                         <Link  href="/abc" >Book Centers </Link> 

//                     </div>


//                     </div>
                    
//                 </div>



//              </div>

//         </div>
    
//     )
// }