"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cvUrl, fullName, navItems, profile } from "@/content/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent the page scrolling behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "border-b border-line bg-ink/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        {/* Identity */}
        <a href="#top" className="group flex items-center gap-3.5">
          <span
            className="rounded-full p-px transition-all duration-500 group-hover:shadow-[0_0_20px_-4px_rgba(76,201,240,0.6)]"
            style={{
              background:
                "linear-gradient(140deg, rgba(76,201,240,0.7), rgba(106,125,255,0.45))",
            }}
          >
            <span className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <Image
                src={profile.photo}
                alt=""
                fill
                sizes="40px"
                className="object-cover object-top"
              />
            </span>
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-semibold tracking-tight text-fg">
              {fullName}
            </span>
            <span className="hidden text-xs text-fg-subtle sm:block">
              {profile.role}, {profile.institution}
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group/nav relative rounded-full px-4 py-2 text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {item.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover/nav:scale-x-100" />
            </a>
          ))}
          {cvUrl && (
            <a
              href={cvUrl}
              download
              className="btn-ghost ml-3 rounded-full px-5 py-2 text-sm font-medium text-fg"
            >
              Curriculum Vitae
            </a>
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="btn-ghost flex h-10 w-10 items-center justify-center rounded-full text-fg-muted hover:text-fg md:hidden"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-ink/95 px-6 pb-6 pt-2 backdrop-blur-xl md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-line-soft py-3.5 text-base text-fg-muted transition-colors hover:text-fg"
            >
              {item.label}
            </a>
          ))}
          {cvUrl && (
            <a
              href={cvUrl}
              download
              onClick={() => setMenuOpen(false)}
              className="btn-ghost mt-5 block rounded-full px-4 py-3 text-center text-sm font-medium text-fg"
            >
              Curriculum Vitae
            </a>
          )}
        </nav>
      )}
    </header>
  );
}
