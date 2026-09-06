
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
  azure,
  googlecloud,
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
  shamilTestimonial,
  bromide,
  careeriq360,
  whatnext,
  prepacademy,
  indigo,
  thejusHomes,
  paramountIspace,
  commercialRent,
  sastra,
  trendzb2b,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";
import xlLogo from "../assets/company/xllogo.webp";
import brototypeLogo from "../assets/company/brototypeLogo.png";
import pixelbohoLogo from "../assets/company/PixelbohoLogo.png";

// Set to true when the resume PDF is updated and ready to share
export const showResume = false;

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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Head of IT Department",
    icon: web,
  },
  {
    title: "Flutter App Developer",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer (React · Next · Nest · Django)",
    icon: backend,
  },
  {
    title: "DevOps & Cloud Infrastructure",
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
    name: "Azure",
    icon: azure,
  },
  {
    name: "Google Cloud",
    icon: googlecloud,
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
  title: "Head of IT Department",
  company_name: "Pixel Boho Pvt Ltd",
  icon: pixelbohoLogo,
  iconBg: "#383E56",
  date: "August 2025 - Present",
  points: [
    "Leading the IT department and development team to design, deliver, and operate web and mobile products for Pixel Boho clients.",
    "Owned end-to-end delivery across frontend, backend, admin panels, and campaign landing systems using React, Next.js, Flutter, Node.js, and Django.",
    "Managed DevOps and infrastructure across AWS, Azure, Google Cloud (Cloud Run), Hostinger, and GoDaddy — including hosting, deployments, servers, and DNS for production client modules.",
    "Mentored developers, set engineering practices, and aligned technical solutions with client and business goals.",
    "Drove architecture, security, and release readiness for enterprise apps, real-estate platforms, and EdTech products.",
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
      "Bilal delivers production-ready Flutter apps with exceptional UI craft and strong performance. His clean architecture focus made complex mobile collaboration reliable, polished, and highly efficient across our team.",
    name: "Ajai Joseph",
    designation: "Senior Flutter Developer",
    company: "Xceptional Learning",

    image: ajaiTestimonial,
  },
  {
    testimonial:
      "Bilal approaches full-stack delivery with clarity, ownership, and strong problem-solving skill. He clears blockers quickly, aligns across the stack, and helped us ship stable product releases on schedule as planned.",
    name: "Mohammed Shamil",
    designation: "Senior Full Stack Developer",
    company: "Xceptional Learning",
    image: shamilTestimonial,
  },
  {
  testimonial:
    "Working with Bilal is productive and seamless throughout each project engagement. His depth across mobile and web sped up decisions and kept development smooth, clear, and efficient from start through final release.",
  name: "Saheer Moidhu",
  designation: "Game Developer & ACCA",
  company: "Independent Consultant",
    image: saheerTestimonial,
  },
];

const projects = [
  {
    name: "Bromide",
    description:
      "Led an enterprise cross-platform mobile ecosystem for Talent, Vendor, Production, and Production House users in the media industry. Built with Flutter, Django REST, PostgreSQL, MongoDB, and AWS (EC2, S3, RDS), including role-based profiles, feed, messaging, subscriptions, EKYC, and a full admin platform.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "django", color: "green-text-gradient" },
      { name: "aws", color: "pink-text-gradient" },
      { name: "postgresql", color: "white-text-gradient" },
      { name: "mongodb", color: "orange-text-gradient" },
      { name: "enterprise", color: "blue-text-gradient" },
    ],
    image: bromide,
    source_links: {},
  },
  {
    name: "CareerIQ360",
    description:
      "Designed and delivered a psychometric testing website and user portal with JWT auth, dashboards, test generation, reports, subscriptions, and payment billing. Built admin tooling for users, plans, coupons, referrals, refunds, blogs, and SEO, with Django backend and React frontend.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "django", color: "green-text-gradient" },
      { name: "jwt-auth", color: "pink-text-gradient" },
      { name: "payments", color: "white-text-gradient" },
      { name: "admin-panel", color: "orange-text-gradient" },
    ],
    image: careeriq360,
    source_links: {
      website: "https://careeriq360.ai/",
    },
  },
  {
    name: "WhatNext",
    description:
      "Led website enhancements (blog, founder pages), campaign landing pages, and a Tele CRM admin panel for overseas education operations. Owned frontend/backend delivery plus hosting and server infrastructure across WhatNext modules (Next.js and Django).",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "django", color: "green-text-gradient" },
      { name: "crm", color: "pink-text-gradient" },
      { name: "admin-panel", color: "white-text-gradient" },
      { name: "hosting", color: "orange-text-gradient" },
    ],
    image: whatnext,
    source_links: {
      website: "https://whatnextoverseas.com/",
    },
  },
  {
    name: "PrepAcademy",
    description:
      "Led PrepAcademy web platform work including SEO/content updates, admin panel rework, and campaign landing pages (CAT, CUET, LawPrep) with Zoom/WhatsApp/email integrations and automated reminders. Also delivered lead-management admin panels, tele CRM, and production hosting.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "django", color: "pink-text-gradient" },
      { name: "landing-pages", color: "white-text-gradient" },
      { name: "telecrm", color: "orange-text-gradient" },
    ],
    image: prepacademy,
    source_links: {
      website: "https://prepacademy.in/",
    },
  },
  {
    name: "Indigo",
    description:
      "Designed and developed a large corporate website with custom UI across Home, Platform, Solutions, Services, Resources, Careers, blogs, FAQ, and newsletter modules. Built a content/SEO admin panel and managed hosting for all modules (React and Node.js).",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "seo", color: "pink-text-gradient" },
      { name: "admin-panel", color: "white-text-gradient" },
      { name: "cms", color: "orange-text-gradient" },
    ],
    image: indigo,
    source_links: {
      website: "https://indigoinform.com/",
    },
  },
  {
    name: "Paramount Ispace",
    description:
      "Delivered a mobile-responsive property listing platform with filters, detailed property pages, careers, and enquiry forms. Built admin management for listings, enquiries, testimonials, and careers, with Node.js backend and Next.js frontend.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "nodejs", color: "pink-text-gradient" },
      { name: "real-estate", color: "white-text-gradient" },
      { name: "admin-panel", color: "orange-text-gradient" },
    ],
    image: paramountIspace,
    source_links: {
      website: "https://paramountispace.com/",
    },
  },
  {
    name: "Thejus Homes",
    description:
      "Built a responsive real-estate website with property listings, filters, detailed property pages, testimonials, and enquiry flows. Delivered an admin panel for listings and leads, plus hosting and deployment (Next.js and Node.js).",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "real-estate", color: "pink-text-gradient" },
      { name: "admin-panel", color: "white-text-gradient" },
      { name: "lead-gen", color: "orange-text-gradient" },
    ],
    image: thejusHomes,
    source_links: {},
  },
  {
    name: "Commercial Rent Management",
    description:
      "Ongoing role-based web app for commercial buildings, tenants, agreements, maintenance, payments, and GST/TDS rent calculations. Includes dashboards, reminders for dues and agreement expiry, document management, and secure hosting.",
    tags: [
      { name: "web-app", color: "blue-text-gradient" },
      { name: "rbac", color: "green-text-gradient" },
      { name: "payments", color: "pink-text-gradient" },
      { name: "dashboard", color: "white-text-gradient" },
      { name: "ongoing", color: "orange-text-gradient" },
    ],
    image: commercialRent,
    source_links: {},
  },
  {
    name: "Sastra",
    description:
      "Designed and developed a custom mobile application for an Indian Army client with calculation modules for shooting range and drone operations, logging for record management, and dedicated observation views for monitoring and analysis.",
    tags: [
      { name: "mobile", color: "blue-text-gradient" },
      { name: "custom-ui", color: "green-text-gradient" },
      { name: "calculations", color: "pink-text-gradient" },
      { name: "logging", color: "white-text-gradient" },
      { name: "ops-tools", color: "orange-text-gradient" },
    ],
    image: sastra,
    source_links: {},
  },
  {
    name: "TrendzB2B",
    description:
      "Built a campaign landing page with application forms, OTP verification, and WhatsApp/email communication. Implemented automated reminders and an admin panel for lead tracking, with Node.js backend and React frontend.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "otp-auth", color: "pink-text-gradient" },
      { name: "whatsapp", color: "white-text-gradient" },
      { name: "admin-panel", color: "orange-text-gradient" },
    ],
    image: trendzb2b,
    source_links: {},
  },
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
