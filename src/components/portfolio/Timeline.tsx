import { motion } from "motion/react";
import { Section } from "./Section";
import { CheckCircle2, Circle } from "lucide-react";

const milestones = [
  { title: "Manual & Functional Testing Foundations", desc: "Started my career building strong fundamentals in test design, defect lifecycle and enterprise SDLC.", status: "done" },
  { title: "Selenium + Java Automation", desc: "Built and scaled Selenium frameworks with TestNG, Cucumber and Page Object Model across multiple enterprise programs.", status: "done" },
  { title: "API Automation with REST Assured & Karate", desc: "Designed API automation suites with schema validation, auth flows and CI integration.", status: "done" },
  { title: "AccelQ & Enterprise Test Strategy", desc: "Adopted AccelQ for low-code enterprise automation and shaped automation strategy across delivery teams.", status: "done" },
  { title: "Software Quality Team Lead", desc: "Stepped into a leadership role — owning quality strategy, mentoring engineers and partnering with stakeholders.", status: "done" },
  { title: "Python, Pytest & Playwright", desc: "Currently building modern test frameworks in Python with Pytest and Playwright, plus GitHub Actions CI.", status: "current" },
  { title: "Machine Learning Foundations", desc: "Studying ML fundamentals — data handling, classical algorithms and model evaluation.", status: "current" },
  { title: "Generative AI & AI-Powered Testing", desc: "Exploring LLMs and AI-assisted QA: test case generation, failure triage and intelligent automation.", status: "next" },
];

export function Timeline() {
  return (
    <Section id="timeline" eyebrow="06 / Journey" title="Learning Journey" description="A grounded view of where I started, where I am, and what I'm actively learning next.">
      <div className="relative">
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-1/2" />
        <div className="space-y-8">
          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative flex items-start gap-6 md:grid md:grid-cols-2 md:gap-12 ${
                  isLeft ? "" : "md:[&>div:first-child]:order-2"
                }`}
              >
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 z-10">
                  <div
                    className={`grid h-10 w-10 place-items-center rounded-full border-2 ${
                      m.status === "done"
                        ? "bg-gradient-primary border-transparent text-primary-foreground"
                        : m.status === "current"
                        ? "bg-surface border-primary text-primary glow-ring"
                        : "bg-surface border-border text-muted-foreground"
                    }`}
                  >
                    {m.status === "next" ? <Circle size={16} /> : <CheckCircle2 size={18} />}
                  </div>
                </div>
                <div className={`pl-16 md:pl-0 ${isLeft ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="card-surface card-hover p-5 inline-block text-left max-w-md">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-semibold">{m.title}</h3>
                      {m.status === "current" && (
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/15 text-primary">
                          In progress
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{m.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
