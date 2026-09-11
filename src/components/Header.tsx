import React from 'react';
import { Bell } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface HeaderProps {
  activeTab: string;
  onOpenSplash?: () => void;
  onOpenProfile?: () => void;
  onNotificationClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onOpenSplash,
  onOpenProfile,
  onNotificationClick,
}) => {
  const getSubTitle = () => {
    switch (activeTab) {
      case 'home':
        return 'DASHBOARD';
      case 'players':
        return 'PLAYERS';
      case 'programs':
        return 'PROGRAMS';
      case 'coaches':
        return 'COACHES';
      case 'messages':
        return 'MESSAGES';
      case 'profile':
        return 'PLAYER PROFILE';
      default:
        return 'DASHBOARD';
    }
  };

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between bg-white/90 backdrop-blur-md px-4 py-3 border-b border-slate-100 shadow-2xs">
      {/* Brand Logo & Subtitle */}
      <button
        onClick={onOpenSplash}
        className="flex items-center space-x-2.5 group cursor-pointer text-left focus:outline-none"
      >
        <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-[#8DC61F]/15 border border-[#8DC61F]/30 group-hover:scale-105 transition-transform">
          <span className="text-base">🎾</span>
          <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-[#8DC61F]" />
        </div>
        <div className="flex flex-col">
          <span className="text-base font-extrabold tracking-tight text-[#17171A] leading-none">
            HiveTennis
          </span>
          <span className="text-[10px] font-bold tracking-widest text-[#8DC61F] uppercase mt-0.5">
            {getSubTitle()}
          </span>
        </div>
      </button>

      {/* Right Icons: Notifications & Profile */}
      <div className="flex items-center space-x-3">
        <button
          onClick={onNotificationClick}
          className="relative p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-700 cursor-pointer focus:outline-none"
          title="Notifications"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-[#8DC61F] ring-2 ring-white" />
        </button>

        <button
          onClick={onOpenProfile || onOpenSplash}
          className={`focus:outline-none rounded-full p-0.5 cursor-pointer hover:scale-105 transition-all ${
            activeTab === 'profile'
              ? 'ring-2 ring-[#8DC61F] shadow-sm bg-[#8DC61F]/20'
              : 'ring-2 ring-[#8DC61F]/40 hover:ring-[#8DC61F]'
          }`}
          title="My Profile"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80"
              alt="Alex Mercer"
            />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
        </button>
      </div>
    </header>
  );
};
