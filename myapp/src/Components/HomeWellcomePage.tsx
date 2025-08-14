import Image from "next/image";
import Img3 from '../../public/Photoes/pic3.jpg';

const HomeWellComePage = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8 px-4 sm:px-6 md:px-12 py-10 bg-medium">
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Welcome to Little Genius TechSchool
        </h1>
        
        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
          Rated Excellent in all areas by the ISI in January 2023, 
          Little Genius TechSchool is a small independent Day School and 
          Preschool in Pakistan for girls and boys from 3 -11 years old. 
        </p>

        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
          We are an inclusive, friendly, family-feel school which nurtures excellence in 
          a diverse culture. We promote and celebrate wellbeing 
          alongside academic attainment.
        </p>

        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
          At Little Genius TechSchool we see and develop the potential in every child.
          Our children engage enthusiastically with knowledge, embrace new ideas and 
          are intellectually stimulated and extended beyond their age, resulting in 
          excellent academic outcomes and confident independent learners.
        </p>

        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
          We would be delighted to talk to you about our wonderful school and
          share with you what a Little Genius TechSchool education has to offer
          your child.
        </p>

        <div className="mt-6">
          <button className="px-5 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800">
            Gallery
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={Img3}
          alt="Image"
          className="w-full max-w-lg rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default HomeWellComePage;





// import Image from "next/image"

// import Img3 from '../../public/Photoes/pic3.jpg'
// // import ApplyForm from "@/Components/ApplyForm"

// // export default function WellComePage(){
// const HomeWellComePage = () => {

//     return(
//         <div className="flex-center p-12 bg-medium">

//             <div className="text-left">

//                 <h1>  Welcome to Little Genius TechSchool</h1> 
//                 <br/>
//                 <br/>
//                 <p> 
//                     Rated Excellent in all areas by the ISI in January 2023, 
//                     Little Genius TechSchool is a small independent Day School and 
//                     Preschool in Pakistan for girls and boys from 3 -11 years old. 
//                 </p>
//                 <br/>
                
//                 <p>

//                     We are an inclusive, friendly, family-feel school which nurtures excellence in 
//                     a diverse culture. We promote and celebrate wellbeing 
//                     alongside academic attainment.
//                 </p>
//                 <br/>
                
//                 <p>

//                     At Little Genius TechSchool we see and develop the potential in every child.
//                     Our children engage enthusiastically with knowledge, embrace new ideas and 
//                     are intellectually stimulated and extended beyond their age, resulting in 
//                     excellent academic outcomes and confident independent learners.
//                 </p>
//                 <br/>
                
//                 <p>
//                     We would be delighted to talk to you about our wonderful school and
//                     share with you what a Little Genius TechSchool education has to offer
//                     your child.
//                 </p>
                
//                 <div className=" mt-10">
                        
//                         <button>Galary</button>
//                 </div>
                    
                
                

//             </div>
            
//             <div className="img-left">

//                 <Image src={Img3} alt="Image" className="w-[950px]  rounded-lg "/>

//             </div>

            

//         </div>
//     )

// }

// export default HomeWellComePage;