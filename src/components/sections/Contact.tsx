"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { contact, fullName, socials } from "@/content/site";

const inputClass =
  "w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3.5 text-sm text-fg placeholder:text-fg-subtle transition-all duration-300 focus:border-accent-dim focus:bg-white/[0.05] focus:outline-none";

const labelClass =
  "mb-2.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-fg-subtle";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const canSend = contact.email.length > 0;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  /**
   * Frontend-only site: compose the message in the visitor's mail client
   * rather than pretending to POST it somewhere.
   */
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!canSend) return;

    const subject = `Website enquiry from ${form.name}`;
    const body = `${form.message}\n\n—\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const details = [
    canSend && {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    contact.phone && {
      icon: Phone,
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s+/g, "")}`,
    },
    contact.office && {
      icon: MapPin,
      label: "Office",
      value: contact.office,
      href: undefined,
    },
  ].filter(Boolean) as {
    icon: typeof Mail;
    label: string;
    value: string;
    href?: string;
  }[];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Get in"
      titleAccent="touch"
      lead={contact.lead}
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
        {/* Details */}
        <Reveal>
          <div className="card h-full p-7 sm:p-8">
            <dl className="space-y-7">
              {details.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="group flex gap-4">
                  <span className="icon-tile h-10 w-10 shrink-0">
                    <Icon size={17} strokeWidth={1.7} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-fg-subtle">
                      {label}
                    </dt>
                    <dd className="mt-1.5 whitespace-pre-line break-words text-sm leading-relaxed text-fg">
                      {href ? (
                        <a
                          href={href}
                          className="transition-colors hover:text-accent"
                        >
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            {socials.length > 0 && (
              <div className="mt-8 border-t border-line pt-7">
                <p className="eyebrow">Elsewhere</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {socials.map((social) => (
                    <li key={social.href}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost inline-block rounded-full px-4 py-2 text-sm text-fg-muted hover:text-fg"
                      >
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={110}>
          <form onSubmit={handleSubmit} className="card p-7 sm:p-9">
            {process.env.NODE_ENV === "development" && !canSend && (
              <p className="mb-7 rounded-xl border border-accent-dim bg-accent-wash px-4 py-3.5 font-mono text-xs leading-relaxed text-accent">
                Dev notice: set <span className="text-fg">contact.email</span> in
                src/content/site.ts to enable this form. Not shown in production.
              </p>
            )}

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can I help?"
                  className={`${inputClass} resize-y`}
                />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <button
                type="submit"
                disabled={!canSend}
                className="btn-accent group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold disabled:cursor-not-allowed disabled:bg-none disabled:bg-white/[0.04] disabled:text-fg-subtle disabled:shadow-none"
              >
                {canSend ? "Send message" : "Contact details coming soon"}
                {canSend && (
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                )}
              </button>
              {canSend && (
                <p className="text-xs leading-relaxed text-fg-subtle">
                  Opens in your email client, addressed to {fullName}.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
