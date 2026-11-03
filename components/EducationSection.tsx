'use client';

import { useState } from 'react';
import { GraduationCap, Globe2, FlaskConical, Users } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from './SectionHeading';
import { ArrowUpRight } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  level: string;
  semester: string;
  students: string;
  description: string;
  topics: string[];
}

interface StudentProject {
  id: string;
  title: string;
  student: string;
  year: number;
  award?: string;
}

export default function EducationSection() {
  const [activeTab, setActiveTab] = useState<
    'courses' | 'supervision' | 'outreach' | 'blog'
  >('courses');

  const courses: Course[] = [
    {
      id: '1',
      title: '情報工学概論',
      level: '情報工学科2年生',
      semester: '通年',
      students: '~40',
      description: '情報工学の基礎概念と技術全般を学習',
      topics: [
        '情報数学',
        'ハードウェア・ソフトウェア',
        'システム基礎',
        '経営・開発・技術戦略',
        'AI・データ利活用',
      ],
    },
    {
      id: '2',
      title: 'データベース',
      level: '情報工学科4年生',
      semester: '通年',
      students: '~40',
      description: 'データベース設計・操作と管理技術を習得',
      topics: ['関係データベース', 'SQL操作', 'データベース設計'],
    },
    {
      id: '3',
      title: '応用物理学Ⅱ',
      level: '情報工学科4年生',
      semester: '通年',
      students: '~40',
      description: '物理学の応用レベルの問題について学習',
      topics: ['力学', '流体力学', '電磁気学'],
    },
    {
      id: '4',
      title: '実験実習',
      level: '情報工学科2-4年生',
      semester: '通年',
      students: '~40',
      description: '情報工学における実践的な実験と実習',
      topics: ['プログラミング実習', 'データベース実験'],
    },
    {
      id: '5',
      title: '創造演習Ⅱ',
      level: '情報工学科4年生',
      semester: '後期',
      students: '若干',
      description: '創造的な問題解決能力を育成する演習科目',
      topics: ['モバイルアプリ開発', 'AI活用システム', 'DXプロジェクト'],
    },
    {
      id: '6',
      title: '卒業研究',
      level: '情報工学科5年生',
      semester: '通年',
      students: '若干',
      description:
        '専門教育の仕上げとして、情報工学の基礎知識をもとに課題に対して自ら計画を立て、継続的に研究や開発を行う',
      topics: [
        'アプリ開発',
        '画像認識・AI活用',
        '天文データ分析・解析',
        '授業教材開発',
      ],
    },
    {
      id: '7',
      title: 'キャリアデザインⅡ',
      level: '（外部）大学院生',
      semester: '前期',
      students: '若干',
      description: '山口大学での非常勤講師として担当',
      topics: ['キャリア設計', '研究キャリア', '産学連携'],
    },
  ];

  const studentProjects: StudentProject[] = [
    {
      id: '1',
      title: 'DX推進学生支援アプリケーションの開発プロジェクト',
      student: '情報工学科4年生・5年生(継続課題)',
      year: 2024,
      award: '演習生が成果発表会にてクラス最優秀評価を獲得',
    },
    {
      id: '2',
      title: 'バスケットボールにおけるプレイヤー自動認識シズテムの開発',
      student: '2024年度卒業生',
      year: 2024,
    },
    {
      id: '3',
      title: '大島商船高専経由のバス利用状況調査と​運行体系最適化の検討',
      student: '2024年度卒業生',
      year: 2024,
    },
    {
      id: '4',
      title: '本校寮生向けスマートフォンアプリの開発',
      student: '2024年度卒業生',
      year: 2024,
    },
    {
      id: '5',
      title: 'スペースデブリの連鎖衝突シミュレーションと臨界密度の推定',
      student: '2024年度卒業生',
      year: 2024,
    },
    {
      id: '6',
      title: 'Python による天文観測データ解析',
      student: '2023年度卒業生',
      year: 2023,
    },
    {
      id: '7',
      title: 'Python による天文観測データ解析',
      student: '2023年度卒業生',
      year: 2023,
    },
  ];

  const outreachActivities = [
    {
      title: '天文教育普及研究会',
      description: '天文学の教育普及活動を推進する学会活動',
      participants: '全国の教育関係者',
      Icon: FlaskConical,
    },
    {
      title: 'VLBI懇談会活動',
      description: '電波天文学の研究交流と学生教育支援',
      participants: '学生幹事として貢献',
      Icon: Users,
    },
    {
      title: '高専学会での教育実践報告',
      description: 'AI駆動開発など最新教育手法の紹介',
      participants: '全国高専・連携大学・協賛企業等',
      Icon: GraduationCap,
    },
    {
      title: '天文学研究成果の社会発信',
      description: 'e-MERLINニュースなど国際的な研究成果発信',
      participants: '西欧のVLBI・天文学コミュニティ',
      Icon: Globe2,
    },
  ];

  const tabs = {
    courses: '担当授業',
    supervision: '学生指導',
    outreach: 'アウトリーチ',
    blog: '活動記録',
  };
  return (
    <section id="education" className="site-section">
      <SectionHeading
        number="04"
        label="LEARNING & MAKING"
        title="好奇心を、つくる力に。"
        description="教室での学びを、実験や開発、社会との接点へつないでいきます。"
      />
      <div className="filter-tabs">
        {(Object.keys(tabs) as Array<keyof typeof tabs>).map((tab) => (
          <button
            key={tab}
            aria-pressed={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tabs[tab]}
          </button>
        ))}
      </div>
      {activeTab === 'courses' && (
        <div className="course-grid">
          {courses.map((course, i) => (
            <article key={course.id}>
              <span className="mono course-number">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="course-meta">
                  {course.level} · {course.semester}
                </p>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="topic-list">
                  {course.topics.map((topic) => (
                    <span key={topic}>{topic}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
      {activeTab === 'supervision' && (
        <div className="student-projects">
          {studentProjects.map((project) => (
            <article key={project.id}>
              <span className="mono">{project.year}</span>
              <div>
                <h3>{project.title}</h3>
                <p>{project.student}</p>
                {project.award && <p className="award-note">{project.award}</p>}
              </div>
            </article>
          ))}
        </div>
      )}
      {activeTab === 'outreach' && (
        <div className="course-grid">
          {outreachActivities.map((activity) => (
            <article key={activity.title}>
              <activity.Icon size={22} strokeWidth={1.2} />
              <div>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
                <p className="course-meta">{activity.participants}</p>
              </div>
            </article>
          ))}
        </div>
      )}
      {activeTab === 'blog' && (
        <div className="education-journal">
          <p>
            授業での試みや開発の過程、日々の気づきを、研究ノートに記録しています。
          </p>
          <Link className="text-link" href="/blog">
            活動記録を読む <ArrowUpRight size={16} />
          </Link>
        </div>
      )}
      <div className="app-links">
        <div>
          <span className="eyebrow">FROM THE LAB</span>
          <h3>研究室から生まれたアプリ</h3>
        </div>
        <Link href="/star-cone">
          星プラっと <span>星空観測を、もっと身近に。</span>
          <ArrowUpRight size={20} />
        </Link>
        <Link href="/kenreki">
          研暦 <span>研究の時間を、整える。</span>
          <ArrowUpRight size={20} />
        </Link>
      </div>
    </section>
  );
}
