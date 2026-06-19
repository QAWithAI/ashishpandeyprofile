import { motion } from "motion/react";
import { Section } from "./Section";
import { Briefcase, Users, Layers, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Briefcase,
    title: "Software Quality Team Lead",
    subtitle: "Current role",
    points: [
      "Lead a QA team responsible for functional, regression and automation coverage across enterprise products.",
      "Define automation strategy, framework standards, and review practices.",
      "Partner with engineering and product on release readiness and quality gates.",
    ],
  },
  {
    icon: Layers,
    title: "Enterprise automation",
    subtitle: "13+ years across the stack",
    points: [
      "Designed and maintained Selenium + Java automation frameworks with TestNG and Cucumber.",
      "Built REST Assured and Karate API automation suites integrated into Jenkins pipelines.",
      "Worked extensively with AccelQ for low-code enterprise test automation.",
    ],
  },
  {
    icon: Users,
    title: "Team leadership & mentoring",
    subtitle: "People + process",
    points: [
      "Mentored QA engineers on framework design, code reviews and best practices.",
      "Drove adoption of CI/CD-friendly test practices across delivery teams.",
      "Owned estimations, planning and stakeholder communication for QA scope.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Domains delivered",
    subtitle: "Where the work shipped",
    points: [
      "Banking — core banking and digital channels.",
      "Telecom — provisioning, billing and OSS/BSS workflows.",
      "Healthcare — clinical and patient-facing applications.",
      "ERP & Salesforce — large-scale enterprise platforms and customisations.",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 / Experience"
      title="Professional Experience"
      description="A summary of the work, leadership and engineering practices I've focused on over the last 13+ years."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card-surface card-hover p-6"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="shrink-0 grid h-11 w-11 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
                <p.icon size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-lg leading-tight">{p.title}</h3>
                <div className="text-xs font-mono text-primary mt-0.5">{p.subtitle}</div>
              </div>
            </div>
            <ul className="space-y-2">
              {p.points.map((pt) => (
                <li key={pt} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
