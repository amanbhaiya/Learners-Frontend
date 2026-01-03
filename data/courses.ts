import { Course } from "@/lib/interfaces"

// courseConfig.ts
export const courses: Course[] = [
    {
        title: "Master Java Fundamentals",
        description: "Learn the core concepts of Java programming including variables, data types, operators, control flow, and basic syntax to build a strong foundation.",
        difficulty: "beginner",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="8" font-weight="bold" fill="currentColor" stroke="none">JB</text>
        </svg>
        `
    },
    {
        title: "Object-Oriented Programming in Java",
        description: "Dive deep into OOP principles including classes, objects, inheritance, polymorphism, encapsulation, and abstraction to write modular and reusable code.",
        difficulty: "beginner",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">OOP</text>
        </svg>
        `
    },
    {
        title: "Exception Handling & Error Management",
        description: "Master try-catch blocks, custom exceptions, exception hierarchy, best practices for error handling, and building robust applications.",
        difficulty: "beginner",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">EH</text>
        </svg>
        `
    },
    {
        title: "Collections Framework Mastery",
        description: "Master the Java Collections API including List, Set, Map, Queue interfaces, and their implementations like ArrayList, HashMap, TreeSet, and more.",
        difficulty: "beginner",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">CF</text>
        </svg>
        `
    },
    {
        title: "Input/Output & File Handling",
        description: "Learn file operations, streams, readers, writers, serialization, and the modern NIO.2 API for efficient file and network I/O operations.",
        difficulty: "beginner",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">I/O</text>
        </svg>
        `
    },
    {
        title: "Data Structures & Algorithms",
        description: "Master essential data structures like arrays, linked lists, stacks, queues, trees, and graphs, along with sorting and searching algorithms.",
        difficulty: "intermediate",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">DSA</text>
        </svg>
        `
    },
    {
        title: "Functional Programming with Streams",
        description: "Learn modern Java functional programming with lambda expressions, Stream API, method references, and functional interfaces for cleaner code.",
        difficulty: "intermediate",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">λ</text>
        </svg>
        `
    },
    {
        title: "Database Connectivity with JDBC",
        description: "Learn to connect Java applications to databases using JDBC, execute SQL queries, handle transactions, and work with connection pools.",
        difficulty: "intermediate",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">DB</text>
        </svg>
        `
    },
    {
        title: "Web Applications with Servlets & JSP",
        description: "Build dynamic web applications using Java Servlets, JSP, session management, filters, listeners, and MVC architecture patterns.",
        difficulty: "intermediate",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="6" font-weight="bold" fill="currentColor" stroke="none">WEB</text>
        </svg>
        `
    },
    {
        title: "Spring Framework Essentials",
        description: "Learn the Spring Framework including dependency injection, Spring MVC, AOP, and building enterprise-level Java applications with best practices.",
        difficulty: "intermediate",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">SF</text>
        </svg>
        `
    },
    {
        title: "Building REST APIs with Java",
        description: "Create RESTful web services using JAX-RS, Spring REST, handle JSON/XML, implement HATEOAS, and design scalable API architectures.",
        difficulty: "intermediate",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="6" font-weight="bold" fill="currentColor" stroke="none">REST</text>
        </svg>
        `
    },
    {
        title: "Database Persistence with JPA",
        description: "Master ORM with Hibernate and Spring Data JPA, entity mapping, relationships, JPQL, criteria API, and database transaction management.",
        difficulty: "intermediate",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">JPA</text>
        </svg>
        `
    },
    {
        title: "Unit Testing with JUnit",
        description: "Write effective unit tests using JUnit and Mockito, practice TDD, and ensure code quality with comprehensive test coverage.",
        difficulty: "intermediate",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">UT</text>
        </svg>
        `
    },
    {
        title: "Maven & Gradle Build Automation",
        description: "Learn build automation with Maven and Gradle, dependency management, build lifecycles, plugins, and project configuration best practices.",
        difficulty: "intermediate",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">BT</text>
        </svg>
        `
    },
    {
        title: "Multithreading & Concurrency",
        description: "Master concurrent programming with threads, synchronization, locks, thread pools, and the Java concurrency utilities for high-performance applications.",
        difficulty: "advanced",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">MT</text>
        </svg>
        `
    },
    {
        title: "Design Patterns in Java",
        description: "Learn essential design patterns like Singleton, Factory, Observer, Strategy, and more to write elegant, maintainable, and scalable code.",
        difficulty: "advanced",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">DP</text>
        </svg>
        `
    },
    {
        title: "Microservices with Spring Boot",
        description: "Build scalable microservices architecture using Spring Boot, REST APIs, service discovery, API gateways, and cloud-native patterns.",
        difficulty: "advanced",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">SB</text>
        </svg>
        `
    },
    {
        title: "Secure Applications with Spring Security",
        description: "Implement authentication, authorization, OAuth2, JWT tokens, and protect your applications against common security vulnerabilities.",
        difficulty: "advanced",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">SS</text>
        </svg>
        `
    },
    {
        title: "JVM Internals & Memory Management",
        description: "Understand JVM architecture, garbage collection, memory tuning, heap analysis, and optimize application performance and memory usage.",
        difficulty: "advanced",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="6" font-weight="bold" fill="currentColor" stroke="none">JVM</text>
        </svg>
        `
    },
    {
        title: "Network Programming in Java",
        description: "Build network applications with sockets, TCP/IP, UDP, HTTP clients, and learn about URL handling and network protocols.",
        difficulty: "advanced",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">NET</text>
        </svg>
        `
    },
    {
        title: "Reflection API & Custom Annotations",
        description: "Master reflection for runtime class inspection, dynamic method invocation, and create custom annotations for powerful meta-programming.",
        difficulty: "advanced",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">@</text>
        </svg>
        `
    },
    {
        title: "Reactive Programming with Project Reactor",
        description: "Build non-blocking reactive applications using Project Reactor, WebFlux, handle backpressure, and create responsive scalable systems.",
        difficulty: "advanced",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">RX</text>
        </svg>
        `
    },
    {
        title: "Event Streaming with Kafka",
        description: "Master Apache Kafka for building real-time data pipelines, event-driven architectures, producers, consumers, and stream processing.",
        difficulty: "advanced",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">KF</text>
        </svg>
        `
    },
    {
        title: "Containerization & Orchestration",
        description: "Containerize Java applications with Docker, deploy to Kubernetes, manage pods, services, and scale microservices in production.",
        difficulty: "advanced",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">K8s</text>
        </svg>
        `
    },
    {
        title: "Application Performance Optimization",
        description: "Profile and optimize Java applications, identify bottlenecks, tune JVM parameters, optimize code, and implement caching strategies.",
        difficulty: "advanced",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">⚡</text>
        </svg>
        `
    },
    {
        title: "Logging & Application Monitoring",
        description: "Implement comprehensive logging with Log4j2, SLF4J, integrate monitoring tools, set up alerts, and track application health in production.",
        difficulty: "advanced",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">LOG</text>
        </svg>
        `
    },
    {
        title: "GraphQL API Development",
        description: "Build flexible GraphQL APIs with Java, implement queries, mutations, subscriptions, and integrate with Spring Boot applications.",
        difficulty: "advanced",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">GQL</text>
        </svg>
        `
    },
    {
        title: "Messaging with JMS & RabbitMQ",
        description: "Implement asynchronous messaging with JMS, RabbitMQ, ActiveMQ, handle message queues, topics, and build reliable distributed systems.",
        difficulty: "advanced",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="6" font-weight="bold" fill="currentColor" stroke="none">JMS</text>
        </svg>
        `
    },
    {
        title: "Cloud-Native Java Applications",
        description: "Deploy Java applications to cloud platforms, use cloud services, implement serverless functions, and build scalable cloud architectures.",
        difficulty: "advanced",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">☁</text>
        </svg>
        `
    },
    {
        title: "Clean Code & Best Practices",
        description: "Write maintainable code following SOLID principles, clean code practices, code reviews, refactoring techniques, and industry standards.",
        difficulty: "intermediate",
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="15" text-anchor="middle" font-size="7" font-weight="bold" fill="currentColor" stroke="none">✓</text>
        </svg>
        `
    }
]