import HeroSection from '@/components/HeroSection';
import CosmicIntro from '@/components/CosmicIntro';
import NewsSection from '@/components/NewsSection';
import ResearchSection from '@/components/ResearchSection';
import PublicationsSection from '@/components/PublicationsSection';
import EducationSection from '@/components/EducationSection';
import BlogSectionWrapper from '@/components/BlogSectionWrapper';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <CosmicIntro />
      <HeroSection />
      <NewsSection />
      <ResearchSection />
      <PublicationsSection />
      <EducationSection />
      <BlogSectionWrapper />
      <ContactSection />
    </>
  );
}
