import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SelectedWorks from '@/components/SelectedWorks';
import Experience from '@/components/Experience'; 
import Testimonials from '@/components/Testimonials'; 
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <Hero />
      
      <About />

      <div id="work" className="scroll-mt-32">
        <SelectedWorks />
      </div>

      <div id="experience" className="scroll-mt-32">
        <Experience />
      </div>

      <Testimonials />

      <div id="contact" className="scroll-mt-32">
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
}