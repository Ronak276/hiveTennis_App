import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Paperclip, Phone, Video, MoreVertical, CheckCheck } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ChatThread } from '@/data/mockData';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  thread: ChatThread | null;
}

export const ChatModal: React.FC<ChatModalProps> = ({
  isOpen,
  onClose,
  thread,
}) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'them',
      text: 'Hey Alex! Great topspin drills today. Reviewing video of your wrist snap at baseline...',
      time: '10:42 AM',
    },
    {
      id: 2,
      sender: 'me',
      text: 'Thanks Coach! Felt much cleaner on the forehand side. Ready for Saturday match!',
      time: '10:45 AM',
    },
  ]);

  const [inputMsg, setInputMsg] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: 'me',
        text: inputMsg,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setInputMsg('');
  };

  if (!thread) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden flex flex-col h-[80vh] max-h-[600px] border border-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between p-3.5 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 border border-[#8DC61F]" isOnline={thread.isOnline}>
              <AvatarImage src={thread.avatar} alt={thread.senderName} />
              <AvatarFallback>{thread.senderName.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-1.5">
                <h3 className="font-extrabold text-sm leading-none">
                  {thread.senderName}
                </h3>
                {thread.senderRole && (
                  <Badge variant="lime" className="text-[8px] px-1 py-0">
                    {thread.senderRole}
                  </Badge>
                )}
              </div>
              <span className="text-[10px] text-slate-400 font-medium">
                {thread.isOnline ? 'Active on Court 2' : 'Last seen 2h ago'}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-300 hover:text-white">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-300 hover:text-white">
              <Video className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Messages List Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50">
          <div className="text-center">
            <span className="rounded-full bg-slate-200 text-slate-600 px-3 py-0.5 text-[9px] font-bold">
              TODAY
            </span>
          </div>

          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[78%] rounded-2xl px-3.5 py-2 text-xs shadow-2xs ${
                  msg.sender === 'me'
                    ? 'bg-[#8DC61F] text-[#172100] font-semibold rounded-tr-xs'
                    : 'bg-white text-slate-800 font-medium rounded-tl-xs border border-slate-200/80'
                }`}
              >
                <p>{msg.text}</p>
                <div
                  className={`flex items-center justify-end space-x-1 text-[9px] mt-1 ${
                    msg.sender === 'me' ? 'text-[#172100]/70' : 'text-slate-400'
                  }`}
                >
                  <span>{msg.time}</span>
                  {msg.sender === 'me' && <CheckCheck className="h-3 w-3" />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message Input Footer */}
        <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex items-center space-x-2">
          <Button variant="ghost" size="icon" type="button" className="h-10 w-10 text-slate-500">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Input
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 h-10 text-xs rounded-xl"
          />
          <Button
            type="submit"
            size="icon"
            className="h-10 w-10 bg-[#8DC61F] text-[#172100] hover:bg-[#7eb519] rounded-xl shrink-0"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
