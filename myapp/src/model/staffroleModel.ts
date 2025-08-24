import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IStaff extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
}

const staffSchema = new Schema<IStaff>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  { collection: "staffrecord", timestamps: true }
);

const StaffModel: Model<IStaff> =
  mongoose.models.Staff || mongoose.model<IStaff>("Staff", staffSchema);

export default StaffModel;




// import mongoose, { Schema, Document, Model } from 'mongoose';

// export interface IStaff extends Document { 
  
//   name: string,  email: string;  password: string;  role: string;

// }

// // Base schema for all grades
// const staffSchema = new Schema<IStaff>(
//   {
//     name: { type: String, required: false },
//     email: { type: String, required: true },
//     password: { type: String, required: true },
//     role: { type: String, required: true },
    
//   },
//   { collection: "staffrecord" , timestamps: true }
// );

// // Dynamic model getter
// const getStaffModel = (role: string): Model<IStaff> => {
//   const collectionName = role.replace(/\s+/g, '').toLowerCase(); 
//   return mongoose.models[collectionName] || mongoose.model<IStaff>(collectionName, staffSchema, collectionName);
// };

// export default getStaffModel;
