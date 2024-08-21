'use client';
import Landing from '@/components/landing/Landing';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function Home() {
  const textRef = useRef(null);

  useEffect(() => {
    const texts = [
      'Web Development',
      'Application Development',
      'Artificial Intelligence',
      'Machine Learning',
      'Data Structures and Algorithm',
      'Blockchain Development',
    ];

    const tl = gsap.timeline({ repeat: -1 });

    texts.forEach((text) => {
      tl.to(textRef.current, {
        duration: 1,
        y: 15,
        opacity: 0,
        ease: 'power2.inOut',
        onComplete: () => {
          const textElement = textRef.current as HTMLElement | null;
          if (textElement) {
            textElement.textContent = text;
            gsap.set(textElement, { y: -15 });
          }
        },
      }).to(textRef.current, {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        onStart: () => {
          gsap.fromTo(
            textRef.current,
            {
              x: 0,
            },
            {
              x: 0,
              duration: 0,
              repeat: 6,
              yoyo: true,
              ease: 'power1.inOut',
            },
          );
        },
      });
    });
  }, []);

  return <Landing textRef={textRef} />;
}
