// app/announcements/page.tsx
'use client';
import { announcementsObj } from '@/Constants/AnnouncementsObj';
import { motion } from 'framer-motion';

export default function AnnouncementPage() {
  
  return (
    <div className=' pt-32 bg-light'>
    <div className="max-w-4xl mx-auto px-6 py-10">
      <motion.h1
        className="text-4xl font-bold text-blue-900 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Important Announcements
      </motion.h1>

      <div className="space-y-6">
        {announcementsObj.map((item, index) => (
          <motion.div
            key={index}
            className="bg-medium border-2 border-blue-500 p-5 rounded-xl shadow-sm"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm  mb-1">{item.date}</p>
            <p className="">{item.message}</p>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
}
