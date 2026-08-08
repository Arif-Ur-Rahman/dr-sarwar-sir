import Image from "next/image";
import { fullName, navItems, profile, socials } from "@/content/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(76,201,240,0.07), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-1 ring-line">
              <Image
                src={profile.photo}
                alt=""
                fill
                sizes="48px"
                className="object-cover object-top"
              />
            </span>
            <div>
              <p className="text-sm font-semibold tracking-tight text-fg">
                {fullName}, {profile.credentials}
              </p>
              <p className="mt-1 text-sm text-fg-subtle">
                {profile.role}, {profile.institution}
              </p>
              <p className="text-sm text-fg-subtle">{profile.location}</p>
            </div>
          </div>

          <div className="sm:text-right">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-end">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-fg-muted transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            {socials.length > 0 && (
              <nav className="mt-4 flex flex-wrap gap-x-5 gap-y-2 sm:justify-end">
                {socials.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-fg-subtle transition-colors hover:text-accent"
                  >
                    {social.label}
                  </a>
                ))}
              </nav>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-line-soft pt-7">
          <p className="font-mono text-[11px] tracking-wide text-fg-subtle">
            © {new Date().getFullYear()} {fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
