import { Fragment } from "react";

import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import { Header } from "../components/Header";
import ServicesSection from "../components/ServicesSection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import { PortfolioSection } from "../components/PortfolioSection";

function HomePage() {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <ContactSection />
      <ServicesSection />
      <ExperienceSection />
      <EducationSection />
      <PortfolioSection />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
