import { 
    FaDatabase, 
    FaDocker, 
    FaJava, 
    FaLinux, 
    FaNodeJs, 
    FaPhp 
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { 
    SiGrafana, 
    SiMariadb, 
    SiNextdotjs, 
    SiPostgresql, 
    SiRedis, 
    SiTailwindcss, 
    SiTypescript 
} from "react-icons/si";

export const TECH_ICONS: Record<string, React.ReactNode> = {
    "Docker": <FaDocker />,
    "Node.js": <FaNodeJs />,
    "PostgreSQL": <SiPostgresql />,
    "Next.js": <SiNextdotjs />,
    "Tailwind": <SiTailwindcss />,
    "TypeScript": <SiTypescript />,
    "Linux": <FaLinux />,
    "Java": <FaJava />,
    "Redis": <SiRedis />,
    "MariaDB": <SiMariadb />,
    "PHP": <FaPhp />,
    "Go": <FaGolang />,
    "MySQL": <FaDatabase />,
    "Grafana": <SiGrafana />
}