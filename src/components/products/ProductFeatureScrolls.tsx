"use client";

import {
  BarChart3,
  BookOpen,
  Bus,
  CalendarCheck,
  FileText,
  IdCard,
  MapPinned,
  Megaphone,
  Route,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";
import FeatureScroll, { type Feature } from "@/components/scroll/FeatureScroll";

const SCHOOL: Feature[] = [
  {
    title: "Student Management",
    icon: Users,
    text: "Keep every student's details in one place, from the day they join.",
    points: ["Student onboarding", "Basic student profiles", "Parent document upload"],
    visual: {
      kind: "list",
      rows: [
        { a: "Aarav Sharma", b: "Class 4 – A · Roll 12", tag: "Active", tone: "green" },
        { a: "Diya Reddy", b: "Class 4 – A · Roll 13", tag: "Active", tone: "green" },
        { a: "Kabir Rao", b: "Class 4 – B · Roll 02", tag: "Docs pending", tone: "blue" },
        { a: "Meera Iyer", b: "UKG · Roll 07", tag: "New", tone: "gray" },
      ],
    },
  },
  {
    title: "Academic Management",
    icon: BookOpen,
    text: "Homework, marks and academic records stay organized and easy to find.",
    points: ["Homework sharing", "Marks entry", "Academic records per student"],
    visual: {
      kind: "list",
      rows: [
        { a: "Mathematics", b: "Homework · Due tomorrow", tag: "Shared", tone: "blue", initials: "MA" },
        { a: "English", b: "Unit test marks", tag: "Entered", tone: "green", initials: "EN" },
        { a: "Science", b: "Worksheet 5", tag: "Shared", tone: "blue", initials: "SC" },
        { a: "Term 1 records", b: "Class 4 – A", tag: "Updated", tone: "green", initials: "T1" },
      ],
    },
  },
  {
    title: "Attendance",
    icon: CalendarCheck,
    text: "Record daily attendance quickly and keep a clear history for every class.",
    points: ["Daily class attendance", "Attendance history", "Absence visibility for staff"],
    visual: {
      kind: "stats",
      stats: [
        { label: "Present", value: "412" },
        { label: "Absent", value: "18" },
        { label: "On leave", value: "6" },
      ],
      bars: [88, 92, 90, 95, 91, 94],
      barLabel: "Attendance this week (%)",
    },
  },
  {
    title: "Fees",
    icon: Wallet,
    text: "Keep fee records for each student organized in one place.",
    points: ["Fee records per student", "Paid and pending at a glance", "Simple reminders"],
    visual: {
      kind: "list",
      rows: [
        { a: "Term 2 fee · Aarav Sharma", b: "Class 4 – A", tag: "Paid", tone: "green", initials: "₹" },
        { a: "Term 2 fee · Diya Reddy", b: "Class 4 – A", tag: "Paid", tone: "green", initials: "₹" },
        { a: "Term 2 fee · Kabir Rao", b: "Class 4 – B", tag: "Pending", tone: "blue", initials: "₹" },
        { a: "Transport fee · Meera Iyer", b: "UKG", tag: "Pending", tone: "blue", initials: "₹" },
      ],
    },
  },
  {
    title: "Communication",
    icon: Megaphone,
    text: "Share notices, announcements and event updates with parents directly.",
    points: ["Notifications and announcements", "Event updates", "Event-photo sharing"],
    visual: {
      kind: "chat",
      messages: [
        { from: "School Office", text: "Annual Day is on 14 December. Photos will be shared here after the event.", me: true },
        { from: "Parent", text: "Thank you for the update!" },
      ],
    },
  },
  {
    title: "Reports",
    icon: FileText,
    text: "See summaries of attendance and academic records when you need them.",
    points: ["Attendance summaries", "Academic record summaries", "Class-wise views"],
    visual: {
      kind: "stats",
      stats: [
        { label: "Classes", value: "14" },
        { label: "Students", value: "436" },
        { label: "Avg. attendance", value: "93%" },
      ],
      bars: [70, 78, 74, 82, 80, 86, 84],
      barLabel: "Monthly attendance trend",
    },
  },
];

const TRANSPORT: Feature[] = [
  {
    title: "Live Tracking",
    icon: MapPinned,
    text: "See where every bus is on its route, and let parents see it too.",
    points: ["Live GPS tracking", "Route visibility", "Real-time ETA for parents"],
    visual: { kind: "map", caption: "Bus MPX-07 · On route", status: "Maple Residency in 2 mins · 24 students" },
  },
  {
    title: "Routes",
    icon: Route,
    text: "Organize routes and stops so every pickup and drop follows a clear plan.",
    points: ["Routes and stops", "Stop-by-stop progress", "Upcoming and completed stops"],
    visual: {
      kind: "list",
      rows: [
        { a: "Route A · West Zone", b: "12 stops · Bus MPX-07", tag: "Running", tone: "green", initials: "A" },
        { a: "Route B · North Zone", b: "9 stops · Bus MPX-03", tag: "At stop", tone: "blue", initials: "B" },
        { a: "Route C · East Zone", b: "11 stops · Bus MPX-11", tag: "Running", tone: "green", initials: "C" },
        { a: "Route D · South Zone", b: "8 stops", tag: "Idle", tone: "gray", initials: "D" },
      ],
    },
  },
  {
    title: "Vehicles",
    icon: Bus,
    text: "Keep each vehicle's details, assigned route and current status visible to the school office.",
    points: ["Vehicle details", "Assigned routes", "Current status at a glance"],
    visual: {
      kind: "list",
      rows: [
        { a: "MPX-07", b: "Route A · 28 seats", tag: "On route", tone: "green", initials: "07" },
        { a: "MPX-03", b: "Route B · 28 seats", tag: "At stop", tone: "blue", initials: "03" },
        { a: "MPX-11", b: "Route C · 32 seats", tag: "On route", tone: "green", initials: "11" },
        { a: "MPX-15", b: "Unassigned", tag: "Idle", tone: "gray", initials: "15" },
      ],
    },
  },
  {
    title: "Drivers",
    icon: IdCard,
    text: "Drivers use their own mobile app to run trips and record pickups and drops.",
    points: ["Driver mobile application", "Pickup / drop attendance", "Direct connection to the school office"],
    visual: {
      kind: "list",
      rows: [
        { a: "Ravi Kumar", b: "MPX-07 · Route A", tag: "On trip", tone: "green" },
        { a: "Suresh Babu", b: "MPX-03 · Route B", tag: "On trip", tone: "green" },
        { a: "Anil Verma", b: "MPX-11 · Route C", tag: "On trip", tone: "green" },
        { a: "Prakash N", b: "MPX-15", tag: "Off duty", tone: "gray" },
      ],
    },
  },
  {
    title: "Safety",
    icon: ShieldCheck,
    text: "Safety-focused workflows are built into everyday transport operations.",
    points: ["SOS and safety-focused workflows", "Guardian validation with OTP where applicable", "Configurable speed monitoring and alerts"],
    visual: {
      kind: "list",
      rows: [
        { a: "Guardian verified", b: "Pickup · Aarav Sharma · OTP", tag: "Verified", tone: "green", initials: "OK" },
        { a: "Speed alert", b: "MPX-11 · above set limit", tag: "Alert", tone: "red", initials: "!" },
        { a: "SOS workflow", b: "Ready on every trip", tag: "Enabled", tone: "blue", initials: "SOS" },
      ],
    },
  },
  {
    title: "Reports",
    icon: BarChart3,
    text: "Operational reporting helps the school office review trips and transport activity.",
    points: ["Trip summaries", "Pickup and drop records", "Alerts history"],
    visual: {
      kind: "stats",
      stats: [
        { label: "Trips today", value: "24" },
        { label: "Students", value: "612" },
        { label: "Alerts", value: "3" },
      ],
      bars: [60, 72, 68, 75, 70, 78],
      barLabel: "Trips completed this week",
    },
  },
];

export function SchoolFeatureScroll() {
  return <FeatureScroll features={SCHOOL} label="School Management" />;
}

export function TransportFeatureScroll() {
  return <FeatureScroll features={TRANSPORT} label="Transport Management" />;
}
