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



