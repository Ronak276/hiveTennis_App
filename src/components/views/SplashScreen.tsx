import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Lock,
  Mail,
  User,
  CheckCircle2,
  X,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface SplashScreenProps {
  onStart: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onStart }) => {
  // Modal State: false (initial clean view with ONLY Get Started button), true (login/signup modal open)
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  // User Form State
  const [email, setEmail] = useState('alex.mercer@hivetennis.com');
  const [password, setPassword] = useState('••••••••••••');
  const [fullName, setFullName] = useState('Alex Mercer');
  const [utrRating, setUtrRating] = useState('9.4');
  const [memberTier, setMemberTier] = useState('Pro Player');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      onStart();
    }, 1000);
  };

  const handleQuickDemoLogin = () => {
    setIsSuccess(true);
    setTimeout(() => {
      onStart();
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col justify-between overflow-hidden selection:bg-[#8DC61F]/40 bg-slate-950 text-white"
    >
      {/* Full-Screen HD Tennis Action Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/splash_hero.jpg"
          alt="HiveTennis Action Player"
          className="h-full w-full object-cover object-top filter contrast-[1.05]"
        />
        {/* Soft Dark Gradient at bottom for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
      </div>

      {/* Mock Mobile Status Bar (9:41 AM, 5G, Battery) */}
      <div className="relative z-20 px-6 pt-3 flex items-center justify-between text-white text-xs font-black tracking-tight drop-shadow-md">
        <span>9:41</span>
        <div className="flex items-center space-x-1.5">
          <span className="text-[10px]">5G</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Floating Top Pill Badges */}
      <div className="relative z-10 px-5 pt-2 flex items-center justify-between">
        {/* Left Badge: Logo */}
        <div className="flex items-center space-x-2 rounded-full bg-slate-900/80 backdrop-blur-xl px-3.5 py-1.5 shadow-xl border border-white/20 text-white">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#8DC61F] text-xs">
            🎾
          </div>
          <span className="text-sm font-black tracking-tight leading-none text-white">
            Hive<span className="text-[#8DC61F]">Tennis</span>
          </span>
        </div>

        {/* Right Badge: Live Ecosystem */}
        <div className="flex items-center space-x-1.5 rounded-full bg-slate-900/80 backdrop-blur-xl px-3.5 py-1.5 shadow-xl border border-white/20 text-white">
          <span className="h-2 w-2 rounded-full bg-[#8DC61F] animate-pulse" />
          <span className="text-[11px] font-extrabold tracking-wider uppercase text-slate-200">
            LIVE ECOSYSTEM
          </span>
        </div>
      </div>

      {/* Floating Action Area: ONLY Green Button Floating Directly Over Image (Wrapper background removed) */}
      <div className="relative z-10 w-full max-w-md mx-auto mt-auto p-5 pb-8 space-y-3 text-center">
        {/* Main ONLY Green Get Started Button */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
          <Button
            onClick={() => setShowAuthModal(true)}
            size="lg"
            className="w-full bg-[#8DC61F] text-[#172100] hover:bg-[#7eb519] font-black text-base py-4 rounded-2xl shadow-xl shadow-[#8DC61F]/40 cursor-pointer flex items-center justify-center space-x-2 border border-[#8DC61F]/50"
          >
            <span>Get Started</span>
            <ArrowRight className="h-5 w-5 stroke-[2.5]" />
          </Button>
        </motion.div>

        {/* Direct Guest Skip Option */}
        <button
          onClick={onStart}
          className="text-xs font-extrabold text-slate-200 hover:text-[#8DC61F] transition-colors inline-block pt-1 cursor-pointer drop-shadow-md"
        >
          Skip & Enter App directly ➔
        </button>
      </div>

      {/* Interactive Dark Glass Login / Sign Up Bottom Sheet Modal */}
      <AnimatePresence>
        {showAuthModal && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-xs p-3 sm:p-4">
            {/* Backdrop click closes modal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAuthModal(false)}
              className="absolute inset-0"
            />

            {/* Dark Glass Bottom Sheet Modal */}
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              className="w-full max-w-md bg-slate-900/95 backdrop-blur-2xl text-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/20 space-y-4 relative z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Icon Button */}
              <button
                onClick={() => setShowAuthModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white cursor-pointer focus:outline-none transition-colors"
                title="Close"
              >
                <X className="h-4 w-4" />
              </button>

              {isSuccess ? (
                <div className="py-8 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#8DC61F] text-[#172100]">
                    <CheckCircle2 className="h-10 w-10 text-[#172100]" />
                  </div>
                  <h3 className="text-xl font-black text-white">
                    Welcome Back, {fullName}!
                  </h3>
                  <p className="text-xs text-slate-300 max-w-xs">
                    UTR <strong>{utrRating}</strong> Profile Verified. Entering HiveTennis Dashboard...
                  </p>
                </div>
              ) : (
                <>
                  {/* Header & Mode Switcher */}
                  <div className="space-y-3 pr-6 text-left">
                    <div className="flex items-center space-x-2">
                      <span className="rounded-full bg-[#8DC61F]/20 border border-[#8DC61F]/40 text-[#8DC61F] px-2.5 py-0.5 text-[10px] font-extrabold flex items-center gap-1">
                        <Sparkles className="h-3 w-3 text-[#8DC61F]" />
                        <span>TENNIS PLAYER APP</span>
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-white">
                      {authMode === 'login' ? 'Player Member Sign In' : 'Join HiveTennis Club'}
                    </h3>

                    {/* Mode Toggle Tabs (Sign In / Register) */}
                    <div className="grid grid-cols-2 gap-1 rounded-2xl bg-white/10 p-1 text-xs font-bold">
                      <button
                        type="button"
                        onClick={() => setAuthMode('login')}
                        className={`py-2 rounded-xl transition-all cursor-pointer ${
                          authMode === 'login'
                            ? 'bg-[#8DC61F] text-[#172100] font-black shadow-xs'
                            : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        Sign In
                      </button>
                      <button
                        type="button"
                        onClick={() => setAuthMode('signup')}
                        className={`py-2 rounded-xl transition-all cursor-pointer ${
                          authMode === 'signup'
                            ? 'bg-[#8DC61F] text-[#172100] font-black shadow-xs'
                            : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        Register Player
                      </button>
                    </div>
                  </div>

                  {/* One-Tap Demo Player Login Shortcut */}
                  <div className="rounded-2xl bg-white/10 border border-white/20 p-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <Avatar className="h-9 w-9 border border-[#8DC61F]">
                        <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80" />
                        <AvatarFallback>AM</AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <span className="text-xs font-black text-white block leading-none">
                          Alex Mercer
                        </span>
                        <span className="text-[10px] font-bold text-slate-300">
                          UTR 9.4 • Pro Member
                        </span>
                      </div>
                    </div>

                    <Button
                      type="button"
                      onClick={handleQuickDemoLogin}
                      size="sm"
                      className="bg-[#8DC61F] text-[#172100] hover:bg-[#7eb519] font-black text-xs rounded-xl h-8 px-3"
                    >
                      1-Tap Login
                    </Button>
                  </div>

                  {/* Player Form Inputs */}
                  <form onSubmit={handleAuthSubmit} className="space-y-3 pt-1 text-left">
                    {authMode === 'signup' && (
                      <>
                        <div>
                          <label className="text-[10px] font-extrabold text-slate-300 block mb-1 uppercase">
                            PLAYER FULL NAME
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                            <Input
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              placeholder="e.g. Marcus Vance"
                              className="pl-9 h-10 text-xs rounded-xl bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus-visible:ring-[#8DC61F]"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="text-[10px] font-extrabold text-slate-300 block mb-1 uppercase">
                              UTR RATING
                            </label>
                            <select
                              value={utrRating}
                              onChange={(e) => setUtrRating(e.target.value)}
                              className="w-full h-10 rounded-xl bg-slate-800 border border-white/20 px-3 text-xs font-bold text-white"
                            >
                              <option value="4.5">UTR 4.5 - Beginner</option>
                              <option value="6.8">UTR 6.8 - Intermediate</option>
                              <option value="9.4">UTR 9.4 - Pro Tier</option>
                              <option value="11.2">UTR 11.2 - Elite Squad</option>
                            </select>
                          </div>

                          <div>
                            <label className="text-[10px] font-extrabold text-slate-300 block mb-1 uppercase">
                              MEMBERSHIP TIER
                            </label>
                            <select
                              value={memberTier}
                              onChange={(e) => setMemberTier(e.target.value)}
                              className="w-full h-10 rounded-xl bg-slate-800 border border-white/20 px-3 text-xs font-bold text-white"
                            >
                              <option value="Pro Player">Pro Member</option>
                              <option value="Junior Academy">Junior Academy</option>
                              <option value="Weekend League">Weekend League</option>
                            </select>
                          </div>
                        </div>
                      </>
                    )}

                    <div>
                      <label className="text-[10px] font-extrabold text-slate-300 block mb-1 uppercase">
                        EMAIL ADDRESS
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="alex.mercer@hivetennis.com"
                          className="pl-9 h-10 text-xs rounded-xl bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus-visible:ring-[#8DC61F]"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-extrabold text-slate-300 block mb-1 uppercase">
                        PASSWORD
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••••••"
                          className="pl-9 h-10 text-xs rounded-xl bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus-visible:ring-[#8DC61F]"
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#8DC61F] text-[#172100] hover:bg-[#7eb519] font-black text-sm rounded-2xl py-3.5 mt-2 shadow-lg shadow-[#8DC61F]/30 cursor-pointer"
                    >
                      {authMode === 'login' ? 'Sign In & Play' : 'Create Player Profile'} ➔
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
