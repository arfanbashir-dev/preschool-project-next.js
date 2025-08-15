import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAdmission extends Document {
  myimg: string;
  firstname: string;
  lastname: string;
  date_of_birth: string;
  grade: string;
  gender: string;
  religion: string;
  language: string;
  address: string;
  fathername: string;
  mothername: string;
  father_contact: string;
  mother_contact: string;
  father_nicn: string;
  mother_nicn: string;
  father_occupation: string;
  job_designation: string;
}

// Base schema for all grades
const admissionSchema = new Schema<IAdmission>(
  {
    myimg: { type: String, required: false },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    date_of_birth: { type: String, required: true },
    grade: { type: String, required: true },
    gender: { type: String, required: true },
    religion: { type: String, required: true },
    language: { type: String, required: true },
    address: { type: String, required: true },
    fathername: { type: String, required: true },
    mothername: { type: String, required: true },
    father_contact: { type: String, required: true },
    mother_contact: { type: String, required: true },
    father_nicn: { type: String, required: true },
    mother_nicn: { type: String, required: true },
    father_occupation: { type: String, required: true },
    job_designation: { type: String, required: true },
  },
  { timestamps: true }
);

// Dynamic model getter
const getAdmissionModel = (grade: string): Model<IAdmission> => {
  const collectionName = grade.replace(/\s+/g, '').toLowerCase(); // e.g., "Pre Prep" → "preprep"
  return mongoose.models[collectionName] || mongoose.model<IAdmission>(collectionName, admissionSchema, collectionName);
};

export default getAdmissionModel;
