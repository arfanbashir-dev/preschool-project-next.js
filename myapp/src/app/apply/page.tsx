
import Link from 'next/link';
// import Image from 'next/image';

export default function ApplyFunc() {
  return (
    <div className=''>

    <div className='bg-gray-800  pt-32  '>

      
      <div className='flex-center gap-10  h-16 '>

          <Link href="/loginstudent">Student Login</Link>
          <Link href="/registerstudent">Student Registeration Form</Link>          
          <Link href="/admissionform">Student Addmission Form</Link>

      </div>
      <div>

      </div>


      <div>
        
        <div className="flex-center p-10">
            <div>
                <video   loop autoPlay playsInline  className=" w-full   rounded-lg ">
                    <source  src='/video/video1.mp4' type="video/mp4" />
                </video>
            </div>
            
        </div>
            
        




      </div>

      
    </div>
    </div>
  );
}
