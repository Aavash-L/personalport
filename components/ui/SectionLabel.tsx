interface Props {
  label: string;
  className?: string;
}

export function SectionLabel({ label, className = "" }: Props) {
  return (
    <p
      className={`font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400 ${className}`}
    >
      {label}
    </p>
  );
}
