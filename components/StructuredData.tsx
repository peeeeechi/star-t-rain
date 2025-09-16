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

  // BreadcrumbList for better navigation in search results
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://star-t-rain.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "研究分野",
        "item": "https://star-t-rain.vercel.app/#research"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "研究業績",
        "item": "https://star-t-rain.vercel.app/#publications"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "ブログ",
        "item": "https://star-t-rain.vercel.app/blog"
      }
    ]
  };

  // FAQ Schema for common questions
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "中村桃太朗研究室の主な研究分野は何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "電波天文学（VLBI観測、大質量星形成、メーザー天文学）と、生成AI活用教育の研究を行っています。特に大質量原始星周囲の円盤-アウトフロー構造の解明と、ChatGPT・Claude等を活用した新しい教育手法の開発に力を入れています。"
        }
      },
      {
        "@type": "Question",
        "name": "研究室への参加や共同研究は可能ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、可能です。高専生の卒業研究指導、共同研究、天文教育普及活動など、様々な形での協力を歓迎しています。お問い合わせページからご連絡ください。"
        }
      },
      {
        "@type": "Question",
        "name": "VLBIとは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VLBI（Very Long Baseline Interferometry：超長基線電波干渉法）は、地球上の複数の電波望遠鏡を組み合わせて、地球サイズの巨大な望遠鏡として機能させる技術です。これにより、ミリ秒角という極めて高い角分解能で天体を観測できます。"
        }
      }
    ]
  };

  // Course/Education information
  const courseData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "AI駆動開発を活用したモバイルアプリ開発演習",
    "description": "ChatGPT、Claude Code等の生成AIを活用してモバイルアプリケーションを開発する演習授業",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "大島商船高等専門学校",
      "url": "https://www.oshima-k.ac.jp/"
    },
    "instructor": {
      "@type": "Person",
      "name": "中村桃太朗"
    },
    "educationalLevel": "高等専門学校",
    "inLanguage": "ja-JP"
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
      <Script
        id="structured-data-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
      <Script
        id="structured-data-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData),
        }}
      />
      <Script
        id="structured-data-course"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseData),
        }}
      />
    </>
  );
}