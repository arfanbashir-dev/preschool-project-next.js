'use client'
import React from "react";

import Image from "next/image";
import { motion } from 'framer-motion';
import Img1 from '../../../public/Photoes/ceremony.jpg';
import Img2 from '../../../public/Photoes/sportsday2.jpg';
import Img3 from '../../../public/Photoes/sportsday3.jpg';
import Img4 from '../../../public/Photoes/sportsday4.jpg';





export default function GamesFunc(){
    return(
        <div className='pt-32  bg-medium'>

            
            <motion.div className="flex-column items-center p-10"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.2 }} 
                
            >

                <div className="flex-column gap-5 items-center py-1 ">
                    <p>Little Genius TechSchool</p>
                    <h1>Unveiling the Spirit of LGTS</h1>
                    <h1>Annual Sports and Games </h1>
                </div>
                
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.2 }} 
            >

                <div className="img w-full  p-10 ">

                    <Image src={Img1} alt="sportsdayimg" className="w-full h-96 rounded-lg" />
                    <p className="p-5">Kindergarten Sports Day is an exciting and vibrant event that allows young children to showcase their physical skills, teamwork, and competitive spirit. It’s a day filled with fun, laughter, and learning, where parents, teachers, and students come together to celebrate physical activity and sportsmanship. This article provides a comprehensive overview of kindergarten sports day, including preparation, activities, and personal insights to make the day memorable.</p>

                </div>
                
                
            </motion.div>

            <motion.div  className=" w-full p-10"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.2 }} 
            >
            

                <div className="py-5 font-bold">
                    <h1>Importance of Sports Day</h1>
                </div>
                <div className="py-5">
                    <li className="py-5 font-semibold">Physical Development</li>
                    <p>Kindergarten Sports Day encourages physical activity, which is crucial for young children’s growth and development. Engaging in sports helps improve coordination, balance, and overall fitness. It promotes a healthy lifestyle from an early age, setting the foundation for lifelong habits.</p>
                </div>
                <div className="py-5">
                    <li className="py-5 font-semibold">Social Skills</li>
                    <p>Participating in sports fosters teamwork, communication, and social interaction. Children learn to cooperate with peers, share, and develop friendships while working toward common goals. Sports day activities encourage positive social experiences that build confidence and self-esteem.</p>
                </div>
                <div className="py-5">
                    <li className="py-5 font-semibold">Emotional Growth</li>
                    <p>Sports teach children resilience and determination. They learn how to handle winning and losing gracefully, developing emotional intelligence. Celebrating their achievements, no matter how small, boosts their self-esteem and encourages a positive attitude toward challenges.</p>
                </div>

            </motion.div>

            <div className=" flex-column items-center gap-10 w-full p-10" >

                <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }} 
                >
            
                    <h1>Activities for Sports Day</h1>

                    <div className="flex-center gap-10 px-10 py-5 bg-light rounded-lg h-72 w-full   ">

                        <div className="flex-column gap-16 w-[70%] ">                        
                            <li className="font-semibold">Opening Ceremony</li>
                            <p>Kick off the event with an opening ceremony. Gather the children, parents, and teachers to explain the day’s events, encourage sportsmanship, and share the importance of physical activity.</p>
                        </div>
                        <div className="">
                            <Image src={Img2} alt="ceremony" className="w-60 h-60 rounded-lg"   />
                        </div>

                    </div>

                </motion.div>

                <motion.div className="flex-center gap-10 px-10 py-5 bg-light rounded-lg h-72 w-full"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }} 
                >
                   

                    <div className="flex-column gap-16 w-[70%] p-10">                        
                        <li className="font-semibold">Fun Races</li>
                        <p>Children will run as fast as they can to reach the finish line.In this way child set their mind for target to acheive their goals.</p>
                    </div>
                    <div className="">
                        <Image src={Img3} alt="ceremony" className="w-60 h-60 rounded-lg"   />
                    </div>
                    
                </motion.div>
                
                
             
                <motion.div className="flex-center gap-10 px-10 py-5 bg-light rounded-lg h-72 w-full"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }} 
                >

                   

                    <div className="flex-column gap-16 w-[70%] p-10">                        
                        <li className="font-semibold">Obstacle Course</li>
                        <p>Set up a simple obstacle course using cones, hula hoops, and tunnels made from cardboard boxes. Children can crawl under, jump over, and weave through obstacles, which enhances their motor skills and coordination.</p>
                    </div>
                    <div className="">
                        <Image src={Img4} alt="ceremony" className="w-60 h-60 rounded-lg"   />
                    </div>
                    
                </motion.div>

            </div>

        </div>
    )
}
