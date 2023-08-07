import { FaNewspaper, FaFileAlt } from "react-icons/fa";
import { SiSecurityscorecard, SiSpringsecurity } from "react-icons/si";

import {
    debtIcon,
    custIcon,
    itIcon,
    businessIcon,
    trainingIcon,
} from "../assets/serviceIcons/serviceIcons";

import {
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaGithub,
    FaInstagram,
} from "react-icons/fa";

//exporting constant data
export const servicesData = [
    {
        imageUrl: debtIcon,
        name: "Debt Management Services",
        desc: "Offering a comprehensive range of debt recovery and delinquency management solutions, encompassing customer negotiation for alternate payments, multi-stage overdue debt collection via tele-collections and physical retrieval.",
    },
    {
        imageUrl: custIcon,
        name: "Customer Lifecycle Management Services",
        desc: "Delivering tailored solutions and services, meticulously crafted to align with your industry's distinct demands. Our guidance empowers enduring customer loyalty, fostering a resilient brand image that accompanies and enhances their journey alongside us.",
    },
    {
        imageUrl: itIcon,
        name: "Digital and Tech Services",
        desc: "Empower your business with our suite of cutting-edge IT solution services. From dynamic web app development to fortified cybersecurity, streamlined automation, and bespoke solutions, we're dedicated to optimizing your digital landscape for success.",
    },
    {
        imageUrl: businessIcon,
        name: "Business Process Outsourcing",
        desc: "Elevate operational efficiency and customer experience with our Business Process Outsourcing (BPO) services. We streamline workflows, enhance scalability, and drive cost-effectiveness. Experience a seamless transition of tasks while focusing on your core business, fueled by our reliable BPO solutions.",
    },
    {
        imageUrl: trainingIcon,
        name: "Training & Placement Services",
        desc: "Empower your career through our comprehensive computer training and placement services. Gain hands-on expertise in diverse IT domains, equipping you for a competitive job market. Our personalized approach ensures skill enhancement, career guidance, and successful placements with confidence.",
    },
];

export const testimonialData = [
    {
        imageUrl: "Services1.png",
        title: "50+ Best creative website themes & templates",
        description:
            "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
    },
    {
        imageUrl: "Services2.png",
        title: "The ultimate UX and UI guide to card design",
        description:
            "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
    },
    {
        imageUrl: "Services3.png",
        title: "Creative Card Component designs graphic elements",
        description:
            "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
    },
];

export const statData = [
    {
        id: 1,
        year: 8,
        description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
    },
    {
        id: 2,
        year: 3,
        description: "YEARS OF<br />EXPERIENCE",
    },
    {
        id: 3,
        year: 10,
        description: "TECHNOLOGIES",
    },
    {
        id: 4,
        year: 70,
        description: "COMMUNITY<br />POSTS",
    },
];

export const aboutCards = [
    {
        icon: SiSecurityscorecard,
        title: "Physical Security​",
        description:
            "Ensuring secure working environment for employees and clients.",
    },
    {
        icon: SiSpringsecurity,
        title: "Information Security​",
        description:
            "Equipped with multiple data recovery sites across India to ensure business continuity in the event of any calamities.",
    },
    {
        icon: FaNewspaper,
        title: "Business Continuity Planning​",
        description:
            "Equipped with multiple data recovery sites across India to ensure business continuity in the event of any calamities.",
    },
    {
        icon: FaFileAlt,
        title: "Empowering Communities",
        description:
            "Partnerships, charity events, sponsorships, and community projects.",
    },
];

export const servicesList = [
    {
        imageSrc: "allServices1.png",
        title: " CUSTOMER LIFECYCLE MANAGEMENT",
        subTitle1: " Customer Service",
        subTitle2: " Sales & Marketing",
        subTitle3: " Technical Support",
        subTitle4: " Customer Retention Services",
        pos: true,
    },
    {
        imageSrc:
            "https://www.arrisebpm.com/wp-content/uploads/2021/04/verification.png",
        title: "TRAINING SERVICES",
        subTitle1: "Govt. Approved Computer Courses",
        subTitle2: "Higher Education Transformation Services",
        subTitle3: "Courses & Assessment Services",
        subTitle4: "Campus Recruitment Training",
        pos: false,
    },
    {
        imageSrc:
            "https://www.arrisebpm.com/wp-content/uploads/2021/04/service3.png",
        title: "DEBT MANAGEMENT",
        subTitle1: "Delinquency Management",
        subTitle2: "Soft Collections",
        subTitle3: "Live collections",
        subTitle4: "Field Collections",
        pos: true,
    },
    {
        imageSrc:
            "https://www.arrisebpm.com/wp-content/uploads/2021/04/service4.png",
        title: "BUSINESS PROCESS ​",
        subTitle1: " Application Processing",
        subTitle2: " Data entry - online & paper-based",
        subTitle3: " Data Conversions",
        subTitle4: " Manpower Outsourcing",
        pos: false,
    },
    {
        imageSrc: "https://www.arrisebpm.com/wp-content/uploads/2021/04/hr.png",
        title: "HUMAN RESOURCES SHARED",
        subTitle1: " Hire-to-retire",
        subTitle2: " Payroll processing",
        subTitle3: " Employee Self Service",
        subTitle4: " HR Analytics",
        pos: true,
    },
];

export const navLinks = ["Home", "About", "Services", "Contact"];

export const socialIcons = [
    { icon: FaFacebook, url: "facebook.com" },
    { icon: FaLinkedin, url: "linkedin.com" },
    { icon: FaTwitter, url: "twitter.com" },
    { icon: FaGithub, url: "github.com" },
    { icon: FaInstagram, url: "instagram.com" },
];
