// app/syllabus/page.tsx
'use client';
import { syllabusObj } from '@/Constants/SyllabusObj';
import { motion } from 'framer-motion';

export default function SyllabusPage() {
  
  return (
    <div className='pt-32 bg-light'>
    <div className="max-w-5xl mx-auto px-6 py-10">
      <motion.h1
        className="text-4xl font-bold  mb-10 text-center"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}                    
        viewport={{ once: false, amount: 0.2 }} 
      >
        Syllabus Overview
      </motion.h1>

      <div className="space-y-10">
        {syllabusObj.map((item, index) => (
          <motion.div
            key={index}
            className="bg-medium shadow-md border-4 border-gray-900 p-6 rounded-xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}                    
            viewport={{ once: false, amount: 0.2 }} 
          >
            <h2 className="text-2xl font-semibold  mb-4">
              {item.level}
            </h2>
            <ul className="list-disc pl-6 space-y-1 ">
              {item.subjects.map((subject, i) => (
                <li key={i}>{subject}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
     </div>
  );
}
