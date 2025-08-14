import Image from 'next/image';
import LogoImg from '../../public/logopreschool.png';

export default function HomeVideoPage() {
  return (
    <div className="pt-20 pb-10">
      <div className="relative w-full h-screen overflow-hidden opacity-80">
        {/* Background Video */}
        <video
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/video/video2.mp4" type="video/mp4" />
        </video>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 text-white text-center md:text-left">
            {/* Logo */}
            <Image
              src={LogoImg}
              alt="logo"
              className="w-40 sm:w-56 md:w-72 lg:w-96 h-auto"
            />

            {/* Text */}
            <div>
              <h1 className="opacity-50 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
                Always
              </h1>
              <h1 className="opacity-70 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
                Prepared
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






// import Image from 'next/image';
// import LogoImg from '../../public/logopreschool.png'

// export default function HomeVideoPage() {
//   return (
//     <div className='pt-32 pb-10'>
//     <div className="relative w-full h-screen overflow-hidden opacity-80   ">
      
//         <video   loop   muted    playsInline
//           className="absolute top-0 left-0 w-full  object-cover">
//           <source src='/video/video2.mp4' type="video/mp4" />
        
//         </video>

      
//         <div className="relative z-10 flex-center h-full">
        
//             <div className="flex-between   text-white    ">
//                     <Image src={LogoImg} alt='logo' className='w-96' />
//                     <div>
                   
//                       <h1 className='opacity-50 text-7xl'>Always </h1> 
//                       <h1 className='opacity-70 text-7xl'> Prepared</h1>

//                     </div> 
                  
//             </div>

//         </div>

//     </div>
//     </div>
//   );
// }
