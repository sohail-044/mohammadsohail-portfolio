import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      const elements = sectionRef.current.querySelectorAll('.stagger-reveal');

      tl.fromTo(elements,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black flex items-center justify-center py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-[90rem] w-full relative z-10">
        <div className="mb-16 md:mb-20 border-b border-white/10 pb-8">
          <h2 className="stagger-reveal text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tighter text-white font-sans leading-none drop-shadow-lg">
            Education
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10">
          <div className="stagger-reveal group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12 transition-colors duration-500 hover:border-red-500/40">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-sans">
                B.Tech — Computer Science & Engineering <span className="text-red-400">(AI &amp; ML)</span>
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[11px] uppercase tracking-widest px-3 py-1.5 border border-red-500/40 rounded-full text-red-400 font-medium">
                  2023 – 2027
                </span>
                <span className="text-[11px] uppercase tracking-widest px-3 py-1.5 border border-white/20 rounded-full text-gray-300 font-medium">
                  CGPA: 8.0
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Malla Reddy College of Engineering &amp; Technology
            </p>
            <p className="text-gray-500 text-base font-light leading-relaxed mt-2">
              Hyderabad, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}