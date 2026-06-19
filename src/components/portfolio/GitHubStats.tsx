import { motion } from "motion/react";
import { Section } from "./Section";
import { GitCommit, GitPullRequest, FolderGit2, Flame, Code2 } from "lucide-react";

const stats = [
  { label: "Total Repositories", value: "32", sub: "public + private", icon: FolderGit2, color: "#58a6ff" },
  { label: "Total Contributions", value: "1.4k+", sub: "last 12 months", icon: GitCommit, color: "#3fb950" },
  { label: "Pull Requests", value: "120+", sub: "merged across teams", icon: GitPullRequest, color: "#d2a8ff" },
  { label: "Current Streak", value: "47 days", sub: "longest: 92 days", icon: Flame, color: "#ff7b72" },
];

const languages = [
  { name: "Python", pct: 38, color: "#3776ab" },
  { name: "Java", pct: 24, color: "#f89820" },
  { name: "TypeScript", pct: 18, color: "#3178c6" },
  { name: "JavaScript", pct: 10, color: "#f1e05a" },
  { name: "Shell", pct: 6, color: "#89e051" },
  { name: "Other", pct: 4, color: "#8b949e" },
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
    <Section
      id="github"
      eyebrow="06 / Activity"
      title="GitHub Statistics"
      description="A snapshot of my open-source rhythm — repositories, contributions, languages, and streaks."
    >
      {/* Top stat cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="card-surface card-hover p-5 relative overflow-hidden group"
          >
            <div
              className="absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{ background: `radial-gradient(400px circle at 50% 0%, ${s.color}18, transparent 60%)` }}
            />
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div
                  className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface-elevated"
                  style={{ color: s.color }}
                >
                  <s.icon size={18} />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                  @ashish
                </span>
              </div>
              <div className="text-3xl font-bold text-foreground">{s.value}</div>
              <div className="text-sm text-foreground/80 mt-1">{s.label}</div>
              <div className="text-xs font-mono text-muted-foreground mt-1">{s.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1.6fr_1fr] gap-6">
        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-surface p-6 overflow-hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold flex items-center gap-2">
              <GitCommit size={16} className="text-accent" />
              Contribution graph
            </h3>
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

        {/* Languages used */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-surface p-6"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold flex items-center gap-2">
              <Code2 size={16} className="text-primary" />
              Languages used
            </h3>
            <span className="text-xs font-mono text-muted-foreground">most repos</span>
          </div>

          {/* stacked bar */}
          <div className="flex h-2.5 w-full rounded-full overflow-hidden mb-5 border border-border">
            {languages.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ width: 0 }}
                whileInView={{ width: `${l.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.05 }}
                style={{ backgroundColor: l.color }}
              />
            ))}
          </div>

          <ul className="space-y-2.5">
            {languages.map((l) => (
              <li key={l.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: l.color }}
                  />
                  <span className="text-foreground/90">{l.name}</span>
                </span>
                <span className="font-mono text-xs text-muted-foreground">{l.pct}%</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Streak panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="card-surface p-6 mt-6 grid sm:grid-cols-3 gap-6 text-center"
      >
        <div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs font-mono uppercase tracking-wider mb-2">
            <Flame size={14} className="text-[#ff7b72]" />
            Current Streak
          </div>
          <div className="text-4xl font-bold text-foreground">47</div>
          <div className="text-xs text-muted-foreground mt-1">days · Nov 3 → today</div>
        </div>
        <div className="sm:border-x sm:border-border">
          <div className="text-muted-foreground text-xs font-mono uppercase tracking-wider mb-2">
            Total Contributions
          </div>
          <div className="text-4xl font-bold text-gradient">1,428</div>
          <div className="text-xs text-muted-foreground mt-1">since Jan 2024</div>
        </div>
        <div>
          <div className="text-muted-foreground text-xs font-mono uppercase tracking-wider mb-2">
            Longest Streak
          </div>
          <div className="text-4xl font-bold text-foreground">92</div>
          <div className="text-xs text-muted-foreground mt-1">days · 2025</div>
        </div>
      </motion.div>
    </Section>
  );
}
