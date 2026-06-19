import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { GitHubStats } from "@/components/portfolio/GitHubStats";
import { Timeline } from "@/components/portfolio/Timeline";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashish Kumar Pandey — QA Automation Engineer & Python Developer" },
      {
        name: "description",
        content:
          "Portfolio of Ashish Kumar Pandey, QA Automation Engineer and Python Developer specializing in Playwright, Pytest, and CI/CD pipelines.",
      },
      { property: "og:title", content: "Ashish Kumar Pandey — QA Automation Engineer & Python Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Ashish Kumar Pandey, QA Automation Engineer and Python Developer specializing in Playwright, Pytest, and CI/CD pipelines.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <GitHubStats />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
