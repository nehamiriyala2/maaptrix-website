"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  Bus,
  Check,
  ChevronRight,
  Compass,
  Crosshair,
  GraduationCap,
  MapPin,
  Maximize2,
  Minus,
  Navigation,
  Plus,
  Radio,
  User,
} from "lucide-react";

type FilterType = "all" | "transit" | "stop" | "idle";
type MapMode = "live" | "satellite";

// Waypoint coordinates for Route A (Primary Active Blue Route)
const ROUTE_A_POINTS = [
  { x: 218, y: 120 },
  { x: 245, y: 128 },
  { x: 275, y: 140 },
  { x: 300, y: 170 },
  { x: 320, y: 205 }, // Maple Residency Stop
  { x: 345, y: 220 },
  { x: 380, y: 232 },
  { x: 410, y: 250 },
  { x: 420, y: 290 },
  { x: 440, y: 345 },
  { x: 472, y: 375 },
  { x: 505, y: 395 }, // School Destination
];

// Waypoint coordinates for Route B (Secondary Branch for Bus MPX-11)
const ROUTE_B_POINTS = [
  { x: 320, y: 350 },
  { x: 350, y: 365 },
  { x: 385, y: 372 },
  { x: 420, y: 360 },
  { x: 460, y: 380 },
  { x: 495, y: 395 },
];

function interpolatePath(points: { x: number; y: number }[], progress: number) {
  const totalSegments = points.length - 1;
  const p = Math.max(0, Math.min(1, progress)) * totalSegments;
  const index = Math.floor(p);
  const t = p - index;

  if (index >= totalSegments) return points[totalSegments];

  const p0 = points[index];
  const p1 = points[index + 1];

  return {
    x: p0.x + (p1.x - p0.x) * t,
    y: p0.y + (p1.y - p0.y) * t,
  };
}

export default function TransportDashboard() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [mapMode, setMapMode] = useState<MapMode>("live");
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedBus, setSelectedBus] = useState<"MPX-07" | "MPX-11" | "MPX-03">("MPX-07");
  
  // Animation progress states (0 to 1)
  const [progressA, setProgressA] = useState(0.2);
  const [progressB, setProgressB] = useState(0.5);
  const [etaSeconds, setEtaSeconds] = useState(120);

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Smooth continuous animation loop
  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current !== null) {
        const delta = (time - lastTimeRef.current) / 1000;
        
        // Bus A travels along route A in ~36 seconds loop
        setProgressA((prev) => (prev + delta * 0.028) % 1);
        
        // Bus B travels along route B in ~28 seconds loop
        setProgressB((prev) => (prev + delta * 0.035) % 1);
      }
      lastTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Subtle ETA countdown timer for dynamic realism
  useEffect(() => {
    const interval = setInterval(() => {
      setEtaSeconds((prev) => (prev > 45 ? prev - 1 : 120));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Current animated bus positions
  const busAPos = interpolatePath(ROUTE_A_POINTS, progressA);
  const busBPos = interpolatePath(ROUTE_B_POINTS, progressB);
  
  // Static Bus MPX-03 at stop
  const bus03Pos = { x: 468, y: 255 };

  const etaMinutes = Math.ceil(etaSeconds / 60);

  return (
    <div className="relative w-full overflow-hidden rounded-[20px] lg:rounded-[24px] border border-slate-200/90 bg-[#f3f7fb] shadow-[0_16px_40px_-12px_rgba(11,31,65,0.14)] select-none transition-all duration-300">
      
      {/* ========================================================================= */}
      {/* 1. TOP HEADER OVERLAY (Filter Status Pills + Mode Controls) */}
      {/* ========================================================================= */}
      <div className="absolute inset-x-0 top-0 z-30 flex flex-wrap items-center justify-between gap-2.5 p-3.5 sm:p-4.5 pointer-events-none">
        
        {/* Left Filter Status Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pointer-events-auto">
          {/* All Buses */}
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-200 shadow-xs ${
              filter === "all"
                ? "bg-brand-blue text-white shadow-[0_4px_14px_-2px_rgba(20,125,255,0.5)]"
                : "bg-white/95 text-brand-navy/80 hover:bg-white hover:text-brand-navy border border-slate-200/80"
            }`}
          >
            <span>All Buses</span>
            <span
              className={`flex h-4.5 min-w-4.5 items-center justify-center rounded-full px-1.5 text-[0.68rem] font-bold ${
                filter === "all"
                  ? "bg-white/25 text-white"
                  : "bg-slate-100 text-brand-navy/70"
              }`}
            >
              12
            </span>
          </button>

          {/* In Transit */}
          <button
            type="button"
            onClick={() => setFilter("transit")}
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold transition-all duration-200 shadow-xs ${
              filter === "transit"
                ? "bg-emerald-600 text-white shadow-[0_4px_14px_-2px_rgba(16,185,129,0.45)]"
                : "bg-white/95 text-brand-navy/80 hover:bg-white hover:text-brand-navy border border-slate-200/80"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>In Transit</span>
            <span className="text-[0.68rem] font-semibold text-slate-500">9</span>
          </button>

          {/* At Stop */}
          <button
            type="button"
            onClick={() => setFilter("stop")}
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold transition-all duration-200 shadow-xs ${
              filter === "stop"
                ? "bg-amber-500 text-white shadow-[0_4px_14px_-2px_rgba(245,158,11,0.45)]"
                : "bg-white/95 text-brand-navy/80 hover:bg-white hover:text-brand-navy border border-slate-200/80"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            <span>At Stop</span>
            <span className="text-[0.68rem] font-semibold text-slate-500">2</span>
          </button>

          {/* Idle */}
          <button
            type="button"
            onClick={() => setFilter("idle")}
            className={`hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold transition-all duration-200 shadow-xs ${
              filter === "idle"
                ? "bg-slate-700 text-white"
                : "bg-white/95 text-brand-navy/80 hover:bg-white hover:text-brand-navy border border-slate-200/80"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-slate-400" />
            <span>Idle</span>
            <span className="text-[0.68rem] font-semibold text-slate-500">1</span>
          </button>
        </div>

        {/* Right Controls: Live / Satellite Toggle & Fullscreen */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <div className="flex items-center rounded-xl border border-slate-200/90 bg-white/95 p-1 shadow-xs backdrop-blur-md">
            <button
              type="button"
              onClick={() => setMapMode("live")}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold transition-all duration-200 ${
                mapMode === "live"
                  ? "bg-brand-blue text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Radio className="h-3 w-3 animate-pulse text-white" />
              <span>Live</span>
            </button>
            <button
              type="button"
              onClick={() => setMapMode("satellite")}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all duration-200 ${
                mapMode === "satellite"
                  ? "bg-brand-navy text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Satellite
            </button>
          </div>

          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200/90 bg-white/95 text-slate-700 shadow-xs transition-all hover:bg-white hover:text-brand-blue"
            aria-label="Toggle Fullscreen"
          >
            <Maximize2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. REALISTIC VECTOR CITY MAP CANVAS (SVG Graphic Architecture) */}
      {/* ========================================================================= */}
      <div className="relative h-[480px] sm:h-[520px] lg:h-[550px] xl:h-[570px] w-full overflow-hidden">
        <svg
          viewBox="0 0 680 500"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full object-cover transition-transform duration-300"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <defs>
            {/* Soft grid pattern for neighborhood blocks */}
            <pattern
              id="urban-grid"
              width="36"
              height="36"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 36 0 L 0 0 0 36"
                fill="none"
                stroke="#e5edf5"
                strokeWidth="0.8"
                opacity="0.85"
              />
            </pattern>

            {/* Subtle arterial road glow */}
            <filter id="route-glow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="3"
                floodColor="#147dff"
                floodOpacity="0.3"
              />
            </filter>

            {/* Card shadow for floating badges */}
            <filter id="badge-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="3"
                stdDeviation="4"
                floodColor="#0b1f41"
                floodOpacity="0.14"
              />
            </filter>
          </defs>

          {/* Base Map Land Fill */}
          <rect width="680" height="500" fill={mapMode === "live" ? "#f4f8fb" : "#233348"} />
          <rect width="680" height="500" fill="url(#urban-grid)" />

          {/* ------------------------------------------------------------- */}
          {/* Natural Landmarks & Water Bodies */}
          {/* ------------------------------------------------------------- */}
          
          {/* Durgam Cheruvu Lake */}
          <path
            d="M 220,380 C 240,350 270,360 295,395 C 315,425 340,435 345,470 C 330,490 280,480 250,470 C 220,460 205,420 220,380 Z"
            fill={mapMode === "live" ? "#d0e7f9" : "#1a466a"}
            stroke={mapMode === "live" ? "#b7daf5" : "#143753"}
            strokeWidth="1.5"
            opacity="0.9"
          />
          <text
            x="280"
            y="435"
            textAnchor="middle"
            fill={mapMode === "live" ? "#5088b8" : "#8ac2f0"}
            fontSize="9"
            fontWeight="600"
            fontFamily="sans-serif"
            letterSpacing="0.04em"
          >
            Durgam Cheruvu
          </text>

          {/* KBR National Park (Green Reserve Area) */}
          <path
            d="M 520,230 C 545,210 590,215 620,240 C 650,265 660,310 635,340 C 605,370 560,360 535,330 C 510,300 500,250 520,230 Z"
            fill={mapMode === "live" ? "#dcedd9" : "#1f4433"}
            stroke={mapMode === "live" ? "#c8e4c3" : "#193729"}
            strokeWidth="1.5"
            opacity="0.95"
          />
          <text
            x="580"
            y="285"
            textAnchor="middle"
            fill={mapMode === "live" ? "#4f8252" : "#8cdba1"}
            fontSize="9.5"
            fontWeight="700"
            fontFamily="sans-serif"
          >
            KBR
          </text>
          <text
            x="580"
            y="298"
            textAnchor="middle"
            fill={mapMode === "live" ? "#4f8252" : "#8cdba1"}
            fontSize="8.5"
            fontWeight="600"
            fontFamily="sans-serif"
          >
            National Park
          </text>

          {/* Secondary Green Urban Patches */}
          <path
            d="M 80,180 C 100,165 125,170 135,190 C 145,210 130,230 110,235 C 90,240 75,220 70,200 Z"
            fill={mapMode === "live" ? "#e4f3e1" : "#1b3b2c"}
            opacity="0.8"
          />
          <path
            d="M 370,110 C 390,95 420,100 435,120 C 445,140 430,160 405,165 C 380,170 360,145 370,110 Z"
            fill={mapMode === "live" ? "#e4f3e1" : "#1b3b2c"}
            opacity="0.75"
          />

          {/* ------------------------------------------------------------- */}
          {/* City Road Network (Realistic Major Expressways & Grid Lanes) */}
          {/* ------------------------------------------------------------- */}
          
          {/* Tertiary Local Street Grids */}
          <g fill="none" stroke={mapMode === "live" ? "#ffffff" : "#2d415a"} strokeWidth="2.5" strokeLinecap="round" opacity="0.95">
            {/* North-South local streets */}
            <path d="M 60,30 L 60,470" />
            <path d="M 120,30 L 120,470" />
            <path d="M 180,30 L 180,470" />
            <path d="M 240,30 L 240,470" />
            <path d="M 300,30 L 300,470" />
            <path d="M 360,30 L 360,470" />
            <path d="M 420,30 L 420,470" />
            <path d="M 480,30 L 480,470" />
            <path d="M 540,30 L 540,470" />
            <path d="M 600,30 L 600,470" />

            {/* East-West local avenues */}
            <path d="M 20,80 L 660,80" />
            <path d="M 20,150 L 660,150" />
            <path d="M 20,220 L 660,220" />
            <path d="M 20,290 L 660,290" />
            <path d="M 20,360 L 660,360" />
            <path d="M 20,420 L 660,420" />
          </g>

          {/* Secondary Arterial Connectors */}
          <g fill="none" stroke={mapMode === "live" ? "#e4edf7" : "#2a3d54"} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 30,120 C 140,110 240,160 350,150 C 460,140 560,180 660,170" />
            <path d="M 40,320 C 150,330 260,290 380,310 C 490,330 580,300 660,310" />
            <path d="M 150,30 C 160,140 210,250 220,380 C 230,430 240,460 250,490" />
            <path d="M 460,30 C 470,150 490,260 510,380 C 520,430 530,460 540,490" />
          </g>

          {/* Major Arterial Expressways (Base Casing Outline for depth) */}
          <g fill="none" stroke={mapMode === "live" ? "#d8e4f0" : "#1c2b3c"} strokeLinecap="round" strokeLinejoin="round">
            <path
              d="M 10,290 C 80,285 140,250 200,220 C 270,185 360,165 460,150 C 540,140 600,120 670,110"
              strokeWidth="9"
            />
            <path
              d="M 180,20 C 210,90 260,140 320,200 C 370,250 420,290 480,330 C 540,370 600,390 670,400"
              strokeWidth="8"
            />
            <path
              d="M 30,440 C 110,400 190,340 260,280 C 330,220 400,180 500,160 C 580,140 640,135 670,130"
              strokeWidth="7.5"
            />
          </g>

          {/* Major Arterial Expressways (Inner Crisp White Fill) */}
          <g fill="none" stroke={mapMode === "live" ? "#ffffff" : "#3b5373"} strokeLinecap="round" strokeLinejoin="round">
            <path
              d="M 10,290 C 80,285 140,250 200,220 C 270,185 360,165 460,150 C 540,140 600,120 670,110"
              strokeWidth="6"
            />
            <path
              d="M 180,20 C 210,90 260,140 320,200 C 370,250 420,290 480,330 C 540,370 600,390 670,400"
              strokeWidth="5.5"
            />
            <path
              d="M 30,440 C 110,400 190,340 260,280 C 330,220 400,180 500,160 C 580,140 640,135 670,130"
              strokeWidth="5"
            />
          </g>

          {/* ------------------------------------------------------------- */}
          {/* City District & Landmark Labels */}
          {/* ------------------------------------------------------------- */}
          <g fill={mapMode === "live" ? "#7e97b3" : "#a2b7d0"} fontSize="11" fontWeight="600" fontFamily="sans-serif">
            <text x="175" y="112">Kondapur</text>
            <text x="60" y="275">Gachibowli</text>
            <text x="180" y="345">HITEC City</text>
            <text x="150" y="425">Raidurg</text>
            <text x="390" y="145">Madhapur</text>
            <text x="500" y="165">HITEC City</text>
            <text x="560" y="335">Gafoor Towers</text>
          </g>

          {/* Cyber Towers Landmark Dot */}
          <g transform="translate(255, 385)">
            <circle cx="0" cy="0" r="3.5" fill="#147dff" opacity="0.8" />
            <text
              x="8"
              y="3.5"
              fill={mapMode === "live" ? "#5a7798" : "#a8c0dd"}
              fontSize="9"
              fontWeight="600"
              fontFamily="sans-serif"
            >
              Cyber Towers
            </text>
          </g>

          {/* ------------------------------------------------------------- */}
          {/* 3. TRANSIT ROUTE NETWORKS (Solid Active Blue & Gray Dashed) */}
          {/* ------------------------------------------------------------- */}

          {/* Secondary Gray Dashed Route (Route B - Gafoor Towers Loop) */}
          <path
            d="M 440,345 C 470,335 520,320 545,300 C 565,280 550,260 500,260 C 475,260 460,260 440,262"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="2.8"
            strokeDasharray="5 5"
            strokeLinecap="round"
          />

          {/* Secondary branch to school */}
          <path
            d="M 320,350 C 350,365 385,372 420,360 C 460,380 495,395 505,395"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="2.5"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />

          {/* Primary Active Route (Route A - Vibrant Solid Blue) */}
          {/* Outer Soft Glow */}
          <path
            d="M 218,120 C 245,128 275,140 300,170 C 320,205 345,220 380,232 C 410,250 420,290 440,345 C 472,375 490,390 505,395"
            fill="none"
            stroke="#147dff"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.2"
          />

          {/* Main Solid Route Line */}
          <path
            d="M 218,120 C 245,128 275,140 300,170 C 320,205 345,220 380,232 C 410,250 420,290 440,345 C 472,375 490,390 505,395"
            fill="none"
            stroke="#147dff"
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#route-glow)"
          />

          {/* Animated Route Flowing Dash Indicator */}
          <path
            d="M 218,120 C 245,128 275,140 300,170 C 320,205 345,220 380,232 C 410,250 420,290 440,345 C 472,375 490,390 505,395"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeDasharray="4 14"
            style={{ animation: "dash-flow 3.5s linear infinite" }}
          />

          {/* ------------------------------------------------------------- */}
          {/* Stops Along Routes */}
          {/* ------------------------------------------------------------- */}
          
          {/* Completed Stop 1 (Near Kondapur) */}
          <g transform="translate(268, 138)">
            <circle cx="0" cy="0" r="5" fill="#ffffff" stroke="#147dff" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="2" fill="#147dff" />
          </g>

          {/* Active Stop (Maple Residency Target) */}
          <g transform="translate(320, 205)">
            <circle cx="0" cy="0" r="10" fill="none" stroke="#147dff" strokeWidth="1.5" className="animate-pulse-ring" />
            <circle cx="0" cy="0" r="5.5" fill="#ffffff" stroke="#147dff" strokeWidth="2.8" />
            <circle cx="0" cy="0" r="2.2" fill="#147dff" />
          </g>

          {/* Waypoint Stop 3 */}
          <g transform="translate(380, 232)">
            <circle cx="0" cy="0" r="4.5" fill="#ffffff" stroke="#147dff" strokeWidth="2.2" />
          </g>

          {/* Waypoint Stop 4 */}
          <g transform="translate(440, 345)">
            <circle cx="0" cy="0" r="4.5" fill="#ffffff" stroke="#94a3b8" strokeWidth="2.2" />
          </g>

          {/* Secondary Route Completed Stop with Checkmark (Gafoor Towers) */}
          <g transform="translate(545, 300)">
            <circle cx="0" cy="0" r="6" fill="#10b981" />
            <path
              d="M -2.5,0 L -0.8,2 L 2.8,-1.8"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </g>

          {/* Intermediate Gray Stop */}
          <g transform="translate(500, 260)">
            <circle cx="0" cy="0" r="4" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
          </g>

          {/* ------------------------------------------------------------- */}
          {/* Destination: Greenfield International School */}
          {/* ------------------------------------------------------------- */}
          <g transform="translate(505, 395)" filter="url(#badge-shadow)">
            {/* Pulsing ring */}
            <circle cx="0" cy="0" r="14" fill="#147dff" opacity="0.15" className="animate-ping-soft" />
            
            {/* School Destination Card */}
            <g transform="translate(0, -6)">
              <rect
                x="-14"
                y="-14"
                width="28"
                height="28"
                rx="8"
                fill="#147dff"
              />
              <path
                d="M -7,2 L 0,-6 L 7,2 L 7,7 L -7,7 Z"
                fill="#ffffff"
              />
              <rect x="-2.5" y="1.5" width="5" height="5.5" fill="#147dff" />

              {/* School Label Card */}
              <g transform="translate(20, -10)">
                <rect
                  x="0"
                  y="0"
                  width="132"
                  height="34"
                  rx="7"
                  fill="#ffffff"
                  stroke="#e2e8f0"
                  strokeWidth="1"
                />
                <text
                  x="10"
                  y="14"
                  fill="#0b1f41"
                  fontSize="10"
                  fontWeight="700"
                  fontFamily="sans-serif"
                >
                  Greenfield
                </text>
                <text
                  x="10"
                  y="26"
                  fill="#475569"
                  fontSize="9"
                  fontWeight="600"
                  fontFamily="sans-serif"
                >
                  International School
                </text>
              </g>
            </g>
          </g>

          {/* ------------------------------------------------------------- */}
          {/* Floating Callout Card: Next Stop - Maple Residency */}
          {/* ------------------------------------------------------------- */}
          <g transform="translate(325, 168)" filter="url(#badge-shadow)">
            <g>
              {/* Card Container */}
              <rect
                x="0"
                y="0"
                width="132"
                height="46"
                rx="10"
                fill="#ffffff"
                stroke="#e2e8f0"
                strokeWidth="1"
              />
              {/* Indicator stem pointing down to stop (320, 205) */}
              <polygon points="18,46 24,52 28,46" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />

              {/* Icon */}
              <circle cx="17" cy="23" r="9.5" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1" />
              <g transform="translate(17, 23)">
                <circle cx="0" cy="-3" r="2" fill="#10b981" />
                <path d="M -2.8,3.8 C -2.8,0.8 2.8,0.8 2.8,3.8" stroke="#10b981" strokeWidth="1.3" fill="none" />
              </g>

              {/* Text */}
              <text
                x="34"
                y="15"
                fill="#64748b"
                fontSize="7.5"
                fontWeight="700"
                fontFamily="sans-serif"
                letterSpacing="0.04em"
              >
                NEXT STOP
              </text>
              <text
                x="34"
                y="27"
                fill="#0b1f41"
                fontSize="11"
                fontWeight="700"
                fontFamily="sans-serif"
              >
                Maple Residency
              </text>
              <text
                x="34"
                y="39"
                fill="#64748b"
                fontSize="8.5"
                fontWeight="600"
                fontFamily="sans-serif"
              >
                {etaMinutes} mins • 0.8 km
              </text>
            </g>
          </g>

          {/* ------------------------------------------------------------- */}
          {/* 4. ANIMATED BUS FLEET MARKERS */}
          {/* ------------------------------------------------------------- */}

          {/* BUS 3: MPX-03 (Stationed At Stop - Amber Pin) */}
          {(filter === "all" || filter === "stop") && (
            <g
              transform={`translate(${bus03Pos.x}, ${bus03Pos.y})`}
              className="cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedBus("MPX-03")}
              filter="url(#badge-shadow)"
            >
              {/* Pulsing ring */}
              <circle cx="0" cy="0" r="11" fill="#f59e0b" opacity="0.25" className="animate-ping-soft" />

              {/* Bus Pin Marker */}
              <circle cx="0" cy="0" r="10" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
              <g transform="translate(-4, -4) scale(0.35)">
                <path
                  d="M4 16c0 .88.39 1.67 1 2.22V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h8v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"
                  fill="#ffffff"
                />
              </g>

              {/* Floating Badge */}
              <g transform="translate(16, -14)">
                <rect
                  x="0"
                  y="0"
                  width="112"
                  height="30"
                  rx="7"
                  fill="#ffffff"
                  stroke="#e2e8f0"
                  strokeWidth="1"
                />
                <text
                  x="8"
                  y="13"
                  fill="#0b1f41"
                  fontSize="9.5"
                  fontWeight="700"
                  fontFamily="sans-serif"
                >
                  Bus MPX-03
                </text>
                <circle cx="11" cy="22" r="2.2" fill="#f59e0b" />
                <text
                  x="17"
                  y="24"
                  fill="#b45309"
                  fontSize="8"
                  fontWeight="600"
                  fontFamily="sans-serif"
                >
                  At stop • 18 students
                </text>
              </g>
            </g>
          )}

          {/* BUS 2: MPX-11 (In Transit on Lower Route Branch - Blue Pin) */}
          {(filter === "all" || filter === "transit") && (
            <g
              transform={`translate(${busBPos.x}, ${busBPos.y})`}
              className="cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedBus("MPX-11")}
              filter="url(#badge-shadow)"
            >
              {/* Radar pulse */}
              <circle cx="0" cy="0" r="12" fill="#147dff" opacity="0.22" className="animate-ping-soft" />

              {/* Marker Circle */}
              <circle cx="0" cy="0" r="10" fill="#147dff" stroke="#ffffff" strokeWidth="2" />
              <g transform="translate(-4, -4) scale(0.35)">
                <path
                  d="M4 16c0 .88.39 1.67 1 2.22V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h8v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"
                  fill="#ffffff"
                />
              </g>

              {/* Floating Badge */}
              <g transform="translate(16, -14)">
                <rect
                  x="0"
                  y="0"
                  width="114"
                  height="30"
                  rx="7"
                  fill="#ffffff"
                  stroke="#e2e8f0"
                  strokeWidth="1"
                />
                <text
                  x="8"
                  y="13"
                  fill="#0b1f41"
                  fontSize="9.5"
                  fontWeight="700"
                  fontFamily="sans-serif"
                >
                  Bus MPX-11
                </text>
                <circle cx="11" cy="22" r="2.2" fill="#10b981" />
                <text
                  x="17"
                  y="24"
                  fill="#047857"
                  fontSize="8"
                  fontWeight="600"
                  fontFamily="sans-serif"
                >
                  On route • 28 students
                </text>
              </g>
            </g>
          )}

          {/* BUS 1: MPX-07 (Main Flagship Bus Travelling Along Route A) */}
          {(filter === "all" || filter === "transit") && (
            <g
              transform={`translate(${busAPos.x}, ${busAPos.y})`}
              className="cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedBus("MPX-07")}
              filter="url(#badge-shadow)"
            >
              {/* Smooth expanding radar ring */}
              <circle cx="0" cy="0" r="14" fill="#147dff" opacity="0.25" className="animate-ping-soft" />

              {/* Bus Pin Marker */}
              <circle cx="0" cy="0" r="11" fill="#147dff" stroke="#ffffff" strokeWidth="2.5" />
              <g transform="translate(-4.5, -4.5) scale(0.38)">
                <path
                  d="M4 16c0 .88.39 1.67 1 2.22V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h8v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"
                  fill="#ffffff"
                />
              </g>

              {/* Floating Badge */}
              <g transform="translate(18, -15)">
                <rect
                  x="0"
                  y="0"
                  width="116"
                  height="32"
                  rx="7"
                  fill="#ffffff"
                  stroke="#147dff"
                  strokeWidth="1.2"
                />
                <text
                  x="8"
                  y="14"
                  fill="#0b1f41"
                  fontSize="10"
                  fontWeight="700"
                  fontFamily="sans-serif"
                >
                  Bus MPX-07
                </text>
                <circle cx="12" cy="23" r="2.2" fill="#10b981" />
                <text
                  x="18"
                  y="25"
                  fill="#047857"
                  fontSize="8.2"
                  fontWeight="600"
                  fontFamily="sans-serif"
                >
                  On route • 24 students
                </text>
              </g>
            </g>
          )}
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 5. FLOATING BUS DETAILS CARD (Bottom-Left) */}
      {/* ========================================================================= */}
      <div className="absolute bottom-3 left-3 z-30 w-[240px] sm:w-[270px] pointer-events-auto">
        <div className="rounded-[16px] border border-slate-200/90 bg-white/98 p-3 shadow-[0_14px_34px_-8px_rgba(11,31,65,0.2)] backdrop-blur-md transition-all duration-300">
          
          {/* Top Row: Thumbnail + Bus ID + On Route Status */}
          <div className="flex items-center gap-2.5">
            <div className="relative h-11 w-13 shrink-0 overflow-hidden rounded-lg border border-slate-200/80 bg-slate-100">
              <Image
                src="/transport/school-bus-thumb.jpg"
                alt="School Bus Fleet"
                fill
                className="object-cover"
                sizes="60px"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-bold text-brand-navy">
                  {selectedBus}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[0.62rem] font-bold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {selectedBus === "MPX-03" ? "At Stop" : "On Route"}
                </span>
              </div>
              <span className="text-[0.68rem] font-semibold text-slate-500">
                Route A - West Zone
              </span>
            </div>
          </div>

          {/* Capacity Progress Bar */}
          <div className="mt-2.5 flex items-center justify-between gap-2">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-brand-blue transition-all duration-500"
                style={{ width: selectedBus === "MPX-03" ? "65%" : selectedBus === "MPX-11" ? "100%" : "85%" }}
              />
            </div>
            <span className="shrink-0 text-[0.68rem] font-bold text-brand-navy">
              {selectedBus === "MPX-03" ? "18/28" : selectedBus === "MPX-11" ? "28/28" : "24/28"}{" "}
              <span className="font-normal text-slate-400">Students</span>
            </span>
          </div>

          {/* Next Stop Segment */}
          <div className="mt-2.5 flex items-center justify-between rounded-xl border border-slate-100 bg-brand-blue-light/30 p-2 transition-colors hover:bg-brand-blue-light/50">
            <div className="flex items-center gap-2">
              <span className="flex h-6.5 w-6.5 items-center justify-center rounded-lg bg-brand-blue text-white shadow-2xs">
                <MapPin className="h-3.5 w-3.5" />
              </span>
              <div>
                <span className="block text-[0.58rem] font-bold uppercase tracking-wider text-slate-400 leading-tight">
                  Next Stop
                </span>
                <span className="block text-[0.72rem] font-bold text-brand-navy leading-tight">
                  Maple Residency
                </span>
                <span className="block text-[0.62rem] font-medium text-slate-500 leading-tight">
                  {etaMinutes} mins • 0.8 km
                </span>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-slate-400" />
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 6. MAP LEGEND (Bottom-Center) */}
      {/* ========================================================================= */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/95 px-4 py-1.5 text-[0.68rem] font-bold text-slate-600 shadow-xs backdrop-blur-md pointer-events-auto">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-brand-blue" />
          <span>Bus</span>
        </div>
        <span className="text-slate-300">|</span>
        <div className="flex items-center gap-1.5">
          <span className="h-0.5 w-3.5 rounded-full bg-brand-blue" />
          <span>Route</span>
        </div>
        <span className="text-slate-300">|</span>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full border border-brand-blue bg-white" />
          <span>Upcoming Stop</span>
        </div>
        <span className="text-slate-300">|</span>
        <div className="flex items-center gap-1.5">
          <Check className="h-3 w-3 text-emerald-600" strokeWidth={3} />
          <span>Completed Stop</span>
        </div>
        <span className="text-slate-300">|</span>
        <div className="flex items-center gap-1.5">
          <GraduationCap className="h-3 w-3 text-brand-blue" />
          <span>School</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 7. MAP NAVIGATION TOOLS (Bottom-Right) */}
      {/* ========================================================================= */}
      <div className="absolute bottom-3 right-3 z-30 flex flex-col gap-1.5 pointer-events-auto">
        <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white/95 shadow-xs backdrop-blur-md">
          <button
            type="button"
            onClick={() => setZoomLevel((z) => Math.min(1.4, z + 0.1))}
            className="flex h-7.5 w-7.5 items-center justify-center text-slate-600 transition-colors hover:bg-slate-100 hover:text-brand-blue"
            aria-label="Zoom in"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
          <div className="h-px bg-slate-200" />
          <button
            type="button"
            onClick={() => setZoomLevel((z) => Math.max(0.9, z - 0.1))}
            className="flex h-7.5 w-7.5 items-center justify-center text-slate-600 transition-colors hover:bg-slate-100 hover:text-brand-blue"
            aria-label="Zoom out"
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setZoomLevel(1)}
          className="flex h-7.5 w-7.5 items-center justify-center rounded-xl border border-slate-200/90 bg-white/95 text-slate-600 shadow-xs backdrop-blur-md transition-colors hover:bg-slate-100 hover:text-brand-blue"
          aria-label="Reset orientation"
        >
          <Crosshair className="h-3.5 w-3.5" />
        </button>
      </div>

    </div>
  );
}
