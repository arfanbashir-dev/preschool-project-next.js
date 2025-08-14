// app/course-outline/page.tsx
'use client';

import {courseOutlineObj} from '../../Constants/CourseOutlineObj'

import { motion } from 'framer-motion';

export default function CourseOutlinePage() {
  
  return (
    <div className=' pt-32 bg-light'>
    <div className="max-w-6xl mx-auto px-6 py-10">
      <motion.h1
        className="text-4xl font-bold  mb-10 text-center"
           
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}                    
        viewport={{ once: false, amount: 0.2 }} 
      >
        Preschool Course Outline
      </motion.h1>

      <div className="space-y-10">
        {courseOutlineObj.map((section, index) => (
          <motion.div
            key={index}
            className="bg-dark p-6 shadow-md border-l-4  rounded-xl  "
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}                    
            viewport={{ once: false, amount: 0.2 }} 
          >
            <h2 className="text-2xl font-semibold  mb-3">
              {section.domain}
            </h2>
            <ul className="list-disc pl-6  space-y-1">
              {section.goals.map((goal, i) => (
                <li key={i}>{goal}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
}
