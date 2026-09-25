import { ClipboardList, Compass, LifeBuoy, Settings2, Share2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import StackedCards from "@/components/scroll/StackedCards";
import { StoryCard, type StoryCardData } from "@/components/scroll/StoryCard";

export const PROCESS_STEPS: StoryCardData[] = [
  {
    num: "01",
    eyebrow: "Discover",
    icon: Compass,
    title: "Discover",
    text: "We start by understanding how your organization works today: the people involved, the daily workflows and where things slow down.",
    points: ["Current workflows mapped", "Key users identified", "Pain points written down"],
    visualTitle: "Discovery notes",
    visual: {
      kind: "list",
      rows: [
        { a: "Morning attendance", b: "Recorded on paper, entered later", tag: "Noted", tone: "blue", initials: "AT" },
        { a: "Bus pickups", b: "Parents call the office for updates", tag: "Noted", tone: "blue", initials: "BP" },
        { a: "Notices to parents", b: "Sent across several channels", tag: "Noted", tone: "blue", initials: "NP" },
        { a: "Fee reminders", b: "Tracked in spreadsheets", tag: "Review", tone: "gray", initials: "FR" },
      ],
    },
  },
  {
    num: "02",
    eyebrow: "Plan",
    icon: ClipboardList,
    title: "Plan",
    text: "Together we decide which product modules you need, who will use them and the order in which they should be rolled out.",
    points: ["Modules and users agreed", "Rollout sequence planned", "Clear responsibilities on both sides"],
    visualTitle: "Rollout plan",
    visual: {
      kind: "list",
      rows: [
        { a: "Phase 1 · Student records", b: "Administrators", tag: "Agreed", tone: "green", initials: "P1" },
        { a: "Phase 2 · Attendance", b: "Class teachers", tag: "Agreed", tone: "green", initials: "P2" },
        { a: "Phase 3 · Transport", b: "Drivers and parents", tag: "Next", tone: "blue", initials: "P3" },
        { a: "Phase 4 · Communication", b: "All users", tag: "Later", tone: "gray", initials: "P4" },
      ],
    },
  },
  {
    num: "03",
    eyebrow: "Implement",
    icon: Settings2,
    title: "Implement",
    text: "We set up the product and configure it around your organization's structure, then help your team get comfortable using it.",
    points: ["Product configured for you", "Accounts and roles set up", "Team onboarding"],
    visualTitle: "Setup checklist",
    visual: {
      kind: "list",
      rows: [
        { a: "School profile", b: "Classes, sections and staff", tag: "Done", tone: "green", initials: "SP" },
        { a: "User accounts", b: "Roles and access", tag: "Done", tone: "green", initials: "UA" },
        { a: "Routes and stops", b: "Transport configuration", tag: "In progress", tone: "blue", initials: "RS" },
        { a: "Team onboarding", b: "Walkthrough sessions", tag: "Scheduled", tone: "gray", initials: "TO" },
      ],
    },
  },
  {
    num: "04",
    eyebrow: "Connect",
    icon: Share2,
    title: "Connect",
    text: "Administrators, staff, drivers and parents are connected through the product, so the right information reaches the right person.",
    points: ["Everyone works from the same information", "Role-based access", "Timely notifications"],
    visualTitle: "Connected users",
    visual: { kind: "network", center: "Maaptrix", nodes: ["Administrators", "Staff", "Drivers", "Parents"] },
  },
  {
    num: "05",
    eyebrow: "Support",
    icon: LifeBuoy,
    title: "Support",
    text: "After launch we stay involved with support, updates and improvements as your needs evolve.",
    points: ["Ongoing assistance", "Regular product updates", "Improvements based on feedback"],
    visualTitle: "Support",
    visual: {
      kind: "chat",
      messages: [
        { from: "School Admin", text: "Can we add a new stop to Route 3 from next week?" },
        { from: "Maaptrix Support", text: "Yes. We've added it; drivers and parents will see it on Monday.", me: true },
      ],
    },
  },
];

export default function ProcessStack() {
  return (
    <section className="surface-glow-right py-16 sm:py-20" aria-labelledby="process-heading">
      <div className="page-container">
        <div className="">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-brand-blue">
              <span className="h-2 w-2 rounded-full bg-brand-blue" aria-hidden />
              Our Process
            </p>
            <h2
              id="process-heading"
              className="mt-4 font-display text-[32px] leading-[1.08] sm:text-[40px] lg:text-[46px] xl:text-[50px] font-bold tracking-tight text-brand-navy"
            >
              From discovery to <span className="text-brand-blue">ongoing support.</span>
            </h2>
            <p className="mt-4 text-[17px] leading-[1.65] text-[#52657D] lg:text-[18px]">
              Five steps we follow with every organization that adopts a Maaptrix product.
            </p>
          </Reveal>

          <div className="mt-10">
            <StackedCards>
              {PROCESS_STEPS.map((s) => (
                <StoryCard key={s.num} {...s} />
              ))}
            </StackedCards>
          </div>
        </div>
      </div>
    </section>
  );
}
