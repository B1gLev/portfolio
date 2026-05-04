import Image from "next/image"
import LinkedIn from "./LinkedIn"
import Github from "./Github"

export default function About() {
    return (
        <main className="min-h-screen w-full flex items-center justify-center bg-white px-6 py-20 overflow-hidden">
            <div className="w-full max-w-5xl flex flex-col gap-10 md:gap-12">
                <section className="flex flex-col gap-6 md:gap-8">
                    <div className="flex items-center gap-2 text-gray-400 font-medium uppercase tracking-[0.3em] text-[10px]">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Open to work
                    </div>
                    <div className="group flex flex-wrap md:flex-nowrap items-center gap-x-3 md:gap-x-5 text-5xl sm:text-6xl md:text-8xl font-bold tracking-[-0.05em] text-black cursor-default leading-[1.1] md:leading-none">
                        <span className="shrink-0">Halo, I'm</span>
                        <div className="relative h-12 md:h-20 w-0 opacity-0 overflow-hidden rounded-xl md:rounded-2xl bg-gray-100 shrink-0
                            transition-all duration-700 [cubic-bezier(0.65,0,0.35,1)]
                            group-hover:w-16 md:group-hover:w-28 group-hover:opacity-100 group-hover:mx-2
                            hidden md:block">
                            <Image 
                                src="/me.png" 
                                alt="Levente Kozma" 
                                fill 
                                className="object-cover object-top transition-all duration-500"
                            />
                        </div>
                        <span className="whitespace-nowrap shrink-0 transition-colors duration-500 group-hover:text-gray-300">
                            Levente Kozma
                        </span>
                    </div>
                    <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-black tracking-[-0.04em] leading-tight">
                        Software Developer
                    </div>
                    <div className="pt-4 md:pt-6 max-w-2xl flex flex-col gap-6">
                        <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-normal tracking-tight">
                            I am 22 years old, currently pursuing a degree in Computer Engineering at the <span className="text-black font-semibold">Budapest University of Technology and Economics</span>. 
                        </p>
                        <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-normal tracking-tight">
                            Prior to my university studies, I spent years independently exploring programming, building a rock-solid technical foundation with over <span className="text-black font-semibold">5 years of experience</span>.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-6 md:gap-10 mt-4">
                        <LinkedIn />
                        <Github />
                    </div>
                </section>
                <div className="mt-20 md:absolute md:bottom-10 md:left-1/2 md:-translate-x-1/2 text-center">
                    <p className="text-gray-300 text-[10px] md:text-lg uppercase tracking-[0.4em] md:tracking-[0.5em] animate-bounce">EXPERIENCE</p>
                </div>
            </div>
        </main>
    )
}