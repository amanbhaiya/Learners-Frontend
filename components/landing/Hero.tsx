import {
    FiTrendingUp,
    FiAward,
    FiArrowRight,
    FiPlayCircle,
    FiStar,
} from 'react-icons/fi';
import WaveBackgroundAnimation from '@/components/WaveBackgroundAnimation';
import Button from '@/components/form/Button';

const Hero = () => {
    return (
        <section id="heros" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <WaveBackgroundAnimation />
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
                            <Button className="px-8 py-4 font-semibold" trailingIcon={FiArrowRight}>Start Learning Free</Button>
                            <Button variant="outline" className="px-8 py-4 font-semibold" leadingIcon={FiPlayCircle}>Watch Demo</Button>
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
                        <div className="relative bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
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

export default Hero