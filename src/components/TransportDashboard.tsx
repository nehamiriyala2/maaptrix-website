"use client";

import { Bus, MapPin, ShieldCheck } from "lucide-react";

export default function TransportDashboard() {
  return (
    <div className="relative w-full overflow-hidden rounded-[14px] border border-brand-line bg-white shadow-[0_4px_20px_-8px_rgba(11,31,65,0.08)]">
      {/* Console Header */}
      <div className="flex items-center justify-between border-b border-brand-line bg-brand-blue-tint/30 px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-blue text-white">
            <Bus className="h-3.5 w-3.5" />
          </span>
          <span className="text-xs font-bold text-brand-navy">
            School Transport Console
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[0.7rem] font-semibold text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Live GPS Monitoring
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Map Vector Stage (7 cols) */}
        <div className="relative col-span-7 h-52 border-b border-brand-line bg-[#fbfdff] sm:h-60 sm:border-b-0 sm:border-r">
          <div className="absolute inset-0 bg-circuit-grid opacity-40" />
          
          <svg viewBox="0 0 300 200" className="absolute inset-0 h-full w-full">
            {/* Route track */}
            <path
              d="M 25,160 C 80,140 100,75 160,70 C 210,65 235,50 275,35"
              fill="none"
              stroke="#147dff"
              strokeWidth="4"
              strokeLinecap="round"
              strokeOpacity="0.2"
            />
            <path
              d="M 25,160 C 80,140 100,75 160,70 C 210,65 235,50 275,35"
              fill="none"
              stroke="#147dff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="4 8"
              style={{ animation: "dash-flow 4s linear infinite" }}
            />

            {/* Stops */}
            <g transform="translate(25, 160)">
              <circle cx="0" cy="0" r="4" fill="#ffffff" stroke="#147dff" strokeWidth="2" />
            </g>
            <g transform="translate(160, 70)">
              <circle cx="0" cy="0" r="10" fill="none" stroke="#147dff" strokeWidth="1.5" className="animate-pulse-ring" />
              <circle cx="0" cy="0" r="4" fill="#ffffff" stroke="#147dff" strokeWidth="2" />
            </g>
            <g transform="translate(275, 35)">
              <rect x="-16" y="-10" width="32" height="14" rx="4" fill="#0b1f41" />
              <text x="0" y="0" textAnchor="middle" fill="#ffffff" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">
                School
              </text>
            </g>

            {/* Active Vehicle */}
            <g transform="translate(100, 110)">
              <circle cx="0" cy="0" r="14" fill="#147dff" fillOpacity="0.15" className="animate-ping-soft" />
              <circle cx="0" cy="0" r="10" fill="#147dff" />
              <circle cx="0" cy="0" r="3" fill="#ffffff" />
            </g>
          </svg>

          <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 rounded-md bg-white/90 px-2 py-1 text-[0.68rem] font-semibold text-brand-navy shadow-xs border border-brand-line">
            <MapPin className="h-3 w-3 text-brand-blue" />
            <span>Transit Corridor · Active Route</span>
          </div>
        </div>

        {/* Telemetry Digest (5 cols) */}
        <div className="col-span-5 flex flex-col justify-between divide-y divide-brand-line bg-white text-xs">
          <div className="p-3.5">
            <div className="flex items-center justify-between text-brand-navy/60 text-[0.7rem] uppercase tracking-wider font-semibold">
              <span>Transit Telemetry</span>
              <span className="text-emerald-600 font-bold">On Schedule</span>
            </div>
            <p className="mt-1 font-bold text-brand-navy text-sm">
              Live Fleet Tracking
            </p>
            <p className="mt-0.5 text-[0.72rem] text-brand-navy/60">
              Driver app &amp; parent alerts synced
            </p>
            <div className="mt-2.5 flex items-center gap-4 border-t border-brand-line pt-2.5">
              <div>
                <span className="block text-[0.62rem] font-semibold uppercase tracking-wider text-brand-navy/45">
                  ETA
                </span>
                <span className="text-xs font-bold text-brand-navy">06 min</span>
              </div>
              <div>
                <span className="block text-[0.62rem] font-semibold uppercase tracking-wider text-brand-navy/45">
                  Route
                </span>
                <span className="text-xs font-bold text-brand-navy">Corridor A</span>
              </div>
            </div>
          </div>

          <div className="p-3.5">
            <div className="flex items-center justify-between">
              <span className="text-brand-navy/65 text-xs font-medium">Pickup Attendance</span>
              <span className="font-semibold text-brand-navy text-xs">RFID Verified</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-brand-navy/65 text-xs font-medium">Safety Protocols</span>
              <span className="inline-flex items-center gap-1 font-semibold text-emerald-600 text-xs">
                <ShieldCheck className="h-3.5 w-3.5" />
                Active SOS
              </span>
            </div>
          </div>

          <div className="bg-brand-blue-tint/40 px-3.5 py-2.5">
            <span className="text-[0.68rem] font-semibold text-brand-blue">
              Illustrative Interface
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

