"use client";

function uptimeDays(): number {
  const start = new Date("2019-06-02").getTime();
  return Math.floor((Date.now() - start) / (1000 * 60 * 60 * 24));
}

const staticRows: readonly { label: string; value: string }[] = [
  { label: "timezone", value: "ist · +05:30" },
  { label: "coffee", value: "uncountable" },
  { label: "build", value: "passing" },
  { label: "currently", value: "solarwinds" },
];

export function StatusPanel() {
  const rows: readonly { label: string; value: string }[] = [
    { label: "uptime", value: `${uptimeDays()} days` },
    ...staticRows,
  ];

  return (
    <div className="pt-8">
      <p className="font-mono text-[12px] text-muted/65 tracking-[0.2em] uppercase mb-3">
        status
      </p>
      <div className="w-16 h-px bg-border/50 mb-4" />
      <dl className="space-y-2">
        {rows.map(({ label, value }) => (
          <div key={label} className="grid grid-cols-[9rem_1fr] font-mono text-[13px]">
            <dt className="text-muted/80 tracking-wider">{label}</dt>
            <dd className="text-muted/80" suppressHydrationWarning>
              {value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="font-mono text-[12px] text-muted/45 mt-6 tracking-wider leading-relaxed">
        {"// "}hint: try the terminal
      </p>
    </div>
  );
}
