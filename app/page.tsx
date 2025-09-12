import HeroSection from '@/components/HeroSection';
import ResearchSection from '@/components/ResearchSection';
import PublicationsSection from '@/components/PublicationsSection';
import EducationSection from '@/components/EducationSection';
import BlogSection from '@/components/BlogSection';
import NewsSection from '@/components/NewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ResearchSection />
      <PublicationsSection />
      <EducationSection />
      <BlogSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
