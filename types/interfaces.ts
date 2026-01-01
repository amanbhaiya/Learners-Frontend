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
}