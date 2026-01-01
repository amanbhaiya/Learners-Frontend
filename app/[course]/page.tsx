'use client';

import React, { useEffect, useRef, useState } from 'react';
import { 
  FiClock, 
  FiTrendingUp, 
  FiCode, 
  FiMenu, 
  FiX, 
  FiLogOut, 
  FiUser, 
  FiBookOpen, 
  FiSettings, 
  FiBell 
} from 'react-icons/fi';

// Types/Interfaces
interface Language {
  id: string;
  name: string;
  color: string;
}

interface Course {
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  progress: number;
  icon: string;
  language: string;
}

interface User {
  name: string;
  email: string;
}

// Wave Canvas Background Component
const WaveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawWave = (offset: number, amplitude: number, frequency: number, opacity: number) => {
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + Math.sin((x + offset) * frequency) * amplitude;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawWave(time * 0.5, 20, 0.02, 0.1);
      drawWave(time * 0.7, 15, 0.03, 0.15);
      drawWave(time * 1, 10, 0.04, 0.2);
      
      time += 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

// Header Component for Logged In Users
interface LoggedInHeaderProps {
  user: User;
  onLogout: () => void;
}

const LoggedInHeader: React.FC<LoggedInHeaderProps> = ({ user, onLogout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <FiBookOpen className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900 hidden sm:block">LearnHub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">My Courses</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">Browse</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">Progress</a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Notifications */}
            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
              <FiBell className="w-5 h-5" />
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="hidden sm:block text-sm font-medium text-gray-700">{user.name}</span>
              </button>

              {/* Dropdown Menu */}
              {profileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50">
                    <FiUser className="w-4 h-4" />
                    Profile
                  </a>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50">
                    <FiSettings className="w-4 h-4" />
                    Settings
                  </a>
                  <hr className="my-2" />
                  <button
                    onClick={onLogout}
                    className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 w-full text-left"
                  >
                    <FiLogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-2">
              <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">My Courses</a>
              <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Browse</a>
              <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Progress</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Header Component for Non-Logged In Users
interface PublicHeaderProps {
  onLogin: () => void;
  onSignup: () => void;
}

const PublicHeader: React.FC<PublicHeaderProps> = ({ onLogin, onSignup }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <FiBookOpen className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900 hidden sm:block">LearnHub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">Courses</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">Pricing</a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onLogin}
              className="hidden sm:block px-4 py-2 text-gray-700 font-medium hover:text-blue-600 transition"
            >
              Login
            </button>
            <button
              onClick={onSignup}
              className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-2 mb-4">
              <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Courses</a>
              <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">About</a>
              <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Pricing</a>
            </nav>
            <div className="flex flex-col gap-2 px-4">
              <button
                onClick={onLogin}
                className="w-full px-4 py-2 text-gray-700 font-medium border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Login
              </button>
              <button
                onClick={onSignup}
                className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Progress Bar Component
interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

// Language Capsule Component
interface LanguageCapsuleProps {
  language: Language;
  isActive: boolean;
  onClick: () => void;
}

const LanguageCapsule: React.FC<LanguageCapsuleProps> = ({ language, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap ${
        isActive
          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
          : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-600 hover:text-blue-600 hover:shadow-md'
      }`}
    >
      <span className="flex items-center gap-2">
        <FiCode className="w-4 h-4" />
        {language.name}
      </span>
    </button>
  );
};

// Course Card Component
interface CourseCardProps {
  course: Course;
  isLoggedIn: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, isLoggedIn }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      {/* Wave Background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <WaveBackground />
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-4 sm:p-6 flex flex-col flex-1">
        {/* Icon and Difficulty Badge */}
        <div className="flex items-start justify-between mb-4">
          <div 
            className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
            dangerouslySetInnerHTML={{ __html: course.icon }}
          />
          <span className={`px-2 sm:px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
            course.difficulty === 'beginner' 
              ? 'bg-green-100 text-green-700' 
              : course.difficulty === 'intermediate'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-red-100 text-red-700'
          }`}>
            {course.difficulty.charAt(0).toUpperCase() + course.difficulty.slice(1)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {course.description}
        </p>

        {/* Duration */}
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <FiClock className="w-4 h-4 flex-shrink-0" />
          <span className="text-xs sm:text-sm font-medium">
            {course.duration}
          </span>
        </div>

        {/* Progress Section - Only for logged in users */}
        {isLoggedIn && (
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FiTrendingUp className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">Progress</span>
              </div>
              <span className="text-xs sm:text-sm font-bold text-blue-600">
                {course.progress}%
              </span>
            </div>
            <ProgressBar percentage={course.progress} />
          </div>
        )}

        {/* CTA Button */}
        <button className="w-full mt-auto px-4 py-2 sm:py-2.5 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors duration-200">
          {isLoggedIn ? (course.progress > 0 ? 'Continue Learning' : 'Start Learning') : 'View Course'}
        </button>
      </div>
    </div>
  );
};

// Filter Tabs Component
interface FilterTabsProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ activeFilter, setActiveFilter }) => {
  const filters = ['all', 'beginner', 'intermediate', 'advanced'];

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-6 sm:mb-8">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 sm:px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
            activeFilter === filter
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-600 hover:text-blue-600'
          }`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

// Stats Card Component
interface StatsCardProps {
  icon: React.ElementType;
  label: string;
  value: string | number;
  color: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon: Icon, label, value, color }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${color} flex items-center justify-center flex-shrink-0`}>
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        <div className="min-w-0">
          <p className="text-xs sm:text-sm text-gray-600 mb-1">{label}</p>
          <p className="text-xl sm:text-2xl font-bold text-gray-900 truncate">{value}</p>
        </div>
      </div>
    </div>
  );
};

// Main Courses Page Component
const Courses: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeLanguage, setActiveLanguage] = useState<string>('java');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [user] = useState<User>({ name: 'John Doe', email: 'john@example.com' });

  const handleLogin = () => {
    console.log('Login clicked');
  };

  const handleSignup = () => {
    console.log('Signup clicked');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log('Logout clicked');
  };

  const languages: Language[] = [
    { id: 'java', name: 'Java', color: 'bg-orange-500' },
    { id: 'python', name: 'Python', color: 'bg-blue-500' },
    { id: 'javascript', name: 'JavaScript', color: 'bg-yellow-500' },
    { id: 'typescript', name: 'TypeScript', color: 'bg-blue-600' },
    { id: 'csharp', name: 'C#', color: 'bg-purple-500' },
    { id: 'go', name: 'Go', color: 'bg-cyan-500' },
    { id: 'rust', name: 'Rust', color: 'bg-orange-600' },
    { id: 'kotlin', name: 'Kotlin', color: 'bg-purple-600' }
  ];

  const courses: Course[] = [
    {
      title: "Master Java Fundamentals",
      description: "Learn the core concepts of Java programming including variables, data types, operators, control flow, and basic syntax to build a strong foundation.",
      difficulty: "beginner",
      duration: "4-6 weeks",
      progress: 65,
      language: "java",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10" /><text x="12" y="16" text-anchor="middle" font-size="8" font-weight="bold" fill="currentColor" stroke="none">JB</text></svg>`
    },
    {
      title: "Object-Oriented Programming in Java",
      description: "Dive deep into OOP principles including classes, objects, inheritance, polymorphism, encapsulation, and abstraction to write modular and reusable code.",
      difficulty: "beginner",
      duration: "5-7 weeks",
      progress: 45,
      language: "java",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10" /><text x="12" y="16" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">OOP</text></svg>`
    },
    {
      title: "Spring Framework Essentials",
      description: "Learn the Spring Framework including dependency injection, Spring MVC, AOP, and building enterprise-level Java applications with best practices.",
      difficulty: "intermediate",
      duration: "6-8 weeks",
      progress: 10,
      language: "java",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10" /><text x="12" y="16" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">SF</text></svg>`
    },
    {
      title: "Python Fundamentals",
      description: "Master Python basics including syntax, data structures, functions, and modules to start your programming journey.",
      difficulty: "beginner",
      duration: "3-4 weeks",
      progress: 80,
      language: "python",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10" /><text x="12" y="16" text-anchor="middle" font-size="8" font-weight="bold" fill="currentColor" stroke="none">PY</text></svg>`
    },
    {
      title: "TypeScript Fundamentals",
      description: "Learn TypeScript basics including types, interfaces, generics, and how to build type-safe applications.",
      difficulty: "beginner",
      duration: "3-4 weeks",
      progress: 70,
      language: "typescript",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10" /><text x="12" y="16" text-anchor="middle" font-size="8" font-weight="bold" fill="currentColor" stroke="none">TS</text></svg>`
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesLanguage = course.language === activeLanguage;
    const matchesDifficulty = activeFilter === 'all' || course.difficulty === activeFilter;
    return matchesLanguage && matchesDifficulty;
  });

  const languageCourses = courses.filter(c => c.language === activeLanguage);
  const totalCourses = languageCourses.length;
  const inProgressCourses = languageCourses.filter(c => c.progress > 0 && c.progress < 100).length;
  const completedCourses = languageCourses.filter(c => c.progress === 100).length;
  const avgProgress = totalCourses > 0 
    ? Math.round(languageCourses.reduce((acc, c) => acc + c.progress, 0) / totalCourses)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {isLoggedIn ? (
        <LoggedInHeader user={user} onLogout={handleLogout} />
      ) : (
        <PublicHeader onLogin={handleLogin} onSignup={handleSignup} />
      )}

      <div className="py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              {isLoggedIn ? 'My Learning Path' : 'Explore Our Courses'}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              {isLoggedIn 
                ? 'Continue your learning journey and track your progress'
                : 'Choose your programming language and start your learning journey'}
            </p>
          </div>

          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 text-center">
              Select Programming Language
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {languages.map((language) => (
                <LanguageCapsule
                  key={language.id}
                  language={language}
                  isActive={activeLanguage === language.id}
                  onClick={() => setActiveLanguage(language.id)}
                />
              ))}
            </div>
          </div>

          {isLoggedIn && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <StatsCard 
                icon={FiTrendingUp}
                label="Total Courses"
                value={totalCourses}
                color="bg-blue-600"
              />
              <StatsCard 
                icon={FiClock}
                label="In Progress"
                value={inProgressCourses}
                color="bg-yellow-600"
              />
              <StatsCard 
                icon={FiTrendingUp}
                label="Completed"
                value={completedCourses}
                color="bg-green-600"
              />
              <StatsCard 
                icon={FiTrendingUp}
                label="Avg Progress"
                value={`${avgProgress}%`}
                color="bg-purple-600"
              />
            </div>
          )}

          <FilterTabs activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredCourses.map((course, index) => (
              <CourseCard key={index} course={course} isLoggedIn={isLoggedIn} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-base sm:text-lg">No courses found for this selection.</p>
            </div>
          )}

          <div className="fixed bottom-4 right-4 z-50">
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-900 text-sm font-medium"
            >
              Toggle: {isLoggedIn ? 'Logged In' : 'Not Logged In'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;