import { motion } from "motion/react";
import { Section } from "./Section";
import { Sparkles, Target, Rocket, Building2 } from "lucide-react";

const highlights = [
  { icon: Target, title: "13+ Years in QE", text: "Lead-level experience designing and maintaining enterprise automation frameworks at scale." },
  { icon: Building2, title: "Multi-domain expertise", text: "Banking, Healthcare, Telecom, E-Commerce, Fleet, ERP, SaaS, and IoT connectivity." },
  { icon: Sparkles, title: "AI-powered QA", text: "Building AI agents, prompt evaluation, and n8n workflows for the next era of quality." },
  { icon: Rocket, title: "Always learning", text: "Currently mastering Playwright + Python/TS, AccelQ, Karate, Agentic AI, and Promptfoo." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 / About"
      title="About Me"
      description="Lead QA Automation Engineer with 13+ years transforming traditional QA into AI-powered Quality Engineering. I architect frameworks, ship reliable test suites, and bring intelligent automation to every pipeline I touch."
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
