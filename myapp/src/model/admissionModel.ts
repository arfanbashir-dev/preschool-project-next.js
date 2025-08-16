import mongoose, { Schema } from 'mongoose';
import { IAdmission } from '@/types/datatype';

// Base schema for all grades
const admissionSchema = new Schema<IAdmission>(
  {
    img: {  type: String,  required: false,  },

    firstname: { type: String,   required: true,   trim: true,
      match: [/^[A-Za-z\s]+$/, "Name can only contain alphabets and spaces"],
    },

    lastname: { type: String,  required: true , trim: true,
      match: [/^[A-Za-z\s]+$/, "Father Name can only contain alphabets and spaces"],
    },

    date_of_birth: { type: String,  required: true,  },

    grade: { type: String, required: [true, "Grade is required"],
      enum: ["preschool", "reception", "preprep", "prep"],
    },
    gender: { type: String, required: true },

    religion: { type: String, required: true },
    
    language: { type: String, required: true },
    
    address: { type: String, required: true },
    
    fathername: { type: String, required: true ,
      match: [/^[A-Za-z\s]+$/, "Father Name can only contain alphabets and spaces"],
    },
    
    mothername: { type: String, required: true ,
      match: [/^[A-Za-z\s]+$/, "Mother Name can only contain alphabets and spaces"],
    },
    
    father_contact: { type: String, required: true },
    
    mother_contact: { type: String, required: true },
    
    father_nicn: { type: String, required: true },
    
    mother_nicn: { type: String, required: true },
    
    father_occupation: { type: String, required: true },
    
    job_designation: { type: String, required: true },
    
  },

  { collection: "admissionstudentrecord" , timestamps: true }
  
  
);

export default mongoose.models.AdmissionStudentModel ||  mongoose.model<IAdmission>("AdmissionStudentModel", admissionSchema);


