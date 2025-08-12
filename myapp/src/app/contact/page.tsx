'use client';

import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  return (
      <div className='pt-32 bg-light'>
          <div className="max-w-5xl mx-auto px-6 py-10">
              <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-dark mb-8 text-center"    
        
          >
          Contact Us
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <motion.div  initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          
          
          >
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-red-700 text-2xl" />
            <div>
              <p className="font-semibold text-dark">Address</p>
              <p>Little Genius Preschool, Ali Street, Lahore</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-green-500 text-2xl" />
            <div>
              <p className="font-semibold text-dark">Phone</p>
              <p>+92 300 1234567</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-red-700 text-2xl" />
            <div>
              <p className="font-semibold text-dark">Email</p>
              <p>info@littlegenius.edu.pk</p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800">Opening Hours</p>
            <p>Monday – Friday: 8:30 AM – 3:30 PM</p>
            <p>Saturday & Sunday: Closed</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="space-y-4 bg-blue-50 p-6 rounded-xl shadow-sm"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert('Message submitted!');
          }}
        >
          <input   type="text"   placeholder="Your Name"   required
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-blue-500"
            
          />
          <input   type="email"  placeholder="Your Email"  required
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-blue-500"
            
          />
          <textarea rows={4}  placeholder="Your Message"  required
                       
            className="w-full px-4 py-2 bg-light rounded border  border-gray-300 focus:outline-blue-500"
            
          >

          </textarea>
          <button   type="submit"
            className="w-96 ml-5  text-white font-semibold px-6 py-2 rounded"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
    </div>
  );
}
