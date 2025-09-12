'use client';

import { useState } from 'react';
import { BookOpen, GraduationCap, Globe2, FlaskConical, Users, Trophy } from 'lucide-react';

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
  const [activeTab, setActiveTab] = useState<'courses' | 'supervision' | 'outreach'>('courses');

  const courses: Course[] = [
    {
      id: '1',
      title: '情報工学概論',
      level: '2年生',
      semester: '通年',
      students: '~40',
      description: '情報工学の基礎概念と技術全般を学習',
      topics: ['情報数学', 'ハードウェア・ソフトウェア', 'システム基礎'],
    },
    {
      id: '2',
      title: 'データベース',
      level: '4年生',
      semester: '通年',
      students: '~40',
      description: 'データベース設計と管理技術を習得',
      topics: ['関係データベース', 'SQL操作', 'データベース設計'],
    },
    {
      id: '3',
      title: '応用物理学Ⅱ',
      level: '4年生',
      semester: '通年',
      students: '~40',
      description: '物理学の応用分野について学習',
      topics: ['力学', '流体力学', '電磁気学'],
    },
    {
      id: '4',
      title: '実験実習',
      level: '2-3年生',
      semester: '通年',
      students: '~40',
      description: '情報工学における実践的な実験と実習',
      topics: ['プログラミング実習', 'ネットワーク実験', 'システム構築演習'],
    },
    {
      id: '5',
      title: '創造演習Ⅱ',
      level: '4年生',
      semester: '後期',
      students: '若干',
      description: '創造的な問題解決能力を育成する演習科目',
      topics: ['モバイルアプリ開発', 'AI活用システム', 'DXプロジェクト'],
    },
    {
      id: '6',
      title: 'キャリアデザインⅡ（非常勤）',
      level: '大学院生',
      semester: '前期',
      students: '若干',
      description: '山口大学での非常勤講師として担当',
      topics: ['キャリア設計', '研究キャリア', '産学連携'],
    },
  ];

  const studentProjects: StudentProject[] = [
    {
      id: '1',
      title: 'AI駆動モバイルアプリ開発プロジェクト',
      student: '情報工学科4年生',
      year: 2024,
      award: '最優秀評価プロジェクト',
    },
    {
      id: '2',
      title: 'バスケットボールにおけるプレイヤー自動認識シズテムの開発',
      student: '2024年度卒業生',
      year: 2024,
    },
    {
      id: '3',
      title: '大島商船経由のバスの運転本数の最適化に関する研究',
      student: '2024年度卒業生',
      year: 2024,
    },
    {
      id: '4',
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
      participants: '全国高専教員',
      Icon: GraduationCap,
    },
    {
      title: '天文学研究成果の社会発信',
      description: 'e-MERLINニュースなど国際的な研究成果発信',
      participants: '国際天文学コミュニティ',
      Icon: Globe2,
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-nebula-600 to-cosmic-600 bg-clip-text text-transparent">
              教育活動
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            次世代の科学者を育成し、科学の魅力を社会に伝える
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-6 py-3 rounded-full transition-all flex items-center ${
              activeTab === 'courses'
                ? 'bg-nebula-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <BookOpen className="w-5 h-5 mr-2" />
            担当授業
          </button>
          <button
            onClick={() => setActiveTab('supervision')}
            className={`px-6 py-3 rounded-full transition-all flex items-center ${
              activeTab === 'supervision'
                ? 'bg-nebula-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <GraduationCap className="w-5 h-5 mr-2" />
            学生指導
          </button>
          <button
            onClick={() => setActiveTab('outreach')}
            className={`px-6 py-3 rounded-full transition-all flex items-center ${
              activeTab === 'outreach'
                ? 'bg-nebula-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Globe2 className="w-5 h-5 mr-2" />
            アウトリーチ
          </button>
        </div>

        {activeTab === 'courses' && (
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {course.level} • {course.semester}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-nebula-100 dark:bg-nebula-900 text-nebula-700 dark:text-nebula-300 rounded-full text-sm">
                    {course.students}名
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {course.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    主な内容:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'supervision' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                最近の卒業研究指導
              </h3>
              <div className="space-y-4">
                {studentProjects.map((project) => (
                  <div
                    key={project.id}
                    className="border-l-4 border-nebula-500 pl-4 py-2"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {project.student} ({project.year}年度)
                      {project.award && (
                        <span className="ml-2 px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded text-xs flex items-center">
                          <Trophy className="w-3 h-3 mr-1" />
                          {project.award}
                        </span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-cosmic-100 to-stellar-100 dark:from-cosmic-900 dark:to-stellar-900 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-cosmic-700 dark:text-cosmic-300">25+</div>
                <div className="text-sm text-gray-700 dark:text-gray-300">卒業研究指導</div>
              </div>
              <div className="bg-gradient-to-br from-stellar-100 to-nebula-100 dark:from-stellar-900 dark:to-nebula-900 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-stellar-700 dark:text-stellar-300">10</div>
                <div className="text-sm text-gray-700 dark:text-gray-300">学会発表</div>
              </div>
              <div className="bg-gradient-to-br from-nebula-100 to-cosmic-100 dark:from-nebula-900 dark:to-cosmic-900 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-nebula-700 dark:text-nebula-300">5</div>
                <div className="text-sm text-gray-700 dark:text-gray-300">受賞学生</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'outreach' && (
          <div className="grid md:grid-cols-2 gap-6">
            {outreachActivities.map((activity, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-nebula-100 dark:bg-nebula-900/30 rounded-lg mr-4">
                    <activity.Icon className="w-6 h-6 text-nebula-600 dark:text-nebula-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {activity.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {activity.description}
                </p>
                <p className="text-sm text-nebula-600 dark:text-nebula-400 font-semibold">
                  参加者: {activity.participants}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}