import { Course } from "@/lib/interfaces";
import { FiBook, FiClock, FiFileText, FiStar, FiVideo } from 'react-icons/fi';
import Difficulty from "@/components/Difficulty";
import WaveBackgroundAnimation from "@/components/WaveBackgroundAnimation";
import Chip from "@/components/Chip";
import Button from "@/components/form/Button";
import { isNullOrUndefinedOrEmpty } from "@/lib/functions";

const CourseCard = ({ course }: { course: Course }) => {
    return (
        <div className="relative group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <WaveBackgroundAnimation />
            </div>
            <div className="z-10 p-4 sm:p-6 flex flex-col justify-between h-full">
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <span className="flex items-center justify-center bg-blue-100 rounded-full h-12 w-12 mb-4">
                            <FiBook className="w-6 h-6 text-blue-700" />
                        </span>
                        <div className="flex items-center gap-1">
                            <Chip variant={isNullOrUndefinedOrEmpty(course.price) ? "primary" : "success"} style="outline">
                                {course.price}
                            </Chip>
                            <Chip variant="default" style="outline">
                                <div className="flex items-center gap-1">
                                    <FiStar className="w-3 h-3 text-yellow-500 fill-current" />
                                    <span className="text-sm font-bold">{course.rating}</span>
                                </div>
                            </Chip>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                        <Difficulty variant={course.difficulty} />
                        <span className="text-sm text-gray-500">{course.students} students</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                </div>
                <div className="mt-auto">
                    <div className="grid grid-cols-3 gap-3 mb-4 py-3 border-t border-gray-100">
                        <div className="text-center">
                            <FiClock className="w-4 h-4 mx-auto mb-1 text-gray-400" />
                            <p className="text-xs text-gray-600">{course.duration}</p>
                        </div>
                        <div className="text-center">
                            <FiFileText className="w-4 h-4 mx-auto mb-1 text-gray-400" />
                            <p className="text-xs text-gray-600">{course.lessons} lessons</p>
                        </div>
                        <div className="text-center">
                            <FiVideo className="w-4 h-4 mx-auto mb-1 text-gray-400" />
                            <p className="text-xs text-gray-600">{course.videos}h</p>
                        </div>
                    </div>
                    <Button fullWidth variant="primary">Enroll Now</Button>
                </div>
            </div>
        </div>
    );
};


export default CourseCard;
