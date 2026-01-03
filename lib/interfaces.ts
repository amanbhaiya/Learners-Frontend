import { IconType } from "react-icons"

export interface SideMenu {
    name: string
    href?: string
    icon?: string
    children?: SideMenu[]
}

export interface User {
    name: string
    email: string
}

export interface Course {
    title: string;
    description: string;
    difficulty: "beginner" | "intermediate" | "advanced";
    icon: string;
    duration: string;
    students: string;
    rating: number;
    price: string;
    lessons: number;
    videos: number;
}

export interface CourseDetail {
    title: string;
    description: string;
    price: string;
    rating: number;
    reviews: number;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    students: string;
    duration: string;
    lessons: number;
    videos: number;
    category: string;
    instructor: string;
    instructorTitle: string;
    gradient: string;
    tags: string[];
    completionRate: number; // percentage
}


export interface Feature {
    title: string;
    description: string;
    icon: string;
}

export interface Testimonial {
    name: string;
    role: string;
    avatar: string;
    text: string;
    rating: number
}