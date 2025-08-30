
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  flutter,
  firebase,
  xlConnect,
  vergeTab,
  vergeTabLauncher,
  imoda,
  xceptionalLearning,
  ies,
  blackBeatz,
  soleSphere,
  cloudSpotter,
  websiteIcon,
  playstoreIcon,
  saheerTestimonial,
  ajaiTestimonial,
  shamilTestimonial
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";
import xlLogo from "../assets/company/xllogo.webp";
import brototypeLogo from "../assets/company/brototypeLogo.png";
import pixelbohoLogo from "../assets/company/PixelbohoLogo.png";


export const navLinks = [

{
  id: "resume",
  title: "Resume",
  url: "/resume"
},
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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Flutter App Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer (React.js)",
    icon: backend,
  },
  {
    title: "Backend Developer (Node.js & Nest.js)",
    icon: creator,
  },
];

const technologies = [
    {
name : "Flutter",
icon : flutter  
  },
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
    name: "React JS",
    icon: reactjs,
  },

  {
name: "Firebase",
icon : firebase
  },
  // {
  //   name: "gsap",
  //   icon: gsap,
  // },
  // {
  //   name: "framer",
  //   icon: framer,
  // },

 
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "figma",
    icon: figma,
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
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
  title: "Senior Software Developer & Team Lead",
  company_name: "Pixel Boho Pvt Ltd",
  icon: pixelbohoLogo, // replace with actual logo variable
  iconBg: "#383E56",
  date: "August 2025 - Present",
  points: [
    "Leading a team of developers to design and deliver scalable web and mobile applications.",
    "Architected and implemented backend services with Node.js and Nest.js, ensuring performance and security.",
    "Built dynamic, responsive front-end solutions with Flutter, React.js and Next.js for seamless user experiences.",
    "Mentored junior developers, conducted code reviews, and established best practices for clean and maintainable code.",
    "Collaborated closely with product managers, designers, and stakeholders to align technical solutions with business goals.",
  ],
},

  {
    title: "Software Developer",
    company_name: "Xceptional Learning Pvt Ltd",
    icon: xlLogo,
    iconBg: "#383E56",
    date: "July 2023 - August 2025",
    points: [
      "Developed cross-platform mobile applications using Flutter and responsive web interfaces with React.js.",
      "Built scalable backend services with Node.js and Nest.js, integrating RESTful APIs and JWT-based authentication.",
      "Implemented multilingual support, real-time notifications, payment gateways, and third-party service integrations.",
      "Collaborated with cross-functional teams to deliver clean, maintainable code and production-ready solutions.",
    ],
  },
  {
    title: "Flutter Developer Trainee",
    company_name: "Brototype",
    icon: brototypeLogo,
    iconBg: "#383E56",
    date: "Nov 2022 - July 2023",
    points: [
      "Strengthened Flutter development skills through structured learning and hands-on projects.",
      "Built functional mobile applications focusing on state management, UI/UX design, and clean architecture.",
      "Worked in agile teams to deliver real-world projects within set timelines and quality standards.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "Bilal’s Flutter skills are top-notch. His clean UI and smooth app performance always impressed me.",
    name: "Ajai Joseph",
    designation: "Senior Flutter Developer",
    company: "Xceptional Learning",

    image: ajaiTestimonial,
  },
  {
    testimonial:
      "Bilal handled full-stack tasks efficiently. His quick problem-solving made a big impact on our releases.",
    name: "Mohammed Shamil",
    designation: "Senior Full Stack Developer",
    company: "Xceptional Learning",
    image: shamilTestimonial,
  },
  {
  testimonial:
    "Working with Bilal was seamless. His technical depth made the development efficient and smooth.",
  name: "Saheer Moidhu",
  designation: "Game Developer & ACCA",
  company: "Independent Consultant",
    image: saheerTestimonial,
  },
];

const projects = [
   {
    name: "IMODA",
    description:
      "Built a full-featured Flutter e-commerce and model management application with Firebase OTP login, Razorpay integration, wishlist, cart, event features, and RESTful Node.js APIs. Designed highly interactive UI/UX and managed notifications for real-time engagement.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "firebase-auth", color: "green-text-gradient" },
      { name: "razorpay", color: "pink-text-gradient" },
      { name: "nodejs", color: "white-text-gradient" },
      { name: "uiux", color: "orange-text-gradient" },
      { name: "restapi", color: "blue-text-gradient" },
    ],
    image: imoda,
    // source_code_link: "https://github.com/",
    source_links:{
      playstore:"https://play.google.com/store/apps/details?id=com.imoda.apps&pcampaignid=web_share"
    },

  },
  {
    name: "XL Connect",
    description:
      "A secure real-time communication app built with Flutter, enabling chat, audio/video calls, file sharing, contact & location sharing for therapy seekers and therapists. Integrated RESTful APIs with JWT, GetX state management, multilingual support, and scheduling features.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "dart", color: "green-text-gradient" },
      { name: "getx", color: "pink-text-gradient" },
      { name: "jwt-auth", color: "white-text-gradient" },
      { name: "multilingual", color: "orange-text-gradient" },
      { name: "responsive-ui", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
    ],
    image: xlConnect,
    // source_code_link: "https://github.com/",
    source_links: {
    playstore: "https://play.google.com/store/apps/details?id=com.xceptionallearningindia.xlconnectapp&pcampaignid=web_share",
    },
  },
  {
    name: "Verge App",
    description:
      "Flutter-based LMS tailored for special education with assignments, multimedia support, and Construct 3 game integration. Included offline mode, push notifications, multilingual support, WorkManager tasks, and a webview for accessing learning portals.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "construct3", color: "pink-text-gradient" },
      { name: "push-notifications", color: "green-text-gradient" },
      { name: "workmanager", color: "white-text-gradient" },
      { name: "offline-mode", color: "orange-text-gradient" },
      { name: "lms", color: "blue-text-gradient" },
    ],
    image: vergeTab,
    // source_code_link: "https://github.com/",
    source_links: {
    playstore: "https://play.google.com/store/apps/details?id=com.xceptionallearningindia.vergetabapp&pcampaignid=web_share",
  },
  },
  
 
  {
    name: "Xceptional Learning",
    description:
      "Developed a scalable full-stack EdTech platform using React, Nest.js, and Node.js. Integrated JWT-secured login, multilingual support, PostgreSQL on AWS, webinar hosting, game modules, and academic tracking. ZeptoMail integration for transactional notifications.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nestjs", color: "green-text-gradient" },
      { name: "aws", color: "pink-text-gradient" },
      { name: "postgresql", color: "white-text-gradient" },
      { name: "jwt-auth", color: "orange-text-gradient" },
      { name: "websocket", color: "blue-text-gradient" },
    ],
    image: xceptionalLearning,
    // source_code_link: "https://github.com/",
    source_links: {
      website: "https://xceptionallearning.com/",
      },
  },
  {
    name: "XL-IES",
    description:
      "Architected a backend platform using React and Node.js for real-time assessments, performance analytics, and reporting. Enabled data visualization dashboards for educators and parents with alert systems, outcome tracking, and school management tools.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "pink-text-gradient" },
      { name: "dashboard", color: "green-text-gradient" },
      { name: "analytics", color: "pink-text-gradient" },
      { name: "reporting", color: "white-text-gradient" },
      { name: "admin-panel", color: "orange-text-gradient" },
    ],
    image: ies,
    // source_code_link: "https://github.com/",
    source_links: {
      website: "https://ies.xceptionallearningindia.com/",
    },
  },
  {
    name: "Launcher App",
    description:
      "Engineered a kiosk-mode launcher for VergeTab devices using Flutter with device lockdown, restricted app access, and system controls like brightness/Wi-Fi. Optimized for accessibility and security for users with special needs. Ensured high device compliance and reliability.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "device-control", color: "green-text-gradient" },
      { name: "android-kiosk", color: "pink-text-gradient" },
      { name: "accessibility", color: "orange-text-gradient" },
      { name: "ux-design", color: "white-text-gradient" },
    ],
    image: vergeTabLauncher,
    source_links:{},
  },
  {
    name: "BlackBeatz",
    description:
      "Designed and developed an offline Flutter-based music player supporting local media playback, playlist management, and lightweight storage with Hive DB. Applied BLoC for efficient state control and seamless UX.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "bloc", color: "green-text-gradient" },
      { name: "hive-db", color: "pink-text-gradient" },
      { name: "media-player", color: "white-text-gradient" },
      { name: "offline-app", color: "orange-text-gradient" },
    ],
    image: blackBeatz,
    // source_code_link: "https://github.com/",
    source_links: {
      github: "https://github.com/MuhammedBilalA/BLACKBEATZ-OFFICIAL.git"   },
  },
  {
    name: "SoleSphere",
    description:
      "Created a Flutter e-commerce app with Google/email login, Firebase backend, real-time Razorpay payments, delivery tracking, and admin dashboard. Focused on performance, real-time updates, and secure architecture.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "razorpay", color: "pink-text-gradient" },
      { name: "ecommerce", color: "white-text-gradient" },
      { name: "admin-panel", color: "orange-text-gradient" },
    ],
    image: soleSphere,
    // source_code_link: "https://github.com/",
    source_links: {
      github: "https://github.com/MuhammedBilalA/SOLE_SPHERE-E_COMMERCE.git" },
  },
  {
    name: "Cloud Spotter",
    description:
      "Built a real-time weather forecast app using Flutter and open weather APIs. Prioritized performance, fast load times, clean UI, and accurate location-based weather rendering.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "weather-api", color: "green-text-gradient" },
      { name: "state-management", color: "pink-text-gradient" },
      { name: "clean-ui", color: "white-text-gradient" },
      { name: "location-services", color: "orange-text-gradient" },
    ],
    image:  cloudSpotter,
    // source_code_link: "https://github.com/",
    source_links: {
      github: "https://github.com/MuhammedBilalA/CloudSpotter-weatherApp.git"
  },}
];



export { services, technologies, experiences, testimonials, projects };
