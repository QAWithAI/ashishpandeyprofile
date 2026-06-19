import { motion } from "motion/react";
import { Code2, TestTube2, FileCode, GitBranch, Github, Workflow, FlaskConical, Network, Database } from "lucide-react";
import { Section } from "./Section";

const skills = [
  { name: "Python", icon: Code2, level: "Advanced" },
  { name: "Playwright", icon: TestTube2, level: "Proficient" },
  { name: "TypeScript", icon: FileCode, level: "Proficient" },
  { name: "Git", icon: GitBranch, level: "Advanced" },
  { name: "GitHub", icon: Github, level: "Advanced" },
  { name: "GitHub Actions", icon: Workflow, level: "Proficient" },
  { name: "Pytest", icon: FlaskConical, level: "Advanced" },
  { name: "API Testing", icon: Network, level: "Proficient" },
  { name: "SQL", icon: Database, level: "Intermediate" },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="03 / Toolbox" title="Skills & Technologies" description="The stack I reach for when building automation frameworks and Python applications.">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="card-surface card-hover p-5 group"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="shrink-0 grid h-11 w-11 place-items-center rounded-lg bg-surface-elevated border border-border text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground group-hover:border-transparent transition-all">
                <s.icon size={20} />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-foreground truncate">{s.name}</div>
                <div className="text-xs text-muted-foreground font-mono">{s.level}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
