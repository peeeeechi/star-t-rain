import HeroSection from '@/components/HeroSection';
import HomeReveal from '@/components/HomeReveal';
import NewsSection from '@/components/NewsSection';
import ResearchSection from '@/components/ResearchSection';
import PublicationsSection from '@/components/PublicationsSection';
import EducationSection from '@/components/EducationSection';
import BlogSectionWrapper from '@/components/BlogSectionWrapper';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <HomeReveal>
      <HeroSection />
      <NewsSection />
      <ResearchSection />
      <PublicationsSection />
      <EducationSection />
      <BlogSectionWrapper />
      <ContactSection />
    </HomeReveal>
  );
}
