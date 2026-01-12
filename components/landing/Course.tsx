import { Course } from "@/lib/interfaces";
import CourseCard from "@/components/landing/CourseCard";
import Button from "../form/Button";
import { FiArrowRight } from "react-icons/fi";

const Courses = ({ courses }: { courses: Course[] }) => {

    return (
        <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">Popular Courses</h2>
                    <p className="text-lg text-gray-600">Start with our most loved courses by thousands of students</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {courses.map((c, i) => (
                        <div key={i}>
                            <CourseCard course={c} />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center mt-8">
                    <Button variant="outline" className="px-8 py-4 font-semibold" trailingIcon={FiArrowRight}>View more</Button>
                </div>
            </div>
        </section>
    );
};

export default Courses






// Mock single course data
// const mockCourse = {
//     title: "Complete Web Development Bootcamp",
//     description: "Master HTML, CSS, JavaScript, React, Node.js and build real-world projects from scratch",
//     price: "Free",
//     rating: 4.8,
//     reviews: 2847,
//     difficulty: "Beginner",
//     students: "12.5k",
//     duration: "8 weeks",
//     lessons: 120,
//     videos: 45,
//     category: "Development",
//     instructor: "Sarah Johnson",
//     instructorTitle: "Senior Developer",
//     gradient: "from-blue-500 via-purple-500 to-pink-500",
//     tags: ["Bestseller", "Updated 2024"],
//     completionRate: 94
// };



// const CourseCard = ({ course = mockCourse }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const [activeTab, setActiveTab] = useState('overview');

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-8 flex items-center justify-center">
//             <div className="max-w-md w-full">
//                 <div
//                     onMouseEnter={() => setIsHovered(true)}
//                     onMouseLeave={() => setIsHovered(false)}
//                     className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]"
//                     style={{
//                         transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
//                     }}
//                 >
//                     {/* Animated Border Glow */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
//                         style={{ zIndex: -1, transform: 'scale(1.05)' }} />

//                     {/* Gradient Header with Animated Background */}
//                     <div className={`relative h-48 bg-gradient-to-r ${course.gradient} overflow-hidden`}>
//                         {/* Animated Shapes */}
//                         <div className="absolute inset-0">
//                             <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full opacity-10 group-hover:scale-150 group-hover:translate-x-4 transition-all duration-700" />
//                             <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full opacity-10 group-hover:scale-150 group-hover:-translate-x-4 transition-all duration-700 delay-100" />
//                             <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white rounded-full opacity-5 group-hover:scale-125 transition-all duration-700 delay-200" />
//                         </div>

//                         {/* Overlay Gradient */}
//                         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />

//                         {/* Content */}
//                         <div className="relative z-10 p-6 h-full flex flex-col justify-between">
//                             {/* Top Row */}
//                             <div className="flex items-start justify-between">
//                                 <div className="flex gap-2">
//                                     {course.tags.map((tag, i) => (
//                                         <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/30">
//                                             {tag}
//                                         </span>
//                                     ))}
//                                 </div>
//                                 <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg">
//                                     <FiStar className="w-4 h-4 text-yellow-500 fill-current" />
//                                     <span className="text-sm font-bold text-gray-800">{course.rating}</span>
//                                     <span className="text-xs text-gray-500">({course.reviews})</span>
//                                 </div>
//                             </div>

//                             {/* Bottom Row */}
//                             <div className="flex items-end justify-between">
//                                 <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 group-hover:bg-white/20 transition-all duration-300">
//                                     <FiBook className="w-10 h-10 text-white mb-2 group-hover:scale-110 transition-transform duration-300" />
//                                     <span className="text-white/90 text-sm font-semibold">{course.category}</span>
//                                 </div>
//                                 <div className={`px-5 py-2 ${course.price === 'Free'
//                                     ? 'bg-green-500 text-white shadow-lg shadow-green-500/50'
//                                     : 'bg-white text-gray-800 shadow-lg'
//                                     } text-lg font-black rounded-full backdrop-blur-md group-hover:scale-110 transition-transform duration-300`}>
//                                     {course.price}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Main Content */}
//                     <div className="p-6">
//                         {/* Header Info */}
//                         <div className="flex items-center gap-2 mb-4">
//                             {/* <Difficulty variant={course.difficulty} /> */}
//                             <div className="flex items-center gap-1.5 text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
//                                 <FiUsers className="w-4 h-4" />
//                                 <span className="text-sm font-semibold">{course.students}</span>
//                             </div>
//                             <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full ml-auto">
//                                 <FiTrendingUp className="w-3.5 h-3.5" />
//                                 <span className="text-xs font-bold">{course.completionRate}%</span>
//                             </div>
//                         </div>

//                         {/* Title & Description */}
//                         <h3 className="text-2xl font-black text-gray-900 mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
//                             {course.title}
//                         </h3>
//                         <p className="text-gray-600 mb-5 text-sm leading-relaxed">
//                             {course.description}
//                         </p>

//                         {/* Instructor */}
//                         <div className="flex items-center gap-3 mb-5 p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-100">
//                             <div className="relative">
//                                 <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
//                                     {course.instructor.charAt(0)}
//                                 </div>
//                                 <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
//                                     <FiCheckCircle className="w-3 h-3 text-white" />
//                                 </div>
//                             </div>
//                             <div>
//                                 <p className="text-sm font-bold text-gray-900">{course.instructor}</p>
//                                 <p className="text-xs text-gray-500">{course.instructorTitle}</p>
//                             </div>
//                         </div>

//                         {/* Stats Tabs */}
//                         <div className="flex gap-1 mb-4 bg-gray-100 p-1 rounded-xl">
//                             <button
//                                 onClick={() => setActiveTab('overview')}
//                                 className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all duration-300 ${activeTab === 'overview'
//                                     ? 'bg-white text-blue-600 shadow-md'
//                                     : 'text-gray-600 hover:text-gray-900'
//                                     }`}
//                             >
//                                 Overview
//                             </button>
//                             <button
//                                 onClick={() => setActiveTab('content')}
//                                 className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all duration-300 ${activeTab === 'content'
//                                     ? 'bg-white text-purple-600 shadow-md'
//                                     : 'text-gray-600 hover:text-gray-900'
//                                     }`}
//                             >
//                                 Content
//                             </button>
//                         </div>

//                         {/* Stats Grid */}
//                         <div className="grid grid-cols-3 gap-3 mb-6">
//                             <div className="relative group/stat overflow-hidden">
//                                 <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 group-hover/stat:from-blue-100 group-hover/stat:to-blue-200 transition-all duration-300 border border-blue-200">
//                                     <FiClock className="w-6 h-6 mx-auto mb-2 text-blue-600 group-hover/stat:scale-110 transition-transform duration-300" />
//                                     <p className="text-xs font-bold text-gray-800 text-center">{course.duration}</p>
//                                     <p className="text-[10px] text-gray-500 text-center mt-1">Duration</p>
//                                 </div>
//                             </div>
//                             <div className="relative group/stat overflow-hidden">
//                                 <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 group-hover/stat:from-purple-100 group-hover/stat:to-purple-200 transition-all duration-300 border border-purple-200">
//                                     <FiFileText className="w-6 h-6 mx-auto mb-2 text-purple-600 group-hover/stat:scale-110 transition-transform duration-300" />
//                                     <p className="text-xs font-bold text-gray-800 text-center">{course.lessons}</p>
//                                     <p className="text-[10px] text-gray-500 text-center mt-1">Lessons</p>
//                                 </div>
//                             </div>
//                             <div className="relative group/stat overflow-hidden">
//                                 <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 group-hover/stat:from-pink-100 group-hover/stat:to-pink-200 transition-all duration-300 border border-pink-200">
//                                     <FiVideo className="w-6 h-6 mx-auto mb-2 text-pink-600 group-hover/stat:scale-110 transition-transform duration-300" />
//                                     <p className="text-xs font-bold text-gray-800 text-center">{course.videos}h</p>
//                                     <p className="text-[10px] text-gray-500 text-center mt-1">Video</p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* CTA Button */}
//                         <button className="relative w-full px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-black rounded-xl overflow-hidden group/btn shadow-lg hover:shadow-2xl transition-all duration-300">
//                             <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
//                             <div className="relative flex items-center justify-center gap-2">
//                                 <span>Enroll Now</span>
//                                 <FiArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
//                             </div>
//                         </button>

//                         {/* Additional Info */}
//                         <p className="text-center text-xs text-gray-500 mt-4">
//                             Start learning today • Lifetime access • Certificate included
//                         </p>
//                     </div>

//                     {/* Bottom Accent Line */}
//                     <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:h-2 transition-all duration-300" />
//                 </div>
//             </div>
//         </div>
//     );
// };