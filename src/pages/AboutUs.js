import React from 'react'
//Pages
import { AboutSection } from '../components/AboutSection'
import { ServicesSection } from '../components/ServicesSection'
import { FaqSection } from '../components/FaqSection'
//Animation
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

export const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  )
}