'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GiRunningShoe, GiWhistle, GiTrophyCup } from 'react-icons/gi';
// import { MdScience } from "react-icons/md";

import Img5 from '../../../public/Photoes/sportsday5.jpg';
import Img6 from '../../../public/Photoes/sportsday6.jpg';
import Img7 from '../../../public/Photoes/sportsday7.jpg';


export default function SportsFunc(){
    return(
        <div  className='pt-32 bg-light '>

            <div className="px-6 py-10 max-w-6xl mx-auto space-y-10">
            
                <motion.h1  initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-yellow-500 flex items-center gap-3">
                    <GiRunningShoe className="text-dark text-5xl" />
                    Sports & Physical Development
                </motion.h1>

                <motion.p  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
                    className=" text-lg">
                    At Little Genius Preschool, we emphasize the importance of physical activity for a child’s mental and physical growth. Our well-rounded sports program is both engaging and age-appropriate.
                </motion.p>

                <section className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false, amount: 0.2 }} 
                    >
                        <h2 className="text-2xl font-semibold  py-2 flex items-center gap-2">
                        <GiWhistle className="text-dark" />
                        Daily Physical Activities
                        </h2>
                        <p className=" mb-4">
                            Energizing warm-ups and movement games develop motor skills and confidence. Activities include skipping, jumping, and stretching guided by trained staff. 
                        </p>
                        <Image src={Img5} alt="Morning Warm-ups"  className="rounded-lg w-96 h-60 shadow-md " />
                    </motion.div>

                    <motion.div   
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false, amount: 0.2 }} 
                    >
                        
                        <h2 className="text-2xl font-semibold  py-2 flex items-center gap-2">
                            <GiTrophyCup className="text-dark" />
                            Outdoor Sports Fun
                        </h2>
                        <p className=" mb-4">
                            Our large play area offers mini soccer, cricket, relay races, and balance games designed to teach teamwork, coordination, and healthy competition.this is sample text
                        </p>
                        <Image src={Img6} alt="Outdoor Games"   className="rounded-lg w-96 h-60 shadow-md" />
                    </motion.div>
                </section>

                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0.2 }} 
                >
                    <h2 className="text-2xl font-semibold text-dark mb-2 flex items-center gap-2">
                        <GiTrophyCup className="text-dark" />
                        Annual Sports Day
                    </h2>
                    <p className=" mb-4">
                        Our Sports Day brings children, parents, and teachers together for friendly, fun-filled competition. Events include sack races, hurdles, and group games.
                    </p>
                    <Image src={Img7} alt="Sports Day" width={1200} height={500} className="rounded-xl shadow-md w-full" />
                </motion.section>
            </div>



            
            
        </div>

    )
}