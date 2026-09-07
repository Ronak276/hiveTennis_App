import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  CheckCircle2,
  Calendar,
  Star,
  Zap,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { MOCK_COACHES, MOCK_REVIEWS, Coach } from '@/data/mockData';

interface CoachesViewProps {
  onBookCoach: (coach: Coach) => void;
}

export const CoachesView: React.FC<CoachesViewProps> = ({ onBookCoach }) => {
  const [selectedFilter, setSelectedFilter] = useState('All Coaches');

  const spotlightCoach = MOCK_COACHES.find((c) => c.isSpotlight);
  const facultyCoaches = MOCK_COACHES.filter((c) => !c.isSpotlight);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="space-y-4 pb-20 px-4 pt-3 max-w-md mx-auto"
    >
      {/* Top USPTA Certification Badge */}
      <div className="flex items-center space-x-1.5 rounded-full bg-[#8DC61F]/15 border border-[#8DC61F]/30 px-3 py-1 text-[11px] font-extrabold text-[#172100] w-fit">
        <CheckCircle2 className="h-3.5 w-3.5 text-[#8DC61F]" />
        <span>USPTA & PTR CERTIFIED PRO STAFF</span>
      </div>

      {/* Header Title */}
      <div>
        <h1 className="text-2xl font-black text-[#17171A] tracking-tight">
          World-Class Coaching
        </h1>
        <p className="text-xs text-slate-500 font-medium">
          Train with former ATP/WTA touring pros & biomechanics masters
        </p>
      </div>

      {/* Filter Chips */}
      <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
        {['● All Coaches', 'Serve & Return', 'Junior Academy'].map((chip) => {
          const isSelected =
            selectedFilter === chip ||
            (chip.includes('All Coaches') && selectedFilter === 'All Coaches');
          return (
            <button
              key={chip}
              onClick={() => setSelectedFilter(chip.replace('● ', ''))}
              className={`rounded-full px-4 py-1.5 text-xs font-extrabold transition-all whitespace-nowrap cursor-pointer ${
                isSelected
                  ? 'bg-[#17171A] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {chip}
            </button>
          );
        })}
      </div>

      {/* Head Coach Spotlight Card */}
      {spotlightCoach && (
        <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.99 }}>
          <Card className="hive-hero-gradient border border-[#8DC61F]/40 p-4 relative overflow-hidden shadow-lg">
            {/* Top Badges */}
            <div className="flex items-center justify-between">
              <span className="flex items-center space-x-1 rounded-full bg-[#8DC61F] text-[#172100] px-2.5 py-0.5 text-[10px] font-extrabold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#172100] animate-ping" />
                <span>HEAD COACH SPOTLIGHT</span>
              </span>
              <span className="rounded-full bg-[#8DC61F]/20 text-[#172100] px-2.5 py-0.5 text-[10px] font-bold border border-[#8DC61F]/30">
                ✪ Elite USPTA Master
              </span>
            </div>

            {/* Coach Header Profile */}
            <div className="mt-3 flex items-start space-x-3">
              <div className="relative">
                <Avatar className="h-16 w-16 border-2 border-[#8DC61F]">
                  <AvatarImage src={spotlightCoach.avatar} alt={spotlightCoach.name} />
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#8DC61F] text-[10px] text-[#172100]">
                  🎾
                </span>
              </div>

              <div>
                <div className="flex items-center space-x-1.5">
                  <h3 className="text-lg font-black text-[#17171A]">
                    {spotlightCoach.name}
                  </h3>
                  <CheckCircle2 className="h-4 w-4 text-[#8DC61F]" />
                </div>
                <span className="text-[10px] font-bold text-[#8DC61F] uppercase block tracking-wider">
                  {spotlightCoach.role}
                </span>

                <div className="flex items-center space-x-2 mt-1 text-xs">
                  <span className="flex items-center text-amber-600 font-extrabold">
                    ★ {spotlightCoach.rating}{' '}
                    <span className="text-slate-400 font-normal ml-0.5">
                      ({spotlightCoach.reviewsCount})
                    </span>
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-600 font-medium">
                    {spotlightCoach.subtitle}
                  </span>
                </div>
              </div>
            </div>

            {/* Specialties */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {spotlightCoach.specialties.map((spec, i) => (
                <span
                  key={i}
                  className="rounded-lg bg-white/80 border border-slate-200/80 px-2 py-0.5 text-[10px] font-bold text-slate-700 shadow-2xs"
                >
                  {spec}
                </span>
              ))}
            </div>

            {/* 3 Metric Box */}
            <div className="mt-3 grid grid-cols-3 gap-2 bg-white/90 rounded-xl p-2.5 border border-slate-200/60 text-center">
              <div>
                <span className="text-lg font-black text-[#17171A] block leading-none">
                  {spotlightCoach.yearsPro}
                </span>
                <span className="text-[9px] font-bold text-slate-400 uppercase">
                  Years Pro
                </span>
              </div>
              <div className="border-x border-slate-200">
                <span className="text-lg font-black text-[#17171A] block leading-none">
                  {spotlightCoach.d1Recruits}+
                </span>
                <span className="text-[9px] font-bold text-slate-400 uppercase">
                  D1 Recruits
                </span>
              </div>
              <div>
                <span className="text-lg font-black text-[#17171A] block leading-none">
                  {spotlightCoach.successRate}%
                </span>
                <span className="text-[9px] font-bold text-slate-400 uppercase">
                  Success Rate
                </span>
              </div>
            </div>

            {/* Availability & Rate Row */}
            <div className="mt-3 flex items-center justify-between text-xs font-semibold">
              <div className="flex items-center space-x-1.5 text-slate-700">
                <Zap className="h-4 w-4 text-[#8DC61F]" />
                <span>Next Available: <strong>{spotlightCoach.nextAvailable}</strong></span>
              </div>
              <span className="text-lg font-black text-[#17171A]">
                ${spotlightCoach.rate}
                <span className="text-xs font-normal text-slate-500">/hr</span>
              </span>
            </div>

            {/* Action Button */}
            <Button
              onClick={() => onBookCoach(spotlightCoach)}
              size="lg"
              className="mt-3 w-full bg-[#8DC61F] text-[#172100] hover:bg-[#7eb519] font-extrabold rounded-2xl shadow-md shadow-[#8DC61F]/30"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Book Private Session
            </Button>
          </Card>
        </motion.div>
      )}

      {/* Certified Faculty Header */}
      <div className="flex items-center justify-between pt-2">
        <div>
          <h2 className="text-base font-extrabold text-[#17171A]">
            Certified Faculty
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Private & semi-private lessons
          </p>
        </div>
        <span className="text-xs font-bold text-[#8DC61F]">
          4 Coaches Active
        </span>
      </div>

      {/* Faculty List */}
      <div className="space-y-3">
        {facultyCoaches.map((coach) => (
          <motion.div
            key={coach.id}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
          >
            <Card className="p-4 hive-card-gradient">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={coach.avatar} alt={coach.name} />
                    <AvatarFallback>{coach.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>

                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-extrabold text-base text-[#17171A]">
                        {coach.name}
                      </h3>
                      <span className="rounded-full bg-amber-50 text-amber-700 px-2 py-0.5 text-[10px] font-bold border border-amber-200">
                        ★ {coach.rating}
                      </span>
                    </div>

                    <span className="text-xs font-bold text-[#8DC61F] block">
                      {coach.role}
                    </span>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                      {coach.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Specialties */}
              <div className="mt-3 flex flex-wrap gap-1">
                {coach.specialties.map((spec, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Footer Row */}
              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-xs text-slate-600">
                  <Clock className="h-3.5 w-3.5 text-slate-400" />
                  <span>{coach.nextAvailable}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-base font-black text-[#17171A]">
                    ${coach.rate}
                    <span className="text-[10px] font-normal text-slate-500">
                      /hr
                    </span>
                  </span>
                  <Button
                    onClick={() => onBookCoach(coach)}
                    variant="dark"
                    size="sm"
                    className="rounded-xl px-4 font-bold h-8"
                  >
                    Book
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Verified Player Reviews Section */}
      <div className="space-y-2 pt-2">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-extrabold text-[#17171A]">
            Verified Player Reviews
          </h2>
          <span className="text-xs font-bold text-amber-600">
            ★ 4.96 Avg
          </span>
        </div>

        <div className="space-y-2">
          {MOCK_REVIEWS.map((rev) => (
            <Card key={rev.id} className="p-3 bg-slate-50 border border-slate-200/60">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                {rev.utrGain && (
                  <Badge variant="lime" className="text-[9px]">
                    {rev.utrGain}
                  </Badge>
                )}
              </div>
              <p className="text-xs text-slate-700 italic mt-2">
                "{rev.comment}"
              </p>
              <div className="mt-2 flex items-center space-x-2">
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="text-[9px] bg-[#8DC61F] text-[#172100]">
                    {rev.author.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <span className="text-xs font-bold text-[#17171A] block leading-none">
                    {rev.author}
                  </span>
                  <span className="text-[9px] text-slate-500">{rev.role}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
