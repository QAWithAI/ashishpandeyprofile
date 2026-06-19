import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-mono text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
