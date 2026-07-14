"use client";

import { useEffect } from "react";
import { navLinks } from "@/data/content";

export default function Navbar() {
  useEffect(() => {
    const onScroll = () => {
      const nav = document.getElementById("navbar");
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="navbar">
      <a href="#" className="nav-logo">
        <img src="/assets/logo-alt-lavender-1.png" alt="ellah-services-logo" width={150} />
      </a>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={link.isCta ? "nav-cta" : undefined}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
