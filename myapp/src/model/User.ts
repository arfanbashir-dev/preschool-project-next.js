import mongoose, { Schema} from 'mongoose';

import { IUser } from '@/types/datatype';

const UserSchema = new Schema<IUser>(
  {
    name:     { type: String, required: true, unique: true },
    email:    { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role:     { type: String, enum: ['user', 'admin'], default: 'user' }
  },
  { collection: "users" , timestamps: true }
);

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
