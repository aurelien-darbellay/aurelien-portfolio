import img1 from "../assets/elTaller.png";
import img2 from "../assets/onlineGames.png";
import img3 from "../assets/cvflows.png";
import img4 from "../assets/cvsLab.png";
import img5 from "../assets/Mercadona.png";
import img6 from "../assets/freedom_reader.png";

export const projects = [
  {
    id: "cvsLab",
    title: "CVsLab",
    image: img4,
    description:
      "a web platform for creating, managing, and sharing professional CVs, focused on clarity, usability, and modern design. It features a dynamic front-end with structured data management, real-time editing, and export capabilities.",
    tech: ["React", "Supabase", "Tailwind", "TypeScript"],
    githubUrl: "https://github.com/aurelien-darbellay/cvLabs.git",
    deployUrl: "https://cvslab.netlify.app/?test=true",
  },
  {
    id: "mercadona-navigator",
    title: "Mercadona Navigator",
    image: img5,
    description:
      "A TypeScript-based API client and navigator for interacting with Mercadona's online store (tienda.mercadona.es). This project provides a clean, type-safe interface for searching products, retrieving product details, and navigating through associated products.",
    tech: ["Node.js", "TypeScript", "Axios"],
    githubUrl: "https://github.com/aurelien-darbellay/mercadona-navigator.git",
  },
  {
    id: "cv-flows",
    title: "CV Flows",
    image: img3,
    description:
      "An app to create, update and distribute your CVs in a graph-like interface. Developped with Java Spring Boot (Back-End), React TS (Front-End), with a MongoDB non relational database.",
    tech: ["TypeScript", "React", "Java", "Spring Boot", "MongoDB", "Tailwind"],
    github: {
      front: "https://github.com/aurelien-darbellay/cvFlows-frontEnd",
      back: "https://github.com/aurelien-darbellay/cvFlows-backEnd",
    },
    deployUrl: "https://cvflows.netlify.app/?test=true",
  },
  {
    id: "elTaller-website",
    title: "WebSite Dance School El Taller",
    image: img1,
    description:
      "Website for a local dance school, built with React and Vite. Features a responsive design, class schedules, contact and registration forms and a private area with room booking system. <br>Users with admin privileges can manage sessions; create and update courses; access, edit and manage booking monthly summaries. <br>Connected to PostgreSQL via supaBase API. <br>Integrated with a Google App Script utility that automates students management (groups, mailing, data base, etc.).",
    tech: ["JavaScript", "React", "Tailwind", "PostgreSQL", "SupabaseAPI"],
    deployUrl: "https://eltallerswing.com/?test=true",
  },
  {
    id: "online-games",
    title: "Online Games",
    image: img2,
    description:
      "A lightweight online game platform that allows, for now, to play Sudoku and a game based on prime decomposition. Built with React and Vite.",
    tech: ["React", "Vite", "CSS", "JavaScript"],
    githubUrl: "https://github.com/aurelien-darbellay/online-games",
    deployUrl: "https://games-online-adarbellay.netlify.app/",
  },
];
