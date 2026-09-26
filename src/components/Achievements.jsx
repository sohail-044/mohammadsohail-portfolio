import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ACHIEVEMENTS = [
  {
    title: 'Selected Internship Project',
    description: 'Led a team to build an AI solution that was shortlisted among internship projects.',
    tag: 'Team Lead'
  },
  {
    title: 'Smart India Hackathon (SIH)',
    description: 'Won the Best Participation award at the college-level Smart India Hackathon.',
    tag: 'Award'
  },
  {
    title: 'Agentathon Hyderabad',
    description: 'Gained hands-on experience building with AI agents at Agentathon Hyderabad.',
    tag: 'Hands-on'
  }
];

const CERTIFICATIONS = [
  'Problem Solving Using Python Programming — CodeTantra',
  'Machine Learning with ChatGPT: Image Classification Model — Coursera Project Network'
];

export default function Achievements() {
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
      id="achievements"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#030303] flex items-center justify-center py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }}
      />

      <div className="max-w-[90rem] w-full relative z-10">
        <div className="mb-16 md:mb-20 border-b border-white/10 pb-8">
          <h2 className="stagger-reveal text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tighter text-white font-sans leading-none drop-shadow-lg">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white font-serif italic font-light pr-2">Certifications</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {ACHIEVEMENTS.map((item, i) => (
            <div
              key={item.title}
              className="stagger-reveal group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-colors duration-500 hover:border-red-500/40"
            >
              <div className="text-red-500/80 font-mono text-xs tracking-[0.3em] mb-4 font-bold uppercase">
                0{i + 1}
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white mb-3 leading-snug font-sans">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-6">
                {item.description}
              </p>
              <span className="text-[10px] uppercase tracking-widest px-3 py-1.5 border border-white/20 rounded-full text-gray-300 font-medium">
                {item.tag}
              </span>
            </div>
          ))}
        </div>

        <div className="stagger-reveal rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-6 font-sans">
            Certifications
          </h3>
          <ul className="space-y-4">
            {CERTIFICATIONS.map((cert) => (
              <li key={cert} className="flex items-start space-x-3 text-gray-300 font-light leading-relaxed">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1.5 text-red-500 shrink-0">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}