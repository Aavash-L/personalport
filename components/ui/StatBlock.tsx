import { type Stat } from "@/data/types";

interface Props {
  stat: Stat;
}

export function StatBlock({ stat }: Props) {
  return (
    <div className="card p-6">
      <p
        className="font-display font-bold text-emerald-400 leading-none mb-2"
        style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
      >
        {stat.value}
      </p>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500 leading-relaxed">
        {stat.label}
      </p>
    </div>
  );
}
