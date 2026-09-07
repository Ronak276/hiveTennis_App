import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  SlidersHorizontal,
  Calendar,
  MessageSquare,
  BarChart2,
  CheckCircle2,
  MoreVertical,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { MOCK_PLAYERS, Player } from '@/data/mockData';

interface PlayersViewProps {
  onOpenChat: (player: Player) => void;
}

export const PlayersView: React.FC<PlayersViewProps> = ({ onOpenChat }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredPlayers = MOCK_PLAYERS.filter((player) => {
    const matchesSearch =
      player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.playStyle.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedFilter === 'Pro Members') {
      return matchesSearch && (player.badge === 'PRO TIER' || player.badge === 'ELITE SQUAD');
    }
    if (selectedFilter === 'Junior Academy') {
      return matchesSearch && player.badge === 'INTERMEDIATE';
    }
    return matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="space-y-4 pb-20 px-4 pt-3 max-w-md mx-auto"
    >
      {/* Header Status Pills Row */}
      <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
        <span className="flex items-center space-x-1.5 rounded-full bg-[#8DC61F]/15 text-[#172100] px-3 py-1 text-xs font-bold whitespace-nowrap border border-[#8DC61F]/30">
          <span className="h-2 w-2 rounded-full bg-[#8DC61F] animate-pulse" />
          <span>28 Active on Court</span>
        </span>
        <span className="flex items-center space-x-1.5 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-bold whitespace-nowrap border border-blue-200/60">
          <Calendar className="h-3.5 w-3.5" />
          <span>14 Renewals Due</span>
        </span>
        <span className="flex items-center space-x-1.5 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-bold whitespace-nowrap border border-emerald-200/60">
          <span>⭐</span>
          <span>98% Retention</span>
        </span>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by player, UTR rating, or tier..."
            className="pl-10 h-11 text-xs bg-white rounded-2xl"
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          className="h-11 w-11 rounded-2xl shrink-0"
        >
          <SlidersHorizontal className="h-4 w-4 text-slate-600" />
        </Button>
      </div>

      {/* Filter Chips Row */}
      <div className="flex items-center space-x-2">
        {['All (342)', 'Pro Members', 'Junior Academy'].map((chip) => {
          const isSelected =
            selectedFilter === chip || (chip.startsWith('All') && selectedFilter === 'All');
          return (
            <button
              key={chip}
              onClick={() => setSelectedFilter(chip.startsWith('All') ? 'All' : chip)}
              className={`rounded-full px-4 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#8DC61F] text-[#172100] shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {chip}
            </button>
          );
        })}
      </div>

      {/* Directory Section Subheader */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center space-x-2">
          <h2 className="text-sm font-extrabold text-[#17171A]">
            Players Directory
          </h2>
          <span className="rounded-full bg-[#8DC61F]/20 text-[#172100] px-2 py-0.5 text-[9px] font-extrabold">
            LIVE SYNC
          </span>
        </div>
        <span className="text-xs font-bold text-slate-500 cursor-pointer hover:text-slate-900">
          Sort: Rating ▼
        </span>
      </div>

      {/* Players List */}
      <div className="space-y-3">
        {filteredPlayers.map((player) => (
          <motion.div
            key={player.id}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
          >
            <Card className="p-4 hive-card-gradient">
              {/* Top Header inside Player Card */}
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12" isOnline={player.isOnline}>
                    <AvatarImage src={player.avatar} alt={player.name} />
                    <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-extrabold text-base text-[#17171A]">
                        {player.name}
                      </h3>
                      {player.winRate && (
                        <span className="rounded-full bg-[#8DC61F]/20 text-[#172100] px-2 py-0.5 text-[9px] font-bold">
                          Win Rate {player.winRate}
                        </span>
                      )}
                      {player.statusTag && (
                        <span className="rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[9px] font-bold">
                          🏆 {player.statusTag}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-2 mt-0.5">
                      <Badge variant="dark" className="text-[9px] px-2 py-0">
                        {player.badge}
                      </Badge>
                      <span className="text-xs font-extrabold text-[#8DC61F]">
                        UTR {player.utr}
                      </span>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs text-slate-500 font-medium">
                        {player.playStyle}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Player Status / Info Box */}
              {player.nextMatch && (
                <div className="mt-3 rounded-xl bg-blue-50/80 border border-blue-100 p-2.5 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2 text-blue-900">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span className="font-semibold">
                      Next Match: <strong>{player.nextMatch}</strong>
                    </span>
                  </div>
                  <Badge variant="outline" className="text-[10px] bg-white">
                    Court 2
                  </Badge>
                </div>
              )}

              {player.weeklyDrills && (
                <div className="mt-3 rounded-xl bg-slate-50 border border-slate-200/60 p-2.5 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700 flex items-center gap-1">
                      <TrendingUp className="h-3.5 w-3.5 text-[#8DC61F]" />
                      Weekly Drills: <strong>{player.weeklyDrills}</strong>
                    </span>
                    <span className="font-extrabold text-[#8DC61F]">
                      {player.drillProgress}%
                    </span>
                  </div>
                  <Progress value={player.drillProgress} className="h-1.5" />
                </div>
              )}

              {player.attendanceRate && (
                <div className="mt-3 rounded-xl bg-emerald-50/80 border border-emerald-100 p-2.5 flex items-center justify-between text-xs text-emerald-900">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span className="font-semibold">
                      Attendance Rate: <strong>{player.attendanceRate}</strong>
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700">
                    On Streak
                  </span>
                </div>
              )}

              {player.requestTime && (
                <div className="mt-3 rounded-xl bg-amber-50/80 border border-amber-200 p-2.5 flex items-center justify-between text-xs text-amber-900">
                  <span className="font-semibold">
                    Court Request: <strong>{player.requestTime}</strong>
                  </span>
                  <span className="text-[10px] font-bold text-amber-800 underline">
                    Review
                  </span>
                </div>
              )}

              {/* Action Buttons Row */}
              <div className="mt-3 pt-2 flex items-center space-x-2">
                {player.requestTime ? (
                  <>
                    <Button
                      size="sm"
                      className="flex-1 bg-[#8DC61F] text-[#172100] font-bold rounded-xl h-9"
                    >
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      Approve Court
                    </Button>
                    <Button
                      onClick={() => onOpenChat(player)}
                      variant="outline"
                      size="sm"
                      className="rounded-xl h-9 px-3"
                    >
                      <MessageSquare className="h-4 w-4 mr-1 text-slate-600" />
                      Chat
                    </Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl">
                      <MoreVertical className="h-4 w-4 text-slate-500" />
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={() => onOpenChat(player)}
                      size="sm"
                      className="flex-1 bg-[#8DC61F] text-[#172100] font-bold rounded-xl h-9"
                    >
                      <MessageSquare className="h-4 w-4 mr-1.5" />
                      Message
                    </Button>
                    {player.nextMatch && (
                      <Button
                        variant="secondary"
                        size="sm"
                        className="rounded-xl h-9 text-xs"
                      >
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        Reschedule
                      </Button>
                    )}
                    {player.weeklyDrills && (
                      <Button
                        variant="secondary"
                        size="sm"
                        className="rounded-xl h-9 text-xs"
                      >
                        Log Stats
                      </Button>
                    )}
                    {player.attendanceRate && (
                      <Button
                        variant="lime"
                        size="sm"
                        className="rounded-xl h-9 text-xs"
                      >
                        Book Drill
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 rounded-xl bg-slate-100/60"
                    >
                      <BarChart2 className="h-4 w-4 text-slate-600" />
                    </Button>
                  </>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
