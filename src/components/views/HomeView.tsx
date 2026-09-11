import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Flame,
  Zap,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Clock,
  CheckCircle2,
  TrendingUp,
  Award,
  Disc,
  Trophy,
  Users,
  MapPin,
  Play,
  Layers,
  Activity,
  UserCheck,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { MOCK_DASHBOARD } from '@/data/mockData';

interface HomeViewProps {
  onBookCourt: () => void;
  onOpenMatchmaker: () => void;
  onNavigateTab?: (tab: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onBookCourt,
  onOpenMatchmaker,
  onNavigateTab,
}) => {
  const [trainingMode, setTrainingMode] = useState<'thisWeek' | 'lastWeek'>('thisWeek');
  const [showMatchPass, setShowMatchPass] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="space-y-4 pb-24 px-4 pt-3 max-w-md mx-auto"
    >
      {/* Top Date, Weather & Player Status Pill Bar */}
      <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
        <div className="flex items-center space-x-1.5 bg-slate-100/80 px-3 py-1.5 rounded-full border border-slate-200/60 shadow-2xs">
          <Calendar className="h-3.5 w-3.5 text-slate-500" />
          <span>{MOCK_DASHBOARD.date}</span>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1.5 bg-[#8DC61F]/15 px-3 py-1.5 rounded-full border border-[#8DC61F]/30 text-[#172100] font-bold">
            <span>☀️</span>
            <span>{MOCK_DASHBOARD.weather}</span>
          </div>
        </div>
      </div>

      {/* Greeting & Quick Player Tags */}
      <div className="pt-1 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-[#17171A] tracking-tight flex items-center gap-1.5">
            Welcome back, {MOCK_DASHBOARD.userName} <span>🎾</span>
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            You have 1 match and 2 enrolled clinics this week
          </p>
        </div>

        <div className="flex items-center space-x-1 bg-[#17171A] text-white px-2.5 py-1 rounded-full text-[10px] font-extrabold shrink-0 shadow-2xs">
          <Flame className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
          <span>{MOCK_DASHBOARD.streakDays}d Streak</span>
        </div>
      </div>

      {/* Hero: Next Confirmed Upcoming Match / Session Card */}
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.99 }}>
        <Card className="hive-hero-gradient border border-[#8DC61F]/40 shadow-md relative overflow-hidden">
          <CardContent className="p-4 space-y-3">
            {/* Top Status & Countdown Row */}
            <div className="flex items-center justify-between">
              <span className="flex items-center space-x-1.5 rounded-full bg-[#8DC61F] text-[#172100] px-2.5 py-0.5 text-[10px] font-black shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#172100] animate-ping" />
                <span>UPCOMING MATCH</span>
              </span>

              <span className="flex items-center space-x-1 text-[11px] font-extrabold text-[#172100] bg-white/90 px-2.5 py-0.5 rounded-full border border-slate-200/80 shadow-2xs">
                <Clock className="h-3 w-3 text-[#8DC61F]" />
                <span>{MOCK_DASHBOARD.upcomingSession.countdown}</span>
              </span>
            </div>

            {/* Match Profile & Opponent Details */}
            <div className="flex items-start justify-between bg-white/90 rounded-2xl p-3 border border-slate-200/80 shadow-2xs">
              <div className="flex items-center space-x-3">
                <Avatar className="h-12 w-12 border-2 border-[#8DC61F]">
                  <AvatarImage
                    src={MOCK_DASHBOARD.upcomingSession.opponentAvatar}
                    alt={MOCK_DASHBOARD.upcomingSession.opponent}
                  />
                  <AvatarFallback>MV</AvatarFallback>
                </Avatar>
                <div>
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                    OPPONENT
                  </span>
                  <h3 className="font-black text-sm text-[#17171A] leading-tight">
                    {MOCK_DASHBOARD.upcomingSession.opponent}
                  </h3>
                  <div className="flex items-center space-x-1.5 mt-0.5">
                    <Badge variant="lime" className="text-[9px] px-1.5 py-0">
                      UTR {MOCK_DASHBOARD.upcomingSession.opponentUtr}
                    </Badge>
                    <span className="text-[10px] text-slate-500 font-semibold">
                      {MOCK_DASHBOARD.upcomingSession.surfaceBadge}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-black text-[#17171A] block">
                  {MOCK_DASHBOARD.upcomingSession.court}
                </span>
                <span className="text-[10px] font-semibold text-[#8DC61F] block mt-0.5">
                  {MOCK_DASHBOARD.upcomingSession.timeSlot}
                </span>
              </div>
            </div>

            {/* Bottom Actions inside Hero */}
            <div className="flex items-center space-x-2 pt-1">
              <Button
                onClick={onBookCourt}
                size="sm"
                className="flex-1 bg-[#8DC61F] text-[#172100] hover:bg-[#7eb519] font-black text-xs rounded-xl shadow-xs"
              >
                <Calendar className="h-3.5 w-3.5 mr-1" />
                Book Next Court
              </Button>
              <Button
                onClick={onOpenMatchmaker}
                size="sm"
                variant="dark"
                className="flex-1 font-black text-xs rounded-xl"
              >
                <Sparkles className="h-3.5 w-3.5 mr-1 text-[#8DC61F]" />
                Find Opponent
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* 4 Player Personal Metric Tiles (2x2) */}
      <div className="grid grid-cols-2 gap-3">
        {/* Metric 1: Registered Programs */}
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onNavigateTab && onNavigateTab('programs')}
          className="cursor-pointer"
        >
          <Card className="p-3.5 hive-card-gradient relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-[#8DC61F]/15 text-[#172100]">
                <Disc className="h-4 w-4 text-[#8DC61F]" />
              </div>
              <Badge variant="lime" className="text-[10px]">
                {MOCK_DASHBOARD.stats.activePrograms.growth}
              </Badge>
            </div>
            <div className="mt-2.5">
              <span className="text-[11px] font-bold text-slate-500 block">
                My Programs
              </span>
              <span className="text-xl font-black text-[#17171A]">
                {MOCK_DASHBOARD.stats.activePrograms.value} Enrolled
              </span>
              <span className="text-[10px] text-slate-500 font-medium block mt-0.5 truncate">
                {MOCK_DASHBOARD.stats.activePrograms.sub}
              </span>
            </div>
          </Card>
        </motion.div>

        {/* Metric 2: Today's Court Booking */}
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={onBookCourt}
          className="cursor-pointer"
        >
          <Card className="p-3.5 hive-card-gradient relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-blue-50 text-blue-700">
                <Calendar className="h-4 w-4 text-blue-600" />
              </div>
              <span className="rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] font-extrabold">
                {MOCK_DASHBOARD.stats.courtBookings.growth}
              </span>
            </div>
            <div className="mt-2.5">
              <span className="text-[11px] font-bold text-slate-500 block">
                Reserved Court
              </span>
              <span className="text-xl font-black text-[#17171A]">
                {MOCK_DASHBOARD.stats.courtBookings.value}
              </span>
              <span className="text-[10px] text-slate-500 font-medium block mt-0.5 truncate">
                {MOCK_DASHBOARD.stats.courtBookings.sub}
              </span>
            </div>
          </Card>
        </motion.div>

        {/* Metric 3: Weekly Drills Goal */}
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onNavigateTab && onNavigateTab('profile')}
          className="cursor-pointer"
        >
          <Card className="p-3.5 hive-card-gradient relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-purple-50 text-purple-700">
                <Activity className="h-4 w-4 text-purple-600" />
              </div>
              <Badge variant="lime" className="text-[10px]">
                {MOCK_DASHBOARD.stats.weeklyDrills.progress}%
              </Badge>
            </div>
            <div className="mt-2.5">
              <span className="text-[11px] font-bold text-slate-500 block">
                Weekly Drills
              </span>
              <span className="text-xl font-black text-[#17171A]">
                {MOCK_DASHBOARD.stats.weeklyDrills.value}
              </span>
              <Progress
                value={MOCK_DASHBOARD.stats.weeklyDrills.progress}
                className="h-1.5 mt-2"
              />
            </div>
          </Card>
        </motion.div>

        {/* Metric 4: Season Form & Record */}
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onNavigateTab && onNavigateTab('profile')}
          className="cursor-pointer"
        >
          <Card className="p-3.5 hive-card-gradient relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
                <Trophy className="h-4 w-4 text-amber-600" />
              </div>
              <span className="rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-[10px] font-extrabold">
                {MOCK_DASHBOARD.stats.seasonRecord.rating}
              </span>
            </div>
            <div className="mt-2.5">
              <span className="text-[11px] font-bold text-slate-500 block">
                Match Record
              </span>
              <span className="text-xl font-black text-[#17171A]">
                {MOCK_DASHBOARD.stats.seasonRecord.value}
              </span>
              <span className="text-[10px] text-slate-500 font-medium block mt-0.5 truncate">
                {MOCK_DASHBOARD.stats.seasonRecord.sub}
              </span>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Player Quick Action Buttons Grid */}
      <div className="grid grid-cols-4 gap-2 text-center text-xs font-bold pt-1">
        <button
          onClick={onBookCourt}
          className="flex flex-col items-center p-2.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-all cursor-pointer shadow-2xs group"
        >
          <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-[#8DC61F]/20 text-[#172100] mb-1.5 group-hover:scale-105 transition-transform">
            🎾
          </div>
          <span className="text-[11px] font-extrabold text-[#17171A] leading-tight">
            Book Court
          </span>
        </button>

        <button
          onClick={onOpenMatchmaker}
          className="flex flex-col items-center p-2.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-all cursor-pointer shadow-2xs group"
        >
          <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-[#8DC61F]/20 text-[#172100] mb-1.5 group-hover:scale-105 transition-transform">
            <Sparkles className="h-5 w-5 text-[#8DC61F]" />
          </div>
          <span className="text-[11px] font-extrabold text-[#17171A] leading-tight">
            AI Match
          </span>
        </button>

        <button
          onClick={() => onNavigateTab && onNavigateTab('coaches')}
          className="flex flex-col items-center p-2.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-all cursor-pointer shadow-2xs group"
        >
          <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-purple-100 text-purple-800 mb-1.5 group-hover:scale-105 transition-transform">
            <Trophy className="h-5 w-5 text-purple-700" />
          </div>
          <span className="text-[11px] font-extrabold text-[#17171A] leading-tight">
            Book Coach
          </span>
        </button>

        <button
          onClick={() => onNavigateTab && onNavigateTab('programs')}
          className="flex flex-col items-center p-2.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-all cursor-pointer shadow-2xs group"
        >
          <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-100 text-blue-800 mb-1.5 group-hover:scale-105 transition-transform">
            <Disc className="h-5 w-5 text-blue-700" />
          </div>
          <span className="text-[11px] font-extrabold text-[#17171A] leading-tight">
            Programs
          </span>
        </button>
      </div>

      {/* Registered Programs & Clinics Section */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h2 className="text-base font-extrabold text-[#17171A]">
              My Active Programs
            </h2>
            <span className="rounded-full bg-[#8DC61F]/20 text-[#172100] px-2 py-0.5 text-[10px] font-extrabold">
              2 Active
            </span>
          </div>

          <button
            onClick={() => onNavigateTab && onNavigateTab('programs')}
            className="text-xs font-bold text-slate-600 hover:text-[#8DC61F] flex items-center space-x-0.5 cursor-pointer"
          >
            <span>Explore More</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Program Cards */}
        <div className="space-y-2.5">
          {MOCK_DASHBOARD.registeredPrograms.map((prog) => (
            <motion.div
              key={prog.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.99 }}
            >
              <Card className="p-3.5 hive-card-gradient">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={prog.coachAvatar} alt={prog.coach} />
                      <AvatarFallback>CA</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <h3 className="font-extrabold text-sm text-[#17171A]">
                          {prog.title}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-2 text-[11px] text-slate-500 font-medium mt-0.5">
                        <span>{prog.coach}</span>
                        <span>•</span>
                        <span>{prog.court}</span>
                      </div>
                    </div>
                  </div>

                  <span className="rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5 text-[10px] font-extrabold border border-emerald-200">
                    {prog.status}
                  </span>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-semibold flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-[#8DC61F]" />
                    <span>Next: <strong>{prog.nextSession}</strong></span>
                  </span>

                  <span className="text-[11px] font-extrabold text-[#8DC61F]">
                    Session {prog.sessionsCompleted}/{prog.totalSessions}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Personal Training Activity Curve Section */}
      <Card className="p-4 bg-white border border-slate-200/80 shadow-xs">
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-[10px] font-extrabold tracking-wider text-slate-400 uppercase block">
              WEEKLY TRAINING INTENSITY
            </span>
            <h3 className="text-sm font-bold text-[#17171A]">
              My Court & Drill Minutes
            </h3>
          </div>

          <div className="flex items-center rounded-full bg-slate-100 p-0.5 text-xs font-semibold">
            <button
              onClick={() => setTrainingMode('thisWeek')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                trainingMode === 'thisWeek'
                  ? 'bg-white text-[#17171A] shadow-2xs font-bold'
                  : 'text-slate-500'
              }`}
            >
              This Week
            </button>
            <button
              onClick={() => setTrainingMode('lastWeek')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                trainingMode === 'lastWeek'
                  ? 'bg-white text-[#17171A] shadow-2xs font-bold'
                  : 'text-slate-500'
              }`}
            >
              Last Week
            </button>
          </div>
        </div>

        {/* Total Training Badge Header */}
        <div className="flex justify-between items-center mb-1 text-xs">
          <span className="text-slate-500 font-medium">540 mins logged</span>
          <span className="inline-flex items-center rounded-full bg-[#172100] text-[#8DC61F] px-2.5 py-0.5 text-[10px] font-bold shadow-xs">
            Sat • 120m Peak Match
          </span>
        </div>

        {/* Recharts Personal Curve */}
        <div className="h-36 w-full mt-1">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={MOCK_DASHBOARD.trainingCurve}
              margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorTraining" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8DC61F" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#8DC61F" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#6B7280', fontWeight: 600 }}
              />
              <YAxis hide domain={[0, 140]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#17171A',
                  borderColor: '#8DC61F',
                  borderRadius: '12px',
                  color: '#fff',
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
                formatter={(value: any) => [`${value} mins`, 'Training Time']}
              />
              <Area
                type="monotone"
                dataKey="minutes"
                stroke="#8DC61F"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorTraining)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Live on Court & Open Community Rallies */}
      <div className="space-y-3 pt-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h2 className="text-base font-extrabold text-[#17171A]">
              Live on Court & Open Rallies
            </h2>
            <span className="h-2 w-2 rounded-full bg-[#8DC61F] animate-ping" />
          </div>
          <button
            onClick={onBookCourt}
            className="text-xs font-bold text-slate-600 hover:text-[#8DC61F] flex items-center space-x-0.5 cursor-pointer"
          >
            <span>View Courts</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Live Courts */}
        {MOCK_DASHBOARD.liveCourts.map((court) => (
          <motion.div
            key={court.id}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="p-3.5 hive-card-gradient relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div
                    className={`flex flex-col items-center justify-center h-11 w-11 rounded-2xl font-black text-xs ${
                      court.isHot
                        ? 'bg-[#8DC61F] text-[#172100]'
                        : 'bg-slate-100 text-slate-800'
                    }`}
                  >
                    <span className="text-[8px] uppercase tracking-tighter opacity-70">
                      COURT
                    </span>
                    <span className="text-base leading-none">{court.courtNo}</span>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-extrabold text-xs text-[#17171A]">
                        {court.title}
                      </h3>
                      {court.status === 'LIVE' ? (
                        <Badge variant="live" className="text-[9px] px-1.5 py-0">
                          ● LIVE
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="text-[9px]">
                          {court.status}
                        </Badge>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                      {court.details}
                    </p>
                    {court.student && (
                      <p className="text-[11px] text-[#8DC61F] font-semibold mt-0.5">
                        {court.student}
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  {court.score && (
                    <span className="text-sm font-black text-[#17171A] block leading-none">
                      {court.score}
                    </span>
                  )}
                  {court.timeSlot && (
                    <span className="text-[11px] font-bold text-slate-700 block">
                      {court.timeSlot}
                    </span>
                  )}
                  {court.remaining && (
                    <span className="text-[9px] font-semibold text-slate-400 block mt-0.5">
                      {court.remaining}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <div className="flex items-center space-x-2">
                  {court.elapsed && (
                    <span className="flex items-center space-x-1">
                      <Clock className="h-3 w-3 text-slate-400" />
                      <span>{court.elapsed}</span>
                    </span>
                  )}
                  {court.extra && <span>{court.extra}</span>}
                </div>

                {court.canJoin ? (
                  <Button
                    onClick={onBookCourt}
                    size="sm"
                    className="h-6 text-[11px] bg-slate-100 text-slate-800 hover:bg-slate-200 rounded-xl px-2.5"
                  >
                    Join Rally
                  </Button>
                ) : (
                  <button
                    onClick={onBookCourt}
                    className="text-[11px] font-bold text-[#8DC61F] underline hover:text-lime-600 cursor-pointer"
                  >
                    Court Pass
                  </button>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
