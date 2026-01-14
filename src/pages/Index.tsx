import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LoanTypesSection from "@/components/LoanTypesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/apply");
  };

  return (
    <main className="min-h-screen">
      <Navbar onApplyClick={handleApplyClick} />
      <HeroSection onApplyClick={handleApplyClick} />
      <LoanTypesSection onApplyClick={handleApplyClick} />
      <HowItWorksSection />
      <FeaturesSection />
      <CTASection onApplyClick={handleApplyClick} />
      <Footer />
    </main>
  );
};

export default Index;
