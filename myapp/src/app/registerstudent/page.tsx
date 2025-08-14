'use client'
import Link from "next/link"
import { useState } from "react"
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'; 

export default function RegisterFunc(){

    
    const [message, setMessage] = useState('');

    const [form,setForm] = useState({
        
        username:'', 
        first_name:'',
        last_name:'',
        email:'', 
        phone:'',
        password:'',
        confirm_password:'',
        // confirmation:'',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setForm({...form, [e.target.name]:e.target.value})
    };

    const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {

        e.preventDefault();

        const res = await fetch('/api/register', {method: 'Post' , body: JSON.stringify(form)});

        const data = await res.json();

        setMessage(data.success? 'You are registered now' : ' Form is not filled properly ');

        setForm({
        
            username:'', 
            first_name:'',
            last_name:'',
            email:'', 
            phone:'',
            password:'',
            confirm_password:'',
            // confirmation:'',
        });

    }

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {setShowPassword((prev) => !prev);}

    return(

        <div className="pt-32 ">
            
            <div className='flex-center bg-medium gap-10 h-16 font-bold '>

                <Link href="/loginstudent">Student Login</Link> 
                <Link href="/admissionform">Student Addmission Form</Link>

            </div>
            
            <div className="bg-white py-20">
            
                <div className="container-login  flex-column w-[900px] h-auto bg-[#eeeeee] text-black ml-[20%] rounded-lg px-6">
                
                        <div className=" [&_.child]:py-8  ">

                            <h1 className="child ml-[30%] font-bold">Register for an account</h1>
                            <p >If you have already registered to any other Little Genius TechSchool, please go to the login page and use the same login details to access this site.</p>
                            <p className="child">* indicates required fields</p>
                            <p className="child">Please fill in the form below to register for an account on this website.</p>

                        </div>

                
                
                    <form onSubmit={handleSubmit} className=" px-6 [&_.child]:py-5  ">


                        {/* <div className=" child"> */}
                        
                        <div className="flex-column py-5">

                            <label htmlFor="username-id" className="w-44 font-bold">Username*</label>
                            {/* <p>Your username can only contain lowercase letters and numbers. Please do not use space or any other special characters.</p> */}
                            <input type="text" id="username-id" className="w-[830px]" 
                                placeholder="Please enter your username you want to choose" 
                                name='username' value={form.username} onChange={handleChange}    
                            />

                        </div>

                        {/* </div> */}

                        
                        <div className="flex-column py-5">
                            
                            <div>
                                <label htmlFor="" className="font-bold"> Name</label>
                            </div>
                            
                            <div  className="flex-between gap-16">
                        
                                <div className="flex-column ">
                                    
                                    <input type="text" id="firstname-id" className="w-96" 
                                        placeholder="First name" 
                                        name='first_name' value={form.first_name} onChange={handleChange}
                                    />
                                    <label htmlFor="firstname-id" className="w-44 font-normal">First</label>

                                </div>

                                <div className="flex-column ">
                                    
                                    <input type="text" id="lastname-id" className="w-96" 
                                        placeholder="Last name" 
                                        name='last_name' value={form.last_name} onChange={handleChange}
                                    />
                                    <label htmlFor="lastname-id" className="w-44 font-normal">Last</label>

                                </div>

                            </div>
                        </div>

                        <div className="flex-between gap-16 child">

                            <div className="flex-column">

                                <label htmlFor="email-id" className="w-44 font-bold">Email</label>
                                <input type="email" id="email-id"   className="w-96" 
                                       placeholder="Please enter your email" 
                                       name='email' value={form.email} onChange={handleChange}
                                />

                            </div>

                            <div className="flex-column">
                                <label htmlFor="phone-id" className="w-44 font-bold">Mobile Number</label>
                                <input type="text" id="phone-id" className="w-96" 
                                    placeholder="Please enter you mobile number with city code" 
                                    name='phone' value={form.phone} onChange={handleChange}
                                />

                            </div>

                        </div>                       
                        
                        <div className="flex-column child">
                            
                            <div>
                                <label htmlFor="" className="font-bold">Password</label>
                            </div>
                            
                            <div  className="flex-between gap-16">

                                <div className="flex-column  ">

                                    <div className="relative inline-block">

                                        <input  type={showPassword ? 'text' : 'password'} 
                                            id="password-id" className="w-96" placeholder="Password" 
                                            name='password' value={form.password} onChange={handleChange}
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-[16px] top-1/2 -translate-y-1/2 w-0 border-none cursor-pointer"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
                                        </button>

                                    </div>
                                    
                                    <label htmlFor="password-id" className="w-44 font-normal">Enter Password</label>

                                </div>
                            

                                <div className="flex-column ">
                                    
                                    <div className="relative inline-block">

                                        <input  type={showPassword ? 'text' : 'password'} 
                                            id="confirm-password-id" className="w-96" placeholder="Password" 
                                            name='confirm_password' value={form.confirm_password} onChange={handleChange}
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-[16px] top-1/2 -translate-y-1/2 w-0 border-none cursor-pointer"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
                                        </button>

                                    </div>
                                    <label htmlFor="confirm-password-id" className="w-44 font-normal">Confirm Password</label>

                                </div>

                            </div>
                        </div>

                        <div className="child">

                            <p>
                                Thank you for completing this form. We will use the information that 
                                you have provided to respond to your enquiry but we would also love to be able to 
                                tell you more about our wonderful school and the additional services we provide, 
                                such as holiday clubs and camps. We may contact you by email, post, telephone or 
                                other digital channels but we will never pass your details on to any third parties 
                                for their own external marketing purposes. Would you like to hear from us?
                            </p>

                        </div>
                        
                        <div className="  child">
                            
                            <input id="yes" type="radio"  className="w-8" />
                            <label htmlFor="yes"> Yes</label>
                        </div>

                        <div className=" child">

                            <input id="no" type="radio"  className="w-8" />
                            <label htmlFor="no"> No</label>
                            

                        </div>

                        <div className="  py-10">
                        
                            <input id="policy" type="radio"  className="w-8" />
                            <label htmlFor="policy">I agree to the privacy policy.* </label>

                        </div>

                        <div className="flex-center child">                         

                            <button type="submit" className="w-96">Submit</button>

                        </div>                      
                         

                    </form> 
                    {message && <p className="mt-4 text-black">{message}</p>}
 
                </div>
            </div>
        </div>
            
        
    )
}           