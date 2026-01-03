import Badge from '@/components/Badge';
import StarRating from '@/components/StarRating';
import WaveBackgroundAnimation from '@/components/WaveBackgroundAnimation';
import { BiBarChart } from 'react-icons/bi';
import { FaClock, FaUsers, FaAward, FaVideo, FaPlayCircle } from 'react-icons/fa';
import Breadcrumb from '../Breadcrumb';

const Hero = ({ course }: { course: any }) => {
    return (
        <div className="relative  text-white bg-blue-300 overflow-hidden">
            <WaveBackgroundAnimation />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* Breadcrumb */}
                <Breadcrumb items={[
                    { label: "Development" },
                    { label: "Web Development" },
                    { label: "Full-Stack", isCurrent: true }
                ]} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    <div className="lg:col-span-2">
                        <Badge variant="warning">
                            <FaAward className="w-3 h-3 me-2" />BESTSELLER
                        </Badge>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 text-gray-900 leading-tight">
                            {course.title}
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl mb-6 text-gray-600 leading-relaxed">
                            {course.subtitle}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <div className="flex items-center gap-2 bg-blue-800 bg-opacity-50 px-3 py-2 rounded-lg">
                                <span className="text-2xl font-bold text-yellow-400">{course.ratings.average}</span>
                                <StarRating rating={course.ratings.average} />
                            </div>
                            <button className="text-blue-100 hover:text-white underline text-sm">
                                ({course.ratings.total.toLocaleString()} ratings)
                            </button>
                        </div>

                        {/* Stats Row */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm mb-6">
                            <div className="flex items-center gap-2 bg-white bg-opacity-10 px-3 py-2 rounded-lg">
                                <FaUsers className="w-4 h-4" />
                                <span className="font-semibold">{course.enrollment.students.toLocaleString()}</span>
                                <span className="text-blue-100">students</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaClock className="w-4 h-4" />
                                <span>{course.metadata.duration} total</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaVideo className="w-4 h-4" />
                                <span>{course.metadata.totalLectures} lectures</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BiBarChart className="w-4 h-4" />
                                <span>{course.metadata.level}</span>
                            </div>
                        </div>

                        {/* Instructor Info */}
                        <div className="flex items-center gap-4 p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg">
                            <img
                                src={course.instructor.avatar}
                                alt={course.instructor.name}
                                className="w-12 h-12 rounded-full border-2 border-white"
                            />
                            <div>
                                <p className="text-sm text-blue-100">Created by</p>
                                <p className="font-semibold text-lg">{course.instructor.name}</p>
                                <p className="text-sm text-blue-200">{course.instructor.title} • {course.instructor.company}</p>
                            </div>
                        </div>

                        {/* Last Updated */}
                        <div className="flex flex-wrap gap-4 mt-6 text-xs sm:text-sm text-blue-100">
                            <span>🔄 Last updated {course.metadata.lastUpdated}</span>
                            <span>•</span>
                            <span>🌍 {course.metadata.language}</span>
                            <span>•</span>
                            <span>📝 Subtitles: {course.metadata.subtitles.length} languages</span>
                        </div>
                    </div>

                    {/* Mobile Preview Card */}
                    <div className="lg:hidden bg-white text-gray-900 rounded-xl shadow-2xl overflow-hidden">
                        <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center relative">
                            <FaPlayCircle className="w-16 h-16 text-white opacity-90" />
                            <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs font-semibold">
                                Preview
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-baseline gap-3 mb-4">
                                <span className="text-3xl font-bold text-blue-600">${course.pricing.current}</span>
                                <span className="text-lg text-gray-400 line-through">${course.pricing.original}</span>
                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-bold">
                                    {course.pricing.discount}% OFF
                                </span>
                            </div>
                            <div className="text-red-600 text-sm font-semibold mb-4 flex items-center gap-2">
                                <FaClock className="w-4 h-4" />
                                Sale ends in {course.pricing.dealEndsIn}!
                            </div>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg mb-3">
                                Enroll Now
                            </button>
                            <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors">
                                Add to Cart
                            </button>
                            <p className="text-center text-sm text-gray-600 mt-4">
                                30-Day Money-Back Guarantee
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero