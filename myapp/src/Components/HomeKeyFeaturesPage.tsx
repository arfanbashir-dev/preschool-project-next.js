import Image from "next/image"
import Img1 from '../../public/SchoolPics/one.jpg';

export default function HomeKeyFeaturePage(){
    return(

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-10">
            <div className="container1 text-center md:text-left">
                <h1 className="text-xl font-semibold">Faith</h1>
                <p>We build strong faith and self-confidence in our pupils</p>
            </div>

            <div className="container1">
                <Image src={Img1} alt='about-image' className="h-48 w-auto rounded-lg object-cover" />
            </div>

            <div className="container1 text-center md:text-left">
                <h1 className="text-xl font-semibold">Unity</h1>
                <p>Students learn team management and leadership qualities</p>
            </div>
        </div>
        
    )
}





// import Image from "next/image"
// import Img1 from '../../public/SchoolPics/one.jpg';

// export default function HomeKeyFeaturePage(){
//     return(
//         <div className="bg-medium p-10">

//             <div className="flex flex-col items-center ">
//                 <h1>Key Features</h1>
//                 <p>Your Future Journey</p>
//             </div>
//             <div className=" flex-between mt-10   ">

//                 <div className="container1 ">

//                     <h1 className="ml-[30%]">Faith</h1>
//                     <br />
//                     <p className="text-center">We build strong faith and self confidence in our pupils</p>

//                 </div>
//                 <div className="container1">
                    
//                     <Image src={Img1} alt='about-image'  className="h-64 rounded-lg" />
//                 </div>
//                 <div className="container1">
//                     <h1 className="ml-[30%]">Unity</h1>
//                     <br />
//                     <p className="text-center">Students learn team managment and leadership qualities</p>
                    
//                 </div>
//             </div>

//         </div>
//     )
// }