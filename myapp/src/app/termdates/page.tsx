'use client'
import Link from 'next/link'

import {springDataObj,summerDataObj, autumnDataObj} from '@/Constants/TermsObj'
import {motion} from 'framer-motion'



export default function TermsDatesFunc(){
    return(
        <div  className='pt-32 bg-light '>

            <div className=" px-20 py-10 bg-dark">

                <Link href='/'>Home</Link><span> / </span> <Link href='/termdates' className='active:bg-blue-950'>Term Dates</Link>

            </div>
            
            <motion.div className='p-16'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            
            >

                <h1 className='py-3 font-semibold'>Spring 2025</h1>
                
                <table className='border-2'>
                        
                    <thead>
                        <tr className=' text-start border-2   h-16  bg-medium'>
                             <th className=' w-72 py-2 border-2'>Term/Holiday </th>
                             <th className=' w-72 py-2 border-2'>First Day</th>
                             <th className=' w-72 py-2 border-2'>Last Day</th>
                             
                         </tr>
                    </thead>
                    
                    <tbody>
                        {springDataObj.map((item,index) => (
                        
                            <tr key={index} className='text-center'>
                                
                                <td className=' py-2 border-2'>{item.spring}</td>
                                <td className=' py-2 border-2'>{item.firstday}</td>
                                <td className=' py-2 border-2'>{item.lastday}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>

            </motion.div>

            <motion.div className='p-16'
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            
            >
                <h1 className='py-3 font-semibold'>Summer 2025</h1>
                
                <table className='border-2'>
                        
                    <thead>
                        <tr className=' text-start border-2   h-16  bg-medium'>
                             <th className=' w-72 py-2 border-2'>Term/Holiday </th>
                             <th className=' w-72 py-2 border-2'>First Day</th>
                             <th className=' w-72 py-2 border-2'>Last Day</th>
                         </tr>
                    </thead>
                    
                    <tbody>
                        {summerDataObj.map((item,index) => (
                        
                            <tr key={index} className='text-center'>
                                
                                <td className=' py-2 border-2'>{item.spring}</td>
                                <td className=' py-2 border-2'>{item.firstday}</td>
                                <td className=' py-2 border-2'>{item.lastday}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>

            </motion.div>

            <motion.div className='p-16'
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            
            >

                <h1 className='py-3 font-semibold'>Autumn 2025</h1>
                
                <table className='border-2'>
                        
                    <thead>
                        <tr className=' text-start border-2   h-16  bg-medium'>
                             <th className=' w-72 py-2 border-2'>Term/Holiday </th>
                             <th className=' w-72 py-2 border-2'>First Day</th>
                             <th className=' w-72 py-2 border-2'>Last Day</th>
                         </tr>
                    </thead>
                    
                    <tbody>
                        {autumnDataObj.map((item,index) => (
                        
                            <tr key={index} className='text-center'>
                                
                                <td className=' py-2 border-2'>{item.spring}</td>
                                <td className=' py-2 border-2'>{item.firstday}</td>
                                <td className=' py-2 border-2'>{item.lastday}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>

            </motion.div>



            
        </div>

    )
}