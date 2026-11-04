import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { resumeData } from "../data";

const contactMethods: {
  label: string;
  value: string;
  href: string;
  icon: typeof Phone;
  external?: boolean;
}[] = [
  {
    label: "Phone",
    value: resumeData.phone,
    href: `tel:${resumeData.phone.replace(/[^0-9+]/g, "")}`,
    icon: Phone,
  },
  {
    label: "Mail",
    value: resumeData.email,
    href: `mailto:${resumeData.email}`,
    icon: Mail,
  },
  {
    label: "Instagram",
    value: "Instagram profile",
    href: resumeData.instagram,
    icon: Instagram,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "LinkedIn profile",
    href: resumeData.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "GitHub profile",
    href: resumeData.github,
    icon: Github,
    external: true,
  },
].filter((method) => method.href !== undefined);

export default function Contact() {
  return (
    <section
      id="contact"
      className="portfolio-art portfolio-art-contact min-h-[calc(100vh-4rem)] bg-[var(--ink-black)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-left font-sans text-3xl font-extrabold uppercase tracking-tight text-[var(--cloud-white)] sm:text-4xl">
          Connect
        </h1>

        <div className="mt-10">
          <p className="font-sans text-xl italic text-[var(--cloud-white)]/80 sm:text-2xl">
            Good Idea, Bad Ideas, Everything is Welcome
          </p>
          <p className="mt-3 font-sans text-lg font-medium text-[var(--cloud-white)] sm:text-xl">
            Let&apos;s Engineer Outstanding Software Together
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-5 sm:gap-7">
          {contactMethods.map(({ label, value, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              aria-label={`${label}: ${value}`}
              className="contact-circle group"
            >
              <Icon
                aria-hidden="true"
                className="h-7 w-7 text-[var(--cloud-white)]/80 transition-colors group-hover:text-[var(--dusty-teal)]"
              />
              <span className="font-mono text-xs font-semibold text-[var(--cloud-white)]">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
