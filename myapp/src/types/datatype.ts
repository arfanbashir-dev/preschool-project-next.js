export interface IUser {
  _id?: string; name: string,  email: string;  password: string;  role: string;
}


export interface IStudent  {
  _id?: string;  name: string;  fatherName: string;  grade: string;  image?: string;
}


export interface IAdmission {
  _id?: string;            img: string;             firstname: string;   lastname: string;  
  date_of_birth: string;   grade: string;           gender: string;      religion: string;  
  language: string;        address: string;         fathername: string;  mothername: string;  
  father_contact: string;  mother_contact: string;  father_nicn: string;  mother_nicn: string;
  father_occupation: string;  job_designation: string;
}
