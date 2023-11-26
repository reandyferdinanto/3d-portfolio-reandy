import {css, express, git, github, html, javascript, mongodb, mui, nextjs, nodejs, react, redux, sass, tailwindcss, typescript} from '../../assets/icons';
import chakraui from '../../assets/icons/chakraui.svg'
import {meta, shopify, tesla} from '../../assets/images'
import phincon from '../../assets/images/phincon.png'
import festivo from '../../assets/images/festivo.png'
import kommodity from '../../assets/images/kommodity.png'
import dibimbing from '../../assets/images/dibimbing.png'

export const skills = [
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    
    {
        imageUrl: chakraui,
        name: 'chakra-ui',
        type: 'frontend',
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
 
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: 'CSS',
        type: 'frontend',
    },
    
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: 'Express',
        type: 'backend',
    },
    
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
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
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
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
    }
];

export default {chakraui, phincon, festivo, kommodity}

export const experiences = [
    {
        title: "Frontend Developer - Freelance",
        company_name: "Festivo",
        icon: festivo,
        iconBg: "#900C3F",
        date: "November 2023 - present",
        points: [
            "Developing a responsive version of an LMS web application, seamlessly blending functionality with user-friendly design to enhance the overall learning experience."
        ],
    },
    {
        title: "Frontend Developer - Internship",
        company_name: "Kommodity",
        icon: kommodity,
        iconBg: "#219C90",
        date: "Sep 2023 - present",
        points: [
            "Developing and maintaining dashboard & catalog using Next.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Web Developer - Internship",
        company_name: "PT. Phincon",
        icon: phincon,
        iconBg: "#D2E9E9",
        date: "July 2023 - Aug 2023",
        points: [
            "Learning and developing web applications using React.js/Vite.js and other related technologies.",
            "Learning How Collaborating with other developers and teams to build high-quality web applications.",
            "Learning and Practicing Basic Skill of Web Development.",
        ],
    },
    {
        title: "Switch Career Program - Bootcamp",
        company_name: "dibimbing.id",
        icon: dibimbing,
        iconBg: "#FFD93D",
        date: "Jan 2023 - Present",
        points: [
            "Learning  Basic Skill of Web Development Such as HTML, CSS, JavaScript, Node.js, Express.js, MySQL and more.",
            "Learning and Practicing Problem Solving Skills.",
            "Preparing for interviews and building a portfolio.",
            "Enhanched English Communication Skills in English Business Program.",
        ],
    },
]