import { motion } from "motion/react";
import { Award, BadgeCheck } from "lucide-react";
import { Section } from "./Section";

const certs = [
  { name: "Python for Everybody", org: "Coursera • University of Michigan", year: "2026", href: "https://www.coursera.org/learn/python/home/module/3" },
  { name: "Python Data Structures", org: "Coursera • University of Michigan", year: "2026", href: "https://www.coursera.org/learn/python-data/home/module/3" },
  { name: "DeepSeek & n8n Certification", org: "Coursera • Board Infinity", year: "2026", href: "https://www.coursera.org/account/accomplishments/verify/NLRDPITD21KJ" },
  { name: "Google AI Essentials", org: "Coursera • Google", year: "2026", href: "https://www.coursera.org/account/accomplishments/specialization/3FQ5HBVYP6PD" },
  { name: "Building with the Claude API", org: "Anthropic", year: "2026", href: "https://verify.skilljar.com/c/8ufv9jdo75ru" },
];

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="05 / Credentials" title="Certifications" description="Continuous learning is non-negotiable in QA. Here's where I've sharpened my skills.">
      <div className="grid sm:grid-cols-2 gap-5">
        {certs.map((c, i) => (
          <motion.a
            key={c.name}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="card-surface card-hover p-6 flex items-start gap-4 group"
          >
            <div className="shrink-0 grid h-12 w-12 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
              <Award size={22} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{c.name}</h3>
                <BadgeCheck size={18} className="shrink-0 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mt-1">{c.org}</p>
              <p className="text-xs font-mono text-primary mt-2">{c.year}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
