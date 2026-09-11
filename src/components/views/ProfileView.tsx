import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  ShieldCheck,
  Trophy,
  Zap,
  Calendar,
  Flame,
  ChevronLeft,
  LogOut,
  Settings,
  Activity,
  CheckCircle2,
  Bell,
  Sparkles,
  Award,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { MOCK_USER_PROFILE, UserProfile } from '@/data/mockData';

interface ProfileViewProps {
  onBack: () => void;
  onLogout: () => void;
  onBookCourt?: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  onBack,
  onLogout,
  onBookCourt,
}) => {
  const [profile] = useState<UserProfile>(MOCK_USER_PROFILE);
  const [activeTab, setActiveTab] = useState<'stats' | 'gear' | 'matches'>('stats');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [autoMatchEnabled, setAutoMatchEnabled] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="space-y-4 pb-24 px-4 pt-3 max-w-md mx-auto"
    >
      {/* Top Header Action Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center space-x-1 text-xs font-black text-slate-700 hover:text-[#8DC61F] transition-colors cursor-pointer bg-slate-100/90 px-3 py-1.5 rounded-full border border-slate-200/80 shadow-2xs"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Back</span>
        </button>

        <button
          onClick={onLogout}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors text-xs font-bold border border-rose-200/60 cursor-pointer"
          title="Sign Out"
        >
          <LogOut className="h-3.5 w-3.5" />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Main Profile Hero Card */}
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.99 }}>
        <Card className="hive-hero-gradient border border-[#8DC61F]/40 p-4 relative overflow-hidden shadow-md">
          {/* Top Decorative Status Pills */}
          <div className="flex items-center justify-between">
            <span className="flex items-center space-x-1.5 rounded-full bg-[#17171A] text-white px-2.5 py-0.5 text-[10px] font-extrabold tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8DC61F] animate-pulse" />
              <span>{profile.statusTag}</span>
            </span>
            <span className="rounded-full bg-[#8DC61F]/20 text-[#172100] px-2.5 py-0.5 text-[10px] font-bold border border-[#8DC61F]/40 flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 text-[#8DC61F]" />
              <span>VERIFIED PLAYER</span>
            </span>
          </div>

          {/* Avatar & Core Bio */}
          <div className="mt-3.5 flex items-start space-x-3.5">
            <div className="relative shrink-0">
              <Avatar className="h-16 w-16 border-2 border-[#8DC61F] ring-4 ring-[#8DC61F]/20 shadow-md">
                <AvatarImage src={profile.avatar} alt={profile.name} />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#8DC61F] text-[10px] shadow-sm">
                🎾
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-1.5">
                <h2 className="text-lg font-black text-[#17171A] truncate tracking-tight">
                  {profile.name}
                </h2>
                <CheckCircle2 className="h-4 w-4 text-[#8DC61F] shrink-0" />
              </div>
              <p className="text-xs font-semibold text-slate-500 truncate">
                {profile.email}
              </p>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-[11px] font-bold text-[#8DC61F]">
                  {profile.playStyle}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-[10px] text-slate-500 font-medium">
                  {profile.ranking}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar inside Hero */}
          <div className="mt-4 grid grid-cols-3 gap-2 bg-white/90 rounded-2xl p-2.5 border border-slate-200/80 text-center shadow-2xs">
            <div>
              <div className="flex items-center justify-center space-x-0.5">
                <span className="text-xl font-black text-[#17171A]">
                  {profile.utr}
                </span>
                <span className="text-[10px] font-bold text-[#8DC61F]">★</span>
              </div>
              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-tight block mt-0.5">
                UTR RATING
              </span>
            </div>

            <div className="border-x border-slate-200">
              <span className="text-xl font-black text-[#17171A] block">
                {profile.winRate}
              </span>
              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-tight block mt-0.5">
                WIN RATE
              </span>
            </div>

            <div>
              <div className="flex items-center justify-center space-x-1">
                <Flame className="h-4 w-4 text-amber-500 fill-amber-500" />
                <span className="text-xl font-black text-[#17171A]">
                  {profile.stats.streakDays}d
                </span>
              </div>
              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-tight block mt-0.5">
                ACTIVE STREAK
              </span>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-3.5 pt-2 flex items-center space-x-2">
            <Button
              onClick={() => setActiveTab('stats')}
              size="sm"
              className="flex-1 bg-[#8DC61F] text-[#172100] hover:bg-[#7eb519] font-black text-xs rounded-xl shadow-xs"
            >
              <Activity className="h-3.5 w-3.5 mr-1.5" />
              Quick Stats
            </Button>
            {onBookCourt && (
              <Button
                onClick={onBookCourt}
                size="sm"
                variant="dark"
                className="flex-1 font-extrabold text-xs rounded-xl"
              >
                <Calendar className="h-3.5 w-3.5 mr-1.5" />
                Book Court
              </Button>
            )}
          </div>
        </Card>
      </motion.div>

      {/* Segmented 3-Tab Navigation */}
      <div className="grid grid-cols-3 gap-1 rounded-2xl bg-slate-100 p-1 text-xs font-bold">
        {[
          { id: 'stats', label: 'Stats & Drills' },
          { id: 'gear', label: 'Gear & Style' },
          { id: 'matches', label: 'Match History' },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-2 rounded-xl transition-all cursor-pointer text-center ${isActive
                ? 'bg-white text-[#17171A] shadow-xs font-black'
                : 'text-slate-500 hover:text-slate-800'
                }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab 1: Comprehensive Player Stats */}
      {activeTab === 'stats' && (
        <motion.div
          key="tab-stats"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          {/* Match Record Breakdown Card */}
          <Card className="p-4 hive-card-gradient">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">
                  PERFORMANCE SUMMARY
                </span>
                <h3 className="text-sm font-black text-[#17171A]">
                  Season Match Record
                </h3>
              </div>
              <Badge variant="lime" className="text-[10px]">
                {profile.utrGain}
              </Badge>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center bg-slate-50/90 rounded-xl p-3 border border-slate-200/70 mb-3">
              <div>
                <span className="text-base font-black text-emerald-600 block">
                  {profile.wins}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">
                  Wins
                </span>
              </div>
              <div className="border-x border-slate-200">
                <span className="text-base font-black text-rose-600 block">
                  {profile.losses}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">
                  Losses
                </span>
              </div>
              <div>
                <span className="text-base font-black text-[#17171A] block">
                  {profile.matchesPlayed}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">
                  Total
                </span>
              </div>
            </div>

            {/* Drill Target Progress */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-600 flex items-center gap-1.5">
                  <Activity className="h-3.5 w-3.5 text-[#8DC61F]" />
                  Monthly Drills Logged
                </span>
                <span className="font-extrabold text-[#17171A]">
                  {profile.stats.drillsLoggedHours} / 30 hrs (82%)
                </span>
              </div>
              <Progress value={82} className="h-2" />
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600">
              <span>Aces Recorded: <strong>{profile.stats.acesTotal}</strong></span>
              <span>Court Bookings: <strong>{profile.stats.courtBookingsCount}</strong></span>
            </div>
          </Card>

          {/* Honors & Achievements Showcase */}
          <Card className="p-4 bg-white border border-slate-200/80 shadow-2xs space-y-2.5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-[#17171A] flex items-center gap-1.5">
                <Trophy className="h-4 w-4 text-amber-500" />
                <span>Honors & Achievements</span>
              </h3>
              <span className="text-xs font-bold text-[#8DC61F]">3 Badges</span>
            </div>

            <div className="space-y-2">
              {profile.achievements.map((ach) => (
                <div
                  key={ach.id}
                  className="flex items-center space-x-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/60"
                >
                  <span className="text-2xl">{ach.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-black text-[#17171A] truncate">
                      {ach.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 truncate">
                      {ach.desc}
                    </p>
                  </div>
                  <span className="text-[10px] font-extrabold text-slate-400 shrink-0">
                    {ach.date}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      )}

      {/* Tab 2: Gear, Racquet Specs & Playing Style */}
      {activeTab === 'gear' && (
        <motion.div
          key="tab-gear"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          {/* Racquet & Equipment Specs */}
          <Card className="p-4 hive-card-gradient space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">
                  GEAR SETUP
                </span>
                <h3 className="text-sm font-black text-[#17171A]">
                  Player Weaponry & Strings
                </h3>
              </div>
              <span className="text-lg">🎾</span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <span className="font-bold text-slate-600">Primary Racquet</span>
                <span className="font-black text-[#17171A]">{profile.gear.racquet}</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <span className="font-bold text-slate-600">String Type</span>
                <span className="font-black text-[#17171A]">{profile.gear.strings}</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <span className="font-bold text-slate-600">String Tension</span>
                <span className="font-black text-[#8DC61F]">{profile.gear.tension}</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <span className="font-bold text-slate-600">Court Footwear</span>
                <span className="font-black text-[#17171A]">{profile.gear.shoes}</span>
              </div>
            </div>
          </Card>

          {/* Biomechanics & Playing Style */}
          <Card className="p-4 bg-white border border-slate-200/80 shadow-2xs space-y-2.5">
            <h3 className="text-sm font-black text-[#17171A]">
              Court Preferences & Style
            </h3>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">
                  DOMINANT HAND
                </span>
                <span className="font-black text-[#17171A] mt-0.5 block">
                  {profile.handedness}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">
                  BACKHAND
                </span>
                <span className="font-black text-[#17171A] mt-0.5 block">
                  {profile.backhand}
                </span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60 text-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">
                PREFERRED SURFACE & TIME
              </span>
              <span className="font-black text-[#17171A] mt-0.5 block">
                {profile.courtPreferences.surface}
              </span>
              <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
                {profile.courtPreferences.preferredTime}
              </span>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Tab 3: Match History */}
      {activeTab === 'matches' && (
        <motion.div
          key="tab-matches"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black text-[#17171A]">
              Recent Sanctioned Matches
            </h3>
            <span className="text-xs font-bold text-slate-500">
              3 Matches Logged
            </span>
          </div>

          <div className="space-y-2.5">
            {profile.recentMatches.map((match) => (
              <Card key={match.id} className="p-3.5 hive-card-gradient">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={match.opponentAvatar} alt={match.opponent} />
                      <AvatarFallback>{match.opponent.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <span className="text-xs font-black text-[#17171A]">
                          vs {match.opponent}
                        </span>
                        <Badge variant="lime" className="text-[9px] px-1.5 py-0">
                          UTR {match.opponentUtr}
                        </Badge>
                      </div>
                      <span className="text-[10px] text-slate-500 block font-medium">
                        {match.court} • {match.date}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-black ${match.result === 'WON'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-rose-100 text-rose-800'
                        }`}
                    >
                      {match.result}
                    </span>
                    <span className="text-xs font-black text-[#17171A] block mt-0.5">
                      {match.score}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      )}

      {/* App Preferences & Settings Box */}
      <Card className="p-4 bg-white border border-slate-200/80 shadow-2xs space-y-3">
        <h3 className="text-sm font-black text-[#17171A] flex items-center gap-1.5">
          <Settings className="h-4 w-4 text-slate-500" />
          <span>Player Preferences & Alerts</span>
        </h3>

        <div className="space-y-2.5 text-xs">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
            <div className="flex items-center space-x-2">
              <Bell className="h-4 w-4 text-slate-500" />
              <span className="font-bold text-slate-700">Court Match Alerts</span>
            </div>
            <button
              onClick={() => setNotificationsEnabled(!notificationsEnabled)}
              className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors cursor-pointer ${notificationsEnabled ? 'bg-[#8DC61F]' : 'bg-slate-300'
                }`}
            >
              <motion.div
                layout
                className="bg-white w-4 h-4 rounded-full shadow-md"
                animate={{ x: notificationsEnabled ? 20 : 0 }}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-slate-500" />
              <span className="font-bold text-slate-700">AI Matchmaker Auto-Match</span>
            </div>
            <button
              onClick={() => setAutoMatchEnabled(!autoMatchEnabled)}
              className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors cursor-pointer ${autoMatchEnabled ? 'bg-[#8DC61F]' : 'bg-slate-300'
                }`}
            >
              <motion.div
                layout
                className="bg-white w-4 h-4 rounded-full shadow-md"
                animate={{ x: autoMatchEnabled ? 20 : 0 }}
              />
            </button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
