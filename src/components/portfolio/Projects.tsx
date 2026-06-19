import { motion } from "motion/react";
import { Github, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    name: "Python Learning Journey",
    description: "A curated repository documenting my Python journey — from fundamentals to OOP, decorators, async, and design patterns. Includes exercises, notes, and mini-projects.",
    tags: ["Python", "OOP", "Notes"],
    href: "https://github.com",
  },
  {
    name: "Playwright TypeScript Framework",
    description: "A scalable end-to-end test framework built with Playwright + TypeScript. Page Object Model, fixtures, parallel execution, and HTML reporting baked in.",
    tags: ["Playwright", "TypeScript", "POM"],
    href: "https://github.com",
  },
  {
    name: "API Automation Project",
    description: "Comprehensive REST API test suite using Pytest and Requests. Schema validation, auth flows, data-driven tests, and reusable client wrappers.",
    tags: ["Pytest", "API", "Python"],
    href: "https://github.com",
  },
  {
    name: "GitHub Actions CI/CD Demo",
    description: "A reference pipeline that lints, tests, and reports on every push. Demonstrates matrix builds, caching, secrets management, and artifact uploads.",
    tags: ["CI/CD", "GitHub Actions", "DevOps"],
    href: "https://github.com",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="04 / Work" title="Featured Projects" description="Selected open-source work showcasing the way I think about testing, automation, and code quality.">
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card-surface card-hover p-7 group block"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-surface-elevated border border-border text-primary">
                <Github size={18} />
              </div>
              <ArrowUpRight
                size={20}
                className="text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{p.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="font-mono text-xs px-2.5 py-1 rounded-md bg-surface-elevated border border-border text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
