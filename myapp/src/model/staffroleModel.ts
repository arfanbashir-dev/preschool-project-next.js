// import mongoose, { Schema, Document, Model } from 'mongoose';

// export interface IAdmission extends Document {
//   myimg: string;
//   firstname: string;
//   lastname: string;
//   date_of_birth: string;
//   grade: string;
//   gender: string;
//   religion: string;
//   language: string;
//   address: string;
//   fathername: string;
//   mothername: string;
//   father_contact: string;
//   mother_contact: string;
//   father_nicn: string;
//   mother_nicn: string;
//   father_occupation: string;
//   job_degination: string;
// }

// const admissionSchema = new Schema<IAdmission>(
//   {
//     myimg: { type: String, required: false },
//     firstname: { type: String, required: true },
//     lastname: { type: String, required: true },
//     date_of_birth: { type: String, required: true },
//     grade: { type: String, required: true, enum: ['preschool', 'reception', 'preprep', 'prep'] },
//     gender: { type: String, required: true, enum: ['male', 'female'] },
//     religion: { type: String, required: true },
//     language: { type: String, required: true },
//     address: { type: String, required: true },
//     fathername: { type: String, required: true },
//     mothername: { type: String, required: true },
//     father_contact: { type: String, required: true },
//     mother_contact: { type: String, required: true },
//     father_nicn: { type: String, required: true },
//     mother_nicn: { type: String, required: true },
//     father_occupation: { type: String, required: true },
//     job_degination: { type: String, required: true },
//   },
//   { timestamps: true, collection: 'reception' } // Fixed collection name
// );

// // Create single model instead of dynamic models
// const AdmissionModel = mongoose.models.Admission || 
//   mongoose.model<IAdmission>('Admission', admissionSchema);

// export default AdmissionModel;


import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IStaff extends Document { 
  // name: string;  email: string;  role: string;
  name: string,  email: string;  password: string;  role: string;
}

// Base schema for all grades
const staffSchema = new Schema<IStaff>(
  {
    name: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    
  },
  { timestamps: true }
);

// Dynamic model getter
const getStaffModel = (grade: string): Model<IStaff> => {
  const collectionName = grade.replace(/\s+/g, '').toLowerCase(); // e.g., "Pre Prep" → "preprep"
  return mongoose.models[collectionName] || mongoose.model<IStaff>(collectionName, staffSchema, collectionName);
};

export default getStaffModel;
