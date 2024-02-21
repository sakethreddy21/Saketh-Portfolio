import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ML Enthusaist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Laserpay",
    icon: "https://www.laser-pay.com/images/Laserpay_Logo_(500%20x%20500).png",
    iconBg: "#383E56",
    date: "September 2020 - November 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Computer Vison DOMAIN Head",
    company_name: "NEXT_GEN_AI",
    icon: "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/05/2-2.png",
    iconBg: "#E6DEDD",
    date: "June 2022 - Feb 2023",
    points: [
      "Oragnise research projetcs based on computer vision and machine learning. Organize a series of diverse workshops focused on the applications of artificial intelligence within the healthcare sector",
    ],
  },
 
];


const projects = [
  {
    name: "Sation(Inspired from Notion)",
    description:
      " Sation - a game-changing Notion-inspired platform designed to supercharge productivity and streamline collaboration.With Sation, I've aimed to create a seamless workspace that combines the best features of Notion with innovative new functionalities tailored to the needs of modern teams that yet to add. From project management to knowledge sharing, Sation empowers users to organize, create, and collaborate like never before.I'd love to dive deeper into the features, design philosophy, and the journey behind bringing Sation to life. Let's discuss how Sation can elevate your workflow and transform the way you work together. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ConvexDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/sakethreddy21/Sation",
  },
  {
    name: "Hook Bank",
    description:
      "Excited to unveil my latest project—a dynamic static website created to further enhance my skills in frontend development, particularly focusing on elevating my proficiency in Tailwind CSS. 🚀 This project allowed me to delve deeper into the UI/UX realm, experimenting with innovative designs and implementing responsive layouts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/sakethreddy21/hook_bank",
  },
 
];

export { services, technologies, experiences, projects };