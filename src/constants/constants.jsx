// Skills icons
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiMui } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

// Tools icons
import { VscVscodeInsiders } from "react-icons/vsc";
import { IoLogoGithub } from "react-icons/io5";
import { SiXampp } from "react-icons/si";
import { SiMamp } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiWarp } from "react-icons/si";
import { SiOpenai } from "react-icons/si";
import { SiGithubcopilot } from "react-icons/si";
import { SiBruno } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiGit } from "react-icons/si";

// Database icons
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

// Cloud icons
import { SiRailway } from "react-icons/si";
import { SiVercel } from "react-icons/si";

// Social media icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const NAVIGATION_LINKS = [
  { label: "ประวัติ", href: "#about" },
  { label: "การศึกษา", href: "#education" },
  { label: "ผลงาน", href: "#projects" },
  { label: "ทักษะ", href: "#skills" },
  { label: "ติดต่อ", href: "#contact" },
];

export const HERO = {
  name: "PACHARA",
  greet1: "FRONT-END DEVELOPER",
  greet2: "BACK-END DEVELOPER",
  greet3: "FULL-STACK DEVELOPER",
  greet4: "LEAD DEVELOPER",

  greet5: "SOFTWARE ENGINEER",
  greet6: "WEB DEVELOPER",
  greet7: "MOBILE APPLICATION DEVELOPER",
  greet8: "DEVOPS ENGINEER",
  greet9: "SITE RELIABILITY ENGINEER",
  greet10: "CLOUD ENGINEER",

  greet11: "SYSTEM ANALYST",
  greet12: "SOFTWARE ARCHITECT",
  greet13: "SOLUTION ARCHITECT",
  greet14: "DATA ENGINEER",
  greet15: "MACHINE LEARNING ENGINEER",

  greet16: "QA ENGINEER",
  greet17: "TEST AUTOMATION ENGINEER",
  greet18: "SECURITY ENGINEER",
  greet19: "BLOCKCHAIN DEVELOPER",
  greet20: "GAME DEVELOPER",

  greet21: "TECHNICAL LEAD",
  greet22: "ENGINEERING MANAGER",
  greet23: "CTO (CHIEF TECHNOLOGY OFFICER)",

  // Non-Coding / Business / Process
  greet24: "PRODUCT MANAGER",
  greet25: "PROJECT MANAGER",
  greet26: "PRODUCT OWNER",

  greet27: "BUSINESS ANALYST",

  greet28: "UX DESIGNER",
  greet29: "UI DESIGNER",
  greet30: "UX RESEARCHER",

  greet31: "QA ANALYST",
  greet32: "SOFTWARE TESTER",

  greet33: "SCRUM MASTER",
  greet34: "AGILE COACH",

  greet35: "IT SUPPORT",
  greet36: "TECHNICAL SUPPORT",
  greet37: "CUSTOMER SUCCESS ENGINEER",

  greet38: "IMPLEMENTATION CONSULTANT",
  greet39: "TECHNICAL CONSULTANT",
  greet40: "SOLUTION CONSULTANT",

  greet41: "DATA ANALYST",
  greet42: "DIGITAL TRANSFORMATION SPECIALIST",

  greet43: "IT AUDITOR",
  greet44: "INFORMATION SECURITY ANALYST"
};

export const ABOUT = [
  "ผมเป็นนักศึกษาระดับปริญญาตรี จากมหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ ศูนย์สุพรรณบุรี มีความหลงใหลในการออกแบบและพัฒนาเว็บไซต์ โดยเฉพาะในสายงาน Front-End Developer พร้อมให้ความสำคัญกับการสร้างสรรค์ผลงานที่สวยงามและตอบโจทย์ผู้ใช้งานอยู่เสมอ",
  "ด้วยความมุ่งมั่นในการเรียนรู้และพัฒนาทักษะอย่างต่อเนื่อง ผมตั้งเป้าหมายในการเติบโตสู่การเป็น Lead Front-End Developer โดยเน้นการออกแบบซอฟต์แวร์ที่มีคุณภาพ และประสบการณ์ผู้ใช้ที่ดีเยี่ยมควบคู่กันไป",
];

export const PROJECTS = [
  {
    id: 1,
    title: "ระบบจัดการสต๊อกสินค้า",
    description:
      "ระบบจัดการสต๊อกสินค้าแบบครบวงจร รองรับการค้นหาและสแกนบาร์โค้ดแบบเรียลไทม์แสดงข้อมูลสินค้า คงเหลือ และประวัติการขายอย่างเป็นระบบออกแบบมาเพื่อเพิ่มความรวดเร็วและลดความผิดพลาดในการจัดการสินค้า",
    image: "/image.Projects/Project1.jpeg",
    techStack: ["React", "TailwindCSS", "Golang", "MySQL", "JWT"],
  },
  {
    id: 2,
    title: "ระบบแดชบอร์ดผู้ดูแลระบบ",
    description:
      "แดชบอร์ดสำหรับผู้ดูแลระบบ ใช้แสดงข้อมูลภาพรวมและสถิติสำคัญแบบเรียลไทม์รองรับการกำหนดสิทธิ์ผู้ใช้งานและการยืนยันตัวตนอย่างปลอดภัยออกแบบ UI ให้ใช้งานง่าย รองรับการแสดงผลทุกอุปกรณ์",
    image: "/image.Projects/Project2.jpeg",
    techStack: ["React", "MUI", "Golang", "REST API"],
  },
  {
    id: 3,
    title: "แพลตฟอร์มการเรียนรู้ออนไลน์",
    description:
      "แพลตฟอร์มการเรียนรู้ออนไลน์สำหรับจัดการบทเรียนและเนื้อหาแบบดิจิทัลรองรับระบบแบบฝึกหัด การติดตามความก้าวหน้า และสรุปผลการเรียนมุ่งเน้นประสบการณ์ผู้ใช้ที่เรียบง่ายและโต้ตอบได้อย่างลื่นไหล",
    image: "/image.Projects/Project3.jpeg",
    techStack: ["React", "TailwindCSS", "Framer Motion"],
  },
];

export const GALLERY_IMAGES = [
      { image: `https://picsum.photos/seed/1/800/600?grayscale`, text: 'Bridge' },
      { image: `https://picsum.photos/seed/2/800/600?grayscale`, text: 'Desk Setup' },
      { image: `https://picsum.photos/seed/3/800/600?grayscale`, text: 'Waterfall' },
      { image: `https://picsum.photos/seed/4/800/600?grayscale`, text: 'Strawberries' },
      { image: `https://picsum.photos/seed/5/800/600?grayscale`, text: 'Deep Diving' },
      { image: `https://picsum.photos/seed/16/800/600?grayscale`, text: 'Train Track' },
      { image: `https://picsum.photos/seed/17/800/600?grayscale`, text: 'Santorini' },
      { image: `https://picsum.photos/seed/8/800/600?grayscale`, text: 'Blurry Lights' },
      { image: `https://picsum.photos/seed/9/800/600?grayscale`, text: 'New York' },
      { image: `https://picsum.photos/seed/10/800/600?grayscale`, text: 'Good Boy' },
      { image: `https://picsum.photos/seed/21/800/600?grayscale`, text: 'Coastline' },
      { image: `https://picsum.photos/seed/12/800/600?grayscale`, text: 'Palm Trees' }
];

export const IMAGE_SHOWCASE = {
  title: "ผลงานการออกแบบกราฟิก",
};

export const VIDEO_SHOWCASE = {
  title: "ผลงานวิดีโอโปรโมชัน",
  items: [
    {
      thumbnail: "/image.videos/video1.jpg",
      link: "https://www.youtube.com/watch?v=yyyyy",
      title: "วิดีโอแนะนำบริการ",
      description:
        "รวบรวมความคิดเห็นและรีวิวจากลูกค้าเพื่อนำเสนอความน่าเชื่อถือ",
    },
    {
      thumbnail: "/image.videos/video2.jpg",
      link: "https://www.youtube.com/watch?v=yyyyy",
      title: "วิดีโอแนะนำบริการ",
      description: "ผลิตวิดีโอที่อธิบายและแสดงถึงประโยชน์ของบริการต่างๆ",
    },
    {
      thumbnail: "/image.videos/video3.jpg",
      link: "https://www.youtube.com/watch?v=zzzzz",
      title: "วิดีโอรีวิวลูกค้า",
      description:
        "รวบรวมความคิดเห็นและรีวิวจากลูกค้าเพื่อนำเสนอความน่าเชื่อถือ",
    },
    {
      thumbnail: "/image.videos/video4.jpg",
      link: "https://www.youtube.com/watch?v=yyyyy",
      title: "วิดีโอแนะนำบริการ",
      description:
        "รวบรวมความคิดเห็นและรีวิวจากลูกค้าเพื่อนำเสนอความน่าเชื่อถือ",
    },
    {
      thumbnail: "/image.videos/video5.jpg",
      link: "https://www.youtube.com/watch?v=yyyyy",
      title: "วิดีโอแนะนำบริการ",
      description: "ผลิตวิดีโอที่อธิบายและแสดงถึงประโยชน์ของบริการต่างๆ",
    },
    {
      thumbnail: "/image.videos/video6.jpg",
      link: "https://www.youtube.com/watch?v=zzzzz",
      title: "วิดีโอรีวิวลูกค้า",
      description:
        "รวบรวมความคิดเห็นและรีวิวจากลูกค้าเพื่อนำเสนอความน่าเชื่อถือ",
    },
  ],
};

export const EDUCATION = [
  {
    degree: "มัธยมศึกษาตอนปลาย แผนการเรียนวิทย์–คณิต",
    institution: "[ ABC Secondary School ]",
    duration: "May 2559 - March 2562",
    description:
      "ศึกษาในแผนการเรียนวิทยาศาสตร์–คณิตศาสตร์ ควบคู่กับการเรียนรู้ด้วยตนเองด้านเทคโนโลยีและการออกแบบ เริ่มสนใจงานกราฟิกและการสร้างสื่อดิจิทัลตั้งแต่ช่วงนี้",
  },
  {
    degree: "ประกาศนียบัตรวิชาชีพ (ปวช.) สาขาเทคโนโลยีสารสนเทศ",
    institution: "[ XYZ Technical College ]",
    duration: "May 2562 - March 2565",
    description:
      "เรียนรู้พื้นฐานด้านเทคโนโลยีสารสนเทศ การเขียนโปรแกรมเบื้องต้น การออกแบบกราฟิก และการพัฒนาเว็บไซต์ ฝึกปฏิบัติงานจริงผ่านโปรเจกต์และการทำงานเป็นทีม",
  },
  {
    degree: "ปริญญาตรี สาขาวิทยาการคอมพิวเตอร์",
    institution: "[ Example University ]",
    duration: "July 2565 - Present",
    description:
      "ศึกษาเกี่ยวกับการพัฒนาซอฟต์แวร์ ระบบฐานข้อมูล เว็บแอปพลิเคชัน และเทคโนโลยีสมัยใหม่ เน้นการพัฒนาแบบ Full-stack รวมถึงการออกแบบประสบการณ์ผู้ใช้ (UI/UX) และการทำงานเชิงระบบ",
  },
];

export const SKILLS = [
  {
    skill1: (
      <SiReact className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#61DAFB]" />
    ),
    name: "React",
    experience: "",
  },
  {
    skill2: (
      <SiNextdotjs className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FFFFFF]" />
    ),
    name: "Next.js",
    experience: "",
  },
  {
    skill3: (
      <SiVite className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#646CFF]" />
    ),
    name: "Vite",
    experience: "",
  },
  {
    skill4: (
      <SiPhp className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#8892BF]" />
    ),
    name: "PHP",
    experience: "",
  },
  {
    skill5: (
      <RiTailwindCssFill className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#38BDF8]" />
    ),
    name: "Tailwind CSS",
    experience: "",
  },
  {
    skill6: (
      <FaHtml5 className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#E34F26]" />
    ),
    name: "HTML",
    experience: "",
  },
  {
    skill7: (
      <FaCss3Alt className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#264DE4]" />
    ),
    name: "CSS",
    experience: "",
  },
  {
    skill8: (
      <SiJavascript className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#F7DF1E]" />
    ),
    name: "JavaScript",
    experience: "",
  },
  {
    skill9: (
      <SiTypescript className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#3178C6]" />
    ),
    name: "Typescript",
    experience: "",
  },
  {
    skill10: (
      <FaGolang className="text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#00ADD8]" />
    ),
    name: "GoLang",
    experience: "",
  },
  {
    skill11: (
      <SiMui className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#007FFF]" />
    ),
    name: "MUI",
    experience: "",
  },
];

export const TOOLS = [
  {
    tool1: (
      <VscVscodeInsiders className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#007ACC]" />
    ),
    name: "Visual Studio Code",
    experience: "",
  },
  {
    tool2: (
      <IoLogoGithub className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#586069]" />
    ),
    name: "GitHub",
    experience: "",
  },
  {
    tool3: (
      <SiXampp className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FF7A00]" />
    ),
    name: "XAMPP",
    experience: "",
  },
  {
    tool4: (
      <SiMamp className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#7D7D7D]" />
    ),
    name: "MAMP",
    experience: "",
  },
  {
    tool5: (
      <SiAdobeillustrator className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FF9A00]" />
    ),
    name: "Adobe Illustrator",
    experience: "",
  },
  {
    tool6: (
      <SiAdobephotoshop className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#31A8FF]" />
    ),
    name: "Adobe Photoshop",
    experience: "",
  },
  {
    tool7: (
      <SiWarp className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FFFFFF]" />
    ),
    name: "Warp",
    experience: "",
  },
  {
    tool8: (
      <SiOpenai className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FFFFFF]" />
    ),
    name: "OpenAI",
    experience: "",
  },
  {
    tool9: (
      <SiGithubcopilot className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#4CB0FB]" />
    ),
    name: "GitHub Copilot",
    experience: "",
  },
  {
    tool10: (
      <SiBruno className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#2E3A59]" />
    ),
    name: "SiBruno",
    experience: "",
  },
  {
    tool11: (
      <SiPostman className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FF6C37]" />
    ),
    name: "Postman",
    experience: "",
  },
  {
    tool12: (
      <SiCanva className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#01C3CC]" />
    ),
    name: "Canva",
    experience: "",
  },
  {
    tool13: (
      <SiDocker className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#2496ED]" />
    ),
    name: "Docker",
    experience: "",
  },
  {
    tool14: (
      <SiGit className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#F1502F]" />
    ),
    name: "Git",
    experience: "",
  },
];

export const DATABASES = [
  {
    database1: (
      <SiMysql className="text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#4479A1]" />
    ),
    name: "MySQL",
    experience: "",
  },
  {
    database2: (
      <SiMongodb className="text-7xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#4DB33D]" />
    ),
    name: "MongoDB",
    experience: "",
  },
  {
    database3: (
      <BiLogoPostgresql className="text-7xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#336791]" />
    ),
    name: "PostgreSQL",
    experience: "",
  },
];

export const CLOUDS = [
  {
    cloud1: (
      <SiVercel className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FFFFFF]" />
    ),
    name: "Vercel",
    experience: "",
  },
  {
    cloud2: (
      <SiRailway className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FFFFFF]" />
    ),
    name: "Railway",
    experience: "",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/pacharaaaaaaa",
    icon: <FaFacebook fontSize={50} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/axm.pcr/",
    icon: <FaInstagram fontSize={50} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Pachared42",
    icon: <FaGithub fontSize={50} className="hover:opacity-80" />,
  },
];