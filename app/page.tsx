'use client';

import Logo from '@/components/Logo';
import React, { useEffect, useRef, useState } from 'react';
import { 
  FiCode, 
  FiTrendingUp, 
  FiAward, 
  FiUsers, 
  FiCheckCircle,
  FiArrowRight,
  FiPlayCircle,
  FiBook,
  FiStar,
  FiMenu,
  FiX
} from 'react-icons/fi';


// Animated Wave Background
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
      
      drawWave(time * 0.5, 30, 0.015, 0.1);
      drawWave(time * 0.7, 25, 0.02, 0.15);
      drawWave(time * 1, 20, 0.025, 0.2);
      
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
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.4 }}
    />
  );
};

// Header Component
const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo className="inline-flex"  />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition">Features</a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600 font-medium transition">Courses</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition">Testimonials</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium transition">Pricing</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-gray-700 font-medium hover:text-blue-600 transition">
              Login
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-md">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-2 mb-4">
              <a href="#features" className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Features</a>
              <a href="#courses" className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Courses</a>
              <a href="#testimonials" className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Testimonials</a>
              <a href="#pricing" className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Pricing</a>
            </nav>
            <div className="flex flex-col gap-2 px-4">
              <button className="w-full px-4 py-2 text-gray-700 font-medium border border-gray-300 rounded-lg hover:bg-gray-50">
                Login
              </button>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section
const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <WaveBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <FiStar className="w-4 h-4" />
              <span>Join 50,000+ Learners Worldwide</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Master Programming
              <br />
              <span className="text-blue-600">One Course</span> at a Time
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Learn Java, Python, JavaScript and more with interactive courses designed by industry experts. Start your coding journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-lg hover:shadow-xl">
                Start Learning Free
                <FiArrowRight className="w-5 h-5" />
              </button>
              
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition">
                <FiPlayCircle className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Active Learners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Courses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">4.9★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <svg viewBox="0 0 400 300" className="w-full h-auto">
                {/* Code Editor Window */}
                <rect x="20" y="20" width="360" height="260" rx="12" fill="white" />
                
                {/* Window Header */}
                <rect x="20" y="20" width="360" height="40" rx="12" fill="#1e293b" />
                <circle cx="45" cy="40" r="6" fill="#ef4444" />
                <circle cx="65" cy="40" r="6" fill="#f59e0b" />
                <circle cx="85" cy="40" r="6" fill="#10b981" />
                
                {/* Code Lines */}
                <rect x="40" y="80" width="100" height="8" rx="4" fill="#3b82f6" opacity="0.6" />
                <rect x="40" y="100" width="140" height="8" rx="4" fill="#8b5cf6" opacity="0.6" />
                <rect x="60" y="120" width="120" height="8" rx="4" fill="#06b6d4" opacity="0.6" />
                <rect x="60" y="140" width="90" height="8" rx="4" fill="#10b981" opacity="0.6" />
                <rect x="40" y="160" width="160" height="8" rx="4" fill="#f59e0b" opacity="0.6" />
                
                {/* Floating Elements */}
                <circle cx="320" cy="120" r="30" fill="#3b82f6" opacity="0.2" />
                <circle cx="340" cy="200" r="25" fill="#8b5cf6" opacity="0.2" />
                <circle cx="280" cy="180" r="20" fill="#06b6d4" opacity="0.2" />
                
                {/* Success Checkmark */}
                <circle cx="300" cy="220" r="35" fill="#10b981" />
                <path d="M 285 220 L 295 230 L 315 210" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 animate-bounce">
                <div className="flex items-center gap-2">
                  <FiTrendingUp className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-gray-900">Progress: 85%</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center gap-2">
                  <FiAward className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold text-gray-900">5 Certificates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: FiCode,
      title: "Interactive Coding",
      description: "Practice coding in real-time with our interactive code editor and instant feedback."
    },
    {
      icon: FiBook,
      title: "Structured Curriculum",
      description: "Follow a carefully designed learning path from beginner to advanced levels."
    },
    {
      icon: FiAward,
      title: "Earn Certificates",
      description: "Get recognized for your achievements with industry-recognized certificates."
    },
    {
      icon: FiUsers,
      title: "Community Support",
      description: "Join thousands of learners and get help from our supportive community."
    },
    {
      icon: FiTrendingUp,
      title: "Track Progress",
      description: "Monitor your learning journey with detailed analytics and progress tracking."
    },
    {
      icon: FiCheckCircle,
      title: "Lifetime Access",
      description: "Get unlimited access to all course materials and future updates."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">LEARNERS</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to master programming and advance your career
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Popular Courses Section
const PopularCoursesSection: React.FC = () => {
  const courses = [
    {
      title: "Java Fundamentals",
      description: "Master Java basics and OOP concepts",
      duration: "4-6 weeks",
      level: "Beginner",
      students: "12,450",
      rating: 4.8,
      icon: "JV"
    },
    {
      title: "Python for Data Science",
      description: "Learn Python, NumPy, Pandas & more",
      duration: "8-10 weeks",
      level: "Intermediate",
      students: "18,230",
      rating: 4.9,
      icon: "PY"
    },
    {
      title: "JavaScript & React",
      description: "Build modern web applications",
      duration: "6-8 weeks",
      level: "Intermediate",
      students: "15,670",
      rating: 4.7,
      icon: "JS"
    }
  ];

  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Popular Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start with our most loved courses by thousands of students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-black text-blue-600">{course.icon}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <FiStar className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold text-gray-900">{course.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{course.duration}</span>
                  <span>{course.students} students</span>
                </div>
                
                <button className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition">
            View All Courses
            <FiArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <WaveBackground />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Join thousands of students already learning on LEARNERS platform
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition shadow-lg">
            Get Started Free
            <FiArrowRight className="w-5 h-5" />
          </button>
          
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <h2 className="text-3xl font-black">
                <span className='text-blue-500'>LEARN</span>
                <span className="text-red-600">ERS</span>
              </h2>
            </div>
            <p className="text-gray-400">
              Empowering learners worldwide with quality programming education.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Courses</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Java</a></li>
              <li><a href="#" className="hover:text-white transition">Python</a></li>
              <li><a href="#" className="hover:text-white transition">JavaScript</a></li>
              <li><a href="#" className="hover:text-white transition">TypeScript</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LEARNERS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main Landing Page Component
const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PopularCoursesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;