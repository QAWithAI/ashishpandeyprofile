import { motion } from "motion/react";
import { Code2, TestTube2, FileCode, GitBranch, Coffee, Workflow, FlaskConical, Network, Database, Brain, Cpu, Wrench } from "lucide-react";
import { Section } from "./Section";

type Skill = { name: string; icon: typeof Code2; level: number; color: string };

const coreSkills: Skill[] = [
  { name: "Selenium", icon: TestTube2, level: 95, color: "#43b02a" },
  { name: "TestNG", icon: FlaskConical, level: 92, color: "#c5282f" },
  { name: "Cucumber (BDD)", icon: FlaskConical, level: 88, color: "#23d18b" },
  { name: "REST Assured", icon: Network, level: 90, color: "#3fb950" },
  { name: "Karate Framework", icon: FlaskConical, level: 82, color: "#8e44ad" },
  { name: "AccelQ", icon: Wrench, level: 85, color: "#ff6f3c" },
  { name: "Java", icon: Coffee, level: 90, color: "#f89820" },
  { name: "API Automation", icon: Network, level: 92, color: "#0a9edc" },
  { name: "Jenkins", icon: Workflow, level: 86, color: "#d33833" },
  { name: "Git & GitHub", icon: GitBranch, level: 90, color: "#f05033" },
  { name: "SQL", icon: Database, level: 82, color: "#f29111" },
  { name: "Test Strategy & Leadership", icon: Brain, level: 92, color: "#58a6ff" },
];

const learningSkills: Skill[] = [
  { name: "Python", icon: Code2, level: 70, color: "#3776ab" },
  { name: "Pytest", icon: FlaskConical, level: 65, color: "#0a9edc" },
  { name: "Playwright", icon: TestTube2, level: 68, color: "#2ead33" },
  { name: "GitHub Actions", icon: Workflow, level: 72, color: "#2088ff" },
  { name: "Machine Learning", icon: Cpu, level: 50, color: "#ff7b72" },
  { name: "Generative AI", icon: Brain, level: 60, color: "#00e5ff" },
  { name: "AI-Powered Test Automation", icon: FileCode, level: 55, color: "#d2a8ff" },
];

function SkillGrid({ items }: { items: Skill[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6 }}
          className="card-surface gradient-border p-6 group relative overflow-hidden"
        >
          <div
            className="absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: `radial-gradient(400px circle at 50% 0%, ${s.color}15, transparent 60%)` }}
          />
          <div className="relative flex items-center gap-4 mb-5">
            <div
              className="shrink-0 grid h-12 w-12 place-items-center rounded-xl border border-border bg-surface-elevated transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
              style={{ color: s.color }}
            >
              <s.icon size={22} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-semibold text-foreground">{s.name}</div>
              <div className="text-xs text-muted-foreground font-mono mt-0.5">
                Proficiency · <span style={{ color: s.color }}>{s.level}%</span>
              </div>
            </div>
          </div>
          <div className="relative h-1.5 rounded-full bg-surface-elevated overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${s.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.2 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${s.color}, ${s.color}cc)`,
                boxShadow: `0 0 12px ${s.color}80`,
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="03 / Toolbox"
      title="Technical Skills"
      description="My core stack from 13+ years of enterprise QA — plus the modern tools and AI skills I'm actively building."
    >
      <div className="mb-10">
        <h3 className="font-display text-lg font-semibold mb-4 inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Core expertise
        </h3>
        <SkillGrid items={coreSkills} />
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold mb-4 inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Currently expanding
        </h3>
        <SkillGrid items={learningSkills} />
      </div>
    </Section>
  );
}
