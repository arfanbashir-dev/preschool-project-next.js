import Link from 'next/link'
import Image from 'next/image'

import FeeImg from '../../../school pics/18.jpg'
import MessImg from '../../../school pics/15.jpg'
import InfoImg from '../../../school pics/19.jpg'



const feeData = [

  { session: "5 Session (minimum requirment)", fee: "5000" },
  { session: "6 Session", fee: "6000" },
  { session: "7 Session", fee: "7000" },
  { session: "8 Session", fee: "8000" },
  { session: "9 Session", fee: "9000" },
];

const termFeeData = [
    { grade: 'Reception'  , tuition: '6000' , lunch: '3000' , totol: '9000'  },
    { grade: 'Year 1 - 4' , tuition: '7000' , lunch: '3000' , totol: '10000' },
    { grade: 'Year 5 - 6' , tuition: '8000' , lunch: '3000' , totol: '11000' },

];

export default function AdmissionFeeFunc(){
    return(
        <div className='pt-32 bg-light '>

            <div className=" px-20 py-10 bg-dark">

                <Link href='/'>Home</Link><span> / </span> <Link href='/fee'>Fee</Link>

            </div>

            <div className='flex-between items-start p-20'>

                <div className='flex-column  gap-5 w-[800px] h-60'>

                    <h1 className='text-blue-950 font-bold'><u>Little Genius TechSchool Fee Schedule</u> </h1>

                    <p>We offer a straightforward and transparent fee structure, which includes your child's daily lunch, enabling families to plan ahead.</p>
                    <p>We are a family school for boys and girls, offering a sibling discount of 5% on the second, and subsequent children’s fees.</p>
                    <p>We offer an Early Years’ Funding Discount on all pupils in our Preschool class from the start of the term after the one in which they turn 3.</p>

                </div>

                <div className=' w-60 h-60 rounded-lg shadow-xl'>                        
                        

                    <h1 className='bg-dark rounded-t-lg '>Jump to:</h1>
                    
                    <ul className='flex-column gap-1 items-start'>

                        <Link href= '/abc'>Early Year's Funding</Link>
                        <Link href= '/abc'>Termly Fees</Link>
                        <Link href= '/abc'>What's Included?</Link>
                        <Link href= '#paymentSection'>Payments</Link>

                    </ul>

                </div>                

            </div>

            <div className=' p-20 bg-dark'>

                <Link href= '/abc'>Early Year's Funding</Link>
                
                <div className='flex-between p-10  '>

                    

                    <div className=' w-[500px] h-[500px] flex-column gap-5 py-8 '>
                        <h1>Available for 3 & 4 Year olds in Preschool</h1>
                        <p>
                            We are delighted to announce that Early Years’ funding is now available to all 3 and 4 year olds in the Preschool at Hendon Prep*
                        </p>
                        <p>
                            This government funding, often referred to as ’15 hours free hours funding', is available to every child from the term after they turn 3 until the end of their final term in Preschool. In an independent school setting this funding equates to an average saving of approximately £900 per term for parents.
                        </p>
                        <p>
                            The school applies for this grant on behalf of families and fees’ invoices will be adapted to show this reduction.
                        </p>
                        <p>*Terms & conditions apply.</p>

                        <button><Link href='/contact'>Contact</Link></button>

                    </div>
                    
                    <div>

                        <Image src={FeeImg}  alt="FeeImg" className='w-[500px] h-[500px] rounded-lg' />

                    </div>
                    

                </div>

                <div className='flex-column gap-10  py-20 '>

                    <div className='border-b-2 '>
                        <h1>Little Genius TechSchool Termly School Fees 2025-2026</h1>
                    </div>

                    <div className='flex-column gap-5'>

                        <p>Our Preschool pupils are required to attend a minimum of 5 sessions per week however, subject to availability, we offer flexibility in how these sessions can be taken. A session is one half day. All sessions include lunch.</p>
                        <p className='font-bold'>Full day session: 8:30am – 3:20pm | Morning session: 8:30am – 12.30pm | Afternoon session: 12:00noon – 3:20pm</p>

                    </div>
                     

                    <div >
                        <table className='border-2'>
                            <thead>

                                <tr className=' text-start border-2 w-40 h-16  bg-medium'>

                                    <th className=' w-96  border-2 '>Pre School</th>
                                    <th  className=' w-96 '>Termly Fee</th>

                                </tr>                                
                                
                            </thead>
                            <tbody>
                          
                                {feeData.map((item, index) => (

                                    <tr key={index} className='  border-2 ' >

                                        <td  className='p-2  text-start  border-2'>{item.session}</td>
                                        <td  className='p-2 text-center '>{item.fee}</td>

                                    </tr>
                                ))}
                                
                            </tbody>

                        </table>

                        <div className='py-10'>
                            <p>The fees listed above are per term and apply to the 2025/26 academic year. There are three terms within the school year, <br /> and the annual fee is split equally across these three terms for your convenience. All Pre-School and Nursery Fees shown above are exempt from VAT.</p>
                        </div>

                        <table className='border-2'>
                            <thead>

                                <tr className=' text-start border-2   h-16  bg-medium'>

                                    <th className=' w-72 py-2 border-2'>Year Group</th>
                                    <th className=' w-72 py-2 border-2'>Tution Fee Per Term</th>
                                    <th className=' w-72 py-2 border-2'>Lunch Fee(Compulsory)</th>
                                    <th className=' w-72 py-2 border-2'>Total Termly Fee</th>

                                </tr>

                            </thead>
                            
                            <tbody>

                                {termFeeData.map((item,index) => (
                                
                                    <tr key={index} className='text-center'>

                                        <td className=' py-2 border-2'>{item.grade}</td>
                                        <td className=' py-2 border-2'>{item.tuition}</td>
                                        <td className=' py-2 border-2'>{item.lunch}</td>
                                        <td className=' py-2 border-2'>{item.totol}</td>

                                    </tr>

                                ))}
                            </tbody>
                        </table>

                    </div>
                
                </div>
                
            </div>
                                   

                
            <div className='flex-between p-20'>
          
                <div className=' w-[500px] h-[400px]  shadow-xl bg-dark rounded-lg'>                        
                        

                    <h1 className='bg-medium rounded-t-lg '>What's included?</h1>
                    
                    <ul className='flex-column gap-3 py-5 '>

                        <li>School lunches cooked daily</li>
                        <li>Access to cutting-edge learning technology</li>
                        <li>Access to sector-leading teaching facilities</li>
                        <li>An exceptional and well-rounded academic curriculum</li>
                        <li>1:1 support and a focus on student wellbeing</li>

                    </ul>

                </div>       
          
                <div>

                    <Image src={MessImg} alt='mess' className='w-[500px] h-[400px] rounded-lg'/>

                </div>
            </div>
            
            <div className='flex-column bg-medium'>                   
                

                <div className='p-5 font-bold'>
                        <Link href='/payments' id="paymentSection">Payments</Link>
                </div>

                <div className='flex-between p-6' >
                    
                    <div className=''>

                        <h1>Key Information:</h1>
                        
                        <ul className='flex-column gap-5'>

                            <li>- Fees are due and payable on or before the first day of term.</li>
                            <li>- A discount of 5% for second, and subsequent siblings is available.</li>
                            <li>- A full term’s notice is required in writing for the withdrawal of a pupil, otherwise a term’s fees in lieu of notice will be payable.</li>
                            <li>- Early Years’ funding is available for 3 and 4 year olds in the Preschool.</li>
                            <li>- We can accept Childcare voucher payments towards Breakfast Clubs and After School Clubs from ages 5 – 11 only.</li>
                            <li>- The deposit for Tier 4 sponsored international students will be one term’s fees, with a full year’s domestic fees being settled prior to enrolling at the school.</li>
                            <li>- The deposit for other (non-tier 4) international students will be one term’s fees. Termly domestic fees will be due for payment before each term commences.</li>
                            <li>- Option to pay via the School Fee Plan</li>

                        </ul>

                    </div>
                    <div>
                         
                         <Image src={InfoImg} alt='mess' className='w-[500px] h-[500px] rounded-lg'/>

                    </div>
            
                </div>
            
            </div>      

            
        </div>

    )
}