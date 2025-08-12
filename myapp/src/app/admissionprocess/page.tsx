'use client'
import Link from 'next/link'
import { motion } from 'framer-motion';

export default function AdmissionProcessFunc(){
    return(
        <div  className='pt-32 bg-light '>

            <div className=" px-20 py-10 bg-dark">

                <Link href='/'>Home</Link><span> / </span> <Link href='/admissionprocess' className='active:bg-blue-950'>Admission Process</Link>

            </div>
            
            
            <motion.div className="flex-center "
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.2 }} 
            >

                <div className='w-[750px] flex-column items-center gap-10 p-10' >
                    <h1 className=''>Joining us is straightforward</h1>
                    <p>Apply for a place at our exceptional school and give your child the best possible start to their educational journey. We have designed our admissions process to be as easy as possible and we will happily guide you every step of the way.</p>
                    <p>Children can join our Preschool class at the start of the term in which they turn 3 years old.</p>
                </div>
                

            </motion.div>            
            
            <div className='flex-column items-center '>
                <div  className='py-20'>
                    <h1> 5 Easy Step Process</h1>
                </div>
                
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0.2 }} 
                >
                    <div className='bg-medium w-[700px] h-52 flex-column items-center gap-5 rounded-xl p-5'>
                        <h1>Get in Touch</h1>
                        <p>Contact a member of our Admissions Team to find out more about our wonderful school and check availability.</p>
                        <button className='-ml-96'> <Link  href="/contact" >Contact</Link></button>
                    </div>
                </motion.div>
                
                <motion.div className='py-10'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}                    
                    transition={{ duration: 1 }}                    
                    viewport={{ once: false, amount: 0.2 }} 
                > 
                    <div className='bg-medium w-[700px] h-60 flex-column items-center gap-5 rounded-xl p-5'>
                        <h1>Visit Us</h1>
                        <p>We run open events and private tours throughout the academic year. Open events are a great opportunity to see the school in action, speak to our Senior Leadership Team, our Admissions Team and hear from current pupils.</p>
                        <button className='-ml-96'> <Link  href="/contact" >Book a Visit</Link></button>
                    </div>
                </motion.div>

                <motion.div className='py-10'
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}                    
                    viewport={{ once: false, amount: 0.2 }} 
                > 
                    <div className='bg-medium w-[700px] h-80 flex-column items-center gap-5 rounded-xl p-5'>
                        <h1>Apply</h1>
                        <p>When you're ready to take the next step, register your child with us by completing this Hendon Prep Registration Form and returning it to our Admissions Team along with a non-refundable, £120 Registration fee.</p>
                        <p>This will enable us to start our admission process to ensure that we can meet your child's needs. Forms need to be signed by both parents and may be returned by post, or scanned copies by email.</p>
                        <button className='-ml-96'> <Link  href="/apply" >Apply</Link></button>
                    </div>
                </motion.div>

                <motion.div className='py-10'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2 }}                    
                    viewport={{ once: false, amount: 0.2 }} 
                > 
                    <div className='bg-medium w-[700px] h-96 flex-column items-center gap-5 rounded-xl p-5'>
                        <h1>Receive an Offer</h1>
                        <p>For PreSchool</p>
                        <p>Following registration and depending on your child’s age, we will either invite you and your child to an informal assessment or to an admissions meeting with a member of the Senior Leadership Team to discuss the offer of a place.</p>
                        <p>For Reception</p>
                        <p>Following registration your child will be invited into school in the Autumn term prior to their year of entry for an informal assessment. This assessment will be followed by an admissions meeting with a member of the Senior Leadership Team to discuss the offer of a place.</p>
                        
                    </div>
                </motion.div>

                <motion.div className='py-10'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}                    
                    viewport={{ once: false, amount: 0.2 }} 
                > 
                    <div className='bg-medium w-[700px] h-40 flex-column items-center gap-5 rounded-xl p-5'>
                        <h1>Acceptance</h1>
                        <p>Once we receive your completed Acceptance Form and relevant deposits, we will send you confirmation of your child’s place in the school.</p>
                        
                    </div>
                </motion.div>

            </div>
            
            
        </div>

    )
}