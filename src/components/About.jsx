import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import {services} from '../constants'
import {fadeIn , textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc/index'

const About = () => {
  const ServiceCard=({index, title, icon})=>{
    return(
     <Tilt className='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn('right', 'spring', 0.5* index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[240px] shadow-card'>
        <div
        options={{
          max:45,
          scale:1.05,
          speed:450,
         }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
         </div>
      </motion.div>
     </Tilt>
    )
  }
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I am a Full Stack Developer with a passion for building beautiful and functional websites. I have experience working with React, Next.js, Node.js, Express.js, MongoDB, and Postgress. I am also familiar with Python, and C++.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
          <ServiceCard key={service.title} index={index}{...service}/>
        ))
      }
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")