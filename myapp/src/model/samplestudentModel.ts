import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
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
    enum: ["Preschool", "Grade 1", "Grade 2", "Grade 3"], // example
  },
});

export default mongoose.models.StudentModel || mongoose.model("StudentModel", studentSchema);
