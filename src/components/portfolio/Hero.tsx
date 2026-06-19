import { motion } from "motion/react";
import { ArrowRight, Mail, Github, Linkedin, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center px-6 pt-32 pb-24 overflow-hidden">
      {/* grid bg */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.94 0.01 250) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.94 0.01 250) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* floating blobs */}
      <div className="absolute top-32 -right-24 h-80 w-80 rounded-full bg-primary/20 blur-[120px] -z-10 animate-float" />
      <div className="absolute bottom-10 -left-20 h-72 w-72 rounded-full bg-accent/15 blur-[120px] -z-10 animate-float" style={{ animationDelay: "2s" }} />

      <div className="mx-auto max-w-6xl w-full grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            <span className="text-muted-foreground">Open to QA leadership & AI automation roles</span>
            <Sparkles size={12} className="text-primary" />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.04] tracking-tight">
            Hi, I'm <span className="text-gradient">Ashish Kumar Pandey</span>
            <br />
            building reliable
            <br />
            <span className="text-primary">quality at enterprise scale</span>
            <span className="cursor-blink" />
          </h1>
          <p className="mt-7 font-mono text-sm sm:text-base text-primary">
            <span className="text-muted-foreground">{"// "}</span>Software Quality Team Lead{" "}
            <span className="text-muted-foreground">·</span> AI &amp; Machine Learning Enthusiast
          </p>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            13+ years in Software Testing and QA Automation across Banking, Telecom, Healthcare,
            ERP and Salesforce. I lead teams, design automation strategy, and ship enterprise test
            frameworks — while actively expanding into Python, Playwright, Machine Learning and
            AI-powered test automation.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:shadow-[0_10px_40px_-10px_oklch(0.68_0.17_245/0.6)] hover:-translate-y-0.5 shimmer overflow-hidden"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg glass px-6 py-3 font-medium text-foreground transition-all hover:border-primary/60 hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>
          <div className="mt-10 flex items-center gap-5 text-muted-foreground">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors hover:-translate-y-0.5 inline-block" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ashish-pandey-1875a9243/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors hover:-translate-y-0.5 inline-block" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:ashishkpandey25@gmail.com" className="hover:text-primary transition-colors hover:-translate-y-0.5 inline-block" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Terminal mock */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
        >
          <div className="glass-strong rounded-xl overflow-hidden shadow-[0_30px_80px_-20px_oklch(0_0_0/0.6)]">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface/50">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 text-xs font-mono text-muted-foreground">~/profile · zsh</span>
            </div>
            <div className="p-5 font-mono text-sm leading-relaxed">
              <div className="text-muted-foreground">$ whoami</div>
              <div className="text-foreground">ashish_kumar_pandey</div>
              <div className="text-muted-foreground mt-2">$ cat profile.yaml</div>
              <pre className="text-foreground/90 mt-1">{`role: Software Quality Team Lead
experience: 13+ years
domains:
  - Banking · Telecom · Healthcare
  - ERP · Salesforce
core_stack:
  - Selenium · TestNG · Cucumber
  - REST Assured · Karate · AccelQ
  - Jenkins · GitHub · Java
learning:
  - Python · Pytest · Playwright
  - GitHub Actions · ML · GenAI`}</pre>
              <div className="text-muted-foreground mt-3">$ pytest --collect-only</div>
              <div className="text-accent">✓ enterprise frameworks ready</div>
              <div className="flex items-center mt-2">
                <span className="text-primary">$</span>
                <span className="cursor-blink ml-2" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
