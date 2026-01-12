

//         <p className="text-center text-sm text-gray-500 mt-6">
//           Protected by reCAPTCHA and subject to the{' '}
//           <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
//         </p>

// // Main Authentication Component
// const Authentication = () => {
//   const [currentPage, setCurrentPage] = useState<'login' | 'signup'>('login');
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   if (isAuthenticated) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
//         <div className="text-center">
//           <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//             </svg>
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to LEARNERS!</h2>
//           <p className="text-gray-600 mb-6">You've successfully signed in</p>
//           <button
//             onClick={() => setIsAuthenticated(false)}
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
//           >
//             Go to Dashboard
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return currentPage === 'login' ? (
//     <LoginPage
//       onSwitchToSignup={() => setCurrentPage('signup')}
//       onLoginSuccess={() => setIsAuthenticated(true)}
//     />
//   ) : (
//     <SignupPage
//       onSwitchToLogin={() => setCurrentPage('login')}
//       onSignupSuccess={() => setIsAuthenticated(true)}
//     />
//   );
// };

// export default Authentication;


// import { useState } from 'react';
// import { 
//   HiOutlineBookOpen,
//   HiOutlineMail,
//   HiOutlineLockClosed,
//   HiOutlineEye,
//   HiOutlineEyeOff,
//   HiOutlineUser
// } from 'react-icons/hi';
// import { FaGoogle, FaGithub } from 'react-icons/fa';

// // Logo Component
// const Logo = () => {
//   return (
//     <div className="flex items-center justify-center gap-2 mb-8">
//       <HiOutlineBookOpen className="text-blue-600 w-10 h-10" />
//       <h2 className="text-3xl font-black">
//         <span className='text-blue-500'>LEARN</span>
//         <span className="text-red-600">ERS</span>
//       </h2>
//     </div>
//   );
// };

// // Login Page
// const LoginPage = ({ onSwitchToSignup, onLoginSuccess }: { 
//   onSwitchToSignup: () => void;
//   onLoginSuccess: () => void;
// }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleSubmit = () => {
//     console.log('Login:', { email, password, rememberMe });
//     onLoginSuccess();
//   };

//   const handleSocialLogin = (provider: string) => {
//     console.log(`Login with ${provider}`);
//     onLoginSuccess();
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
//       <div className="w-full max-w-md">
//         <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
//           <Logo />
          
//           <div className="text-center mb-8">
//             <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
//             <p className="text-gray-600">Sign in to continue your learning journey</p>
//           </div>

//           {/* Social Login Buttons */}
//           <div className="space-y-3 mb-6">
//             <button
//               onClick={() => handleSocialLogin('Google')}
//               className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 font-medium text-gray-700"
//             >
//               <FaGoogle className="w-5 h-5 text-red-500" />
//               Continue with Google
//             </button>

//             <button
//               onClick={() => handleSocialLogin('GitHub')}
//               className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-gray-800 hover:bg-gray-50 transition-all duration-200 font-medium text-gray-700"
//             >
//               <FaGithub className="w-5 h-5 text-gray-800" />
//               Continue with GitHub
//             </button>
//           </div>

//           {/* Divider */}
//           <div className="flex items-center gap-4 mb-6">
//             <div className="flex-1 border-t border-gray-300"></div>
//             <span className="text-sm text-gray-500 font-medium">OR</span>
//             <div className="flex-1 border-t border-gray-300"></div>
//           </div>

//           {/* Email Login */}
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="your@email.com"
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <HiOutlineLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="••••••••"
//                   className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//                 <button
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showPassword ? (
//                     <HiOutlineEyeOff className="w-5 h-5" />
//                   ) : (
//                     <HiOutlineEye className="w-5 h-5" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                   className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
//                 />
//                 <span className="text-sm text-gray-700">Remember me</span>
//               </label>
//               <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
//                 Forgot password?
//               </button>
//             </div>

//             <button
//               onClick={handleSubmit}
//               className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg"
//             >
//               Sign In
//             </button>
//           </div>

//           <p className="text-center text-sm text-gray-600 mt-6">
//             Don't have an account?{' '}
//             <button
//               onClick={onSwitchToSignup}
//               className="text-blue-600 hover:text-blue-700 font-semibold"
//             >
//               Sign up
//             </button>
//           </p>
//         </div>

//         <p className="text-center text-sm text-gray-500 mt-6">
//           Protected by reCAPTCHA and subject to the{' '}
//           <button className="text-blue-600 hover:underline">Privacy Policy</button>
//         </p>
//       </div>
//     </div>
//   );
// };

// // Signup Page
// const SignupPage = ({ onSwitchToLogin, onSignupSuccess }: { 
//   onSwitchToLogin: () => void;
//   onSignupSuccess: () => void;
// }) => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [agreedToTerms, setAgreedToTerms] = useState(false);

//   const handleSubmit = () => {
//     if (formData.password !== formData.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }
//     if (!agreedToTerms) {
//       alert('Please agree to the terms and conditions');
//       return;
//     }
//     console.log('Signup:', formData);
//     onSignupSuccess();
//   };

//   const handleSocialSignup = (provider: string) => {
//     console.log(`Sign up with ${provider}`);
//     onSignupSuccess();
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
//       <div className="w-full max-w-md">
//         <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
//           <Logo />
          
//           <div className="text-center mb-8">
//             <h1 className="text-2xl font-bold text-gray-900 mb-2">Create Account</h1>
//             <p className="text-gray-600">Start your learning journey today</p>
//           </div>

//           {/* Social Signup Buttons */}
//           <div className="space-y-3 mb-6">
//             <button
//               onClick={() => handleSocialSignup('Google')}
//               className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 font-medium text-gray-700"
//             >
//               <FaGoogle className="w-5 h-5 text-red-500" />
//               Sign up with Google
//             </button>

//             <button
//               onClick={() => handleSocialSignup('GitHub')}
//               className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-gray-800 hover:bg-gray-50 transition-all duration-200 font-medium text-gray-700"
//             >
//               <FaGithub className="w-5 h-5 text-gray-800" />
//               Sign up with GitHub
//             </button>
//           </div>

//           {/* Divider */}
//           <div className="flex items-center gap-4 mb-6">
//             <div className="flex-1 border-t border-gray-300"></div>
//             <span className="text-sm text-gray-500 font-medium">OR</span>
//             <div className="flex-1 border-t border-gray-300"></div>
//           </div>

//           {/* Email Signup */}
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Full Name
//               </label>
//               <div className="relative">
//                 <HiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   value={formData.fullName}
//                   onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//                   placeholder="John Doe"
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="email"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   placeholder="your@email.com"
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <HiOutlineLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   value={formData.password}
//                   onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                   placeholder="••••••••"
//                   className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//                 <button
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showPassword ? (
//                     <HiOutlineEyeOff className="w-5 h-5" />
//                   ) : (
//                     <HiOutlineEye className="w-5 h-5" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Confirm Password
//               </label>
//               <div className="relative">
//                 <HiOutlineLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type={showConfirmPassword ? 'text' : 'password'}
//                   value={formData.confirmPassword}
//                   onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//                   placeholder="••••••••"
//                   className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//                 <button
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showConfirmPassword ? (
//                     <HiOutlineEyeOff className="w-5 h-5" />
//                   ) : (
//                     <HiOutlineEye className="w-5 h-5" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             <div>
//               <label className="flex items-start gap-2 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={agreedToTerms}
//                   onChange={(e) => setAgreedToTerms(e.target.checked)}
//                   className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 mt-1"
//                 />
//                 <span className="text-sm text-gray-700">
//                   I agree to the{' '}
//                   <button className="text-blue-600 hover:text-blue-700 font-medium">
//                     Terms of Service
//                   </button>{' '}
//                   and{' '}
//                   <button className="text-blue-600 hover:text-blue-700 font-medium">
//                     Privacy Policy
//                   </button>
//                 </span>
//               </label>
//             </div>

//             <button
//               onClick={handleSubmit}
//               className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg"
//             >
//               Create Account
//             </button>
//           </div>

//           <p className="text-center text-sm text-gray-600 mt-6">
//             Already have an account?{' '}
//             <button
//               onClick={onSwitchToLogin}
//               className="text-blue-600 hover:text-blue-700 font-semibold"
//             >
//               Sign in
//             </button>
//           </p>
//         </div>

//         <p className="text-center text-sm text-gray-500 mt-6">
//           Protected by reCAPTCHA and subject to the{' '}
//           <button className="text-blue-600 hover:underline">Privacy Policy</button>
//         </p>
//       </div>
//     </div>
//   );
// };

// // Main Authentication Component
// const Authentications = () => {
//   const [currentPage, setCurrentPage] = useState<'login' | 'signup'>('login');
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   if (isAuthenticated) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
//         <div className="text-center">
//           <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//             </svg>
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to LEARNERS!</h2>
//           <p className="text-gray-600 mb-6">You've successfully signed in</p>
//           <button
//             onClick={() => setIsAuthenticated(false)}
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
//           >
//             Go to Dashboard
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return currentPage === 'login' ? (
//     <LoginPage
//       onSwitchToSignup={() => setCurrentPage('signup')}
//       onLoginSuccess={() => setIsAuthenticated(true)}
//     />
//   ) : (
//     <SignupPage
//       onSwitchToLogin={() => setCurrentPage('login')}
//       onSignupSuccess={() => setIsAuthenticated(true)}
//     />
//   );
// };




"use client"
import { useState } from 'react';
import { 
  FiCode, FiTrendingUp, FiAward, FiUsers, FiCheckCircle, FiArrowRight, FiPlayCircle, 
  FiBook, FiStar, FiMenu, FiX, FiClock, FiVideo, FiFileText
} from 'react-icons/fi';

const Logo = () => (
  <h2 className="text-3xl font-black">
    <span className='text-blue-500'>LEARN</span>
    <span className="text-red-600">ERS</span>
  </h2>
);

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            {['features', 'courses', 'testimonials', 'pricing'].map(item => (
              <button key={item} onClick={() => scrollTo(item)} className="text-gray-700 hover:text-blue-600 font-medium transition capitalize">
                {item}
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-gray-700 font-medium hover:text-blue-600 transition">Login</button>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-md">Get Started</button>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-2 mb-4">
              {['features', 'courses', 'testimonials', 'pricing'].map(item => (
                <button key={item} onClick={() => scrollTo(item)} className="px-4 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg capitalize">{item}</button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const HeroSection = () => (
  <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <FiStar className="w-4 h-4" />
            <span>Join 50,000+ Learners Worldwide</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Master Programming<br /><span className="text-blue-600">One Course</span> at a Time
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
            Learn Java, Python, JavaScript and more with interactive courses designed by industry experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-lg">
              Start Learning Free <FiArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition">
              <FiPlayCircle className="w-5 h-5" /> Watch Demo
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
            {[{ num: '50K+', label: 'Active Learners' }, { num: '100+', label: 'Courses' }, { num: '4.9★', label: 'Rating' }].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-gray-900">{stat.num}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
            <svg viewBox="0 0 400 300" className="w-full h-auto">
              <rect x="20" y="20" width="360" height="260" rx="12" fill="white" />
              <rect x="20" y="20" width="360" height="40" rx="12" fill="#1e293b" />
              <circle cx="45" cy="40" r="6" fill="#ef4444" />
              <circle cx="65" cy="40" r="6" fill="#f59e0b" />
              <circle cx="85" cy="40" r="6" fill="#10b981" />
              <rect x="40" y="80" width="100" height="8" rx="4" fill="#3b82f6" opacity="0.6" />
              <rect x="40" y="100" width="140" height="8" rx="4" fill="#8b5cf6" opacity="0.6" />
              <rect x="60" y="120" width="120" height="8" rx="4" fill="#06b6d4" opacity="0.6" />
              <circle cx="300" cy="220" r="35" fill="#10b981" />
              <path d="M 285 220 L 295 230 L 315 210" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => {
  const features = [
    { icon: FiCode, title: "Interactive Coding", desc: "Practice coding in real-time with instant feedback." },
    { icon: FiBook, title: "Structured Curriculum", desc: "Follow designed learning paths from beginner to advanced." },
    { icon: FiAward, title: "Earn Certificates", desc: "Get industry-recognized certificates." },
    { icon: FiUsers, title: "Community Support", desc: "Join thousands of learners." },
    { icon: FiTrendingUp, title: "Track Progress", desc: "Monitor your learning journey with analytics." },
    { icon: FiCheckCircle, title: "Lifetime Access", desc: "Unlimited access to all materials." }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">LEARNERS</span>?
          </h2>
          <p className="text-lg text-gray-600">Everything you need to master programming</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CoursesSection = () => {
  const courses = [
    { title: "Java Fundamentals", desc: "Master Java basics and OOP concepts from scratch.", duration: "6 weeks", level: "Beginner", students: "12,450", rating: 4.8, price: "Free", lessons: 45, videos: 12, gradient: "from-blue-500 to-cyan-500" },
    { title: "Python for Data Science", desc: "Learn Python, NumPy, Pandas with real projects.", duration: "8 weeks", level: "Intermediate", students: "18,230", rating: 4.9, price: "$49", lessons: 62, videos: 18, gradient: "from-green-500 to-emerald-500" },
    { title: "JavaScript & React", desc: "Build modern web applications with React.", duration: "7 weeks", level: "Intermediate", students: "15,670", rating: 4.7, price: "$59", lessons: 54, videos: 15, gradient: "from-yellow-500 to-orange-500" },
    { title: "Full Stack Development", desc: "Become a full-stack developer with MERN stack.", duration: "12 weeks", level: "Advanced", students: "9,340", rating: 4.9, price: "$99", lessons: 88, videos: 24, gradient: "from-purple-500 to-pink-500" },
    { title: "Machine Learning", desc: "Introduction to ML algorithms and neural networks.", duration: "10 weeks", level: "Advanced", students: "7,820", rating: 4.8, price: "$79", lessons: 72, videos: 20, gradient: "from-red-500 to-rose-500" },
    { title: "Web Design Essentials", desc: "Master HTML, CSS and create beautiful websites.", duration: "5 weeks", level: "Beginner", students: "14,560", rating: 4.6, price: "Free", lessons: 38, videos: 10, gradient: "from-indigo-500 to-blue-500" }
  ];

  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">Popular Courses</h2>
          <p className="text-lg text-gray-600">Start with our most loved courses</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className={`bg-gradient-to-br ${c.gradient} p-8 relative overflow-hidden`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 ${c.price === 'Free' ? 'bg-green-500 text-white' : 'bg-white text-gray-800'} text-sm font-bold rounded-full`}>{c.price}</span>
                  <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full">
                    <FiStar className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-bold">{c.rating}</span>
                  </div>
                </div>
                <FiBook className="w-12 h-12 text-white opacity-90" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">{c.level}</span>
                  <span className="text-sm text-gray-500">{c.students} students</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{c.desc}</p>
                <div className="grid grid-cols-3 gap-3 mb-4 py-3 border-t border-gray-100">
                  <div className="text-center">
                    <FiClock className="w-4 h-4 mx-auto mb-1 text-gray-400" />
                    <p className="text-xs text-gray-600">{c.duration}</p>
                  </div>
                  <div className="text-center">
                    <FiFileText className="w-4 h-4 mx-auto mb-1 text-gray-400" />
                    <p className="text-xs text-gray-600">{c.lessons} lessons</p>
                  </div>
                  <div className="text-center">
                    <FiVideo className="w-4 h-4 mx-auto mb-1 text-gray-400" />
                    <p className="text-xs text-gray-600">{c.videos}h</p>
                  </div>
                </div>
                <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-md">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    { name: "Sarah Johnson", role: "Software Engineer at Google", avatar: "SJ", text: "LEARNERS helped me transition from marketing to tech. The courses are well-structured!" },
    { name: "Michael Chen", role: "Full Stack Developer", avatar: "MC", text: "Best investment in my career. The hands-on projects made learning practical." },
    { name: "Emily Rodriguez", role: "Data Scientist at Amazon", avatar: "ER", text: "The Python course was exceptional. Clear explanations and great examples!" }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-lg text-gray-600">Join thousands of satisfied learners</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <FiStar key={j} className="w-5 h-5 text-yellow-500 fill-current" />)}
              </div>
              <p className="text-gray-700 mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">{t.avatar}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const plans = [
    { name: "Free", price: "$0", period: "forever", desc: "Perfect for getting started", features: ["Free courses", "Community support", "Basic tracking", "Certificates"], highlighted: false },
    { name: "Pro", price: "$29", period: "per month", desc: "Best for serious learners", features: ["All courses", "Priority support", "Advanced analytics", "Downloads", "Live sessions", "Career guidance"], highlighted: true },
    { name: "Enterprise", price: "$99", period: "per month", desc: "For teams", features: ["Everything in Pro", "Team management", "Custom paths", "Dedicated support", "API access", "Integrations"], highlighted: false }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">Simple Pricing</h2>
          <p className="text-lg text-gray-600">Choose the plan that's right for you</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div key={i} className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${p.highlighted ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105' : 'bg-white border-2 border-gray-200 hover:border-blue-500 shadow-lg'}`}>
              {p.highlighted && <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">POPULAR</span>}
              <h3 className={`text-2xl font-bold mb-2 ${p.highlighted ? 'text-white' : 'text-gray-900'}`}>{p.name}</h3>
              <p className={`mb-6 ${p.highlighted ? 'text-white/80' : 'text-gray-600'}`}>{p.desc}</p>
              <div className="mb-6">
                <span className="text-5xl font-black">{p.price}</span>
                <span className={`ml-2 ${p.highlighted ? 'text-white/80' : 'text-gray-600'}`}>{p.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <FiCheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${p.highlighted ? 'text-white' : 'text-green-500'}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full px-6 py-3 font-semibold rounded-lg transition ${p.highlighted ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'} shadow-md`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h2 className="text-3xl font-black mb-4"><span className='text-blue-500'>LEARN</span><span className="text-red-600">ERS</span></h2>
          <p className="text-gray-400">Empowering learners worldwide.</p>
        </div>
        {[
          { title: "Courses", links: ["Java", "Python", "JavaScript", "TypeScript"] },
          { title: "Company", links: ["About", "Careers", "Blog", "Contact"] },
          { title: "Legal", links: ["Privacy", "Terms", "Cookies"] }
        ].map((col, i) => (
          <div key={i}>
            <h3 className="font-bold mb-4">{col.title}</h3>
            <ul className="space-y-2 text-gray-400">
              {col.links.map((link, j) => <li key={j}><button className="hover:text-white transition">{link}</button></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>&copy; 2024 LEARNERS. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const LandingPage = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <HeroSection />
    <FeaturesSection />
    <CoursesSection />
    <TestimonialsSection />
    <PricingSection />
    <Footer />
  </div>
);

export default LandingPage;