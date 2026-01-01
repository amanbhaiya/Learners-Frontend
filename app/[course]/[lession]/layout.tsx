"use client"
import { useState, useRef, useEffect } from 'react';

import { 
  HiMenu, 
  HiX, 
  HiChevronDown, 
  HiChevronRight, 
  HiSearch, 
  HiBell, 
  HiOutlineCog, 
  HiOutlineLogout, 
  HiOutlineUserCircle,
  HiOutlineBookOpen,
  HiOutlineCode,
  HiOutlineLightningBolt,
  HiOutlineDatabase,
  HiOutlineChip,
  HiOutlineCube,
  HiOutlineCloud,
  HiCheckCircle,
  HiOutlinePlay,
  HiOutlineClock,
  HiOutlineDocumentText
} from 'react-icons/hi';

// Types
interface User {
  name: string;
  email: string;
}

interface Topic {
  name: string;
  duration: string;
  completed: boolean;
}

interface Lesson {
  name: string;
  topics: Topic[];
}

interface Course {
  name: string;
  icon: any;
  color: string;
  lessons: Lesson[];
}

interface HeaderProps {
  user: User;
  onMenuToggle: () => void;
  sidebarOpen: boolean;
}

interface SidebarProps {
  courses: Course[];
  isOpen: boolean;
  selectedLesson: string;
  selectedTopic: string;
  onLessonSelect: (courseName: string, lessonName: string) => void;
  onTopicSelect: (topicName: string) => void;
}

// Header Component
const Header = ({ user, onMenuToggle, sidebarOpen }: HeaderProps) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 lg:px-6 fixed w-full z-20 shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {sidebarOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
        <div className="flex items-center gap-2">
          <HiOutlineBookOpen className="text-blue-600" size={28} />
          <h1 className="text-xl font-bold text-gray-800 hidden sm:block">Java Mastery</h1>
        </div>
      </div>

      <div className="hidden md:flex flex-1 max-w-md mx-8">
        <div className="relative w-full">
          <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg relative transition-colors">
          <HiBell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center gap-2 hover:bg-gray-100 rounded-lg p-2 transition-colors"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              {getInitials(user.name)}
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-medium text-gray-800 leading-tight">{user.name.split(' ')[0]}</p>
            </div>
            <HiChevronDown size={16} className="hidden sm:block text-gray-600" />
          </button>

          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
              <div className="px-4 py-3 border-b border-gray-200">
                <p className="font-semibold text-gray-800">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <button className="w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700 transition-colors">
                <HiOutlineUserCircle size={18} className="text-gray-600" />
                <span>Profile</span>
              </button>
              <button className="w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700 transition-colors">
                <HiOutlineCog size={18} className="text-gray-600" />
                <span>Settings</span>
              </button>
              <div className="border-t border-gray-200 mt-1 pt-1">
                <button className="w-full px-4 py-2.5 text-left hover:bg-red-50 flex items-center gap-3 text-red-600 transition-colors">
                  <HiOutlineLogout size={18} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

// Sidebar Component
const Sidebar = ({ courses, isOpen, selectedLesson, selectedTopic, onLessonSelect, onTopicSelect }: SidebarProps) => {
  const [expandedCourses, setExpandedCourses] = useState<{ [key: string]: boolean }>({
    'Java Fundamentals': true,
  });
  const [expandedLessons, setExpandedLessons] = useState<{ [key: string]: boolean }>({
    'Lesson 1: Introduction to Java': true,
  });

  const toggleCourse = (courseName: string) => {
    setExpandedCourses(prev => ({
      ...prev,
      [courseName]: !prev[courseName]
    }));
  };

  const toggleLesson = (lessonName: string) => {
    setExpandedLessons(prev => ({
      ...prev,
      [lessonName]: !prev[lessonName]
    }));
  };

  return (
    <aside
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 fixed lg:static w-80 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out z-10 overflow-y-auto noscrollbar`}
      style={{ height: 'calc(100vh - 4rem)' }}
    >
      <div className="p-4 pt-6">
        <div className="space-y-3">
          {courses.map((course) => {
            const totalTopics = course.lessons.reduce((acc, lesson) => acc + lesson.topics.length, 0);
            const completedTopics = course.lessons.reduce(
              (acc, lesson) => acc + lesson.topics.filter(t => t.completed).length, 
              0
            );

            return (
              <div key={course.name} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleCourse(course.name)}
                  className="w-full p-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`${course.color} bg-opacity-10 p-2 rounded-lg`}>
                      <course.icon className={course.color.replace('bg-', 'text-')} size={20} />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-800 text-sm">{course.name}</p>
                      <p className="text-xs text-gray-500">{course.lessons.length} lessons</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 font-medium">{completedTopics}/{totalTopics}</span>
                    {expandedCourses[course.name] ? (
                      <HiChevronDown size={18} className="text-gray-600" />
                    ) : (
                      <HiChevronRight size={18} className="text-gray-600" />
                    )}
                  </div>
                </button>

                {expandedCourses[course.name] && (
                  <div className="bg-gray-50 border-t border-gray-200">
                    {course.lessons.map((lesson) => {
                      const lessonCompleted = lesson.topics.every(t => t.completed);
                      const lessonInProgress = lesson.topics.some(t => t.completed) && !lessonCompleted;

                      return (
                        <div key={lesson.name} className="border-b border-gray-200 last:border-b-0">
                          <button
                            onClick={() => {
                              toggleLesson(lesson.name);
                              onLessonSelect(course.name, lesson.name);
                            }}
                            className={`w-full px-4 py-2.5 flex items-center justify-between hover:bg-gray-100 transition-colors ${
                              selectedLesson === lesson.name ? 'bg-blue-50' : ''
                            }`}
                          >
                            <div className="flex items-center gap-2 flex-1">
                              {lessonCompleted ? (
                                <HiCheckCircle className="text-green-500 flex-shrink-0" size={18} />
                              ) : lessonInProgress ? (
                                <div className="w-4 h-4 border-2 border-blue-500 rounded-full flex-shrink-0 flex items-center justify-center">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                </div>
                              ) : (
                                <div className="w-4 h-4 border-2 border-gray-300 rounded-full flex-shrink-0" />
                              )}
                              <span className="text-sm font-medium text-gray-700">{lesson.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500">
                                {lesson.topics.filter(t => t.completed).length}/{lesson.topics.length}
                              </span>
                              {expandedLessons[lesson.name] ? (
                                <HiChevronDown size={16} />
                              ) : (
                                <HiChevronRight size={16} />
                              )}
                            </div>
                          </button>

                          {expandedLessons[lesson.name] && (
                            <div className="bg-white">
                              {lesson.topics.map((topic) => (
                                <button
                                  key={topic.name}
                                  onClick={() => onTopicSelect(topic.name)}
                                  className={`w-full px-6 pl-12 py-2 text-left text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 border-l-2 ${
                                    selectedTopic === topic.name
                                      ? 'bg-blue-50 text-blue-700 border-blue-600'
                                      : 'text-gray-600 border-transparent'
                                  }`}
                                >
                                  {topic.completed ? (
                                    <HiCheckCircle className="text-green-500 flex-shrink-0" size={16} />
                                  ) : (
                                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full flex-shrink-0" />
                                  )}
                                  <span className="flex-1">{topic.name}</span>
                                  <span className="text-xs text-gray-400">{topic.duration}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

// Main Layout Component
const LearningDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedLesson, setSelectedLesson] = useState('Lesson 1: Introduction to Java');
  const [selectedTopic, setSelectedTopic] = useState('What is Java?');

  const user: User = {
    name: "John Smith Doe",
    email: "john@example.com"
  };

  const courses: Course[] = [
    {
      name: 'Java Fundamentals',
      icon: HiOutlineBookOpen,
      color: 'bg-blue-500',
      lessons: [
        {
          name: 'Lesson 1: Introduction to Java',
          topics: [
            { name: 'What is Java?', duration: '5 min', completed: true },
            { name: 'History of Java', duration: '8 min', completed: true },
            { name: 'Features of Java', duration: '10 min', completed: false },
            { name: 'Java Environment Setup', duration: '15 min', completed: false },
          ]
        },
        {
          name: 'Lesson 2: JDK, JRE, JVM',
          topics: [
            { name: 'Understanding JVM', duration: '12 min', completed: false },
            { name: 'Java Runtime Environment', duration: '10 min', completed: false },
            { name: 'Java Development Kit', duration: '8 min', completed: false },
            { name: 'How Java Code Executes', duration: '15 min', completed: false },
          ]
        },
        {
          name: 'Lesson 3: Variables & Data Types',
          topics: [
            { name: 'Primitive Data Types', duration: '12 min', completed: false },
            { name: 'Reference Data Types', duration: '10 min', completed: false },
            { name: 'Variable Declaration', duration: '8 min', completed: false },
            { name: 'Type Casting', duration: '10 min', completed: false },
          ]
        },
      ]
    },
    {
      name: 'Core Java',
      icon: HiOutlineCode,
      color: 'bg-purple-500',
      lessons: [
        {
          name: 'Lesson 1: OOP Concepts',
          topics: [
            { name: 'Introduction to OOP', duration: '10 min', completed: false },
            { name: 'Classes and Objects', duration: '15 min', completed: false },
            { name: 'Constructors', duration: '12 min', completed: false },
          ]
        },
        {
          name: 'Lesson 2: Inheritance',
          topics: [
            { name: 'What is Inheritance?', duration: '10 min', completed: false },
            { name: 'Types of Inheritance', duration: '15 min', completed: false },
            { name: 'Super Keyword', duration: '8 min', completed: false },
          ]
        },
      ]
    },
    {
      name: 'Java Collections',
      icon: HiOutlineDatabase,
      color: 'bg-green-500',
      lessons: [
        {
          name: 'Lesson 1: Collections Framework',
          topics: [
            { name: 'List Interface', duration: '12 min', completed: false },
            { name: 'Set Interface', duration: '10 min', completed: false },
            { name: 'Map Interface', duration: '15 min', completed: false },
          ]
        },
      ]
    },
    {
      name: 'Concurrency',
      icon: HiOutlineLightningBolt,
      color: 'bg-yellow-500',
      lessons: [
        {
          name: 'Lesson 1: Threads',
          topics: [
            { name: 'Creating Threads', duration: '15 min', completed: false },
            { name: 'Thread Lifecycle', duration: '12 min', completed: false },
          ]
        },
      ]
    },
    {
      name: 'Spring Framework',
      icon: HiOutlineChip,
      color: 'bg-red-500',
      lessons: [
        {
          name: 'Lesson 1: Spring Core',
          topics: [
            { name: 'Dependency Injection', duration: '20 min', completed: false },
            { name: 'Spring Beans', duration: '15 min', completed: false },
          ]
        },
      ]
    },
  ];

  const handleLessonSelect = (courseName: string, lessonName: string) => {
    setSelectedLesson(lessonName);
  };

  const handleTopicSelect = (topicName: string) => {
    setSelectedTopic(topicName);
  };

  // Find current lesson and topic details
  let currentLesson: Lesson | null = null;
  let currentTopic: Topic | null = null;
  
  for (const course of courses) {
    const lesson = course.lessons.find(l => l.name === selectedLesson);
    if (lesson) {
      currentLesson = lesson;
      currentTopic = lesson.topics.find(t => t.name === selectedTopic) || null;
      break;
    }
  }

  const children = (
    <div className="max-w-5xl">
      {/* Topic Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <span>{selectedLesson}</span>
          <HiChevronRight size={16} />
          <span className="text-blue-600 font-medium">{selectedTopic}</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{selectedTopic}</h1>
        {currentTopic && (
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <HiOutlineClock size={16} />
              <span>{currentTopic.duration}</span>
            </div>
            {currentTopic.completed && (
              <div className="flex items-center gap-1 text-green-600">
                <HiCheckCircle size={16} />
                <span>Completed</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Video/Content Area */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl aspect-video mb-6 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-opacity-30 transition-all cursor-pointer">
            <HiOutlinePlay size={32} />
          </div>
          <p className="text-lg font-medium">Video Content Area</p>
          <p className="text-sm text-gray-300 mt-2">Your video player will be here</p>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <HiOutlineDocumentText className="text-blue-600" size={24} />
              <h2 className="text-xl font-semibold text-gray-800">Lesson Overview</h2>
            </div>
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                This comprehensive lesson covers <strong>{selectedTopic}</strong> in detail. 
                You'll learn the fundamental concepts, best practices, and practical applications.
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">What you'll learn:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Core concepts and terminology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Real-world examples and use cases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Best practices and common pitfalls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Hands-on coding exercises</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lesson List Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sticky top-6">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <HiOutlineBookOpen size={20} />
              Lesson Topics
            </h3>
            <div className="space-y-2">
              {currentLesson?.topics.map((topic, index) => (
                <button
                  key={topic.name}
                  onClick={() => handleTopicSelect(topic.name)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    selectedTopic === topic.name
                      ? 'bg-blue-50 border-2 border-blue-500'
                      : 'bg-gray-50 border-2 border-transparent hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start gap-2 mb-1">
                    {topic.completed ? (
                      <HiCheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    ) : (
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-semibold text-gray-400">{index + 1}</span>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium ${
                        selectedTopic === topic.name ? 'text-blue-700' : 'text-gray-700'
                      }`}>
                        {topic.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">{topic.duration}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                <HiCheckCircle size={18} />
                Mark as Complete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <style>{`
        .noscrollbar::-webkit-scrollbar {
          display: none;
        }
        .noscrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <Header user={user} onMenuToggle={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
      
      <div className="flex flex-1 pt-16">
        <Sidebar 
          courses={courses} 
          isOpen={sidebarOpen} 
          selectedLesson={selectedLesson}
          selectedTopic={selectedTopic}
          onLessonSelect={handleLessonSelect}
          onTopicSelect={handleTopicSelect}
        />
        
        <main className="flex-1 overflow-y-auto p-6 lg:p-8" style={{ height: 'calc(100vh - 4rem)' }}>
          {children}
        </main>
      </div>

      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[5] lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default LearningDashboard;