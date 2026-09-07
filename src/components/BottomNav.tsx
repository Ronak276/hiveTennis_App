import React from 'react';
import { motion } from 'framer-motion';
import { Home, Users, Disc, Trophy, MessageSquare } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  unreadChatCount?: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  setActiveTab,
  unreadChatCount = 2,
}) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'players', label: 'Players', icon: Users },
    { id: 'programs', label: 'Programs', icon: Disc },
    { id: 'coaches', label: 'Coaches', icon: Trophy },
    { id: 'messages', label: 'Chat', icon: MessageSquare, badge: unreadChatCount },
  ];

  return (
    <div className="fixed bottom-3 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between gap-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/70 p-1.5 shadow-xl shadow-slate-900/10 w-full max-w-md">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative flex flex-1 flex-col items-center justify-center py-1.5 px-2 rounded-full cursor-pointer focus:outline-none transition-colors"
            >
              {/* Framer Motion Active Pill Background */}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-[#8DC61F] shadow-sm shadow-[#8DC61F]/40"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}

              {/* Icon & Label Container */}
              <div
                className={`relative z-10 flex flex-col items-center justify-center transition-colors ${
                  isActive ? 'text-[#172100] font-bold' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <div className="relative">
                  <Icon className="h-5 w-5" />
                  {tab.badge && tab.badge > 0 && (
                    <span
                      className={`absolute -top-1 -right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full text-[9px] font-bold ${
                        isActive
                          ? 'bg-[#172100] text-white'
                          : 'bg-[#8DC61F] text-[#172100]'
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </div>
                <span className="text-[10px] tracking-tight mt-0.5 leading-none">
                  {tab.label}
                </span>
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
