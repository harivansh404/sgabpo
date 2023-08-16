import { GoHome } from "react-icons/go";
import {
    MdOutlineHomeRepairService,
    MdOutlineContactPhone,
} from "react-icons/md";
import {HiOutlineInformationCircle } from "react-icons/hi";
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
    FaInstagram,
    FaWhatsapp,
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
        name: "Customer Lifecycle Management",
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

export const CareerData = [
    {
        name: "Prabhat Batra",
        position: "Manager",
        company: "Axis Bank",
        Career:
            "Incredible results! The debt recovery services provided by SGA are nothing short of amazing. They were able to recover a significant amount of our outstanding debts in a remarkably short time. Highly recommended for their professionalism and effectiveness.",
    },
    {
        name: "Omkar Jain",
        position: "Accounts Head",
        company: "FIMS Hospital",
        Career:
            "Tech excellence! SGA has consistently provided us with tailor-made IT solutions with their commitment to excellence, continuous support, and forward-thinking approach that align with our goals. We highly recommend SGA for comprehensive IT services.",
    },
    {
        name: "Satish Kumar Kamboj",
        position: "CEO",
        company: "The Sonipat Urban Co-operative Bank",
        Career:
            "We've been highly satisfied with the accounts data entry services provided by SGA. Their team's precision and attention to detail have significantly improved our record-keeping process. They have become an essential part of our financial operations.",
    },
    {
        name: "Deepak Grover",
        position: "Owner",
        company: "Grover Graphics",
        Career:
            "SGA has been instrumental in driving our digital success. Their web development expertise has enabled us to provide an intuitive platform for our customers. We're grateful for SGA's contribution to our online growth",
    },
];

export const statData = [
    {
        id: 1,
        year: 4,
        description: "BANKS IN<br />PORTFOLIO",
    },
    {
        id: 2,
        year: 13,
        description: "YEARS OF<br />EXPERIENCE",
    },
    {
        id: 3,
        year: 150,
        description: "CITIES COVERED",
    },
    {
        id: 4,
        year: 5,
        description: "AVAILABLE<br />SERVICES",
    },
];

export const aboutCards = [
    {
        icon: SiSecurityscorecard,
        title: "Debt Recovery​",
        description:
            "Offering a comprehensive range of debt recovery and delinquency management solutions.",
    },
    {
        icon: SiSpringsecurity,
        title: "Business Development",
        description:
            "We streamline workflows, enhance scalability, and drive cost-effectiveness. Experience a seamless transition of tasks while focusing on your core business.",
    },
    {
        icon: FaNewspaper,
        title: "IT Solutions​",
        description:
            "Empower your business with our suite of cutting-edge IT solution services.",
    },
    {
        icon: FaFileAlt,
        title: "Customised Solutions",
        description:
            "Delivering tailored solutions and services, meticulously crafted to align with your industry's distinct demands.",
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
        imageSrc: "debimanagment.png",
        title: "DEBT MANAGEMENT",
        subTitle1: "Delinquency Management",
        subTitle2: "Soft Collections",
        subTitle3: "Live collections",
        subTitle4: "Field Collections",
        pos: true,
    },
    {
        imageSrc: "calling.png",
        title: "BUSINESS PROCESS​",
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

export const navLinks = [
    { link: "Home", icon: GoHome },
    { link: "About", icon: HiOutlineInformationCircle },
    { link: "Services", icon: MdOutlineHomeRepairService },
    { link: "Contact", icon: MdOutlineContactPhone },
];

export const socialIcons = [
    {
        icon: FaFacebook,
        url: "https://www.facebook.com/profile.php?id=100095149373864&mibextid=ZbWKwL",
    },
    {
        icon: FaLinkedin,
        url: "https://www.linkedin.com/company/shree-ganesh-associates/",
    },
    {
        icon: FaInstagram,
        url: "https://instagram.com/hkclsonipat?igshid=NTc4MTIwNjQ2YQ==",
    },
    { icon: FaWhatsapp, url: "https://wa.link/4vo1wp" },
];
