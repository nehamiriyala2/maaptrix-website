import Link from "next/link";
import { ArrowRight, BarChart3, Layers, LayoutPanelLeft, Waypoints } from "lucide-react";
import Reveal from "@/components/Reveal";
import StackedCards from "@/components/scroll/StackedCards";
import { StoryCard, type StoryCardData } from "@/components/scroll/StoryCard";

const CARDS: StoryCardData[] = [
  {
    num: "01",
    icon: Layers,
    title: "Designed for Real Operations",
    text: "Maaptrix products start from how schools and organizations actually run their day, and are shaped around those real workflows rather than generic templates.",
    points: ["Built around existing daily routines", "Separate views for each role", "Fits the way your team already works"],
    visualTitle: "Academic Operations",
    visual: {
      kind: "list",
      rows: [
        { a: "Class 6 – A", b: "Mathematics · Period 2", tag: "In session", tone: "green", initials: "6A" },
        { a: "Class 7 – B", b: "Science · Period 2", tag: "In session", tone: "green", initials: "7B" },
        { a: "Class 8 – A", b: "Attendance pending", tag: "Pending", tone: "blue", initials: "8A" },
        { a: "Staff meeting", b: "Today · 3:30 PM", tag: "Scheduled", tone: "gray", initials: "SM" },
      ],
    },
  },
  {
    num: "02",
    icon: LayoutPanelLeft,
    title: "Built for Simplicity",
    text: "Everyday tasks take fewer steps, and information is laid out so it can be understood at a glance by administrators, staff and parents alike.",
    points: ["Clear, uncluttered screens", "Information that is easy to read", "Straightforward for new users"],
    visualTitle: "Announcements",
    visual: {
      kind: "chat",
      messages: [
        { from: "School Office", text: "Reminder: Parent–teacher meeting on Saturday at 10 AM." },
        { from: "Parent", text: "Thank you. Will the meeting be in the main hall?" },
        { from: "School Office", text: "Yes, in the main hall. See you there!", me: true },
      ],
    },
  },
  {
    num: "03",
    icon: Waypoints,
    title: "Built for Real-World Use",
    text: "Maaptrix connects the people, workflows and situations involved in daily operations, so the school office, drivers and parents work from the same up-to-date information.",
    points: ["Admin, driver and parent apps connected", "Updates as situations change", "Designed for everyday conditions"],
    visualTitle: "Live Transport",
    visual: { kind: "map", caption: "Bus MP-07 · On route", status: "Next stop in 4 mins · 28 students" },
  },
  {
    num: "04",
    icon: BarChart3,
    title: "Continuously Improved",
    text: "Our products are maintained and refined after release, evolving as operational needs change and as feedback comes in from the people who use them.",
    points: ["Regular refinements after release", "Shaped by user feedback", "Built to grow with your needs"],
    visualTitle: "Insights",
    visual: {
      kind: "stats",
      stats: [
        { label: "Attendance", value: "94%" },
        { label: "On-time trips", value: "97%" },
        { label: "Messages read", value: "88%" },
      ],
      bars: [42, 55, 48, 63, 58, 71, 76],
      barLabel: "Weekly activity",
    },
  },
];

export default function HomeWhyPreview() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20" aria-labelledby="home-why-heading">
      <div className="page-container">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-brand-blue">
                <span className="h-2 w-2 rounded-full bg-brand-blue" aria-hidden />
                Why Maaptrix
              </p>
              <h2
                id="home-why-heading"
                className="mt-4 font-display text-[30px] leading-[1.12] sm:text-[34px] lg:text-[40px] font-bold tracking-tight text-brand-navy"
              >
                Built differently, <span className="text-brand-blue">on purpose.</span>
              </h2>
            </div>
            <Link
              href="/why-maaptrix"
              className="group inline-flex shrink-0 items-center gap-2 text-[15px] font-semibold text-brand-blue hover:text-brand-blue-dark"
            >
              Explore Why Maaptrix
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="mt-10">
            <StackedCards>
              {CARDS.map((c) => (
                <StoryCard key={c.num} {...c} />
              ))}
            </StackedCards>
          </div>
        </div>
      </div>
    </section>
  );
}
