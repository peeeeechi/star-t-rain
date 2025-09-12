import Script from 'next/script';

export default function StructuredData() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "中村桃太朗",
    "alternateName": "Momotaro Nakamura",
    "jobTitle": [
      "准教授",
      "研究者",
      "Radio Astronomer"
    ],
    "description": "大島商船高等専門学校の准教授。電波天文学（VLBI観測、大質量星形成）と生成AI活用教育の研究に従事。",
    "url": "https://star-t-rain.vercel.app",
    "sameAs": [
      "https://researchmap.jp/kibidango_sun",
      "https://twitter.com/momomo0413",
      "https://github.com/peeeeechi"
    ],
    "worksFor": {
      "@type": "EducationalOrganization",
      "name": "大島商船高等専門学校",
      "alternateName": "National Institute of Technology, Oshima College",
      "url": "https://www.oshima-k.ac.jp/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "周防大島町",
        "addressRegion": "山口県",
        "addressCountry": "JP"
      }
    },
    "knowsAbout": [
      "電波天文学",
      "VLBI観測",
      "大質量星形成",
      "メーザー天文学",
      "生成AI教育",
      "Python プログラミング",
      "データ解析",
      "天文教育普及"
    ],
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "山口大学大学院",
        "url": "https://www.yamaguchi-u.ac.jp/"
      }
    ],
    "award": [
      "修士（理学）",
      "天文教育普及研究会活動",
      "VLBI懇談会学生幹事"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "academic",
      "url": "https://star-t-rain.vercel.app#contact"
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    "name": "中村桃太朗研究室",
    "alternateName": "Momotaro Nakamura Laboratory",
    "url": "https://star-t-rain.vercel.app",
    "description": "大島商船高等専門学校における電波天文学とAI活用教育の研究室",
    "founder": {
      "@type": "Person",
      "name": "中村桃太朗"
    },
    "parentOrganization": {
      "@type": "EducationalOrganization",
      "name": "大島商船高等専門学校"
    },
    "researchField": [
      "Radio Astronomy",
      "VLBI Observation",
      "Massive Star Formation",
      "Maser Astronomy",
      "AI-driven Education",
      "Astronomy Education"
    ],
    "keywords": "電波天文学, VLBI, 大質量星形成, メーザー, 生成AI教育, 天文教育普及"
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "Website",
    "name": "中村桃太朗研究室",
    "url": "https://star-t-rain.vercel.app",
    "description": "電波天文学とAI活用教育の研究室公式サイト",
    "inLanguage": "ja-JP",
    "author": {
      "@type": "Person",
      "name": "中村桃太朗"
    },
    "publisher": {
      "@type": "Person",
      "name": "中村桃太朗"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://star-t-rain.vercel.app/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Script
        id="structured-data-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personData),
        }}
      />
      <Script
        id="structured-data-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
    </>
  );
}