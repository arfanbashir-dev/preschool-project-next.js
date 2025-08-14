export default function HomeSchoolInfoPage() {
  return (
    <section className="text-black bg-white p-6 md:p-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-10">Why People Choose Us</h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center bg-gray-100 rounded-lg p-6">
            <h1 className="text-3xl md:text-4xl font-bold">50+</h1>
            <h2 className="text-sm md:text-lg">Trending Courses</h2>
          </div>

          <div className="flex flex-col items-center bg-gray-100 rounded-lg p-6">
            <h1 className="text-3xl md:text-4xl font-bold">75+</h1>
            <h2 className="text-sm md:text-lg">Online Courses</h2>
          </div>

          <div className="flex flex-col items-center bg-gray-100 rounded-lg p-6">
            <h1 className="text-3xl md:text-4xl font-bold">75+</h1>
            <h2 className="text-sm md:text-lg">Projects</h2>
          </div>

          <div className="flex flex-col items-center bg-gray-100 rounded-lg p-6">
            <h1 className="text-3xl md:text-4xl font-bold">500+</h1>
            <h2 className="text-sm md:text-lg">Expert Teachers</h2>
          </div>
        </div>
      </div>
    </section>
  );
}



// export default function HomeSchoolInfoPage(){
//     return(
//         <section className="section-4  text-black bg-white p-20">
//             <div className="box-2">
//                 <div className="heading2">
//                   <h1>Why People Choose Us</h1>
//                 </div>
                
//                 <div className="box-list">
                
//                   <div className="inner-list">
//                     <h1>50+</h1>
//                     <h2>Trending Courses</h2>
//                   </div>
                
//                   <div className="inner-list">
//                     <h1>75+</h1>
//                     <h2>Online Courses</h2>
//                   </div>
                
//                   <div className="inner-list">
//                     <h1>75+</h1>
//                     <h2>Projects</h2>
//                   </div>
                
//                   <div className="inner-list">
//                     <h1>500+</h1>
//                     <h2>Expert Teacher</h2>
//                   </div>
                
//                 </div>

//             </div>
//         </section>

//     )
// }