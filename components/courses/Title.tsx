import { Course } from "@/types/interfaces"

const Title = ({ course }: { course: Course }) => {
    return (
        <div className="flex items-center gap-3">
            <div className="h-9 w-9 text-gray-600" dangerouslySetInnerHTML={{ __html: course.icon }} />
            <span className="text-xl font-extrabold tracking-tight text-gray-600">
                {course.title}
            </span>
        </div>
    )
}

export default Title
