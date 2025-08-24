'use client';

import { useState, ChangeEvent, FormEvent } from "react";
import Image from 'next/image';
import Link from "next/link";

export default function AdmissionForm() {
  
    const [message, setMessage] = useState('');

    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const [form, setForm] = useState({ 
        firstname: '',   lastname: '',    date_of_birth: '',     grade: '',   img: '',    
        gender: '',      religion: '',    language: '',          address: '',
        fathername: '',  mothername: '',  father_contact: '',    mother_contact: '', 
        father_nicn: '', mother_nicn: '', father_occupation: '', job_designation: '',
    });

    const handleChange = ( e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {  
        // if (!form) return;
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => { e.preventDefault();
        
        setMessage("");
    
        try {
            const res = await fetch('/api/admissionstudent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || 'Failed to submit form');

            setMessage('Student added successfully!');
            setForm({ 
              firstname: '',    lastname: '',     date_of_birth: '',      grade: '',  img: '',    
              gender: '',       religion: '',     language: '',           address: '',
              fathername: '',   mothername: '',   father_contact: '',     mother_contact: '', 
              father_nicn: '',  mother_nicn: '',  father_occupation: '',  job_designation: '',
            });

          setImagePreview(null);
        } catch (error) {
          setMessage(error instanceof Error ? error.message : 'An error occurred');
        }
    };
  
    

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    
      const file = e.target.files?.[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = reader.result as string;
                setForm({ ...form, img: base64 });
                setImagePreview(base64);
            };
            reader.readAsDataURL(file);
        }    
    }
    

    return( 


        <div className="pt-32 ">
            
            <div className='flex-center bg-medium gap-10 h-16 font-bold '>

                <Link href="/loginstudent">Login</Link>
                <Link href="/registerstudent">Register</Link>          
                

            </div>
            
            <div className="bg-white py-20">
            
                <div className="container-login  flex-column w-[900px] h-auto bg-[#eeeeee] text-black ml-[20%] rounded-lg px-6">
                
                                      
                
                    <form onSubmit= {handleSubmit} className=" px-6 [&_.child]:py-5  ">


                        <h1 className="font-bold ml-[30%] child">Admission Form</h1>
                        
                        <div className="flex-between p-10">

                            <div>
                                {/* <h1>some text here</h1> */}
                            </div>
                            
                            
                            <div className=" border-2 border-black w-60 h-60  flex-column ">                                
                                
                                <div className="relative w-full h-full  flex items-center justify-center bg-gray-200 ">
                                    {imagePreview ? (
                                    
                                    <Image  className="object-contain rounded"
                                        src={imagePreview}  alt="Preview"  width={150}  height={150}  />

                                    ) : ( <p className="text-sm text-gray-600">No image selected</p>
                                    )}
                                </div>                                
                                <div >                                    
                                    <input type="file" name='myimg' accept="image/*" className='w-full'
                                        onChange={handleImageChange}
                                    />
                                </div>                             

                            </div>
                            

                        </div>                     
                        

                        <div className="flex-between gap-16 child">

                            <div className="flex-column">

                                <label htmlFor="first-name" className="w-44 font-bold">First Name</label>
                                <input id="first-name" type="text" name='firstname' 
                                    value={form.firstname}  className="w-96"
                                    placeholder="Please enter your first name"
                                    onChange={handleChange} 
                                />
                                <p>Name must contain alphabets only </p>

                            </div>

                            <div className="flex-column">
                                
                                <label htmlFor="last-name" className="w-44 font-bold">Last Name</label>
                                <input id="last-name" type="text" name='lastname' 
                                    value={form.lastname}  className="w-96"
                                    placeholder="Please enter your last name"
                                    onChange={handleChange} 
                                />
                                <p>Name must contain alphabets only </  p>

                            </div>
                            

                        </div>

                        <div className="flex-between gap-16 child">

                            <div className="flex-column">

                                <label htmlFor="date" className="w-44 font-bold">Date of Birth</label>
                                <input id="date" type="date" name='date_of_birth' 
                                    value={form.date_of_birth}  className="w-96"
                                    placeholder="Please enter your first name"
                                    onChange={handleChange} 
                                />

                            </div>
                            <div className="flex-column child">

                                <label htmlFor="grade" className="w-44 font-bold">Grade</label>
                                <select  id="grade" name="grade"  className="w-96" 
                                    value={form.grade} onChange={handleChange} >
                                    <option value=""  disabled>Select your grade </option>
                                    <option value="preschool">Pre School</option>
                                    <option value="reception">Reception</option>
                                    <option value="preprep">Pre Prep</option>
                                    <option value="prep">Prep</option>
                                </select>

                            </div>


                            

                        </div>
                        
                        
                        <div className="flex-column py-5">
                            
                            <div>
                                <label htmlFor="" className="font-bold">Gender</label>
                            </div>
                            
                            <div  className="flex-between gap-16">
                        
                                <div className="flex-column ">
                                    
                                    <div className="gender w-96">
                                        <input  id="malegender" type="radio" value='male' name='gender' className="w-8 "  
                                                 onChange={handleChange}        
                                        />
                                        <label htmlFor="malegender" className=" w-8" >Male</label>
                                    </div>

                                </div>

                                <div className="gender w-96 ">
                                    
                                    <div className="gender w-96">
                                        <input  id="femalegender" type="radio" value='female' name='gender' className="w-8"  
                                                 onChange={handleChange}        
                                        />
                                        <label htmlFor="femalegender" className=" w-8" >Female</label>
                                    </div>

                                </div>

                            </div>
                        </div>
 
 
                        <div className="flex-between gap-16 child">

                            <div className="flex-column">

                                <label htmlFor="relegion" className="w-44 font-bold">Religion</label>
                                <input id="relegion" type="text" name='religion' 
                                    value={form.religion}  className="w-96"
                                    placeholder="Please enter your relegion"
                                    onChange={handleChange} 
                                />


                            </div>

                            <div className="flex-column">
 
                                <label htmlFor="language" className="w-44 font-bold">Language</label>
                                <input id="language" type="text" name='language' 
                                    value={form.language}  className="w-96"
                                    placeholder="Please enter your first language"
                                    onChange={handleChange} 
                                />


                            </div>

                        </div>

                        <div className="flex-column gap-5 child">

                            <label htmlFor="address" className="w-44 font-bold">Address</label>
                                <input id="address" type="text" name='address' 
                                    value={form.address}  className="w-[500px]"
                                    placeholder="Please enter your address"
                                    onChange={handleChange} 
                                />

                        </div>

                        <div className="child ">
                            <ul className="">
                                <li>Child should be 3 yrs for Pre School</li>
                                <li>Child should be 4 yrs for Reception</li>
                                <li>Child should be 5 yrs for Pre Prep</li>
                                <li>Child should be 6 yrs for Prep</li>
                                
                            </ul>
                        
                        </div>   

                        <div className="child">
                            <h1 className="font-bold px-[30%]">Family Information</h1>
                        </div>

                        <div className="flex-between gap-16 child">

                            <div className="flex-column">

                                <label htmlFor="father-name" className="w-44 font-bold">Father Name</label>
                                <input id="father-name" type="text" name='fathername' 
                                    value={form.fathername}  className="w-96"
                                    placeholder="Please enter your father name"
                                    onChange={handleChange} 
                                />
                                <p>Name must contain alphabets only </p>

                            </div>

                            <div className="flex-column">
                                
                                <label htmlFor="mother-name" className="w-44 font-bold">Mother Name</label>
                                <input id="mother-name" type="text" name='mothername' 
                                    value={form.mothername}  className="w-96"
                                    placeholder="Please enter your mother name"
                                    onChange={handleChange} 
                                />
                                <p>Name must contain alphabets only </p>

                            </div>
                            

                        </div>

                        <div className="flex-between gap-16 child">

                            <div className="flex-column">

                                <label htmlFor="father-contact" className="w-44 font-bold">Father Contact</label>
                                <input id="father-contact" type="text" name='father_contact' 
                                    value={form.father_contact}  className="w-96"
                                    placeholder="Please enter your father contact"
                                    onChange={handleChange} 
                                />

                            </div>

                            <div className="flex-column">
                                
                                <label htmlFor="mother-contact" className="w-44 font-bold">Mother Contact</label>
                                <input id="mother-contact" type="text" name='mother_contact' 
                                    value={form.mother_contact}  className="w-96"
                                    placeholder="Please enter your mother contact"
                                    onChange={handleChange} 
                                />

                            </div>

                        </div>
                                    
                        
                        <div className="child flex-between ">
                            <div className="flex-column">
                                <label htmlFor="father-nicn" className="w-44 font-bold">Father NICN</label>
                                <input id="father-nicn" type="text" name='father_nicn' 
                                    value={form.father_nicn}  className="w-96"
                                    placeholder="Please enter your father nicn"
                                    onChange={handleChange} 
                                />

                            </div>
                            <div className="flex-column">
                                <label htmlFor="mother-nicn" className="w-44 font-bold">Mother NICN</label>
                                <input id="mother-nicn" type="text" name='mother_nicn' 
                                    value={form.mother_nicn}  className="w-96"
                                    placeholder="Please enter your mother nicn"
                                    onChange={handleChange} 
                                />
                            </div>
                        </div>             
                        
                        <div className="child flex-between ">
                            <div className="flex-column">
                                <label htmlFor="father-occupation" className="w-44 font-bold">Father Occupation</label>
                                <input id="father-occupation" type="text" name='father_occupation' 
                                    value={form.father_occupation}  className="w-96"
                                    placeholder=""
                                    onChange={handleChange} 
                                />

                            </div>
                            <div className="flex-column">
                                <label htmlFor="job-designation" className="w-44 font-bold">Job Designation</label>
                                <input id="job-designation" type="text" name='job_designation' 
                                    value={form.job_designation}  className="w-96"
                                    placeholder=""
                                    onChange={handleChange} 
                                />
                            </div>
                        </div>             
                        
                        

                        <div className="  py-10">
                        
                            <input id="policy" type="checkbox"  className="w-8" />
                            <label htmlFor="policy">I agree to the privacy policy.* </label>

                        </div>

                        <div className="flex-center child">                         

                            <button type="submit" className="w-96">Send</button>

                        </div>                      
                         

                    </form> 
                    {message && <p className="mt-4 text-yellow-600">{message}</p>}
 
                </div>
            </div>
        </div>
            
        
    )

  
}
