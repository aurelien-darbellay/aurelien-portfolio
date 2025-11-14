import img1 from "../assets/elTaller.png";
import img2 from "../assets/onlineGames.png";
import img3 from "../assets/cvflows.png";
import img4 from "../assets/invoiceManager.png";
import img5 from "../assets/project-5.svg";
import img6 from "../assets/project-6.svg";

export const projects = [
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
    githubUrl: "https://github.com/aurelien-darbellay/elTaller",
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
  {
    id: "Friendly-Invoice Manager",
    title: "Friendly Invoice Manager",
    image: img4,
    description:
      "A lightweight, open-source web application for creating, managing, and exporting invoices — designed to be simple, fast, and customizable.<br><br>Built with React, Tailwind CSS, and Supabase, this project provides a full-stack workflow to handle clients, invoices, and payment tracking with built-in support for IVA / IRPF tax fields and PDF generation",
    tech: ["React", "Supabase", "Tailwind"],
    githubUrl: "https://github.com/aurelien-darbellay/invoicesManager",
    deployUrl: "https://invoicesmanager-friends.netlify.app/?test=true",
  },
  {
    id: "java-spring-api",
    title: "Spring Boot API (Placeholder)",
    image: img5,
    description:
      "Placeholder project — REST API with authentication and CRUD, ready to be replaced by your Java/Spring work.",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
    githubUrl: "https://github.com/aurelien-darbellay",
    deployUrl: "#",
  },
  {
    id: "react-native-app",
    title: "React Native App (Placeholder)",
    image: img6,
    description:
      "Placeholder project — mobile app idea to highlight your React Native skills.",
    tech: ["React Native", "Expo"],
    githubUrl: "https://github.com/aurelien-darbellay",
    deployUrl: "#",
  },
];
