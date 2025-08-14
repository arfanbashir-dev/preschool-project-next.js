// app/news/page.tsx
'use client';
import { newsObj } from '@/Constants/NewsObj';
import { motion } from 'framer-motion';


export default function NewsPage() {
  

  return (
    <div className='pt-32 bg-dark '>
        <div className="max-w-4xl mx-auto px-6 py-10 text-red-900">
          <motion.h1   className="text-4xl font-bold  mb-6"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }} 
          >
            Latest News & Updates
          </motion.h1>

          <div className="space-y-8">
            {newsObj.map((item, index) => (
              <motion.div  key={index}   className="bg-light shadow-lg rounded-xl p-6 border-l-4 "
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.2 }} 
              >
                <h2 className="text-xl text-black   font-semibold ">{item.title}</h2>
                <p className="text-sm text-white mb-2">{item.date}</p>
                <p className="text-white">{item.content}</p>
              </motion.div>
            ))}
        
          </div>
        
        </div>
    </div>
  );
}
