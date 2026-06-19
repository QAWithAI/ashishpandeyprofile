import { motion } from "motion/react";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center px-6 pt-32 pb-20 overflow-hidden">
      {/* grid bg */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.97 0.005 250) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.97 0.005 250) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="mx-auto max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 backdrop-blur px-4 py-1.5 text-xs font-mono">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground">Available for opportunities</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Hi, I'm <span className="text-gradient">Alex Carter</span>
            <br />
            building reliable software
            <br />
            through <span className="text-primary">automation</span>.
          </h1>
          <p className="mt-6 font-mono text-sm sm:text-base text-primary">
            QA Automation Engineer <span className="text-muted-foreground">|</span> Python Developer{" "}
            <span className="text-muted-foreground">|</span> Playwright Enthusiast
          </p>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            I design end-to-end test automation frameworks and write clean Python code.
            Passionate about quality engineering, CI/CD pipelines, and turning complex
            workflows into resilient, maintainable systems.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:shadow-[0_10px_40px_-10px_oklch(0.78_0.16_175/0.5)]"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 font-medium text-foreground transition-all hover:border-primary hover:bg-surface-elevated"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>
          <div className="mt-10 flex items-center gap-5 text-muted-foreground">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:hello@example.com" className="hover:text-primary transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
