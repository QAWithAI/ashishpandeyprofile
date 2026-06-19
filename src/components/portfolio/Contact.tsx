import { motion } from "motion/react";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

const channels = [
  { icon: Linkedin, label: "LinkedIn", value: "/in/ashish-pandey-1875a9243", href: "https://www.linkedin.com/in/ashish-pandey-1875a9243/" },
  { icon: Github, label: "GitHub", value: "@ashish-pandey", href: "https://github.com/" },
  { icon: Mail, label: "Email", value: "ashishkpandey25@gmail.com", href: "mailto:ashishkpandey25@gmail.com" },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="08 / Connect" title="Let's build intelligent automation" description="Open to Lead QA, SDET, and AI Automation roles. Quality is never an accident — it's the result of intelligent effort, continuous learning, and relentless automation.">
      <div className="grid sm:grid-cols-3 gap-4">
        {channels.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="card-surface card-hover p-6 group block"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-surface-elevated border border-border text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground group-hover:border-transparent transition-all">
                <c.icon size={20} />
              </div>
              <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{c.label}</div>
            <div className="font-semibold mt-1 truncate">{c.value}</div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
