import { motion } from "motion/react";
import { Section } from "./Section";
import { BookOpen, Cpu, Brain, Bot, CheckCircle2, Loader2, Circle } from "lucide-react";

type Status = "done" | "current" | "next";

const phases: {
  phase: string;
  title: string;
  icon: typeof BookOpen;
  status: Status;
  items: string[];
}[] = [
  {
    phase: "Phase 1",
    title: "Python for Automation",
    icon: BookOpen,
    status: "current",
    items: [
      "Core Python: data structures, OOP, modules",
      "Pytest fundamentals and fixtures",
      "Building Playwright + Python test framework",
      "GitHub Actions CI for Python suites",
    ],
  },
  {
    phase: "Phase 2",
    title: "Machine Learning Foundations",
    icon: Cpu,
    status: "current",
    items: [
      "Math refreshers: stats, probability, linear algebra basics",
      "NumPy, pandas, scikit-learn",
      "Supervised learning: regression & classification",
      "Model evaluation and validation",
    ],
  },
  {
    phase: "Phase 3",
    title: "Generative AI & LLMs",
    icon: Brain,
    status: "next",
    items: [
      "Working with LLM APIs (OpenAI, Anthropic)",
      "Prompt engineering for QA use cases",
      "RAG basics and embeddings",
      "Evaluating LLM outputs reliably",
    ],
  },
  {
    phase: "Phase 4",
    title: "AI-Powered Test Automation",
    icon: Bot,
    status: "next",
    items: [
      "AI-assisted test case generation from requirements",
      "Self-healing locators and intelligent test maintenance",
      "Automated failure triage and root-cause summaries",
      "Integrating AI agents into QA workflows",
    ],
  },
];

const statusMap: Record<Status, { label: string; Icon: typeof CheckCircle2; cls: string }> = {
  done: { label: "Completed", Icon: CheckCircle2, cls: "text-accent bg-accent/10 border-accent/30" },
  current: { label: "In progress", Icon: Loader2, cls: "text-primary bg-primary/10 border-primary/30" },
  next: { label: "Planned", Icon: Circle, cls: "text-muted-foreground bg-surface-elevated border-border" },
};

export function AIRoadmap() {
  return (
    <Section
      id="ai-roadmap"
      eyebrow="07 / Roadmap"
      title="AI & Machine Learning Roadmap"
      description="A structured plan for how I'm moving from traditional QA automation into Machine Learning and AI-powered test automation."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {phases.map((p, i) => {
          const s = statusMap[p.status];
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-surface card-hover p-6 relative"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
                    <p.icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-primary">{p.phase}</div>
                    <h3 className="font-semibold text-lg leading-tight">{p.title}</h3>
                  </div>
                </div>
                <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full border ${s.cls}`}>
                  <s.Icon size={11} className={p.status === "current" ? "animate-spin-slow" : ""} />
                  {s.label}
                </span>
              </div>
              <ul className="space-y-2">
                {p.items.map((it) => (
                  <li key={it} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
