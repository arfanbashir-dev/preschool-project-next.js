// app/health/page.tsx
'use client';
import { FaHeartbeat, FaUtensils, FaSoap, FaSyringe } from 'react-icons/fa';
import { motion } from 'framer-motion';

const healthInfo = [
    {
      icon: <FaSoap className="text-green-500 text-3xl" />,
      title: 'Hygiene & Cleanliness',
      description:
        'We teach children to wash hands regularly, cover their mouths when coughing, and keep their environment clean. Our classrooms are sanitized daily.',
    },
    {
      icon: <FaUtensils className="text-yellow-600 text-3xl" />,
      title: 'Healthy Meals & Snacks',
      description:
        'We encourage nutritious eating habits with balanced meals and fruit snacks. Parents are advised to avoid sugary items and junk food in lunchboxes.',
    },
    {
      icon: <FaSyringe className="text-blue-600 text-3xl" />,
      title: 'Immunization Policy',
      description:
        'All students must follow routine immunizations as per pediatric guidelines. Vaccination records must be submitted during admission.',
    },
    {
      icon: <FaHeartbeat className="text-red-500 text-3xl" />,
      title: 'Medical Support & First Aid',
      description:
        'We have trained staff to handle minor injuries and illness. In emergencies, parents are informed immediately, and appropriate care is provided.',
    },
  ];



export default function HealthPage() {
  
  return (
    <div className='pt-32 bg-light'>
    <div className="max-w-5xl mx-auto px-6 py-10">
      <motion.h1
        className="text-4xl font-bold text-blue-900 mb-10 text-center"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }} 
      >
        Child Health & Wellbeing
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {healthInfo.map((item, index) => (
          <motion.div
            key={index}
            className="bg-dark shadow-md border-l-4 border-rose-400 p-6 rounded-xl flex items-start gap-4"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }} 
          >
            <div>{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-rose-500 mb-1">{item.title}</h3>
              <p className="">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
}
