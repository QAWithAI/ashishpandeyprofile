export function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <div>
          © {new Date().getFullYear()} Ashish Kumar Pandey. Crafted with care.
        </div>
        <div className="font-mono text-xs">
          Built with React · TanStack · Tailwind
        </div>
      </div>
    </footer>
  );
}
