import { motion } from "motion/react";
import { Section } from "./Section";
import { GitCommit, GitPullRequest, Star, Flame } from "lucide-react";

const stats = [
  { label: "Total Commits", value: "1.2k+", icon: GitCommit },
  { label: "Public Repos", value: "32", icon: Star },
  { label: "Pull Requests", value: "85", icon: GitPullRequest },
  { label: "Day Streak", value: "47", icon: Flame },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// deterministic pseudo-random contribution grid
const cells = Array.from({ length: 7 * 52 }, (_, i) => {
  const v = (Math.sin(i * 1.7) + 1) / 2;
  const noise = (Math.sin(i * 0.3) + 1) / 2;
  return Math.floor(((v + noise) / 2) * 4.5);
});

export function GitHubStats() {
  return (
    <Section id="github" eyebrow="06 / Activity" title="GitHub Statistics" description="A glimpse into my open-source rhythm and contribution graph.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="card-surface p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <s.icon size={18} className="text-primary" />
              <span className="text-xs font-mono text-muted-foreground">@dev</span>
            </div>
            <div className="text-3xl font-bold text-foreground">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card-surface p-6 overflow-hidden"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Contribution graph</h3>
          <span className="text-xs font-mono text-muted-foreground">last 12 months</span>
        </div>
        <div className="overflow-x-auto pb-2">
          <div className="inline-flex flex-col gap-2 min-w-full">
            <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
              {cells.map((lvl, idx) => {
                const opacity = [0.06, 0.25, 0.45, 0.7, 1][lvl] ?? 0.1;
                return (
                  <div
                    key={idx}
                    className="h-2.5 w-2.5 rounded-[3px]"
                    style={{ backgroundColor: `oklch(0.78 0.16 175 / ${opacity})` }}
                  />
                );
              })}
            </div>
            <div className="flex justify-between text-[10px] font-mono text-muted-foreground pt-1">
              {months.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4 text-[11px] font-mono text-muted-foreground">
          <span>Less</span>
          {[0.06, 0.25, 0.45, 0.7, 1].map((o) => (
            <span
              key={o}
              className="h-2.5 w-2.5 rounded-[3px]"
              style={{ backgroundColor: `oklch(0.78 0.16 175 / ${o})` }}
            />
          ))}
          <span>More</span>
        </div>
      </motion.div>
    </Section>
  );
}
