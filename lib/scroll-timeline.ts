export type Beat = { start: number; end: number; from: number; to: number; chapter: number };
export function frameAt(progress: number, beats: Beat[], count: number) {
  const p=Math.max(0,Math.min(1,progress));
  const beat=beats.find(b=>p>=b.start && p<b.end) ?? beats[beats.length-1];
  if(!beat) return {frame:0,chapter:0};
  const t=Math.max(0,Math.min(1,(p-beat.start)/(beat.end-beat.start)));
  return {frame:Math.max(0,Math.min(count-1,Math.round(beat.from+(beat.to-beat.from)*t))),chapter:beat.chapter};
}
