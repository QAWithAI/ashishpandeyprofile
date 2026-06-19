import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Timeline } from "@/components/portfolio/Timeline";
import { AIRoadmap } from "@/components/portfolio/AIRoadmap";
import { GitHubStats } from "@/components/portfolio/GitHubStats";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashish Kumar Pandey — Software Quality Team Lead | AI & ML Enthusiast" },
      {
        name: "description",
        content:
          "Ashish Kumar Pandey — Software Quality Team Lead with 13+ years in QA automation across Banking, Telecom, Healthcare, ERP and Salesforce. Expanding into Python, Playwright, ML and AI-powered test automation.",
      },
      { property: "og:title", content: "Ashish Kumar Pandey — Software Quality Team Lead | AI & ML Enthusiast" },
      {
        property: "og:description",
        content:
          "13+ years in QA automation and leadership. Selenium, REST Assured, Karate, AccelQ — now expanding into Python, Playwright, Machine Learning and AI-powered testing.",
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
        <Experience />
        <Skills />
        <Projects />
        <Timeline />
        <AIRoadmap />
        <GitHubStats />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
