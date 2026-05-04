import TechStack from "./ui/TechStack"

interface Props {
    year: string,
    company: string,
    title: string,
    tech: string[],
    experience: string
}
export default function Item({ year, company, title, tech, experience}: Props) {
    return (
        <div className="w-full md:w-screen h-auto md:h-screen flex shrink-0 items-center justify-center md:justify-start py-16 md:py-0 border-b md:border-b-0">
            <div className="flex flex-col max-w-5xl w-full px-6 md:px-16 gap-4 translate-x-0 md:-translate-x-1/2">
                <div className="mb-3">
                    <p className="text-gray-400 font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm md:mb-3">
                        {year}
                    </p>
                    <h2 className="text-xl md:text-7xl font-bold text-[#1a1a1a] leading-tight">
                        {title} at {company}
                    </h2>
                </div>
                <p className="md:text-xl text-gray-500">
                    {experience}
                </p>
                <TechStack tech={tech} />
            </div>
        </div>
    );
}