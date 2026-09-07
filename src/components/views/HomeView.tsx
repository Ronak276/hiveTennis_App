import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Calendar,
  DollarSign,
  Trophy,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Zap,
  Video,
  Clock,
  UserCheck,
  TrendingUp,
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
import { MOCK_DASHBOARD } from '@/data/mockData';

interface HomeViewProps {
  onBookCourt: () => void;
  onOpenMatchmaker: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onBookCourt,
  onOpenMatchmaker,
}) => {
  const [chartMode, setChartMode] = useState<'today' | 'week'>('today');

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="space-y-4 pb-20 px-4 pt-3 max-w-md mx-auto"
    >
      {/* Top Date & Weather Sub-Header Bar */}
      <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
        <div className="flex items-center space-x-1.5 bg-slate-100/80 px-3 py-1.5 rounded-full border border-slate-200/60 shadow-2xs">
          <Calendar className="h-3.5 w-3.5 text-slate-500" />
          <span>{MOCK_DASHBOARD.date}</span>
        </div>
        <div className="flex items-center space-x-1.5 bg-[#8DC61F]/15 px-3 py-1.5 rounded-full border border-[#8DC61F]/30 text-[#172100]">
          <span>☀️</span>
          <span>{MOCK_DASHBOARD.weather}</span>
        </div>
      </div>

      {/* Greeting Title */}
      <div className="pt-1">
        <h1 className="text-2xl font-black text-[#17171A] tracking-tight flex items-center gap-2">
          Good morning, {MOCK_DASHBOARD.userName} <span>🎾</span>
        </h1>
      </div>

      {/* Hero Court Utilization Card */}
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.99 }}>
        <Card className="hive-hero-gradient border border-[#8DC61F]/30 shadow-md relative overflow-hidden">
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#8DC61F] animate-pulse" />
                  <span className="text-[11px] font-bold tracking-wider text-[#172100]/80 uppercase">
                    COURT UTILIZATION
                  </span>
                </div>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-4xl font-black text-[#17171A] tracking-tight">
                    {MOCK_DASHBOARD.courtUtilization}%
                  </span>
                  <Badge variant="lime" className="text-xs">
                    {MOCK_DASHBOARD.utilizationGrowth}
                  </Badge>
                </div>
                <p className="text-xs text-slate-600 font-medium mt-1 max-w-[200px]">
                  {MOCK_DASHBOARD.courtsActive}
                </p>
              </div>

              {/* Circular Gauge Graphic */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#8DC61F]/20 border-4 border-[#8DC61F]">
                <Zap className="h-7 w-7 text-[#172100]" />
              </div>
            </div>

            {/* Bottom Row inside Hero Card */}
            <div className="mt-5 flex items-center justify-between pt-3 border-t border-[#8DC61F]/20">
              <div className="flex items-center space-x-1">
                {MOCK_DASHBOARD.courtBubbles.map((bubble, i) => (
                  <span
                    key={i}
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold border border-[#8DC61F]/40 ${
                      i === 3
                        ? 'bg-[#8DC61F] text-[#172100]'
                        : 'bg-white text-slate-700'
                    }`}
                  >
                    {bubble}
                  </span>
                ))}
              </div>

              <Button
                onClick={onBookCourt}
                size="sm"
                className="bg-[#8DC61F] text-[#172100] hover:bg-[#7eb519] font-bold rounded-xl flex items-center space-x-1 shadow-sm"
              >
                <span>Book Court Now</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* 4 Stat Metrics Grid (2x2) */}
      <div className="grid grid-cols-2 gap-3">
        {/* Metric 1: Active Players */}
        <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
          <Card className="p-4 hive-card-gradient">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-[#8DC61F]/15 text-[#172100]">
                <Users className="h-4 w-4" />
              </div>
              <Badge variant="lime" className="text-[10px]">
                {MOCK_DASHBOARD.stats.activePlayers.growth}
              </Badge>
            </div>
            <div className="mt-3">
              <span className="text-xs font-semibold text-slate-500 block">
                Active Players
              </span>
              <span className="text-2xl font-black text-[#17171A]">
                {MOCK_DASHBOARD.stats.activePlayers.value}
              </span>
              <div className="flex items-center space-x-1 text-[10px] text-slate-500 mt-0.5">
                <TrendingUp className="h-3 w-3 text-[#8DC61F]" />
                <span>{MOCK_DASHBOARD.stats.activePlayers.sub}</span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Metric 2: Court Bookings */}
        <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
          <Card className="p-4 hive-card-gradient">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-blue-50 text-blue-700">
                <Calendar className="h-4 w-4" />
              </div>
              <span className="rounded-full bg-rose-100 text-rose-700 px-2 py-0.5 text-[10px] font-bold">
                {MOCK_DASHBOARD.stats.courtBookings.growth}
              </span>
            </div>
            <div className="mt-3">
              <span className="text-xs font-semibold text-slate-500 block">
                Court Bookings
              </span>
              <span className="text-2xl font-black text-[#17171A]">
                {MOCK_DASHBOARD.stats.courtBookings.value}
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5 truncate">
                {MOCK_DASHBOARD.stats.courtBookings.sub}
              </span>
            </div>
          </Card>
        </motion.div>

        {/* Metric 3: Academy Rev */}
        <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
          <Card className="p-4 hive-card-gradient">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
                <DollarSign className="h-4 w-4" />
              </div>
              <Badge variant="lime" className="text-[10px]">
                {MOCK_DASHBOARD.stats.academyRev.progress}%
              </Badge>
            </div>
            <div className="mt-3">
              <span className="text-xs font-semibold text-slate-500 block">
                Academy Rev
              </span>
              <span className="text-2xl font-black text-[#17171A]">
                {MOCK_DASHBOARD.stats.academyRev.value}
              </span>
              <Progress
                value={MOCK_DASHBOARD.stats.academyRev.progress}
                className="h-1.5 mt-2"
              />
            </div>
          </Card>
        </motion.div>

        {/* Metric 4: Coaching Hours */}
        <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
          <Card className="p-4 hive-card-gradient">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-purple-50 text-purple-700">
                <Trophy className="h-4 w-4" />
              </div>
              <span className="rounded-full bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 text-[10px] font-bold">
                ★ {MOCK_DASHBOARD.stats.coachingHours.rating}
              </span>
            </div>
            <div className="mt-3">
              <span className="text-xs font-semibold text-slate-500 block">
                Coaching Hours
              </span>
              <span className="text-2xl font-black text-[#17171A]">
                {MOCK_DASHBOARD.stats.coachingHours.value}
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">
                {MOCK_DASHBOARD.stats.coachingHours.sub}
              </span>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Court Utilization Curve Chart Section */}
      <Card className="p-4 bg-white border border-slate-200/80 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-[10px] font-extrabold tracking-wider text-slate-400 uppercase block">
              ANALYTICS
            </span>
            <h3 className="text-sm font-bold text-[#17171A]">
              Court Utilization Curve
            </h3>
          </div>

          {/* Toggle pill */}
          <div className="flex items-center rounded-full bg-slate-100 p-0.5 text-xs font-semibold">
            <button
              onClick={() => setChartMode('today')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                chartMode === 'today'
                  ? 'bg-white text-[#17171A] shadow-2xs font-bold'
                  : 'text-slate-500'
              }`}
            >
              Today
            </button>
            <button
              onClick={() => setChartMode('week')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                chartMode === 'week'
                  ? 'bg-white text-[#17171A] shadow-2xs font-bold'
                  : 'text-slate-500'
              }`}
            >
              Week
            </button>
          </div>
        </div>

        {/* Peak Badge Overlay Header */}
        <div className="flex justify-end mb-1">
          <span className="inline-flex items-center rounded-full bg-[#172100] text-[#8DC61F] px-2.5 py-0.5 text-[10px] font-bold shadow-xs">
            5 PM • 94% Peak
          </span>
        </div>

        {/* Recharts Curve */}
        <div className="h-40 w-full mt-1">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={MOCK_DASHBOARD.utilizationCurve}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUtilization" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8DC61F" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#8DC61F" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#6B7280', fontWeight: 500 }}
              />
              <YAxis hide domain={[0, 100]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#17171A',
                  borderColor: '#8DC61F',
                  borderRadius: '12px',
                  color: '#fff',
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              />
              <Area
                type="monotone"
                dataKey="rate"
                stroke="#8DC61F"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorUtilization)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Live on Court Section */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h2 className="text-base font-extrabold text-[#17171A]">Live on Court</h2>
            <span className="h-2 w-2 rounded-full bg-[#8DC61F] animate-ping" />
          </div>
          <button className="text-xs font-bold text-slate-600 hover:text-[#8DC61F] flex items-center space-x-0.5 cursor-pointer">
            <span>View All 9 Courts</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Live Match Cards */}
        {MOCK_DASHBOARD.liveCourts.map((court) => (
          <motion.div
            key={court.id}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="p-4 hive-card-gradient relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  {/* Court Box Badge */}
                  <div
                    className={`flex flex-col items-center justify-center h-12 w-12 rounded-2xl font-black text-xs ${
                      court.isHot
                        ? 'bg-[#8DC61F] text-[#172100]'
                        : 'bg-slate-100 text-slate-800'
                    }`}
                  >
                    <span className="text-[9px] uppercase tracking-tighter opacity-70">
                      COURT
                    </span>
                    <span className="text-lg leading-none">{court.courtNo}</span>
                  </div>

                  {/* Title & Info */}
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-extrabold text-sm text-[#17171A]">
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
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {court.details}
                    </p>
                    {court.student && (
                      <p className="text-xs text-[#8DC61F] font-semibold mt-0.5">
                        {court.student}
                      </p>
                    )}
                  </div>
                </div>

                {/* Score / Time Column */}
                <div className="text-right">
                  {court.score && (
                    <span className="text-base font-black text-[#17171A] block leading-none">
                      {court.score}
                    </span>
                  )}
                  {court.timeSlot && (
                    <span className="text-xs font-bold text-slate-700 block">
                      {court.timeSlot}
                    </span>
                  )}
                  {court.remaining && (
                    <span className="text-[10px] font-semibold text-slate-400 block mt-0.5">
                      {court.remaining}
                    </span>
                  )}
                  {court.gameScore && (
                    <span className="text-[10px] font-bold text-slate-500 block mt-1">
                      {court.gameScore}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <div className="flex items-center space-x-2">
                  {court.elapsed && (
                    <span className="flex items-center space-x-1">
                      <Clock className="h-3 w-3 text-slate-400" />
                      <span>{court.elapsed}</span>
                    </span>
                  )}
                  {court.umpire && (
                    <span className="flex items-center space-x-1">
                      <UserCheck className="h-3 w-3 text-slate-400" />
                      <span>Head Umpire: {court.umpire}</span>
                    </span>
                  )}
                  {court.extra && <span>{court.extra}</span>}
                </div>

                {court.canJoin ? (
                  <Button
                    size="sm"
                    className="h-7 text-xs bg-slate-100 text-slate-800 hover:bg-slate-200 rounded-xl"
                  >
                    Join Court
                  </Button>
                ) : (
                  <button className="text-[11px] font-bold text-[#8DC61F] underline hover:text-lime-600 cursor-pointer">
                    Quick Stats
                  </button>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Hive AI Matchmaker Banner */}
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Card className="bg-slate-50 border border-slate-200/80 p-4 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#8DC61F] text-[#172100]">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-[#17171A]">
                  Hive AI Matchmaker
                </h3>
                <p className="text-xs text-slate-500">
                  2 players are looking for an opponent right now
                </p>
              </div>
            </div>

            <Button
              onClick={onOpenMatchmaker}
              variant="dark"
              size="sm"
              className="rounded-xl font-bold px-4"
            >
              Match
            </Button>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};
