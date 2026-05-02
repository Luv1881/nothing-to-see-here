interface PageShellProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div
      className={`w-full px-6 sm:px-8 md:px-14 lg:px-20 xl:px-28 2xl:max-w-[1800px] 2xl:mx-auto py-20 md:py-32 ${className}`}
    >
      {children}
    </div>
  );
}
