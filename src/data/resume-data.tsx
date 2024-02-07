import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Iván Illera",
  initials: "II",
  location: "Zárate, Buenos Aires, Argentina",
  locationLink: "https://www.google.com/maps/place/Zárate Buenos Aires",
  about:
    "Estudiante de Ingeniería en Sistemas de Información a punto de concluir mi carrera con la finalización de la tesis.",
  summary:
    "Tengo 24 años, mi meta es encontrar un empleo que me brinde la experiencia laboral que complemente mis estudios. Estoy en constante perfeccionamiento y deseoso de aprender lo que se necesite. Apasionado por la tecnología. Autodidacta y con ganas de trabajar en equipo.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "ivanillera@gmail.com",
    tel: "+54 3487 618120",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ivanillera",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ivanillera/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "UTN: Facultad Regional Delta",
      degree: "Ingeniería en Sistemas de Información (Proyecto final pendiente)",
      start: "2017",
      end: "2024",
    },
    {
      school: "Instituto de Vanguardia",
      degree: "Bachiller con Orientación en Ciencias Naturales",
      start: "2010",
      end: "2016",
    },
  ],
  work: [
    {
      company: "Via Informática Pilar",
      link: "",
      badges: ["Remote"],
      title: "Programador Web",
      logo: ParabolLogo,
      start: "2021",
      end: "2021",
      description:
        "Capacitación para la programación web. HTML, CSS y JS, junto con Angular. Creación y modificación de tablas SQL. .NET",
    },
    {
      company: "Supermercado La Preferida",
      link: "https://clevertech.biz",
      badges: [""],
      title: "Asistente administrativo y gerencial",
      logo: ClevertechLogo,
      start: "2017",
      end: "2020",
      description:
        "Comunicación diaria con clientes y atención al público. Gestión de pedidos, relación con proveedores y control de facturación. Organización de logística para hacer seguimiento de suministros, recursos e inventario. Realización de tareas administrativas cotidianas y de gestión contable.",
    },
    
  ],
  skills: [
    "React",
    "Python",
    "Git",
    "Photoshop",
    "HTML/CSS/JS",
    "Tailwindcss",
    "Firebase",
    "Angular"
  ],
  projects: [
    {
      title: "Meister",
      techStack: [
        "React",
        "Firebase",
        "Tailwindcss",
      ],
      description: "Libreta Digital Sanitaria para Mascotas. Gestión de vacunación e historial clínico.",
      logo: ConsultlyLogo,
      link: {
        label: "meister-61d89.web.app",
        href: "https://meister-61d89.web.app/app",
      },
    },
    {
      title: "Rent Tracker",
      techStack: [
        "React",
        "Firebase",
        "Tailwindcss",
        "Vite"
      ],
      description: "Gestión de alquileres de ropa para una empresa local. Gestión de clientes.",
      logo: ConsultlyLogo,
      link: {
        label: "el-elegante.web.app",
        href: "https://el-elegante.web.app/app",
      },
    }
  ],
} as const;
