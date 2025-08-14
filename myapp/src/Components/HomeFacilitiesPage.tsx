import Image from "next/image";
import Imgbuilding from '../../public/Photoes/schoolbuilding.jpg'

export default function HomeFacilityPage() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 p-5 md:p-10">
      
      {/* Image */}
      <div className="w-full md:w-1/2">
        <Image 
          src={Imgbuilding}  
          alt="schoolbuilding" 
          className="w-full h-auto rounded-lg object-cover"
          priority
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-2xl font-bold">Facilities</h1> 
        <h2 className="text-lg">Situated in the south of Lahore near green lands.</h2>
        
        <p>
          The school provides a fantastic range of facilities to enhance pupils’ learning and experience. 
          We have bright and well-resourced classrooms, complete with an ICT suite, dedicated Art and 
          Design studio, music room, library and a fully equipped science laboratory.
        </p>

        <p>
          A large playground and outside classroom give pupils much needed 
          space for play and outdoor learning. With a planting area, amphitheatre,
          Astroturf football and netball pitch and giant chess board, playtimes are 
          full of fun at Little Genius TechSchool.
        </p>

        <p>
          Besides using the wonderful playground for sports and PE lessons,
          the school also makes use of fabulous local facilities such as Poolside 
          Manor Swimming Pool and Power League.
        </p>
      </div>
    </div>
  )
}





// import Image from "next/image";
// import Imgbuilding from '../../public/Photoes/schoolbuilding.jpg'
// export default function HomeFacilityPage(){
//     return(
//         <div className="flex-center gap-10 p-10 ">
//             <div className="img">

//                 <Image src={Imgbuilding}  alt="schoolbuilding" className="w-[900px] rounded-lg"/>

//             </div>
//             <div>
//                 <h1>Facilities</h1> 
//                 <br />
//                 <h1>Situated in the south of Lahore near green lands. </h1>
//                 <br />
//                 <p>
//                     The school provides a fantastic range of facilities to enhance pupils’ learning and experience. 
//                     We have bright and well-resourced classrooms, complete with an ICT suite, dedicated Art and 
//                     Design studio, music room, library and a fully equipped science laboratory.
//                 </p>

//                 <p>
//                     A large playground and outside classroom give pupils much needed 
//                     space for play and outdoor learning. With a planting area, amphitheatre,
//                     Astroturf football and netball pitch and giant chess board, playtimes are 
//                     full of fun at Little Genius TechSchool.

//                 </p>
//                 <p>
//                     Besides using the wonderful playground for sports and PE lessons,
//                     the school also makes use of fabulous local facilities such as Poolside 
//                     Manor Swimming Pool and Power League.
//                 </p>

//             </div>
//         </div>
//     )
// }