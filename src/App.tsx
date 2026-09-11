import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { SplashScreen } from '@/components/views/SplashScreen';
import { HomeView } from '@/components/views/HomeView';
import { PlayersView } from '@/components/views/PlayersView';
import { ProgramsView } from '@/components/views/ProgramsView';
import { CoachesView } from '@/components/views/CoachesView';
import { MessagesView } from '@/components/views/MessagesView';
import { ProfileView } from '@/components/views/ProfileView';
import { BookingModal } from '@/components/Modals/BookingModal';
import { EnrollModal } from '@/components/Modals/EnrollModal';
import { MatchmakerModal } from '@/components/Modals/MatchmakerModal';
import { ChatModal } from '@/components/Modals/ChatModal';
import { Player, Coach, ChatThread, MOCK_CHAT_THREADS } from '@/data/mockData';

export function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [previousTab, setPreviousTab] = useState('home');

  // Modal States
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedProgramTitle, setSelectedProgramTitle] = useState('');
  const [matchmakerModalOpen, setMatchmakerModalOpen] = useState(false);
  const [chatModalOpen, setChatModalOpen] = useState(false);
  const [selectedThread, setSelectedThread] = useState<ChatThread | null>(null);

  const handleTabChange = (tab: string) => {
    if (activeTab !== 'profile') {
      setPreviousTab(activeTab);
    }
    setActiveTab(tab);
  };

  const handleOpenProfile = () => {
    if (activeTab !== 'profile') {
      setPreviousTab(activeTab);
    }
    setActiveTab('profile');
  };

  const handleBackFromProfile = () => {
    setActiveTab(previousTab || 'home');
  };

  const handleOpenEnroll = (title: string) => {
    setSelectedProgramTitle(title);
    setEnrollModalOpen(true);
  };

  const handleOpenPlayerChat = (player: Player) => {
    const thread: ChatThread = {
      id: player.id,
      senderName: player.name,
      senderRole: player.badge,
      avatar: player.avatar,
      time: 'Just now',
      lastMessage: `Hello ${player.name}, reviewing court availability...`,
      isOnline: player.isOnline,
    };
    setSelectedThread(thread);
    setChatModalOpen(true);
  };

  const handleOpenCoachBooking = (coach: Coach) => {
    setSelectedProgramTitle(`Private Session with ${coach.name}`);
    setEnrollModalOpen(true);
  };

  const handleSelectThread = (thread: ChatThread) => {
    setSelectedThread(thread);
    setChatModalOpen(true);
  };

  const handleNewInquiry = () => {
    setSelectedThread(MOCK_CHAT_THREADS[0]);
    setChatModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-100/60 text-[#17171A] font-sans selection:bg-[#8DC61F]/30 antialiased flex flex-col items-center">
      {/* Phone Simulator Container for Mobile Viewport centered on Desktop */}
      <div className="w-full max-w-md min-h-screen bg-white shadow-2xl relative flex flex-col border-x border-slate-200/80">
        
        {/* Splash Screen */}
        <AnimatePresence>
          {showSplash && (
            <SplashScreen onStart={() => setShowSplash(false)} />
          )}
        </AnimatePresence>

        {/* Main Application Interface */}
        {!showSplash && (
          <div className="flex-1 flex flex-col w-full relative pb-16">
            {/* Top Navigation Header */}
            <Header
              activeTab={activeTab}
              onOpenSplash={() => setShowSplash(true)}
              onOpenProfile={handleOpenProfile}
              onNotificationClick={() => {
                handleTabChange('messages');
              }}
            />

            {/* Main Screen Views with Staggered Framer Motion Transitions */}
            <main className="flex-1">
              <AnimatePresence mode="wait">
                {activeTab === 'home' && (
                  <HomeView
                    key="home"
                    onBookCourt={() => setBookingModalOpen(true)}
                    onOpenMatchmaker={() => setMatchmakerModalOpen(true)}
                    onNavigateTab={handleTabChange}
                  />
                )}
                {activeTab === 'players' && (
                  <PlayersView
                    key="players"
                    onOpenChat={handleOpenPlayerChat}
                  />
                )}
                {activeTab === 'programs' && (
                  <ProgramsView
                    key="programs"
                    onEnroll={handleOpenEnroll}
                  />
                )}
                {activeTab === 'coaches' && (
                  <CoachesView
                    key="coaches"
                    onBookCoach={handleOpenCoachBooking}
                  />
                )}
                {activeTab === 'messages' && (
                  <MessagesView
                    key="messages"
                    onSelectThread={handleSelectThread}
                    onNewInquiry={handleNewInquiry}
                  />
                )}
                {activeTab === 'profile' && (
                  <ProfileView
                    key="profile"
                    onBack={handleBackFromProfile}
                    onLogout={() => setShowSplash(true)}
                    onBookCourt={() => setBookingModalOpen(true)}
                  />
                )}
              </AnimatePresence>
            </main>

            {/* Floating Animated Bottom Navigation */}
            <BottomNav
              activeTab={activeTab}
              setActiveTab={handleTabChange}
              unreadChatCount={2}
            />

            {/* Modals */}
            <BookingModal
              isOpen={bookingModalOpen}
              onClose={() => setBookingModalOpen(false)}
            />
            <EnrollModal
              isOpen={enrollModalOpen}
              onClose={() => setEnrollModalOpen(false)}
              programTitle={selectedProgramTitle}
            />
            <MatchmakerModal
              isOpen={matchmakerModalOpen}
              onClose={() => setMatchmakerModalOpen(false)}
            />
            <ChatModal
              isOpen={chatModalOpen}
              onClose={() => setChatModalOpen(false)}
              thread={selectedThread}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
