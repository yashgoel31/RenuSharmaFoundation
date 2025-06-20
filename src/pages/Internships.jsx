import React from "react";
import TopNavbar_Internship from "../components/TopNavbar_Internship";
import Hero_Internship from "../components/Hero_Internship";
import HeroSection from "../components/HeroSection";
import HowItWorks_Internship from "../components/HowItWorks_Internship";
import WhyUsInternship from "../components/WhyUsInternship";
import HandsOnProjectSection_Internships from "../components/HandsOnProjectSection_Internships";
import Alumni_Internship from "../components/Alumni_Internship";
import Footer_Internship from "../components/Footer_Internship";
import NextCohortSection_Internship from "../components/NextCohortSection_Internship";
import ClientShowcase from "../components/Client_Showcase_Internship";
import Faq_Internship from "../components/Faq_Internship";

const Internships = () => {
  return (
    <div>
      <TopNavbar_Internship />
      <Hero_Internship />
      <WhyUsInternship />
      <HowItWorks_Internship />
      <HandsOnProjectSection_Internships />
      <Alumni_Internship />
      <NextCohortSection_Internship />
      <ClientShowcase />
      < Faq_Internship />
      <Footer_Internship />
    </div>
  );
};

export default Internships;
