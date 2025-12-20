import type { Message } from "@sveltevietnam/i18n";

export interface Post {
    title: string;
    language: string;
    link: string;
    tags: string[];
}

export interface Project {
    title: string;
    stack: string; 
    link: string;
    description: string | Message;
    skills: string[]; 
    source: string;
}
