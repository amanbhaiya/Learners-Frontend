import Courses from '@/components/landing/Course';
import CTA from '@/components/landing/CTA';
import Features from '@/components/landing/Features';
import Footer from '@/components/landing/Footer';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Testimonials from '@/components/landing/Testimonials';
import { courses, features, menus, testimonials } from '@/lib/data';


const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header menus={menus} />
      <Hero />
      <Features features={features} />
      <Courses courses={courses} />
      <Testimonials testimonials={testimonials} />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;