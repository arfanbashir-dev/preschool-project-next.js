
import HomeVideoPage from "./HomeVideoPage"
import HomeWellComePage from "./HomeWellcomePage"
import HomeDetailPage from "./HomeDetailPage"
import HomeKeyFeaturePage from './HomeKeyFeaturesPage'
import HomeSchoolInfoPage from './HomeSchoolInfoPage'
import HomeFacilitiesPage from './HomeFacilitiesPage'
import HomeMenuPage from './HomeMenuPage'
// import ApplyForm from "@/Components/ApplyForm"


export{   
          
    HomeVideoPage,
    HomeWellComePage,
    HomeDetailPage,
    HomeKeyFeaturePage,
    HomeSchoolInfoPage,
    HomeFacilitiesPage ,
    HomeMenuPage, 

     
}
















// import clientPromise from '@/app/lib/mongodb';
// import StudentList from '@/app/Components/StudentList';

// export default async function HomePage() {
//   const client = await clientPromise;
//   const db = client.db();
//   const students = await db.collection('students').find().sort({ _id: -1 }).toArray();

//   const cleaned = students.map((s) => ({
//     _id: s._id.toString(),
//     name: s.name,
//     email: s.email,
//   }));

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4">All Students</h1>
//       <StudentList students={cleaned} />
//     </div>
//   );
// }
