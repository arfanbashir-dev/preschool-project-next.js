import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string,
  email: string;
  password: string;
  role: string;
}

const UserSchema = new Schema<IUser>({
  name:     { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role:     { type: String, enum: ['user', 'admin'], default: 'user' }
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
