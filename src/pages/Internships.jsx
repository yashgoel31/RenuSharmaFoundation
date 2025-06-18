import React from 'react'
import TopNavbar_Internship from '../components/TopNavbar_Internship'
import Hero_Internship from '../components/Hero_Internship'
// import HeroSection from '../components/HeroSection'
import HowItWorks_Internship from '../components/HowItWorks_Internship'
import WhyUsInternship from '../components/WhyUsInternship'
import Alumni_Internship from '../components/Alumni_Internship'

const Internships = () => {
  return (
    <div>
      <TopNavbar_Internship />
      <Hero_Internship />
      {/* <HeroSection /> */}
      <WhyUsInternship />
      <HowItWorks_Internship />
      <Alumni_Internship />
    </div>
  )
}

export default Internships
