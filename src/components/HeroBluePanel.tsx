/**
 * Bright-blue visual block anchored to the right edge of a hero, sitting
 * behind the hero visual (desktop only). `shape` varies the silhouette so each
 * page keeps its own composition within one visual system.
 */
export default function HeroBluePanel({
  shape = "rounded",
  width = "44%",
}: {
  shape?: "rounded" | "diagonal" | "arch";
  width?: string;
}) {
  const shapeClass =
    shape === "diagonal"
      ? "[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]"
      : shape === "arch"
        ? "rounded-tl-[220px]"
        : "rounded-bl-[120px]";
  return (
    <div
      className={`pointer-events-none absolute bottom-0 right-0 top-0 hidden overflow-hidden bg-[linear-gradient(150deg,#2B92FF_0%,#1683F7_45%,#0B72E8_100%)] xl:block ${shapeClass}`}
      style={{ width }}
      aria-hidden
    >
      <div className="absolute -right-24 top-16 h-[420px] w-[420px] rotate-12 rounded-[72px] border border-white/15" />
      <div className="absolute bottom-10 right-24 h-[180px] w-[180px] rotate-12 rounded-[36px] bg-white/[0.07]" />
      <div
        className="absolute left-[22%] top-12 h-[110px] w-[150px] opacity-40"
        style={{ backgroundImage: "radial-gradient(#FFFFFF 1.4px, transparent 1.6px)", backgroundSize: "18px 18px" }}
      />
    </div>
  );
}
