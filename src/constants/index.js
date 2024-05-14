import { meta, b2wise, balizero, waylight, developx, f8, daneruyle, hufang} from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "B2Wise",
    icon: b2wise,
    iconBg: "#accbe1",
    date: "May 2023 - Feb 2024",
    points: [
      "Build company website UI using React, Next.js, Typescript as the frontend, and ASP.NET as the backend",
      "Convert Old User Interface to new and configure DDD pattern infrastructure with the new UI version",
      "Manage Test, Dev, UAT, Prod servers using AWS, Azure and docker",
      "Migrate Azure SQL production workloads to AWS Lambda using Python",
      "Collaborate with Technical team, Design team, Old UI team, New UI team, Support team with SCRUM methodology",
      "Update ASP.NET6 to AWS.NET core 7 with DDD pattern"
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Balizero",
    icon: balizero,
    iconBg: "#c0c0c0",
    date: "Dec 2022 - Apr 2023",
    points: [
      "Update company website using React, Next.js, Typescript as frontend, and Node.js as backend",
      "Update UI/UX frontend from Figma Design with TailwindCSS, and custom hooks",
      "Demonstrate experience in developing complex GraphQL APIs and implementing Apollo Client for efficient data fetching and caching in Node.js applications",
      "Collaborate with other teams to Update UI/UX using MUI, and Styled Components, SCSS",
      "Integrate Firebase, and push notification, google geolocation service etc…",
      "Configure CI/CD pipelines with Netlify, Docker, GitLab, and AWS EC2 instances",
      "Implement SMS automation and integrate payments such as Wise, Stripe, and PayPal"
    ],
  },
  {
    title: "Senior React/RN Developer",
    company_name: "Waylight.se",
    icon: waylight,
    iconBg: "#c8a2c8",
    date: "Dec 2021 - Aug 2022",
    points: [
      "Create IOS/Android App using React Native, Next.js for Admin pages and .Net Core 6 for backend",
      "Build pixel-perfect custom components and frontend pages using Next.js /React Native from Figma Design",
      "Integration with Firebase and Social login (Google/Apple Login) and 2FA implementation",
      "Promote DevOps experiences and implement transparent deployment pipeline with Bitbucket, Kubernetes, Netlify, TestFlight",
      "Implement Push Notifications, and Deploy on Appstore/Google Play Store"
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "DevelopX",
    icon: developx,
    iconBg: "#c8a2c8",
    date: "Apr 2018 - May 2021",
    points: [
      "Design the application architecture on TypeScript, React, and Redux",
      "Develop React Native application that helps Farmers automate their production",
      "Convert a traditional web application to a single-page application with React.js, Next.js, Vue.js and configure as Progressive Web App (PWA)",
      "Develop a GraphQL-based backend API",
      "Build REST applications and services in Node.js , Express.js, Laravel, and Django with high scalability, flexibility which are mostly JavaScript and Node.js on the AWS stack",
      "Configure CI/CD pipelines with GitLab & Kubernetes, and AWS network load-balancing policies"
    ],
  },
  {
    title: "Junior Front-End Developer",
    company_name: "Funtion Eight",
    icon: f8,
    iconBg: "#c8a2c8",
    date: "Dec 2015 - Dec 2017",
    points: [
      "Convert Figma, XD Design, mock-ups provided by graphic designers to fully functional e-Commerce, Sport site, etc.",
      "Integrate JSON REST API & GraphQL API.",
      "Design and invented solutions and coding patterns to solve front-end problems",
      "Develop CodeIgniter, Laravel frameworks of an interface management web application"
    ],
  }
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/FriendShipEngineer",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/egor-masiutkin-95502a281",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-pink",
    name: "Event Platform Web Application",
    description: "An event organization web app like Eventbrite or Meetup with authentication, event management, search, filtering, categories, checkout and payments using Next JS 14, Tailwind CSS, Shadcn, React Hook Form, Zod, Uploadthing, React-Datepicker, Mongoose, Clerk and Stripe.",
    link: "https://event-platform-dev.vercel.app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "A CRM Dashboard",
    description: "Build an admin dashboard with full authentication, a homepage displaying charts and activities, a comprehensive table for companies with CRUD and search, and a Kanban board with real-time synchronization.",
    link: "https://react-dashboard-dev.vercel.app",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "An AI Article Summarizer Website",
    description: "Summarize Articles with OpenAI GPT-4. Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.",
    link: "https://ai-summarizer-dev.vercel.app",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "A Car Showcase Website",
    description: "Build and Deploy a Modern Next.js 14 Application | React, Next JS 14, TypeScript, Tailwind CSS",
    link: "https://carhub-dev.vercel.app",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-pink",
    name: "Modern UI/UX website",
    description: "Learn to create modern websites with sleek parallax effects and bento box layouts. This project covers everything from stylish UI design to mobile-first principles while strengthening your React.js and Tailwind CSS skills.",
    link: "https://brainstorm-dev.vercel.app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-green",
    name: "React Exercise Application",
    description:
      "This is a Exercise App that was built using Rapid API and is a PWA web app. It shows different exercises for gym freak as well as videos of each and every exercise with full details of the exercises with great explanation.",
    link: "https://exercise-dev.vercel.app",
  },
  {
    iconUrl: threads,
    theme: "btn-back-black",
    name: "Real Estate Website",
    description:
      "Build and Deploy a Real Estate React & Next.js Application",
    link: "https://realtor-dev.vercel.app",
  }
];

export const friends = [
  {
    iconUrl: daneruyle,
    theme: "btn-back-green",
    name: "Dane Ruyle",
    description:
      "My Boss",
    link: "https://www.linkedin.com/in/dane-ruyle-a840871",
  },
  {
    iconUrl: hufang,
    theme: "btn-back-black",
    name: "Hu Fang",
    description:
      "My Friend",
    link: "https://cn.linkedin.com/in/yeddavidoo222",
  }
];