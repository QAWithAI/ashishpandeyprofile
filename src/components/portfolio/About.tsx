import { motion } from "motion/react";
import { Section } from "./Section";
import { Users, Target, Building2, Sparkles } from "lucide-react";

const highlights = [
  { icon: Target, title: "13+ years in QA", text: "Hands-on testing and automation experience, from individual contributor to Software Quality Team Lead." },
  { icon: Building2, title: "Enterprise domains", text: "Delivered quality across Banking, Telecom, Healthcare, ERP and Salesforce platforms." },
  { icon: Users, title: "Team leadership", text: "Lead QA teams, define automation strategy, and drive enterprise-wide testing initiatives." },
  { icon: Sparkles, title: "Continuous learning", text: "Currently expanding into Python, Playwright, GitHub Actions, Machine Learning and Generative AI." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 / About"
      title="About Me"
      description="I'm a Software Quality Team Lead with 13+ years of experience in software testing and QA automation. I've spent my career building reliable test frameworks, leading delivery teams, and bringing structure to quality engineering across complex enterprise systems. Today, I'm focused on the next evolution of QA — combining proven automation expertise with Machine Learning and AI-powered testing."
    >
      <div className="grid md:grid-cols-2 gap-5">
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
