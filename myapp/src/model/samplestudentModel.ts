import mongoose, { Schema } from "mongoose";
import { IStudent } from "@/types/datatype";


const studentSchema = new Schema<IStudent>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      match: [/^[A-Za-z\s]+$/, "Name can only contain alphabets and spaces"],
    },
    fatherName: {
      type: String,
      required: [true, "Father Name is required"],
      trim: true,
      match: [/^[A-Za-z\s]+$/, "Father Name can only contain alphabets and spaces"],
    },
    grade: {
      type: String,
      required: [true, "Grade is required"],
      enum: ["Preschool", "Grade 1", "Grade 2", "Grade 3"],
    },
    image: {
      type: String,
      required: false,
    },
  },
  { collection: "studentrecord" }
);

export default mongoose.models.StudentModel ||  mongoose.model<IStudent>("StudentModel", studentSchema);




// import mongoose from "mongoose";

// export interface IStudent {
//   id?: string;
//   name: string;
//   fatherName: string;
//   grade: string;
//   image?: string;
// }

// const studentSchema = new mongoose.Schema<IStudent>(
//   {
//     name: {
//       type: String,
//       required: [true, "Name is required"],
//       trim: true,
//       match: [/^[A-Za-z\s]+$/, "Name can only contain alphabets and spaces"],
//     },
//     fatherName: {
//       type: String,
//       required: [true, "Father Name is required"],
//       trim: true,
//       match: [/^[A-Za-z\s]+$/, "Father Name can only contain alphabets and spaces"],
//     },
//     grade: {
//       type: String,
//       required: [true, "Grade is required"],
//       enum: ["Preschool", "Grade 1", "Grade 2", "Grade 3"],
//     },
//     image: {
//       type: String,
//       required: false, // Will store Base64 string or file URL
//     },
//   },
//   { collection: "samplestudentrecord" } // ✅ No extra space
// );

// export default mongoose.models.Student || mongoose.model<IStudent>("Student", studentSchema);








// import mongoose from "mongoose";

// export interface IStudent extends Document {
//   name: string;
//   fatherName: string;
//   grade: string;
//   image?: string;
// }




// const studentSchema = new mongoose.Schema<IStudent>(
//     {
//         name: 
//         { 
//           type: String,   required: [true, "Name is required"],  trim: true,
//           match: [/^[A-Za-z\s]+$/, "Name can only contain alphabets and spaces"],
//         },
     
//         fatherName: 
//         { 
//           type: String, required: [true, "Father Name is required"], trim: true,
//           match: [/^[A-Za-z\s]+$/, "Father Name can only contain alphabets and spaces"],
//         },
     
//         grade: 
//         { 
//           type: String,  required: [true, "Grade is required"],
//           enum: ["Preschool", "Grade 1", "Grade 2", "Grade 3"], // example
//         },
     
//         image: 
//         {  type: String,  required: false,  },  // Will store Base64 string 
  
//     },
//     { collection: "samplestudentrecord " }

// );

// export default mongoose.models.StudentModel || mongoose.model<IStudent>("StudentModel", studentSchema);
