"use client"
import { Testimonial } from "@/lib/interfaces";
import { FiStar } from "react-icons/fi";
import TestimonialCard from "../TestimonialCard";

const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
    return (
        <section id="testimonials" className="py-20 bg-linear-to-br from-blue-50 to-purple-50">
            <div className="max-w-full mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">What Our Students Say</h2>
                    <p className="text-lg text-gray-600">Join thousands of satisfied learners</p>
                </div>

                {/* Horizontal scroll container */}
                <div className="overflow-hidden relative">
                    <div className="flex animate-marquee gap-5">
                        {testimonials.concat(testimonials).map((t, i) => (
                            <div key={i}>
                                <TestimonialCard testimonial={t} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
