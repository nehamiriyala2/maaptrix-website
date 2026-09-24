"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bell,
  Box,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Database,
  FileText,
  Layers,
  LayoutDashboard,
  Search,
  Settings,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import Logo from "./Logo";

export default function HeroLaptopVisual() {
  return (
    <div className="relative w-full max-w-[660px] mx-auto select-none">
      
      {/* 1. Ambient Glow & Atmospheric Halo */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-tr from-[#147DFF]/20 via-[#BDE3FF]/40 to-[#EAF4FF]/80 blur-3xl opacity-85" />
      <div className="pointer-events-none absolute -right-12 -top-10 -z-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      
      {/* 2. Soft 3D Perspective Container */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative perspective-1000"
      >
        {/* ========================================================================= */}
        {/* LAPTOP SCREEN CHASSIS */}
        {/* ========================================================================= */}
        <div className="relative overflow-hidden rounded-[20px] sm:rounded-[26px] border-[6px] sm:border-[8px] border-[#182638] bg-[#0E1B2C] shadow-[0_25px_60px_-15px_rgba(11,31,65,0.4),0_0_0_1px_rgba(255,255,255,0.1)]">
          
          {/* Top Bezel Camera & Reflection Gloss */}
          <div className="absolute top-1 inset-x-0 z-30 flex justify-center pointer-events-none">
            <span className="h-1.5 w-1.5 rounded-full bg-[#37475A] border border-black/40" />
          </div>

          {/* SCREEN DISPLAY CANVAS */}
          <div className="relative bg-[#F8FAFC] text-slate-800 text-[10px] sm:text-xs overflow-hidden flex flex-col min-h-[330px] sm:min-h-[410px]">
            
            {/* 1. Top Navbar inside Dashboard */}
            <div className="flex items-center justify-between border-b border-slate-200/80 bg-white px-3 sm:px-4 py-2 shrink-0">
              {/* Left: Maaptrix Brand */}
              <div className="flex items-center gap-2">
                <Logo
                  imageClassName="h-5 w-5 rounded object-contain"
                  wordmarkClassName="text-xs sm:text-sm font-bold font-display tracking-tight text-brand-navy"
                />
              </div>

              {/* Center/Right: Search Bar & User Status */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] text-slate-400 w-36 lg:w-44">
                  <Search className="h-3 w-3 text-slate-400" />
                  <span>Search anything...</span>
                </div>

                <div className="relative">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                    <Bell className="h-3.5 w-3.5" />
                  </span>
                  <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-brand-blue ring-2 ring-white" />
                </div>

                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-navy text-white text-[10px] font-bold shadow-xs">
                  M
                </div>
              </div>
            </div>

            {/* 2. Main Body: Left Dark Sidebar + Right Content Area */}
            <div className="flex-1 flex overflow-hidden">
              
              {/* LEFT DARK SIDEBAR */}
              <div className="w-20 sm:w-28 bg-[#0B1F41] text-white p-2 sm:p-2.5 flex flex-col justify-between shrink-0">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 rounded-lg bg-brand-blue px-2 py-1.5 text-[9px] sm:text-[11px] font-bold text-white shadow-xs">
                    <LayoutDashboard className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    <span>Dashboard</span>
                  </div>

                  <div className="flex items-center gap-1.5 rounded-lg px-2 py-1.2 text-[9px] sm:text-[11px] font-medium text-slate-300 hover:bg-white/5 transition-colors">
                    <Box className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-400" />
                    <span>Products</span>
                  </div>

                  <div className="flex items-center gap-1.5 rounded-lg px-2 py-1.2 text-[9px] sm:text-[11px] font-medium text-slate-300 hover:bg-white/5 transition-colors">
                    <BarChart3 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-400" />
                    <span>Analytics</span>
                  </div>

                  <div className="flex items-center gap-1.5 rounded-lg px-2 py-1.2 text-[9px] sm:text-[11px] font-medium text-slate-300 hover:bg-white/5 transition-colors">
                    <Users className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-400" />
                    <span>Users</span>
                  </div>

                  <div className="flex items-center gap-1.5 rounded-lg px-2 py-1.2 text-[9px] sm:text-[11px] font-medium text-slate-300 hover:bg-white/5 transition-colors">
                    <FileText className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-400" />
                    <span>Reports</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <div className="flex items-center gap-1.5 px-2 py-1 text-[9px] sm:text-[11px] text-slate-400">
                    <Settings className="h-3 w-3" />
                    <span>Settings</span>
                  </div>
                </div>
              </div>

              {/* RIGHT MAIN DASHBOARD CONTENT */}
              <div className="flex-1 p-2.5 sm:p-3.5 flex flex-col justify-between overflow-hidden bg-[#F4F8FC]">
                
                {/* Greeting */}
                <div className="flex items-center justify-between mb-1.5">
                  <div>
                    <h4 className="font-display text-xs sm:text-sm font-bold text-brand-navy">
                      Good Morning!
                    </h4>
                    <p className="text-[8px] sm:text-[10px] text-slate-500">
                      Here&apos;s what&apos;s happening across operations today.
                    </p>
                  </div>
                  <span className="text-[9px] text-slate-400 hidden sm:inline">
                    ✦ Live Sync
                  </span>
                </div>

                {/* Performance Chart Card */}
                <div className="rounded-xl border border-slate-200/80 bg-white p-2 sm:p-2.5 shadow-2xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[9px] sm:text-[11px] text-brand-navy">
                      Product Performance
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-0.5 rounded-md bg-brand-blue/10 px-1.5 py-0.5 text-[8px] sm:text-[9px] font-bold text-brand-blue">
                        + 40%
                      </span>
                      <span className="text-[8px] text-slate-400 flex items-center gap-0.5">
                        Last 6 months <ChevronDown className="h-2.5 w-2.5" />
                      </span>
                    </div>
                  </div>

                  {/* SVG Smooth Curve Graph matching Image 2 */}
                  <div className="relative h-14 sm:h-20 w-full overflow-hidden pt-1">
                    <svg
                      viewBox="0 0 320 80"
                      preserveAspectRatio="none"
                      className="h-full w-full overflow-visible"
                    >
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#147DFF" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#147DFF" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Area fill */}
                      <path
                        d="M 0,65 C 50,60 80,45 130,48 C 180,51 220,18 270,14 C 290,12 305,8 320,5 L 320,80 L 0,80 Z"
                        fill="url(#chartGradient)"
                      />

                      {/* Stroke curve */}
                      <path
                        d="M 0,65 C 50,60 80,45 130,48 C 180,51 220,18 270,14 C 290,12 305,8 320,5"
                        fill="none"
                        stroke="#147DFF"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />

                      {/* Active glowing point */}
                      <circle cx="270" cy="14" r="3.5" fill="#147DFF" stroke="#FFFFFF" strokeWidth="2" />
                    </svg>
                  </div>

                  {/* X-axis labels */}
                  <div className="flex items-center justify-between text-[7.5px] sm:text-[9px] text-slate-400 pt-0.5 border-t border-slate-100">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>

                {/* 2-Column Sub-grid: Recent Activity + Quick Actions */}
                <div className="grid grid-cols-2 gap-2 mt-1.5">
                  {/* Recent Activity */}
                  <div className="rounded-xl border border-slate-200/80 bg-white p-2 shadow-2xs space-y-1">
                    <span className="font-bold text-[8.5px] sm:text-[10px] text-brand-navy block mb-1">
                      Recent Activity
                    </span>
                    
                    <div className="flex items-center justify-between py-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-4 w-4 rounded-md bg-blue-50 text-brand-blue flex items-center justify-center text-[7px]">
                          <Shield className="h-2.5 w-2.5" />
                        </span>
                        <span className="text-[7.5px] sm:text-[9px] text-slate-700 font-medium truncate max-w-[70px] sm:max-w-[85px]">
                          New user registered
                        </span>
                      </div>
                      <ChevronRight className="h-2.5 w-2.5 text-slate-300" />
                    </div>

                    <div className="flex items-center justify-between py-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-4 w-4 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center text-[7px]">
                          <Activity className="h-2.5 w-2.5" />
                        </span>
                        <span className="text-[7.5px] sm:text-[9px] text-slate-700 font-medium truncate max-w-[70px] sm:max-w-[85px]">
                          Project updated
                        </span>
                      </div>
                      <ChevronRight className="h-2.5 w-2.5 text-slate-300" />
                    </div>

                    <div className="flex items-center justify-between py-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-4 w-4 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center text-[7px]">
                          <Database className="h-2.5 w-2.5" />
                        </span>
                        <span className="text-[7.5px] sm:text-[9px] text-slate-700 font-medium truncate max-w-[70px] sm:max-w-[85px]">
                          System backup completed
                        </span>
                      </div>
                      <ChevronRight className="h-2.5 w-2.5 text-slate-300" />
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="rounded-xl border border-slate-200/80 bg-white p-2 shadow-2xs space-y-1">
                    <span className="font-bold text-[8.5px] sm:text-[10px] text-brand-navy block mb-1">
                      Quick Actions
                    </span>

                    <div className="flex items-center justify-between p-1 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <span className="h-3.5 w-3.5 rounded bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                          <Layers className="h-2 w-2" />
                        </span>
                        <span className="text-[7.5px] sm:text-[9px] font-semibold text-brand-navy">Create Product</span>
                      </div>
                      <ChevronRight className="h-2.5 w-2.5 text-slate-400" />
                    </div>

                    <div className="flex items-center justify-between p-1 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <span className="h-3.5 w-3.5 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center">
                          <Users className="h-2 w-2" />
                        </span>
                        <span className="text-[7.5px] sm:text-[9px] font-semibold text-brand-navy">Manage Users</span>
                      </div>
                      <ChevronRight className="h-2.5 w-2.5 text-slate-400" />
                    </div>

                    <div className="flex items-center justify-between p-1 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <span className="h-3.5 w-3.5 rounded bg-cyan-50 text-cyan-600 flex items-center justify-center">
                          <Settings className="h-2 w-2" />
                        </span>
                        <span className="text-[7.5px] sm:text-[9px] font-semibold text-brand-navy">System Settings</span>
                      </div>
                      <ChevronRight className="h-2.5 w-2.5 text-slate-400" />
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* LAPTOP BASE / LOWER HINGE & ILLUMINATED PODIUM */}
        {/* ========================================================================= */}
        <div className="relative mx-auto w-[94%] -mt-1">
          {/* Metallic keyboard lip */}
          <div className="h-3 sm:h-4 w-full rounded-b-[18px] sm:rounded-b-[24px] bg-gradient-to-b from-[#253243] via-[#1B2735] to-[#121D2B] border-t border-white/20 shadow-md flex justify-center items-start pt-0.5">
            <span className="h-1 w-12 sm:w-16 rounded-full bg-[#3B4C60]/80" />
          </div>

          {/* Soft shadow and glowing horizon reflection underneath */}
          <div className="h-4 w-4/5 mx-auto bg-brand-blue/20 blur-lg rounded-full" />
        </div>

      </motion.div>
    </div>
  );
}
