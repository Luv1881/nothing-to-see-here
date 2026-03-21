export function Footer() {
  return (
    <footer className="border-t border-border/30">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8">
        <div className="flex items-center justify-between text-[11px] font-mono text-muted/50 tracking-wider uppercase">
          <span>Engineered with empty stomach and caffeine</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
