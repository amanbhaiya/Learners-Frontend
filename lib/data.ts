import { Menu } from "@/lib/props";
import { Course, Feature, Testimonial } from "@/lib/interfaces";

export const menus: Menu[] = [
  {
    id: "features",
    title: "Features"
  },
  {
    id: "courses",
    title: "Courses"
  },
  {
    id: "testimonials",
    title: "Testimonials"
  },
  {
    id: "pricing",
    title: "Pricing"
  }
];

export const features: Feature[] = [
  {
    icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
            </svg>
        `,
    title: "Interactive Coding",
    description: "Practice coding in real-time with our interactive code editor and instant feedback."
  },
  {
    icon: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v18c-1.2-1.1-3.3-2-5.5-2H4z"/>
                <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v18c1.2-1.1 3.3-2 5.5-2H20z"/>
                <line x1="12" y1="3" x2="12" y2="21" />
            </svg>
        `,
    title: "Structured Curriculum",
    description: "Follow a carefully designed learning path from beginner to advanced levels."
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    `,
    title: "Earn Certificates",
    description: "Get recognized for your achievements with industry-recognized certificates."
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    `,
    title: "Community Support",
    description: "Join thousands of learners and get help from our supportive community."
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    `,
    title: "Track Progress",
    description: "Monitor your learning journey with detailed analytics and progress tracking."
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="9 12 12 15 17 10"/>
      </svg>
    `,
    title: "Lifetime Access",
    description: "Get unlimited access to all course materials and future updates."
  }
];

export const courses: Course[] = [
  {
    title: "Java Fundamentals",
    description: "Master Java basics and OOP concepts from scratch.sdasdasdad s asdasda sd a sd as da sd a sd as d a d sa d as d asd a sd  sad sa d as d sad  sa",
    difficulty: "beginner",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v18c-1.2-1.1-3.3-2-5.5-2H4z"/>
        <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v18c1.2-1.1 3.3-2 5.5-2H20z"/>
        <line x1="12" y1="3" x2="12" y2="21"/>
      </svg>
    `,
    duration: "6 weeks",
    students: "12,450",
    rating: 4.8,
    price: "Free",
    lessons: 45,
    videos: 12
  },
  {
    title: "Python for Data Science",
    description: "Learn Python, NumPy, and Pandas with real-world projects.",
    difficulty: "intermediate",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <path d="M8 12h8M12 8v8"/>
      </svg>
    `,
    duration: "8 weeks",
    students: "18,230",
    rating: 4.9,
    price: "$49",
    lessons: 62,
    videos: 18
  },
  {
    title: "JavaScript & React",
    description: "Build modern, interactive web applications with React.",
    difficulty: "intermediate",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="4" width="18" height="14" rx="2"/>
        <path d="M7 20h10"/>
      </svg>
    `,
    duration: "7 weeks",
    students: "15,670",
    rating: 4.7,
    price: "$59",
    lessons: 54,
    videos: 15
  },
  {
    title: "Full Stack Development",
    description: "Become a full-stack developer using the MERN stack.",
    difficulty: "advanced",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
      </svg>
    `,
    duration: "12 weeks",
    students: "9,340",
    rating: 4.9,
    price: "$99",
    lessons: 88,
    videos: 24
  },
  {
    title: "Machine Learning",
    description: "Introduction to machine learning algorithms and models.",
    difficulty: "advanced",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
      </svg>
    `,
    duration: "10 weeks",
    students: "7,820",
    rating: 4.8,
    price: "$79",
    lessons: 72,
    videos: 20
  },
  {
    title: "Web Design Essentials",
    description: "Learn HTML, CSS, and design principles for the web.",
    difficulty: "beginner",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 4h18v12H3z"/>
        <path d="M7 20h10"/>
      </svg>
    `,
    duration: "5 weeks",
    students: "14,560",
    rating: 4.6,
    price: "Free",
    lessons: 38,
    videos: 10
  }
];

export const testimonials: Testimonial[] = [
  { name: "Sarah Johnson", role: "Software Engineer at Google", avatar: "SJ", text: "LEARNERS helped me transition from marketing to tech. The courses are well-structured!", rating: 2.5 },
  { name: "Michael Chen", role: "Full Stack Developer", avatar: "MC", text: "Best investment in my career. The hands-on projects made learning practical.", rating: 3.5 },
  { name: "Emily Rodriguez", role: "Data Scientist at Amazon", avatar: "ER", text: "The Python course was exceptional. Clear explanations and great examples!", rating: 3.4 },
  { name: "David Lee", role: "Frontend Developer at Facebook", avatar: "DL", text: "I learned React in weeks! The projects were very practical and engaging.", rating: 5 },
  { name: "Olivia Brown", role: "UX Designer", avatar: "OB", text: "The design courses gave me a fresh perspective and really improved my portfolio.", rating: 4 },
  { name: "James Wilson", role: "Backend Developer", avatar: "JW", text: "Hands-on exercises made understanding server-side concepts so much easier.", rating: 3.6 },
  { name: "Sophia Martinez", role: "Data Analyst", avatar: "SM", text: "The SQL and data visualization lessons were exactly what I needed for my job.", rating: 4.2 },
  { name: "Liam Davis", role: "Mobile Developer", avatar: "LD", text: "Flutter courses helped me launch my first app. Highly recommend!", rating: 5 },
  { name: "Ava Thompson", role: "Product Manager", avatar: "AT", text: "Learning about agile processes here really helped me manage my team better.", rating: 5 },
  { name: "Noah Anderson", role: "DevOps Engineer", avatar: "NA", text: "The cloud and DevOps courses were thorough and very practical for real-world use.", rating: 5 }
];




