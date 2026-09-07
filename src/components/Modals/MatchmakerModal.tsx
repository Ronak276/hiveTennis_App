import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Trophy, Zap, CheckCircle2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface MatchmakerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MatchmakerModal: React.FC<MatchmakerModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isSearching, setIsSearching] = useState(false);
  const [matchedPlayer, setMatchedPlayer] = useState<any | null>(null);

  const handleStartMatch = () => {
    setIsSearching(true);
    setMatchedPlayer(null);
    setTimeout(() => {
      setIsSearching(false);
      setMatchedPlayer({
        name: 'Elena Rostova',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=250&q=80',
        utr: 11.2,
        playStyle: '2-Handed Backhand',
        court: 'Court 3 (Clay)',
        time: 'Today at 5:00 PM',
      });
    }, 2500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-xl font-black text-[#17171A]">
            <Sparkles className="h-5 w-5 text-[#8DC61F]" />
            <span>Hive AI Matchmaker</span>
          </DialogTitle>
          <DialogDescription>
            Instant algorithm pairing based on UTR rating, available court time, and play style compatibility.
          </DialogDescription>
        </DialogHeader>

        {isSearching ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-[#8DC61F]/20 border-4 border-dashed border-[#8DC61F] text-3xl"
            >
              🎾
            </motion.div>
            <div>
              <h3 className="text-lg font-black text-[#17171A]">
                Finding Compatible Opponent...
              </h3>
              <p className="text-xs text-slate-500">
                Scanning 28 active players on court within UTR ±1.0 range
              </p>
            </div>
          </div>
        ) : matchedPlayer ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="py-4 space-y-4"
          >
            <div className="rounded-2xl bg-gradient-to-br from-[#8DC61F]/20 to-slate-50 p-4 border border-[#8DC61F]/40 text-center space-y-3">
              <span className="inline-flex items-center rounded-full bg-[#8DC61F] text-[#172100] px-3 py-0.5 text-[10px] font-extrabold">
                ⚡ 98% MATCH RATING
              </span>

              <Avatar className="h-20 w-20 mx-auto border-2 border-[#8DC61F]">
                <AvatarImage src={matchedPlayer.avatar} alt={matchedPlayer.name} />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>

              <div>
                <h3 className="text-xl font-black text-[#17171A]">
                  {matchedPlayer.name}
                </h3>
                <div className="flex items-center justify-center space-x-2 mt-1">
                  <Badge variant="lime" className="text-xs">
                    UTR {matchedPlayer.utr}
                  </Badge>
                  <span className="text-xs font-semibold text-slate-600">
                    {matchedPlayer.playStyle}
                  </span>
                </div>
              </div>

              <div className="rounded-xl bg-white p-2.5 text-xs text-slate-700 font-semibold space-y-0.5 border border-slate-200">
                <div>Suggested Court: <strong>{matchedPlayer.court}</strong></div>
                <div>Proposed Time: <strong>{matchedPlayer.time}</strong></div>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button
                onClick={() => {
                  setMatchedPlayer(null);
                  onClose();
                }}
                size="lg"
                className="flex-1 bg-[#8DC61F] text-[#172100] hover:bg-[#7eb519] font-extrabold rounded-2xl"
              >
                Accept & Invite
              </Button>
            </div>
          </motion.div>
        ) : (
          <div className="space-y-4 pt-2">
            <div className="rounded-xl bg-slate-50 p-3 border border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-700">Target UTR Range</span>
                <span className="font-black text-[#8DC61F]">9.0 – 11.5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-700">Match Format</span>
                <span className="font-semibold text-slate-800">1-Set Fast4 Tiebreaker</span>
              </div>
            </div>

            <Button
              onClick={handleStartMatch}
              size="lg"
              className="w-full bg-[#8DC61F] text-[#172100] hover:bg-[#7eb519] font-extrabold rounded-2xl py-3 shadow-md shadow-[#8DC61F]/30"
            >
              Start AI Matchmaking
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
