import * as pt from "../i18n/generated/messages/pt";
import * as en from "../i18n/generated/messages/en";
import type { Project } from "../types";

export const projects = (lang: 'pt' | 'en'): Project[] => {

    return [
        {
            title: "Capitolina",
            stack: "Golang",
            link: "https://t.me/capituzinha_bot",
            description: "capitolina",
            skills: ["Golang", "APIs", "GitHub Actions", "Git", "Docker"],
            source: "https://github.com/lemosjose/Capitolina/"
        },
        {
            title: "Job Challenges",
            stack: "Typescript, Fastify, PrismaORM",
            link: "https://github.com/lemosjose/job-challenges",
            description: "job_challenges",
            skills: ["Typescript", "Problem Solving", "Git", "Docker"],
            source: "https://github.com/lemosjose/job-challenges"
        }
    ];
};