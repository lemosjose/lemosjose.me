import type { Project } from "../types";

export const projects: Project[] = [
    {
        title: "Capitolina",
        stack: "Golang",
        link: "https://t.me/capituzinha_bot",
        description: "A Telegram bot that consumes googleBooks api, focusing on ease of use and performance",
        skills: [
            "Golang",
            "API Consuming",
            "GitHub Actions",
            "Git",
            "Docker"
        ],
        source: "https://github.com/lemosjose/Capitolina/"
    },
    {
        title: "Job Challenges",
        stack: "Typescript, Fastify, PrismaORM",
        link: "https://github.com/lemosjose/job-challenges",
        description: "A collection of solutions to simple job interview challenges.",
        skills: [
            "Typescript",
            "Problem Solving",
            "Git",
            "Docker"
        ],
        source: "https://github.com/lemosjose/job-challenges"
    }
];