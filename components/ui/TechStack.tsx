import { TECH_ICONS } from "@/app/constants/tech-icons";

export default function TechStack({ tech }: { tech: string[] }) {
    return (
        <div className="flex flex-wrap gap-x-10 gap-y-2 items-center opacity-40">
            {tech.map((t) => (
                <div key={t} className="flex items-center md:gap-2 text-xl md:text-2xl">
                    {TECH_ICONS[t] ? TECH_ICONS[t] : <div className="w-1 h-1 bg-black rounded-full" />}
                    <span className="font-medium text-sm md:text-lg">{t}</span>
                </div>
            ))}
        </div>
    )
}