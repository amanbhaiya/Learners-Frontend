import Copyright from "@/components/Copyright";
import Logo from "@/components/Logo";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="mb-4">
                            <Logo />
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

                <Copyright />
            </div>
        </footer>
    );
};

export default Footer;