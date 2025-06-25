export function Footer() {
  return (
    <footer className="w-full p-4 md:p-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between text-sm text-foreground/60">
        <p>SURAJ CHAUHAN</p>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span>suraj @ corp</span>
        </div>
      </div>
    </footer>
  );
}
