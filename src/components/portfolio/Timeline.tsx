import { motion } from "motion/react";
import { Section } from "./Section";
import { CheckCircle2, Circle } from "lucide-react";

const milestones = [
  { title: "Selenium & Java Mastery", desc: "Architected enterprise Selenium + Java frameworks with TestNG, Extent Reports, and CI/CD.", status: "done" },
  { title: "API Testing & REST Assured", desc: "Built large-scale API automation suites with schema validation and data-driven flows.", status: "done" },
  { title: "Python & Pytest", desc: "Adopted Pythonic patterns: fixtures, parametrization, async, and clean architecture.", status: "done" },
  { title: "Playwright (Python + TypeScript)", desc: "Modern end-to-end testing, POM, parallel execution, trace viewer, HTML reports.", status: "current" },
  { title: "n8n & Prompt Engineering", desc: "AI-powered workflows, email/lead automation, prompt design for QE use cases.", status: "current" },
  { title: "Promptfoo & LLM Evaluation", desc: "Systematic evaluation of LLM outputs — accuracy, relevance, hallucination metrics.", status: "next" },
  { title: "Agentic AI & RAG Testing", desc: "Building AI agents, RAG applications, and LLM testing pipelines.", status: "next" },
  { title: "AccelQ & Karate Framework", desc: "Expanding low-code automation and BDD-style API testing toolkit.", status: "next" },
];

export function Timeline() {
  return (
    <Section id="timeline" eyebrow="07 / Roadmap" title="Learning Journey" description="The milestones that shaped where I am and where I'm headed.">
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
                {/* node */}
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
