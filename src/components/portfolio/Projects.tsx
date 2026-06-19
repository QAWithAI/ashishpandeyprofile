import { motion } from "motion/react";
import { Github, ArrowUpRight, Star, GitFork } from "lucide-react";
import { Section } from "./Section";

type Mock =
  | { kind: "code"; lines: { tok: string; cls: string }[][] }
  | { kind: "browser"; title: string; cards: number }
  | { kind: "terminal"; lines: { t: string; cls: string }[] }
  | { kind: "ci"; steps: { name: string; status: "ok" | "run" | "wait" }[] };

const projects: {
  name: string;
  description: string;
  tags: string[];
  href: string;
  stars: number;
  forks: number;
  accent: string;
  mock: Mock;
}[] = [
  {
    name: "Python Learning Journey",
    description:
      "A curated repository documenting my Python journey — from fundamentals to OOP, decorators, async, and design patterns.",
    tags: ["Python", "OOP", "Notes"],
    href: "https://github.com",
    stars: 124,
    forks: 18,
    accent: "#3776ab",
    mock: {
      kind: "code",
      lines: [
        [{ tok: "class ", cls: "text-[#ff7b72]" }, { tok: "Engineer", cls: "text-[#d2a8ff]" }, { tok: ":", cls: "text-foreground" }],
        [{ tok: "    def ", cls: "text-[#ff7b72]" }, { tok: "__init__", cls: "text-[#d2a8ff]" }, { tok: "(self, name):", cls: "text-foreground" }],
        [{ tok: "        self", cls: "text-[#79c0ff]" }, { tok: ".name = name", cls: "text-foreground" }],
        [{ tok: "    def ", cls: "text-[#ff7b72]" }, { tok: "ship", cls: "text-[#d2a8ff]" }, { tok: "(self):", cls: "text-foreground" }],
        [{ tok: "        return ", cls: "text-[#ff7b72]" }, { tok: "f\"{self.name} ships ✨\"", cls: "text-[#a5d6ff]" }],
      ],
    },
  },
  {
    name: "Playwright TypeScript Framework",
    description:
      "Scalable end-to-end test framework with Playwright + TS. POM, fixtures, parallel execution, HTML reporting.",
    tags: ["Playwright", "TypeScript", "POM"],
    href: "https://github.com",
    stars: 312,
    forks: 47,
    accent: "#2ead33",
    mock: {
      kind: "browser",
      title: "app.local — login flow",
      cards: 3,
    },
  },
  {
    name: "API Automation Project",
    description:
      "Comprehensive REST API test suite using Pytest + Requests. Schema validation, auth flows, data-driven tests.",
    tags: ["Pytest", "API", "Python"],
    href: "https://github.com",
    stars: 198,
    forks: 24,
    accent: "#0a9edc",
    mock: {
      kind: "terminal",
      lines: [
        { t: "$ pytest tests/ -v", cls: "text-muted-foreground" },
        { t: "tests/test_auth.py::test_login PASSED", cls: "text-accent" },
        { t: "tests/test_users.py::test_create PASSED", cls: "text-accent" },
        { t: "tests/test_users.py::test_update PASSED", cls: "text-accent" },
        { t: "tests/test_orders.py::test_flow PASSED", cls: "text-accent" },
        { t: "═══ 47 passed in 3.21s ═══", cls: "text-primary" },
      ],
    },
  },
  {
    name: "GitHub Actions CI/CD Demo",
    description:
      "Reference pipeline that lints, tests, and reports on every push. Matrix builds, caching, artifacts.",
    tags: ["CI/CD", "GitHub Actions", "DevOps"],
    href: "https://github.com",
    stars: 256,
    forks: 38,
    accent: "#2088ff",
    mock: {
      kind: "ci",
      steps: [
        { name: "Checkout", status: "ok" },
        { name: "Setup Python 3.12", status: "ok" },
        { name: "Install deps", status: "ok" },
        { name: "Lint (ruff)", status: "ok" },
        { name: "Run pytest", status: "run" },
        { name: "Upload artifacts", status: "wait" },
      ],
    },
  },
];

function MockPreview({ mock, accent }: { mock: Mock; accent: string }) {
  return (
    <div className="relative h-48 sm:h-52 rounded-lg border border-border bg-background/60 overflow-hidden">
      {/* top chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-surface/60">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
      </div>

      <div className="p-3 font-mono text-[11px] leading-relaxed">
        {mock.kind === "code" && (
          <>
            {mock.lines.map((line, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-muted-foreground/50 w-4 text-right">{i + 1}</span>
                <span className="flex-1">
                  {line.map((seg, j) => (
                    <span key={j} className={seg.cls}>{seg.tok}</span>
                  ))}
                </span>
              </div>
            ))}
          </>
        )}
        {mock.kind === "terminal" && (
          <div className="space-y-0.5">
            {mock.lines.map((l, i) => (
              <div key={i} className={l.cls}>{l.t}</div>
            ))}
          </div>
        )}
        {mock.kind === "ci" && (
          <div className="space-y-1.5">
            {mock.steps.map((s, i) => (
              <div key={i} className="flex items-center gap-2 text-foreground/80">
                <span
                  className={`h-2 w-2 rounded-full ${
                    s.status === "ok"
                      ? "bg-accent"
                      : s.status === "run"
                      ? "bg-primary animate-pulse"
                      : "bg-muted-foreground/40"
                  }`}
                />
                <span className={s.status === "wait" ? "text-muted-foreground" : ""}>{s.name}</span>
              </div>
            ))}
          </div>
        )}
        {mock.kind === "browser" && (
          <div>
            <div className="text-muted-foreground mb-2">→ {mock.title}</div>
            <div className="grid grid-cols-3 gap-1.5">
              {Array.from({ length: mock.cards * 2 }).map((_, i) => (
                <div
                  key={i}
                  className="h-10 rounded border border-border bg-surface/60"
                  style={{
                    background:
                      i % 3 === 0
                        ? `linear-gradient(135deg, ${accent}30, transparent)`
                        : undefined,
                  }}
                />
              ))}
            </div>
            <div className="mt-2 h-1 w-2/3 rounded bg-muted/50" />
            <div className="mt-1.5 h-1 w-1/2 rounded bg-muted/50" />
          </div>
        )}
      </div>
      {/* soft glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: `radial-gradient(600px circle at 100% 100%, ${accent}18, transparent 60%)` }}
      />
    </div>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 / Work"
      title="Featured Projects"
      description="Selected open-source work showcasing the way I think about testing, automation, and code quality."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="card-surface card-hover p-6 group block"
          >
            <MockPreview mock={p.mock} accent={p.accent} />
            <div className="flex items-start justify-between gap-4 mt-5 mb-2">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                {p.name}
              </h3>
              <ArrowUpRight
                size={20}
                className="shrink-0 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.description}</p>
            <div className="flex flex-wrap items-center gap-2 justify-between">
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-surface-elevated border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                <span className="inline-flex items-center gap-1">
                  <Star size={12} /> {p.stars}
                </span>
                <span className="inline-flex items-center gap-1">
                  <GitFork size={12} /> {p.forks}
                </span>
                <Github size={14} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
