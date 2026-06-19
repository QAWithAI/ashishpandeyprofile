import { motion } from "motion/react";
import { Code2, TestTube2, FileCode, GitBranch, Coffee, Workflow, FlaskConical, Network, Database, Bot, Brain, Cpu } from "lucide-react";
import { Section } from "./Section";

const skills = [
  { name: "Playwright", icon: TestTube2, level: 90, color: "#2ead33" },
  { name: "Selenium", icon: TestTube2, level: 95, color: "#43b02a" },
  { name: "Python", icon: Code2, level: 88, color: "#3776ab" },
  { name: "Java", icon: Coffee, level: 92, color: "#f89820" },
  { name: "TypeScript", icon: FileCode, level: 80, color: "#3178c6" },
  { name: "Pytest", icon: FlaskConical, level: 88, color: "#0a9edc" },
  { name: "API / REST Assured", icon: Network, level: 92, color: "#3fb950" },
  { name: "Karate Framework", icon: FlaskConical, level: 78, color: "#8e44ad" },
  { name: "n8n Automation", icon: Workflow, level: 85, color: "#ea4b71" },
  { name: "Prompt Engineering", icon: Brain, level: 86, color: "#ff7b72" },
  { name: "AI Agents", icon: Bot, level: 80, color: "#00e5ff" },
  { name: "CI/CD & GitHub Actions", icon: Workflow, level: 88, color: "#2088ff" },
  { name: "Git & GitHub", icon: GitBranch, level: 94, color: "#f05033" },
  { name: "SQL / MySQL", icon: Database, level: 82, color: "#f29111" },
  { name: "AWS / Azure", icon: Cpu, level: 72, color: "#ff9900" },
];


export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="03 / Toolbox"
      title="Skills & Technologies"
      description="The stack I reach for when building automation frameworks and Python applications."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="card-surface gradient-border p-6 group relative overflow-hidden"
          >
            {/* glow on hover */}
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
            {/* progress bar */}
            <div className="relative h-1.5 rounded-full bg-surface-elevated overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.2 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
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
    </Section>
  );
}
