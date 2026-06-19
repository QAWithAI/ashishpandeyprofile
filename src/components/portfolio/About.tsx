import { motion } from "motion/react";
import { Section } from "./Section";
import { Sparkles, Target, Rocket } from "lucide-react";

const highlights = [
  { icon: Target, title: "Quality-first mindset", text: "I obsess over edge cases and reliability — flaky tests are bugs too." },
  { icon: Sparkles, title: "Pythonic thinking", text: "Clean code, type hints, fixtures, and idiomatic patterns over clever hacks." },
  { icon: Rocket, title: "Always learning", text: "Currently deep-diving into advanced Python, Playwright, CI/CD, and ML." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 / About"
      title="About Me"
      description="I'm passionate about automation testing, Python development, and continuous learning. I believe great software is shipped with great tests behind it — and I love being the person who builds them."
    >
      <div className="grid md:grid-cols-3 gap-5">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-surface card-hover p-6"
          >
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-primary text-primary-foreground mb-4">
              <h.icon size={20} />
            </div>
            <h3 className="font-semibold text-lg mb-2">{h.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{h.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
