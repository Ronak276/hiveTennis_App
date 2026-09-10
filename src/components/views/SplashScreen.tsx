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
  const [utrRating] = useState('9.4');
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
        {/* Sleek Dark Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-slate-950/90" />
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

      {/* Floating Action Area: ONLY Green Get Started Button */}
      <div className="relative z-10 w-full max-w-md mx-auto mt-auto p-5 pb-8 space-y-3 text-center">
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

      {/* Interactive WHITE Background Login / Sign Up Bottom Sheet Modal */}
      <AnimatePresence>
        {showAuthModal && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4">
            {/* Backdrop click closes modal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAuthModal(false)}
              className="absolute inset-0"
            />

            {/* WHITE Background Bottom Sheet Modal Card */}
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              className="w-full max-w-md bg-white text-[#17171A] rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-200 space-y-4 relative z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Icon Button */}
              <button
                onClick={() => setShowAuthModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer focus:outline-none transition-colors"
                title="Close"
              >
                <X className="h-4 w-4" />
              </button>

              {isSuccess ? (
                <div className="py-8 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#8DC61F]/20 text-[#172100]">
                    <CheckCircle2 className="h-10 w-10 text-[#8DC61F]" />
                  </div>
                  <h3 className="text-xl font-black text-[#17171A]">
                    Welcome Back, {fullName}!
                  </h3>
                  <p className="text-xs text-slate-500 max-w-xs">
                    UTR <strong>{utrRating}</strong> Profile Verified. Entering HiveTennis Dashboard...
                  </p>
                </div>
              ) : (
                <>
                  {/* Header & Mode Switcher */}
                  <div className="space-y-3 pr-6 text-left">
                    <div className="flex items-center space-x-2">
                      <span className="rounded-full bg-[#8DC61F]/20 text-[#172100] px-2.5 py-0.5 text-[10px] font-extrabold flex items-center gap-1">
                        <Sparkles className="h-3 w-3 text-[#8DC61F]" />
                        <span>TENNIS PLAYER APP</span>
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-[#17171A]">
                      {authMode === 'login' ? 'Player Sign In' : 'Join HiveTennis Club'}
                    </h3>

                    {/* Mode Toggle Tabs (Sign In / Register) */}
                    <div className="grid grid-cols-2 gap-1 rounded-2xl bg-slate-100 p-1 text-xs font-bold">
                      <button
                        type="button"
                        onClick={() => setAuthMode('login')}
                        className={`py-2 rounded-xl transition-all cursor-pointer ${authMode === 'login'
                          ? 'bg-white text-[#17171A] shadow-xs font-black'
                          : 'text-slate-500 hover:text-slate-800'
                          }`}
                      >
                        Sign In
                      </button>
                      <button
                        type="button"
                        onClick={() => setAuthMode('signup')}
                        className={`py-2 rounded-xl transition-all cursor-pointer ${authMode === 'signup'
                          ? 'bg-white text-[#17171A] shadow-xs font-black'
                          : 'text-slate-500 hover:text-slate-800'
                          }`}
                      >
                        Register Player
                      </button>
                    </div>
                  </div>

                  {/* One-Tap Demo Player Login Shortcut */}
                  <div className="rounded-2xl bg-[#8DC61F]/15 border border-[#8DC61F]/40 p-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <Avatar className="h-9 w-9 border border-[#8DC61F]">
                        <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80" />
                        <AvatarFallback>AM</AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <span className="text-xs font-black text-[#17171A] block leading-none">
                          Alex Mercer
                        </span>
                        <span className="text-[10px] font-bold text-slate-600">
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
                      <div>
                        <label className="text-[10px] font-extrabold text-slate-700 block mb-1 uppercase">
                          PLAYER FULL NAME
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="e.g. Marcus Vance"
                            className="pl-9 h-10 text-xs rounded-xl bg-slate-50 border border-slate-200 text-[#17171A]"
                            required
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="text-[10px] font-extrabold text-slate-700 block mb-1 uppercase">
                        EMAIL ADDRESS
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="alex.mercer@hivetennis.com"
                          className="pl-9 h-10 text-xs rounded-xl bg-slate-50 border border-slate-200 text-[#17171A]"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-extrabold text-slate-700 block mb-1 uppercase">
                        PASSWORD
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••••••"
                          className="pl-9 h-10 text-xs rounded-xl bg-slate-50 border border-slate-200 text-[#17171A]"
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#8DC61F] text-[#172100] hover:bg-[#7eb519] font-black text-sm rounded-2xl py-3.5 mt-2 shadow-md shadow-[#8DC61F]/20 cursor-pointer"
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
