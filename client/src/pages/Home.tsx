import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Experiences from "@/components/Experiences";
import Testimonials from "@/components/Testimonials";
import WaitlistForm from "@/components/WaitlistForm";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Experiences />
      <Testimonials />
      <WaitlistForm />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
