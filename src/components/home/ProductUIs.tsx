import type { ReactNode } from "react";
import {
  AlertTriangle,
  BarChart3,
  Bell,
  BookOpen,
  Bus,
  CalendarCheck,
  Check,
  ChevronDown,
  FileText,
  House,
  IdCard,
  LayoutDashboard,
  MapPinned,
  Megaphone,
  Minus,
  Plus,
  Route,
  Search,
  Settings,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react";

/*
 * Large product dashboard UIs for the Home product showcases.
 * Built as real HTML (always sharp, never cropped) and laid out with container
 * queries so they adapt to the width of their column, not the viewport.
 * The frame is the outer container (sidebar), the main area its own container.
 * All figures and names are sample data.
 */

const NAVY = "#10233F";
const BLUE = "#1683F7";
const MUTED = "#63748B";

type Tone = "blue" | "green" | "gray" | "red";
const TONES: Record<Tone, [string, string]> = {
  blue: ["#EAF4FF", BLUE],
  green: ["#E8F7EF", "#15803D"],
  gray: ["#EEF2F6", "#52657D"],
  red: ["#FDECEC", "#D63B3F"],
};

function Tag({ children, tone = "blue" }: { children: ReactNode; tone?: Tone }) {
  return (
    <span className="shrink-0 whitespace-nowrap rounded-full px-2 py-0.5 text-[10.5px] font-semibold" style={{ background: TONES[tone][0], color: TONES[tone][1] }}>
      {children}
    </span>
  );
}

function Frame({
  url,
  nav,
  title,
  subtitle,
  children,
}: {
  url: string;
  nav: { icon: LucideIcon; label: string }[];
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="@container overflow-hidden rounded-[18px] border border-[#CFE0F3] bg-white shadow-[0_40px_80px_-36px_rgba(16,42,86,0.5)]">
      <div className="flex items-center gap-3 border-b border-[#E6EEF7] bg-[#F6F9FD] px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#D4DEEA]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#D4DEEA]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#D4DEEA]" />
        </span>
        <span className="mx-auto flex h-6 w-full max-w-[280px] items-center justify-center rounded-md border border-[#E1EAF4] bg-white text-[11px] text-[#8A99AD]">
          {url}
        </span>
        <span className="w-[42px]" aria-hidden />
      </div>

      <div className="flex">
        <aside className="hidden w-[176px] shrink-0 flex-col border-r border-[#EDF2F8] bg-[#FAFCFF] p-3 @2xl:flex">
          <div className="mb-4 flex items-center gap-2 px-2 py-1.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#1683F7] text-[12px] font-bold text-white">M</span>
            <span className="font-display text-[15px] font-bold" style={{ color: NAVY }}>
              Maaptrix
            </span>
          </div>
          {nav.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className={`mb-0.5 flex items-center gap-2.5 rounded-[8px] px-2.5 py-2 text-[12.5px] ${i === 0 ? "font-semibold text-white" : "text-[#44566E]"}`}
              style={i === 0 ? { background: BLUE } : undefined}
            >
              <Icon className="h-[15px] w-[15px]" />
              {label}
            </div>
          ))}
          <div className="mt-auto flex items-center gap-2.5 rounded-[8px] px-2.5 py-2 text-[12.5px] text-[#44566E]">
            <Settings className="h-[15px] w-[15px]" />
            Settings
          </div>
        </aside>

        <div className="@container min-w-0 flex-1 bg-[#F7FAFE] p-3.5 @lg:p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="font-display text-[16px] font-bold leading-tight @lg:text-[17px]" style={{ color: NAVY }}>
                {title}
              </p>
              <p className="truncate text-[11px]" style={{ color: MUTED }}>
                {subtitle}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden h-8 w-[170px] items-center gap-2 rounded-[8px] border border-[#E1EAF4] bg-white px-2.5 text-[11px] text-[#98A6B7] @xl:flex">
                <Search className="h-3.5 w-3.5" />
                Search…
              </span>
              <span className="relative flex h-8 w-8 items-center justify-center rounded-[8px] border border-[#E1EAF4] bg-white" style={{ color: NAVY }}>
                <Bell className="h-3.5 w-3.5" />
                <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#D63B3F]" />
              </span>
              <span className="hidden items-center gap-1.5 @lg:flex">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1683F7] text-[11px] font-bold text-white">A</span>
                <span className="text-[12px] font-medium" style={{ color: NAVY }}>
                  Admin
                </span>
                <ChevronDown className="h-3 w-3" style={{ color: MUTED }} />
              </span>
            </div>
          </div>
          {children}
          <p className="mt-3 text-right text-[10px] font-medium text-[#A3B0C0]">Sample data</p>
        </div>
      </div>
    </div>
  );
}

function Kpis({ items }: { items: { icon: LucideIcon; label: string; value: string; note?: string; tone?: Tone }[] }) {
  return (
    <div className="mt-3.5 grid grid-cols-2 gap-2.5 @lg:grid-cols-4">
      {items.map(({ icon: Icon, label, value, note, tone = "blue" }) => (
        <div key={label} className="rounded-[10px] border border-[#E1EAF4] bg-white p-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium" style={{ color: MUTED }}>
              {label}
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-[8px]" style={{ background: TONES[tone][0], color: TONES[tone][1] }}>
              <Icon className="h-3.5 w-3.5" />
            </span>
          </div>
          <p className="mt-1 text-[20px] font-bold leading-none" style={{ color: NAVY }}>
            {value}
          </p>
          {note && (
            <p className="mt-1.5 text-[10.5px] font-medium" style={{ color: tone === "red" ? "#D63B3F" : "#15803D" }}>
              {note}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

function Card({ title, action, children, className = "" }: { title: string; action?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <div className={`min-w-0 rounded-[10px] border border-[#E1EAF4] bg-white p-3.5 ${className}`}>
      <div className="flex items-center justify-between gap-2">
        <p className="text-[13px] font-semibold" style={{ color: NAVY }}>
          {title}
        </p>
        {action && <span className="text-[11px] font-semibold text-[#1683F7]">{action}</span>}
      </div>
      {children}
    </div>
  );
}

/* ------------------------------------------------------ School management */

export function SchoolAdminUI() {
  const days = [
    ["Mon", 92],
    ["Tue", 95],
    ["Wed", 90],
    ["Thu", 97],
    ["Fri", 94],
    ["Sat", 88],
  ] as const;
  return (
    <Frame
      url="app.maaptrix.com/school"
      title="School Dashboard"
      subtitle="Overview · Friday, 25 September"
      nav={[
        { icon: LayoutDashboard, label: "Dashboard" },
        { icon: Users, label: "Students" },
        { icon: CalendarCheck, label: "Attendance" },
        { icon: BookOpen, label: "Academics" },
        { icon: Megaphone, label: "Communication" },
        { icon: BarChart3, label: "Reports" },
        { icon: Bell, label: "Notifications" },
      ]}
    >
      <Kpis
        items={[
          { icon: Users, label: "Total Students", value: "436", note: "+12 this term" },
          { icon: CalendarCheck, label: "Present Today", value: "412", note: "94.5% attendance", tone: "green" },
          { icon: UserPlus, label: "Absent", value: "18", note: "6 on leave", tone: "red" },
          { icon: BookOpen, label: "Classes", value: "14" },
        ]}
      />

      <div className="mt-2.5 grid gap-2.5 @lg:grid-cols-[1.3fr_1fr]">
        <Card title="Attendance analytics" action="This week">
          <div className="relative mt-3 h-[128px]">
            {[0, 1, 2].map((i) => (
              <span key={i} className="absolute inset-x-0 border-t border-dashed border-[#E6EEF7]" style={{ top: `${i * 42}px` }} />
            ))}
            <div className="absolute inset-0 flex items-end gap-3 pb-5">
              {days.map(([d, v], i) => (
                <div key={d} className="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
                  <span className="text-[9.5px] font-semibold" style={{ color: i === 3 ? BLUE : MUTED }}>
                    {v}%
                  </span>
                  <span
                    className="w-full max-w-[34px] rounded-t-[5px]"
                    style={{ height: `${(v - 80) * 4.6}px`, background: i === 3 ? BLUE : "linear-gradient(180deg,#A9D2FC,#DCEBFD)" }}
                  />
                </div>
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 flex gap-3">
              {days.map(([d]) => (
                <span key={d} className="flex-1 text-center text-[10px]" style={{ color: MUTED }}>
                  {d}
                </span>
              ))}
            </div>
          </div>
        </Card>

        <Card title="Recent activity" action="View all">
          <ul className="mt-2 space-y-2.5">
            {[
              [CalendarCheck, "Attendance marked", "Class 6 – A · 8:45 AM", "green"],
              [BookOpen, "Homework shared", "Mathematics · Class 7 – B", "blue"],
              [UserPlus, "New admission", "Meera Iyer · UKG", "blue"],
              [Megaphone, "Notice sent", "Parent–teacher meeting", "gray"],
            ].map(([Icon, a, b, tone]) => {
              const I = Icon as LucideIcon;
              const t = TONES[tone as Tone];
              return (
                <li key={a as string} className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full" style={{ background: t[0], color: t[1] }}>
                    <I className="h-3.5 w-3.5" />
                  </span>
                  <span className="min-w-0 leading-tight">
                    <span className="block truncate text-[12px] font-medium" style={{ color: NAVY }}>
                      {a as string}
                    </span>
                    <span className="block truncate text-[10.5px]" style={{ color: MUTED }}>
                      {b as string}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </Card>
      </div>

      <div className="mt-2.5 grid gap-2.5 @lg:grid-cols-[1.3fr_1fr]">
        <Card title="Students" action="436 total">
          <div className="mt-2 grid grid-cols-[1fr_auto_auto] gap-x-3 border-b border-[#EEF3F9] pb-1.5 text-[10px] font-semibold uppercase tracking-wide text-[#98A6B7] @3xl:grid-cols-[1fr_56px_48px_auto]">
            <span>Student</span>
            <span className="hidden @3xl:block">Class</span>
            <span>Attend.</span>
            <span>Status</span>
          </div>
          <ul className="divide-y divide-[#EEF3F9]">
            {[
              ["Aarav Sharma", "6 – A", "98%", "Present", "green"],
              ["Diya Reddy", "7 – B", "96%", "Present", "green"],
              ["Kabir Rao", "8 – A", "89%", "Absent", "red"],
              ["Meera Iyer", "UKG", "94%", "Present", "green"],
            ].map(([n, c, a, s, tone]) => (
              <li key={n} className="grid grid-cols-[1fr_auto_auto] items-center gap-x-3 py-2 @3xl:grid-cols-[1fr_56px_48px_auto]">
                <span className="flex min-w-0 items-center gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF4FF] text-[9.5px] font-bold text-[#1683F7]">
                    {n.split(" ").map((w) => w[0]).join("")}
                  </span>
                  <span className="truncate text-[12px] font-medium" style={{ color: NAVY }}>
                    {n}
                  </span>
                </span>
                <span className="hidden text-[11.5px] @3xl:block" style={{ color: MUTED }}>
                  {c}
                </span>
                <span className="text-[11.5px] font-semibold" style={{ color: NAVY }}>
                  {a}
                </span>
                <Tag tone={tone as Tone}>{s}</Tag>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Notices" action="New notice">
          <ul className="mt-2 space-y-2">
            {[
              ["Parent–teacher meeting", "Saturday · 10:00 AM", "Sent", "green"],
              ["Term 1 examinations", "From 10 October", "Draft", "gray"],
              ["Annual Day photos", "Shared with parents", "Sent", "green"],
            ].map(([a, b, t, tone]) => (
              <li key={a} className="flex items-center gap-2 rounded-[8px] border border-[#EEF3F9] px-2.5 py-2">
                <FileText className="h-3.5 w-3.5 shrink-0 text-[#1683F7]" />
                <span className="min-w-0 flex-1 leading-tight">
                  <span className="block truncate text-[12px] font-medium" style={{ color: NAVY }}>
                    {a}
                  </span>
                  <span className="block truncate text-[10.5px]" style={{ color: MUTED }}>
                    {b}
                  </span>
                </span>
                <Tag tone={tone as Tone}>{t}</Tag>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Frame>
  );
}

/* ---------------------------------------------------------- Transport */

// Map drawn on a 600×300 canvas; overlays use % of the same canvas (aspect locked 2:1).
const P = (x: number, y: number) => ({ left: `${(x / 600) * 100}%`, top: `${(y / 300) * 100}%` });

function LiveMap() {
  const streetsH = Array.from({ length: 12 }, (_, i) => 10 + i * 26);
  const streetsV = Array.from({ length: 20 }, (_, i) => 8 + i * 32);
  const routeA = "M40 250 C 80 230 110 240 150 205 S 220 160 270 158 S 340 150 380 120 S 450 70 520 64";
  const routeB = "M60 60 C 110 70 150 96 200 92 S 280 70 320 96 S 390 150 440 170";
  const routeC = "M230 290 C 250 250 300 240 330 250 S 420 262 470 236 S 540 210 580 214";
  return (
    <div className="relative mt-2.5 aspect-[2/1] w-full overflow-hidden rounded-[10px] border border-[#E1EAF4] bg-[#EAF0F7]">
      <svg viewBox="0 0 600 300" className="absolute inset-0 h-full w-full" aria-hidden>
        <path d="M470 0 C 480 60 530 100 600 110 L600 0Z" fill="#C6DDF5" />
        <path d="M0 150 C 20 140 40 150 44 170 S 20 200 0 196Z" fill="#C6DDF5" />
        <path d="M110 110 C 130 96 170 100 176 122 S 150 156 126 150 S 96 124 110 110Z" fill="#D6EBD4" />
        <path d="M400 200 C 420 190 460 194 462 214 S 436 240 414 234 S 390 212 400 200Z" fill="#D6EBD4" />
        {streetsH.map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="600" y2={y + 10} stroke="#FFFFFF" strokeWidth="1.5" />
        ))}
        {streetsV.map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x - 12} y2="300" stroke="#FFFFFF" strokeWidth="1.5" />
        ))}
        <path d="M-10 130 C 120 120 260 180 400 140 S 560 80 620 90" fill="none" stroke="#D5DFEA" strokeWidth="9" />
        <path d="M-10 130 C 120 120 260 180 400 140 S 560 80 620 90" fill="none" stroke="#FFFFFF" strokeWidth="6.5" />
        <path d="M300 -10 C 290 80 320 180 300 310" fill="none" stroke="#D5DFEA" strokeWidth="9" />
        <path d="M300 -10 C 290 80 320 180 300 310" fill="none" stroke="#FFFFFF" strokeWidth="6.5" />
        <path d={routeB} fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
        <path d={routeB} fill="none" stroke="#7DBBFA" strokeWidth="3.2" strokeLinecap="round" />
        <path d={routeC} fill="none" stroke="#98A6B7" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" />
        <path d={routeA} fill="none" stroke={BLUE} strokeOpacity="0.18" strokeWidth="12" strokeLinecap="round" />
        <path d={routeA} fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
        <path d={routeA} fill="none" stroke={BLUE} strokeWidth="4" strokeLinecap="round" />
        {[
          [40, 250, "done"],
          [150, 205, "done"],
          [270, 158, "next"],
          [380, 120, "up"],
          [520, 64, "up"],
          [200, 92, "up"],
          [440, 170, "up"],
        ].map(([x, y, s]) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r={s === "next" ? 6.5 : 5}
            fill={s === "done" ? "#1FA971" : "#FFFFFF"}
            stroke={s === "done" ? "#FFFFFF" : BLUE}
            strokeWidth={s === "done" ? 2 : 3}
          />
        ))}
      </svg>

      {/* buses */}
      {[
        [205, 180, BLUE],
        [320, 98, "#5AA8F8"],
        [430, 250, "#8B99AA"],
        [455, 90, BLUE],
      ].map(([x, y, c], i) => (
        <span
          key={i}
          className="absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white text-white shadow-[0_4px_10px_rgba(16,42,86,0.35)]"
          style={{ ...P(x as number, y as number), background: c as string }}
        >
          <Bus className="h-3.5 w-3.5" />
        </span>
      ))}

      {/* school */}
      <span
        className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[9px] border-2 border-white bg-[#0757C9] text-white shadow-[0_4px_10px_rgba(7,87,201,0.4)]"
        style={P(540, 50)}
      >
        <House className="h-4 w-4" />
      </span>

      {/* popups */}
      <div className="absolute hidden rounded-[8px] border border-[#D5E8FA] bg-white px-2.5 py-1.5 leading-tight shadow-[0_6px_16px_rgba(30,90,150,0.16)] @md:block" style={P(92, 128)}>
        <p className="text-[11.5px] font-bold" style={{ color: NAVY }}>
          Bus MPX-07
        </p>
        <p className="text-[10.5px] font-medium text-[#15803D]">On route · 24 students</p>
        <p className="text-[10.5px]" style={{ color: MUTED }}>
          Next: Maple Residency · 2 min
        </p>
      </div>
      <div className="absolute hidden rounded-[8px] border border-[#D5E8FA] bg-white px-2.5 py-1.5 leading-tight shadow-[0_6px_16px_rgba(30,90,150,0.16)] @xl:block" style={P(338, 180)}>
        <p className="text-[11px] font-bold" style={{ color: NAVY }}>
          Bus MPX-11
        </p>
        <p className="text-[10px]" style={{ color: MUTED }}>
          Delayed 5 min · 28 students
        </p>
      </div>
      <span className="absolute left-2 top-2 hidden rounded-full bg-[#10233F] px-2.5 py-1 text-[10.5px] font-semibold text-white @md:block">
        Greenfield School · ETA 14 min
      </span>

      {/* controls */}
      <div className="absolute bottom-2 right-2 hidden overflow-hidden rounded-[8px] border border-[#DDE6F0] bg-white @md:block" style={{ color: NAVY }}>
        <span className="flex h-7 w-7 items-center justify-center border-b border-[#EDF2F8]">
          <Plus className="h-3.5 w-3.5" />
        </span>
        <span className="flex h-7 w-7 items-center justify-center">
          <Minus className="h-3.5 w-3.5" />
        </span>
      </div>
      <div className="absolute bottom-2 left-2 flex flex-wrap gap-1.5">
        {[
          ["Route A", BLUE],
          ["Route B", "#7DBBFA"],
          ["Route C", "#98A6B7"],
        ].map(([l, c]) => (
          <span key={l} className="flex items-center gap-1.5 rounded-full bg-white/95 px-2 py-0.5 text-[10px] font-semibold shadow-sm" style={{ color: NAVY }}>
            <span className="h-1.5 w-3 rounded-full" style={{ background: c }} />
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TransportAdminUI() {
  return (
    <Frame
      url="app.maaptrix.com/transport"
      title="Live Transport"
      subtitle="Morning pickup · 12 buses running"
      nav={[
        { icon: MapPinned, label: "Live Tracking" },
        { icon: Route, label: "Routes & Stops" },
        { icon: Bus, label: "Vehicles" },
        { icon: IdCard, label: "Drivers" },
        { icon: Users, label: "Students" },
        { icon: AlertTriangle, label: "Alerts" },
        { icon: BarChart3, label: "Reports" },
      ]}
    >
      <Kpis
        items={[
          { icon: Bus, label: "Active Buses", value: "12", note: "9 in transit" },
          { icon: Route, label: "Routes Running", value: "8", note: "All on schedule" },
          { icon: Users, label: "Students Onboard", value: "312", note: "Pickup in progress", tone: "green" },
          { icon: AlertTriangle, label: "Alerts", value: "1", note: "1 bus delayed", tone: "red" },
        ]}
      />

      <Card title="Live tracking map" action={<span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1683F7]" />Live</span>} className="mt-2.5">
        <LiveMap />
      </Card>

      <div className="mt-2.5 grid gap-2.5 @lg:grid-cols-[1.35fr_1fr]">
        <Card title="Buses on route" action="View all">
          <div className="mt-2 grid grid-cols-[1fr_auto_auto] gap-x-3 border-b border-[#EEF3F9] pb-1.5 text-[10px] font-semibold uppercase tracking-wide text-[#98A6B7] @3xl:grid-cols-[1fr_1fr_50px_auto]">
            <span>Bus</span>
            <span className="hidden @3xl:block">Driver</span>
            <span>ETA</span>
            <span>Status</span>
          </div>
          <ul className="divide-y divide-[#EEF3F9]">
            {[
              ["MPX-07", "24/28", "Ravi Kumar", "2 min", "On route", "green"],
              ["MPX-03", "18/28", "Suresh Babu", "—", "At stop", "blue"],
              ["MPX-11", "28/32", "Anil Verma", "9 min", "Delayed", "red"],
              ["MPX-15", "20/28", "Prakash N", "6 min", "On route", "green"],
            ].map(([b, s, d, eta, st, tone]) => (
              <li key={b} className="grid grid-cols-[1fr_auto_auto] items-center gap-x-3 py-2 @3xl:grid-cols-[1fr_1fr_50px_auto]">
                <span className="flex min-w-0 items-center gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF4FF] text-[#1683F7]">
                    <Bus className="h-3 w-3" />
                  </span>
                  <span className="leading-tight">
                    <span className="block whitespace-nowrap text-[12px] font-semibold" style={{ color: NAVY }}>
                      {b}
                    </span>
                    <span className="block text-[10px]" style={{ color: MUTED }}>
                      {s} students
                    </span>
                  </span>
                </span>
                <span className="hidden truncate text-[11.5px] @3xl:block" style={{ color: MUTED }}>
                  {d}
                </span>
                <span className="text-[11.5px] font-semibold" style={{ color: NAVY }}>
                  {eta}
                </span>
                <Tag tone={tone as Tone}>{st}</Tag>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Route A · Stops" action="West Zone">
          <ol className="relative mt-2.5 space-y-2.5 pl-5">
            <span className="absolute bottom-2 left-[7px] top-2 w-[2px] bg-[#E1EAF4]" aria-hidden />
            {[
              ["School Gate", "Departed 7:10 AM", "done"],
              ["Green Park", "Picked up 6 students", "done"],
              ["Maple Residency", "Next stop · 2 min", "next"],
              ["Lake View Colony", "Upcoming · 9 min", "up"],
            ].map(([n, d, s]) => (
              <li key={n} className="relative leading-tight">
                <span
                  className="absolute -left-5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2"
                  style={
                    s === "done"
                      ? { background: "#1FA971", borderColor: "#1FA971" }
                      : s === "next"
                        ? { background: "#FFFFFF", borderColor: BLUE }
                        : { background: "#FFFFFF", borderColor: "#B9C6D6" }
                  }
                >
                  {s === "done" && <Check className="h-2.5 w-2.5 text-white" strokeWidth={3.5} />}
                </span>
                <span className="block text-[12px] font-semibold" style={{ color: s === "next" ? BLUE : NAVY }}>
                  {n}
                </span>
                <span className="block text-[10.5px]" style={{ color: MUTED }}>
                  {d}
                </span>
              </li>
            ))}
          </ol>
          <div className="mt-3 flex items-center gap-2 rounded-[8px] bg-[#FDF2F2] px-2.5 py-2 text-[11px]">
            <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-[#D63B3F]" />
            <span className="min-w-0 truncate" style={{ color: NAVY }}>
              MPX-11 delayed 5 min · parents notified
            </span>
          </div>
        </Card>
      </div>
    </Frame>
  );
}
