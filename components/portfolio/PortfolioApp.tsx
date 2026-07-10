"use client";

import { useEffect, useRef } from 'react';
import type { PortfolioData } from '../../lib/portfolio-data';
import { AboutSection } from './AboutSection';
import { ContactSection } from './ContactSection';
import { FooterSection } from './FooterSection';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { PortfolioSection } from './PortfolioSection';
import { ProcessSection } from './ProcessSection';
import { ServicesSection } from './ServicesSection';
import { SkillsSection } from './SkillsSection';
import { StatsSection } from './StatsSection';
import { VisionSection } from './VisionSection';

interface PortfolioAppProps {
  data: PortfolioData;
}

export function PortfolioApp({ data }: PortfolioAppProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) {
      return undefined;
    }

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;

    const moveCursor = (event: MouseEvent) => {
      mx = event.clientX;
      my = event.clientY;
    };

    let frameId = 0;
    const animate = () => {
      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      frameId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', moveCursor);
    frameId = requestAnimationFrame(animate);

    const interactiveElements = document.querySelectorAll('a, button');
    const handleEnter = () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2)';
      cursor.style.background = '#430047';
      ring.style.transform = 'translate(-50%,-50%) scale(1.5)';
    };
    const handleLeave = () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      cursor.style.background = '#FF8646';
      ring.style.transform = 'translate(-50%,-50%) scale(1)';
    };

    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleEnter);
      element.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      cancelAnimationFrame(frameId);
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleEnter);
        element.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (!navbar) {
      return undefined;
    }

    const updateNavbar = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    };

    updateNavbar();
    window.addEventListener('scroll', updateNavbar);
    return () => window.removeEventListener('scroll', updateNavbar);
  }, []);

  useEffect(() => {
    const statNums = document.querySelectorAll<HTMLElement>('.stat-num[data-target]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;
          const target = Number(element.dataset.target ?? 0);
          const suffix = '+';
          let start = 0;
          const duration = 1800;

          const step = (timestamp: number) => {
            if (!start) {
              start = timestamp;
            }
            const progress = Math.min((timestamp - start) / duration, 1);
            const ease = 1 - (1 - progress) ** 3;
            element.textContent = `${Math.floor(ease * target)}${suffix}`;
            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };

          requestAnimationFrame(step);
          observer.unobserve(element);
        });
      },
      { threshold: 0.5 }
    );

    statNums.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />

      <Header nav={data.nav} />
      <HeroSection hero={data.hero} />
      <AboutSection about={data.about} />
      <SkillsSection skills={data.skills} />
      <ServicesSection services={data.services} />
      <ProcessSection process={data.process} />
      <StatsSection stats={data.stats} />
      <PortfolioSection portfolio={data.portfolio} />
      <VisionSection vision={data.vision} />
      <ContactSection contact={data.contact} />
      <FooterSection footer={data.footer} />
    </>
  );
}
