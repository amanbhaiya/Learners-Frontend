import { Testimonial } from '@/lib/interfaces'
import StarRating from '@/components/StarRating'

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
    return (
        <div className="w-110 my-4 bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 shrink-0 cursor-pointer">
            <StarRating rating={testimonial.rating} className="mb-4"/>
            <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">{testimonial.avatar}</div>
                <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard