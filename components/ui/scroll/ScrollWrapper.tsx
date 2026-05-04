"use client"
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollWrapper({ children }: {children : React.ReactNode}) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (!sectionRef.current || !triggerRef.current) return;
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px", () => {
            const totalWidth = sectionRef.current?.offsetWidth || 0;
            const scrollAmount = totalWidth - window.innerWidth;

            gsap.to(sectionRef.current, {
                x: -scrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: () => `+=${scrollAmount}`,
                    scrub: 1,
                    pin: true,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                }
            });
        });

        return () => mm.revert();
    }, []);
    
    return (
        <section ref={triggerRef} className="md:overflow-hidden">
            <div ref={sectionRef} className="flex flex-col md:flex-row md:flex-nowrap md:items-center md:pl-[50vw] w-full md:w-max will-change-transform">
                {children}
            </div>
        </section>
    );
}