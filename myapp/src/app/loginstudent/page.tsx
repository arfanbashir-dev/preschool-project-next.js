'use client'

import { useState } from 'react';
import Link from "next/link"

import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'; 

export default function LoginFunc(){

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {setShowPassword((prev) => !prev);}
    
    return(
        <div className="pt-32 ">
                
            <div className='flex-center gap-10 bg-medium h-16 '>

                    
                    <Link href="/registerstudent">Student Registeration Form</Link>          
                    <Link href="/admissionform">Student Addmission Form</Link>

            </div>
            
            <div className="container-login  h-screen  rounded-lg flex-center py-20 bg-white text-black">
                

                    
                <form action="" className="rounded-lg  bg-[#eeeeee]">                               

                    

                    <div className="m-5 flex-column items-center ">
                    
                        
                        <div className="flex-column gap-4 p-10">

                            <label htmlFor="" className="w-96 ">Username or Email</label>                        
                            <input type="text" id="" className="w-96" placeholder="Enter your email" />

                        </div>  

                        <div className="flex-column  gap-4 p-10">              

                            <label htmlFor="" className="w-96">Password</label>                        
                            
                            <div className='relative inline-block'>
                                
                                <input  className='px-8 w-96' placeholder="Enter your password"  
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}   onChange={(e) => setPassword(e.target.value)}                                      
                                          
                                />
                                <button     type="button"  className="absolute  right-[16px] top-1/2 -translate-y-1/2 w-4 border-none cursor-pointer"
                                            onClick={togglePasswordVisibility}                                           
                                >
                                    {showPassword ? <RiEyeFill  /> : <RiEyeOffFill   />}
                                </button>
                            </div>

                        </div>
                    
                        <div className="flex-center">
                            <input type="radio" className='w-8' />
                            <p>Keep me signed in </p>
                        </div>
                        
                        <div className="flex-center gap-5 py-10">                       

                            <button type="submit">Login</button>
                            <button><Link href="/abc">Register</Link></button>
                        </div>
                        
                        <div className="flex-center py-10">

                            <Link href="/abc" className="">Forgot Password ?</Link>

                        </div>

                        <div>    
                            <p>If you have already registered to any other branch, please use the same login details to access this site.</p>

                        </div>

                        


    

    
        
                        
                        

                    </div>

                    
                    
                </form>
                

            </div>
            
        </div>

    )
}