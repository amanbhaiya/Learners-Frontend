import WaveBackgroundAnimation from "@/components/WaveBackgroundAnimation";
import Button from "@/components/form/Button";
import { FiArrowRight } from "react-icons/fi";

const CTA: React.FC = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-blue-500 to-blue-600 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <WaveBackgroundAnimation />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
                    Ready to Start Your Learning Journey?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                    Join thousands of students already learning on LEARNERS platform
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" className="px-8 py-4 bg-white text-blue-600 font-semibold" icon={<FiArrowRight className="w-5 h-5" />} iconEnd>Get Started Free</Button>
                </div>
            </div>
        </section>
    );
};
export default CTA