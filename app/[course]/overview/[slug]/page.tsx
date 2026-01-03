"use client"
import Badge from '@/components/Badge';
import Chip from '@/components/Chip';
import Hero from '@/components/overview/Hero';
import StarRating from '@/components/StarRating';
import WaveBackgroundAnimation from '@/components/WaveBackgroundAnimation';
import { useState } from 'react';
import { BiBarChart, BiShield } from 'react-icons/bi';
import {
    FaClock, FaUsers, FaAward, FaBook, FaVideo, FaFileAlt, FaDownload,
    FaCheckCircle, FaStar, FaChartLine, FaMobileAlt, FaChartBar,
    FaPlayCircle, FaComments, FaBolt, FaShieldAlt, FaInfinity, FaStarHalfAlt,
    FaChevronDown, FaChevronRight,
    FaStarHalf,
    FaBookOpen
} from 'react-icons/fa';
import { FiFileText, FiMessageCircle, FiSmartphone, FiTrendingUp, FiZap } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
interface PageProps {
    params: { slug: string }
}

// Enterprise-level comprehensive course data structure
const courseDatabase = {
    'web-development-bootcamp': {
        id: 'WDB-2024-001',
        title: "Complete Web Development Bootcamp 2024",
        subtitle: "From Zero to Full-Stack Hero - Build Real-World Projects",
        instructor: {
            name: "Sarah Johnson",
            title: "Senior Full-Stack Developer",
            company: "Tech Giants Inc.",
            bio: "15+ years of experience in web development. Former lead developer at Google and Facebook.",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
            courses: 8,
            students: 125000,
            rating: 4.9
        },
        pricing: {
            original: 199.99,
            current: 89.99,
            discount: 55,
            currency: "USD",
            dealEndsIn: "2 days"
        },
        ratings: {
            average: 3.8,
            total: 28547,
            distribution: {
                5: 19245,
                4: 7128,
                3: 1542,
                2: 428,
                1: 204
            }
        },
        enrollment: {
            students: 87420,
            completionRate: 78,
            avgCompletionTime: "8 weeks"
        },
        metadata: {
            level: "All Levels",
            duration: "52.5 hours",
            totalLectures: 287,
            language: "English",
            subtitles: ["English", "Spanish", "French", "German", "Chinese"],
            lastUpdated: "December 2024",
            category: "Development",
            subcategory: "Web Development",
            tags: ["JavaScript", "React", "Node.js", "Full-Stack", "MongoDB"]
        },
        features: {
            videoContent: "52.5 hours on-demand video",
            articles: 45,
            downloadableResources: 128,
            exercises: 95,
            codingProjects: 12,
            mobileAccess: true,
            tvAccess: true,
            certificate: true,
            lifetimeAccess: true,
            moneyBackGuarantee: "30-day",
            support: "24/7 Q&A support"
        },
        description: {
            short: "Master modern web development with hands-on projects, real-world applications, and expert guidance. Build professional websites and web applications from scratch.",
            long: [
                "Welcome to the most comprehensive web development course available online. This course is designed to take you from absolute beginner to job-ready developer.",
                "You'll learn by building 12+ real-world projects including e-commerce platforms, social media apps, and enterprise dashboards. Each project is designed to teach you specific skills that employers are looking for.",
                "Our curriculum is constantly updated to reflect the latest industry trends and best practices. You'll learn modern frameworks, tools, and workflows used by top tech companies.",
                "Join over 87,000 students who have transformed their careers through this course. With lifetime access and regular updates, you'll always stay current with the latest technologies."
            ]
        },
        whatYouLearn: [
            "Build production-ready web applications using React, Vue, and Angular",
            "Master backend development with Node.js, Express, and RESTful APIs",
            "Work with databases: MongoDB, PostgreSQL, MySQL, and Redis",
            "Implement authentication, authorization, and security best practices",
            "Deploy applications to AWS, Heroku, Vercel, and other cloud platforms",
            "Write clean, maintainable code using design patterns and principles",
            "Use Git, GitHub, and modern CI/CD workflows for collaboration",
            "Build responsive, mobile-first interfaces with CSS Grid and Flexbox",
            "Implement real-time features with WebSockets and Socket.io",
            "Optimize performance, SEO, and accessibility for production apps",
            "Work with third-party APIs and integrate payment systems",
            "Debug and test applications using modern testing frameworks"
        ],
        requirements: [
            "A computer (Windows, Mac, or Linux) with internet connection",
            "No prior programming experience required - we start from scratch",
            "Enthusiasm to learn and dedication to practice (15-20 hours per week recommended)",
            "Willingness to challenge yourself and build real projects"
        ],
        targetAudience: [
            "Complete beginners who want to learn web development from scratch",
            "Developers looking to upgrade their skills to modern frameworks",
            "Career changers seeking to enter the tech industry",
            "Entrepreneurs who want to build their own web applications",
            "Students preparing for web development internships or jobs",
            "Freelancers wanting to expand their service offerings"
        ],
        curriculum: [
            {
                section: "Foundation: HTML, CSS & JavaScript Fundamentals",
                lectures: 45,
                duration: "8h 30m",
                topics: [
                    "HTML5 semantic elements and accessibility",
                    "CSS3: Flexbox, Grid, animations, and transitions",
                    "JavaScript ES6+: variables, functions, arrays, objects",
                    "DOM manipulation and event handling",
                    "Responsive design and mobile-first approach"
                ],
                projects: ["Portfolio Website", "Landing Page with Animations"]
            },
            {
                section: "Advanced CSS & Modern Layouts",
                lectures: 32,
                duration: "5h 45m",
                topics: [
                    "CSS preprocessors: SASS/SCSS",
                    "CSS frameworks: Tailwind CSS, Bootstrap 5",
                    "CSS-in-JS and styled-components",
                    "Advanced animations and micro-interactions",
                    "Design systems and component libraries"
                ],
                projects: ["E-commerce Product Page", "Dashboard UI"]
            },
            {
                section: "JavaScript Deep Dive & Async Programming",
                lectures: 38,
                duration: "7h 15m",
                topics: [
                    "Closures, prototypes, and the 'this' keyword",
                    "Promises, async/await, and error handling",
                    "Fetch API and working with REST APIs",
                    "Local storage and session management",
                    "JavaScript design patterns"
                ],
                projects: ["Weather App", "Task Management System"]
            },
            {
                section: "React.js - Modern Frontend Development",
                lectures: 52,
                duration: "10h 20m",
                topics: [
                    "Components, props, and state management",
                    "React Hooks: useState, useEffect, useContext, custom hooks",
                    "React Router and navigation",
                    "State management with Redux Toolkit and Zustand",
                    "React Query for server state management",
                    "Performance optimization and code splitting"
                ],
                projects: ["Social Media Clone", "Real-time Chat App", "Netflix Clone"]
            },
            {
                section: "Backend Development with Node.js & Express",
                lectures: 48,
                duration: "9h 30m",
                topics: [
                    "Node.js fundamentals and npm ecosystem",
                    "Building RESTful APIs with Express.js",
                    "Middleware, routing, and error handling",
                    "Authentication with JWT and OAuth 2.0",
                    "File uploads and image processing",
                    "Rate limiting and security best practices"
                ],
                projects: ["Blog API", "E-commerce Backend"]
            },
            {
                section: "Databases & Data Modeling",
                lectures: 36,
                duration: "6h 45m",
                topics: [
                    "MongoDB and Mongoose ODM",
                    "PostgreSQL and SQL fundamentals",
                    "Database design and normalization",
                    "Indexing and query optimization",
                    "Redis for caching and sessions",
                    "Database migrations and seeding"
                ],
                projects: ["User Management System", "Analytics Dashboard"]
            },
            {
                section: "Full-Stack Integration & Real-Time Apps",
                lectures: 28,
                duration: "5h 30m",
                topics: [
                    "Connecting frontend and backend",
                    "WebSockets and Socket.io",
                    "Real-time notifications and updates",
                    "File upload to cloud storage (AWS S3, Cloudinary)",
                    "Payment integration with Stripe",
                    "Email services and notifications"
                ],
                projects: ["Real-time Collaboration Tool", "Video Streaming Platform"]
            },
            {
                section: "Testing, Deployment & DevOps",
                lectures: 28,
                duration: "4h 45m",
                topics: [
                    "Unit testing with Jest",
                    "Integration and E2E testing with Cypress",
                    "CI/CD with GitHub Actions",
                    "Docker containerization basics",
                    "Deploying to AWS, Vercel, Netlify, Heroku",
                    "Domain setup and SSL certificates",
                    "Monitoring and error tracking"
                ],
                projects: ["Deploy Production App", "Setup CI/CD Pipeline"]
            }
        ],
        testimonials: [
            {
                name: "Michael Chen",
                role: "Software Engineer at Amazon",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
                rating: 5,
                date: "2 weeks ago",
                text: "This course changed my life! I went from knowing nothing about coding to landing a job at Amazon. The projects are incredibly practical and the instructor explains complex concepts in a way that's easy to understand."
            },
            {
                name: "Emma Rodriguez",
                role: "Freelance Developer",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
                rating: 5,
                date: "1 month ago",
                text: "Best investment I've made in my career. I'm now making $5000/month as a freelance developer. The real-world projects gave me a portfolio that helped me land clients immediately."
            },
            {
                name: "David Kumar",
                role: "Full-Stack Developer",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
                rating: 5,
                date: "3 weeks ago",
                text: "Comprehensive and up-to-date. Unlike other courses that teach outdated technologies, this one focuses on what companies actually use in 2024. Highly recommended!"
            }
        ],
        faq: [
            {
                question: "Is this course suitable for complete beginners?",
                answer: "Absolutely! This course is designed for complete beginners with no programming experience. We start from the very basics and gradually build up to advanced concepts."
            },
            {
                question: "How long will it take to complete the course?",
                answer: "The average completion time is 8 weeks if you dedicate 15-20 hours per week. However, you have lifetime access, so you can learn at your own pace."
            },
            {
                question: "Will I get a certificate after completion?",
                answer: "Yes! Upon completing the course, you'll receive a certificate of completion that you can share on LinkedIn and add to your resume."
            },
            {
                question: "What if I don't like the course?",
                answer: "We offer a 30-day money-back guarantee. If you're not satisfied with the course for any reason, you can request a full refund within 30 days of purchase."
            },
            {
                question: "Do you provide job assistance?",
                answer: "While we don't provide direct job placement, we offer career guidance, resume reviews, and interview preparation resources. We also have a dedicated community where students share job opportunities."
            }
        ],
        stats: {
            projectsBuilt: "12+",
            codingExercises: "95+",
            quizzes: "45+",
            certificates: 1,
            avgJobSalary: "$75,000"
        }
    }
};

const Overview = ({ params }: PageProps) => {
    const [expandedSection, setExpandedSection] = useState<number | null>(null);
    const [showAllReviews, setShowAllReviews] = useState(false);
    const course = courseDatabase["web-development-bootcamp"];

    const calculatePercentage = (count: number, total: number) => {
        return ((count / total) * 100).toFixed(0);
    };

    return (
        <div className="flex flex-col w-full min-h-screen bg-gray-50">
            {/* Hero Section with Gradient */}
            <Hero course={course} />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* What You'll Learn - Enhanced Design */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <FiZap className="w-5 h-5 text-blue-600" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                    What you'll learn
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {course.whatYouLearn.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                                        <FaCheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Course Stats Banner */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {[
                                { label: "Projects", value: course.stats.projectsBuilt, icon: FaBookOpen },
                                { label: "Exercises", value: course.stats.codingExercises, icon: FiFileText },
                                { label: "Completion Rate", value: `${course.enrollment.completionRate}%`, icon: FiTrendingUp },
                                { label: "Avg. Salary", value: course.stats.avgJobSalary, icon: FaAward }
                            ].map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 border border-blue-100 text-center">
                                        <Icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                        <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Detailed Ratings Section */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Student feedback</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Left: Overall Rating */}
                                <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                                    <div className="text-6xl font-bold text-blue-600 mb-2">
                                        {course.ratings.average}
                                    </div>
                                    <div className="flex items-center gap-1 mb-2">
                                        <StarRating rating={course.ratings.average} />
                                    </div>
                                    <p className="text-gray-600 text-sm">Course Rating</p>
                                    <p className="text-gray-500 text-xs mt-1">
                                        {course.ratings.total.toLocaleString()} ratings
                                    </p>
                                </div>

                                {/* Right: Rating Distribution */}
                                <div className="space-y-3">
                                    {[5, 4, 3, 2, 1].map((star) => {
                                        const count = course.ratings.distribution[star as keyof typeof course.ratings.distribution];
                                        const percentage = calculatePercentage(count, course.ratings.total);
                                        return (
                                            <div key={star} className="flex items-center gap-3">
                                                <div className="flex items-center gap-1 w-20">
                                                    <FaStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                    <span className="text-sm font-medium text-gray-700">{star}</span>
                                                </div>
                                                <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                                                    <div
                                                        className="bg-yellow-400 h-full rounded-full transition-all"
                                                        style={{ width: `${percentage}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-sm text-gray-600 w-12 text-right">{percentage}%</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Course Content - Modern Accordion */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Course content</h2>
                                    <p className="text-sm text-gray-600">
                                        {course.curriculum.length} sections • {course.metadata.totalLectures} lectures • {course.metadata.duration} total
                                    </p>
                                </div>
                                <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                                    Expand all
                                </button>
                            </div>

                            <div className="space-y-3">
                                {course.curriculum.map((section, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors">
                                        <button
                                            onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                                            className="w-full bg-gray-50 hover:bg-gray-100 p-4 flex justify-between items-center transition-colors"
                                        >
                                            <div className="flex items-center gap-4 text-left flex-1">
                                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                                                        {section.section}
                                                    </h3>
                                                    <p className="text-xs text-gray-600">
                                                        {section.lectures} lectures • {section.duration}
                                                        {section.projects && ` • ${section.projects.length} projects`}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={`transform transition-transform ${expandedSection === index ? 'rotate-180' : ''}`}>
                                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </button>

                                        {expandedSection === index && (
                                            <div className="bg-white p-4 border-t border-gray-200">
                                                <div className="space-y-3">
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Topics covered:</h4>
                                                        <ul className="space-y-2">
                                                            {section.topics.map((topic, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                                                    <FaPlayCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                                                    {topic}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    {section.projects && section.projects.length > 0 && (
                                                        <div className="pt-3 border-t border-gray-100">
                                                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Projects:</h4>
                                                            <div className="flex flex-wrap gap-2">
                                                                {section.projects.map((project, idx) => (
                                                                    <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                                                        🚀 {project}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Requirements */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
                            <ul className="space-y-3">
                                {course.requirements.map((req, index) => (
                                    <li key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                                        <span className="text-gray-700">{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Description */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Description</h2>
                            <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 space-y-4">
                                {course.description.long.map((paragraph, index) => (
                                    <p key={index} className="leading-relaxed">{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        {/* Who This Course Is For */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Who this course is for</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {course.targetAudience.map((audience, index) => (
                                    <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-100">
                                        <FaUsers className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-700">{audience}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Student Reviews */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Student reviews</h2>
                            <div className="space-y-6">
                                {course.testimonials.slice(0, showAllReviews ? course.testimonials.length : 3).map((testimonial, index) => (
                                    <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                                        <div className="flex items-start gap-4">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="w-12 h-12 rounded-full border-2 border-blue-100"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                                    </div>
                                                    <span className="text-xs text-gray-500">{testimonial.date}</span>
                                                </div>
                                                <div className="flex items-center justify-center gap-1 mb-3">
                                                    <StarRating rating={testimonial.rating} />
                                                </div>
                                                <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {course.testimonials.length > 3 && (
                                <button
                                    onClick={() => setShowAllReviews(!showAllReviews)}
                                    className="mt-6 w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors"
                                >
                                    {showAllReviews ? 'Show less' : `Show all ${course.testimonials.length} reviews`}
                                </button>
                            )}
                        </div>

                        {/* FAQ */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {course.faq.map((item, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
                                        <h4 className="font-semibold text-gray-900 mb-2">{item.question}</h4>
                                        <p className="text-gray-700 text-sm leading-relaxed">{item.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Instructor Section */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your instructor</h2>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <img
                                    src={course.instructor.avatar}
                                    alt={course.instructor.name}
                                    className="w-32 h-32 rounded-full border-4 border-blue-100"
                                />
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{course.instructor.name}</h3>
                                    <p className="text-blue-600 font-semibold mb-3">{course.instructor.title}</p>
                                    <p className="text-gray-700 mb-4 leading-relaxed">{course.instructor.bio}</p>
                                    <div className="flex flex-wrap gap-4 text-sm">
                                        <div className="flex items-center gap-2">
                                            <FaStar className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                            <span className="font-semibold">{course.instructor.rating}</span>
                                            <span className="text-gray-600">Instructor rating</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaUsers className="w-4 h-4 text-blue-600" />
                                            <span className="font-semibold">{course.instructor.students.toLocaleString()}</span>
                                            <span className="text-gray-600">Students</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaBookOpen className="w-4 h-4 text-blue-600" />
                                            <span className="font-semibold">{course.instructor.courses}</span>
                                            <span className="text-gray-600">Courses</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Sticky Sidebar */}
                    <div className="hidden lg:block">
                        <div className="sticky top-6 space-y-6">
                            {/* Price Card */}
                            <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                                <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center relative group cursor-pointer">
                                    <FaPlayCircle className="w-20 h-20 text-white opacity-90 group-hover:scale-110 transition-transform" />
                                    <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded text-sm font-semibold">
                                        Preview this course
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-baseline gap-3 mb-2">
                                        <span className="text-4xl font-bold text-blue-600">${course.pricing.current}</span>
                                        <span className="text-xl text-gray-400 line-through">${course.pricing.original}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                                            {course.pricing.discount}% OFF
                                        </span>
                                        <span className="text-red-600 text-sm font-semibold flex items-center gap-1">
                                            <FaClock className="w-4 h-4" />
                                            {course.pricing.dealEndsIn} left!
                                        </span>
                                    </div>

                                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg mb-3">
                                        Enroll Now
                                    </button>
                                    <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors mb-4">
                                        Add to Cart
                                    </button>

                                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-6">
                                        <BiShield className="w-4 h-4" />
                                        <span>30-Day Money-Back Guarantee</span>
                                    </div>

                                    <div className="border-t border-gray-200 pt-6">
                                        <h3 className="font-semibold text-gray-900 mb-4">This course includes:</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 text-sm text-gray-700">
                                                <FaVideo className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                                <span>{course.features.videoContent}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-gray-700">
                                                <FiFileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                                <span>{course.features.articles} articles</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-gray-700">
                                                <FaDownload className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                                <span>{course.features.downloadableResources} resources</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-gray-700">
                                                <FiSmartphone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                                <span>Access on mobile and TV</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-gray-700">
                                                <FaInfinity className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                                <span>Lifetime access</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-gray-700">
                                                <FaAward className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                                <span>Certificate of completion</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-gray-700">
                                                <FiMessageCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                                <span>24/7 Q&A support</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Info Card */}
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                                <h3 className="font-semibold text-gray-900 mb-4">Course highlights</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-700">Skill level</span>
                                        <span className="font-semibold text-gray-900">{course.metadata.level}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-700">Students enrolled</span>
                                        <span className="font-semibold text-gray-900">{course.enrollment.students.toLocaleString()}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-700">Languages</span>
                                        <span className="font-semibold text-gray-900">{course.metadata.subtitles.length}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-700">Completion rate</span>
                                        <span className="font-semibold text-green-600">{course.enrollment.completionRate}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom CTA - Mobile */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 p-4 shadow-2xl z-50">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <div className="text-3xl font-bold text-blue-600">${course.pricing.current}</div>
                        <div className="text-xs text-gray-500 line-through">${course.pricing.original}</div>
                    </div>
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all shadow-lg">
                        Enroll Now
                    </button>
                </div>
            </div>

            {/* Bottom Padding for Mobile CTA */}
            <div className="lg:hidden h-20"></div>
        </div>
    );
};

export default Overview;