import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  PenSquare,
  Paperclip,
  Check,
  CheckCheck,
  FileText,
  Video,
  Users,
  Building2,
  Zap,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { MOCK_CHAT_THREADS, ChatThread } from '@/data/mockData';

interface MessagesViewProps {
  onSelectThread: (thread: ChatThread) => void;
  onNewInquiry: () => void;
}

export const MessagesView: React.FC<MessagesViewProps> = ({
  onSelectThread,
  onNewInquiry,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All Chats');

  const liveStories = [
    {
      id: 's1',
      name: 'Coach Alex',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80',
      isOnline: true,
    },
    {
      id: 's2',
      name: 'Elena R.',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=250&q=80',
      isOnline: true,
    },
    {
      id: 's3',
      name: 'Club Desk',
      isIcon: true,
      icon: Building2,
      isOnline: true,
    },
    {
      id: 's4',
      name: 'Drill Grp A',
      isIcon: true,
      icon: Zap,
      isOnline: false,
    },
    {
      id: 's5',
      name: 'Marcus B.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
      isOnline: false,
    },
  ];

  const filteredThreads = MOCK_CHAT_THREADS.filter((thread) => {
    const matches = thread.senderName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    if (selectedFilter === 'Direct (Coaches)') {
      return matches && thread.senderRole === 'PRO';
    }
    if (selectedFilter === 'Group Clinics') {
      return matches && (thread.isGroup || thread.senderRole === 'Group');
    }
    return matches;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="space-y-4 pb-24 px-4 pt-3 max-w-md mx-auto relative min-h-[85vh]"
    >
      {/* Subheader */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-black tracking-widest text-[#8DC61F] uppercase block">
            INBOX & COMMUNITY
          </span>
          <h1 className="text-2xl font-black text-[#17171A] tracking-tight">
            Communications
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            Drills feedback, court scheduling, and coaching discussions
          </p>
        </div>
        <span className="flex items-center space-x-1 rounded-full bg-[#8DC61F]/15 border border-[#8DC61F]/30 px-3 py-1 text-xs font-bold text-[#172100]">
          <span className="h-2 w-2 rounded-full bg-[#8DC61F] animate-pulse" />
          <span>4 Active</span>
        </span>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search chats, coaches, or announcements..."
          className="pl-10 h-11 text-xs bg-white rounded-2xl"
        />
      </div>

      {/* Filter Chips */}
      <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
        {['● All Chats', 'Direct (Coaches)', 'Group Clinics'].map((chip) => {
          const isSelected =
            selectedFilter === chip ||
            (chip.includes('All Chats') && selectedFilter === 'All Chats');
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

      {/* Live on Court Story Row */}
      <div className="space-y-1 pt-1">
        <div className="flex items-center justify-between text-xs font-extrabold text-slate-500">
          <span>LIVE ON COURT</span>
          <span className="text-[#8DC61F] font-bold">2 Online</span>
        </div>

        <div className="flex items-center space-x-3 overflow-x-auto no-scrollbar py-2">
          {liveStories.map((story) => (
            <button
              key={story.id}
              className="flex flex-col items-center space-y-1 shrink-0 cursor-pointer group focus:outline-none"
            >
              <div className="relative p-0.5 rounded-full ring-2 ring-[#8DC61F] group-hover:scale-105 transition-transform">
                {story.avatar ? (
                  <Avatar className="h-12 w-12" isOnline={story.isOnline}>
                    <AvatarImage src={story.avatar} alt={story.name} />
                    <AvatarFallback>{story.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8DC61F]/20 text-[#172100]">
                    {story.icon && <story.icon className="h-5 w-5" />}
                  </div>
                )}
              </div>
              <span className="text-[10px] font-bold text-[#17171A] truncate max-w-[64px]">
                {story.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Threads List */}
      <div className="space-y-3 pt-1">
        {filteredThreads.map((thread) => (
          <motion.div
            key={thread.id}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectThread(thread)}
            className="cursor-pointer"
          >
            <Card className="p-4 hive-card-gradient">
              <div className="flex items-start space-x-3">
                <Avatar className="h-12 w-12" isOnline={thread.isOnline}>
                  <AvatarImage src={thread.avatar} alt={thread.senderName} />
                  <AvatarFallback>
                    {thread.senderName.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <h3 className="font-extrabold text-sm text-[#17171A] truncate">
                        {thread.senderName}
                      </h3>
                      {thread.senderRole && (
                        <Badge
                          variant={
                            thread.senderRole === 'PRO'
                              ? 'lime'
                              : thread.senderRole === 'Official'
                              ? 'dark'
                              : 'secondary'
                          }
                          className="text-[9px] px-1.5 py-0"
                        >
                          {thread.senderRole}
                        </Badge>
                      )}
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400">
                      {thread.time}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 font-medium truncate mt-0.5">
                    {thread.lastMessage}
                  </p>

                  {/* Attachment or Tags */}
                  <div className="mt-2 flex items-center justify-between text-[11px]">
                    <div className="flex items-center space-x-2">
                      {thread.attachment && (
                        <span className="flex items-center space-x-1 bg-blue-50 text-blue-800 px-2 py-0.5 rounded-md font-semibold text-[10px]">
                          <Paperclip className="h-3 w-3" />
                          <span>{thread.attachment}</span>
                        </span>
                      )}
                      {thread.tag && (
                        <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-bold text-[10px]">
                          {thread.tag}
                        </span>
                      )}
                    </div>

                    <div>
                      {thread.unreadCount && thread.unreadCount > 0 ? (
                        <motion.span
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8DC61F] text-[#172100] text-[10px] font-extrabold"
                        >
                          {thread.unreadCount}
                        </motion.span>
                      ) : (
                        <span className="text-[10px] font-medium text-slate-400">
                          {thread.status || '✓ Read'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Floating Action Button - New Inquiry */}
      <div className="fixed bottom-20 right-4 z-30">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={onNewInquiry}
            size="lg"
            className="bg-[#8DC61F] text-[#172100] hover:bg-[#7eb519] font-extrabold rounded-full shadow-lg shadow-[#8DC61F]/40 px-5 py-3 flex items-center space-x-2"
          >
            <PenSquare className="h-5 w-5" />
            <span>New Inquiry</span>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};
