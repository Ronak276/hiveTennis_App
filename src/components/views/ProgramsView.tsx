import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Users,
  Trophy,
  Video,
  Zap,
  ArrowRight,
  ChevronRight,
  Plus,
  HelpCircle,
  Activity,
  Award,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { MOCK_PROGRAMS, Program } from '@/data/mockData';

interface ProgramsViewProps {
  onEnroll: (programTitle: string) => void;
}

export const ProgramsView: React.FC<ProgramsViewProps> = ({ onEnroll }) => {
  const [selectedCategory, setSelectedCategory] = useState('This Week');

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="space-y-4 pb-20 px-4 pt-3 max-w-md mx-auto"
    >
      {/* Sub-header Pathway Tag & Title */}
      <div>
        <div className="flex items-center space-x-1.5 text-[#8DC61F] text-xs font-black tracking-widest uppercase">
          <Zap className="h-3.5 w-3.5" />
          <span>PERFORMANCE PATHWAY</span>
        </div>
        <h1 className="text-2xl font-black text-[#17171A] tracking-tight mt-0.5">
          High-Performance Tennis Programs
        </h1>
        <p className="text-xs text-slate-500 font-medium">
          Junior Academy, Adult Clinics & Intensive Camps
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
        {['● This Week', 'Summer Camp 2025', 'Weekend Clinics'].map((tab) => {
          const isSelected =
            selectedCategory === tab ||
            (tab.includes('This Week') && selectedCategory === 'This Week');
          return (
            <button
              key={tab}
              onClick={() => setSelectedCategory(tab.replace('● ', ''))}
              className={`rounded-full px-4 py-1.5 text-xs font-extrabold transition-all whitespace-nowrap cursor-pointer ${
                isSelected
                  ? 'bg-[#17171A] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Featured Camp Card */}
      <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.99 }}>
        <Card className="overflow-hidden border border-[#8DC61F]/30 shadow-lg relative bg-white">
          {/* Header Image with Overlay Badges */}
          <div className="relative h-44 w-full">
            <img
              src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80"
              alt="Grand Slam Prep Intensive"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />

            {/* Top Badges */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
              <span className="flex items-center space-x-1 rounded-full bg-[#8DC61F] text-[#172100] px-2.5 py-0.5 text-[10px] font-extrabold shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#172100] animate-ping" />
                <span>FEATURED CAMP</span>
              </span>
              <span className="rounded-full bg-slate-900/70 backdrop-blur-xs text-white px-2.5 py-0.5 text-[10px] font-medium border border-white/20">
                🏟 Stadium Courts 1–4
              </span>
            </div>

            {/* Card Overlay Title */}
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <span className="text-[10px] font-extrabold tracking-widest text-[#8DC61F] uppercase block">
                INTENSIVE TRACK
              </span>
              <h3 className="text-xl font-black leading-tight tracking-tight">
                Grand Slam Prep Intensive
              </h3>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-4 space-y-3">
            {/* Meta Specs */}
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
              <span className="flex items-center space-x-1 bg-slate-100 px-2.5 py-1 rounded-lg">
                <Calendar className="h-3.5 w-3.5 text-slate-500" />
                <span>July 14 – July 28</span>
              </span>
              <span className="flex items-center space-x-1 bg-slate-100 px-2.5 py-1 rounded-lg">
                <Users className="h-3.5 w-3.5 text-slate-500" />
                <span>Ages 12–18</span>
              </span>
              <span className="flex items-center space-x-1 bg-slate-100 px-2.5 py-1 rounded-lg">
                <Trophy className="h-3.5 w-3.5 text-amber-500" />
                <span>UTR 7.0+</span>
              </span>
            </div>

            {/* Enrollment Progress Bar */}
            <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-200/60 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-700 flex items-center gap-1">
                  <Users className="h-3.5 w-3.5 text-[#8DC61F]" />
                  18 / 20 Players Enrolled
                </span>
                <span className="text-[#8DC61F]">● 2 Spots Left!</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>

            {/* Feature Pills */}
            <div className="flex items-center space-x-2 text-[11px] font-medium text-slate-600">
              <span className="flex items-center space-x-1 bg-blue-50 text-blue-800 px-2 py-0.5 rounded-md">
                <Video className="h-3 w-3 text-blue-600" />
                <span>AI Stroke Capture</span>
              </span>
              <span className="flex items-center space-x-1 bg-purple-50 text-purple-800 px-2 py-0.5 rounded-md">
                <Activity className="h-3 w-3 text-purple-600" />
                <span>ATP Conditioning</span>
              </span>
            </div>

            {/* Pricing & CTA */}
            <div className="pt-2 flex items-center justify-between border-t border-slate-100">
              <div>
                <span className="text-[10px] text-slate-500 block font-medium">
                  All-inclusive Pass
                </span>
                <div className="flex items-baseline space-x-1">
                  <span className="text-2xl font-black text-[#17171A]">
                    $450
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    / 2-wk session
                  </span>
                </div>
              </div>

              <Button
                onClick={() => onEnroll('Grand Slam Prep Intensive')}
                size="default"
                className="bg-[#8DC61F] text-[#172100] hover:bg-[#7eb519] font-bold rounded-xl shadow-md shadow-[#8DC61F]/20"
              >
                <span>Enroll Now</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Highlight Icon Pills Row */}
      <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-semibold text-slate-600">
        <div className="flex flex-col items-center p-2 rounded-xl bg-slate-50 border border-slate-200/60">
          <span className="text-base mb-0.5">📹</span>
          <span>4K 120fps Video</span>
        </div>
        <div className="flex flex-col items-center p-2 rounded-xl bg-slate-50 border border-slate-200/60">
          <span className="text-base mb-0.5">🎾</span>
          <span>Pro Penn Balls</span>
        </div>
        <div className="flex flex-col items-center p-2 rounded-xl bg-slate-50 border border-slate-200/60">
          <span className="text-base mb-0.5">📊</span>
          <span>Hive App Tracking</span>
        </div>
      </div>

      {/* Weekly Clinic Sessions Header */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center space-x-2">
          <h2 className="text-sm font-extrabold text-[#17171A]">
            Weekly Clinic Sessions
          </h2>
          <span className="rounded-full bg-slate-200 text-slate-700 px-2 py-0.5 text-[10px] font-bold">
            3
          </span>
        </div>
        <button className="text-xs font-bold text-slate-500 hover:text-[#8DC61F] flex items-center space-x-0.5 cursor-pointer">
          <span>View Calendar</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Clinic Cards List */}
      <div className="space-y-3">
        {MOCK_PROGRAMS.map((program) => (
          <motion.div
            key={program.id}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
          >
            <Card className="p-4 hive-card-gradient">
              {/* Top Header inside Clinic Card */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="text-[9px]">
                      {program.category}
                    </Badge>
                    <span className="text-[11px] font-semibold text-slate-500">
                      • {program.courtInfo}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-base text-[#17171A] mt-1">
                    {program.title}
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-lg font-black text-[#17171A]">
                    {program.price}
                  </span>
                  <span className="text-[10px] font-medium text-slate-500 block">
                    {program.pricePeriod}
                  </span>
                </div>
              </div>

              {/* Coach & Time Info */}
              <div className="mt-3 flex items-center justify-between bg-slate-50/80 rounded-xl p-2.5 border border-slate-200/60">
                <div className="flex items-center space-x-2.5">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80" />
                    <AvatarFallback>CA</AvatarFallback>
                  </Avatar>
                  <div>
                    <span className="text-xs font-extrabold text-[#17171A] block leading-none">
                      {program.coachName}
                    </span>
                    <span className="text-[10px] font-medium text-slate-500">
                      {program.coachTitle}
                    </span>
                  </div>
                </div>

                <div className="text-right text-xs">
                  <span className="font-bold text-slate-800 block leading-none">
                    {program.timeSlot}
                  </span>
                  <span className="text-[10px] font-medium text-slate-500">
                    {program.duration}
                  </span>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="mt-3 pt-1 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-600">
                  {program.isFull ? (
                    <span className="text-rose-600 font-extrabold">
                      12 / 12 Full • Waitlist: {program.waitlistCount}
                    </span>
                  ) : (
                    <span>
                      <strong>{program.spotsBooked}</strong> of{' '}
                      <strong>{program.spotsTotal}</strong> spots booked
                    </span>
                  )}
                </span>

                {program.isFull ? (
                  <Button
                    onClick={() => onEnroll(program.title)}
                    variant="outline"
                    size="sm"
                    className="rounded-xl h-8 text-xs font-bold"
                  >
                    Join Waitlist
                  </Button>
                ) : (
                  <Button
                    onClick={() => onEnroll(program.title)}
                    size="sm"
                    className="bg-[#8DC61F] text-[#172100] hover:bg-[#7eb519] font-bold rounded-xl h-8 text-xs"
                  >
                    <Plus className="h-3.5 w-3.5 mr-1" />
                    Book Slot
                  </Button>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* UTR Placement Session Banner */}
      <Card className="bg-[#17171A] text-white p-4 rounded-2xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8DC61F]/20 text-[#8DC61F]">
            <HelpCircle className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-bold text-xs">Unsure of your UTR level?</h4>
            <p className="text-[10px] text-slate-400">
              Book a free 15-min placement session
            </p>
          </div>
        </div>
        <Button size="sm" className="bg-white text-[#17171A] hover:bg-slate-100 font-bold rounded-xl text-xs">
          Assess
        </Button>
      </Card>
    </motion.div>
  );
};
