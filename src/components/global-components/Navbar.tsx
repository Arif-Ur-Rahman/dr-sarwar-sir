"use client";

import { Instagram, Linkedin, Twitter } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Left — Avatar + Name + Title */}
          <div className="flex items-center gap-3">
            <div className="w-25 h-25 rounded-full overflow-x-hidden ring-2 ring-white/60 shadow-md flex-shrink-0">
              <img
                src="profiles/DrSarwarSir.jpg"
                alt="Dr.Sarwar Sir"
                className="w-full h-full object-bottom"
              />
            </div>
            <div className="leading-tight">
              <p className="text-[24px] font-semibold text-gray-900 tracking-tight">
                Hafijul Islam Ador
              </p>
              <p className="text-[16px] text-gray-500 font-normal">
                Data Analytics(Certified Professional (CP)), Australian Computer Society
              </p>
            </div>
          </div>

          {/* Center — blank */}
          <div className="flex-1" />

          {/* Right — Availability + Socials */}
          <div className="flex items-center gap-3">
            {/* Available badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm shadow-sm border border-gray-100">
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
              <span className="text-[16px] text-gray-600 font-medium whitespace-nowrap">
                Available for you
              </span>
            </div>

            {/* Divider */}
            <div className="h-10 w-px bg-gray-400" />

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {[
                { icon: Twitter, label: "X / Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white/70 backdrop-blur-sm shadow-sm hover:bg-white hover:border-gray-300 transition-all duration-150"
                >
                  <Icon size={15} className="text-gray-700" />
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;