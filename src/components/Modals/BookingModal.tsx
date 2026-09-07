import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, CheckCircle2, MapPin, Trophy } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [selectedCourt, setSelectedCourt] = useState('Court 01 (Clay)');
  const [selectedTime, setSelectedTime] = useState('4:00 PM - 5:30 PM');
  const [isSuccess, setIsSuccess] = useState(false);

  const courts = [
    'Court 01 (Clay)',
    'Court 02 (Hard)',
    'Court 03 (Hard)',
    'Court 04 (Indoor)',
  ];

  const times = [
    '2:00 PM - 3:30 PM',
    '4:00 PM - 5:30 PM',
    '6:00 PM - 7:30 PM',
    '8:00 PM - 9:30 PM',
  ];

  const handleBook = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-xl font-extrabold text-[#17171A]">
            <span>🎾 Book Tournament Court</span>
          </DialogTitle>
          <DialogDescription>
            Select your preferred court number, surface, and time slot for today.
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="py-8 flex flex-col items-center justify-center text-center space-y-3"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#8DC61F]/20 text-[#172100]">
                <CheckCircle2 className="h-10 w-10 text-[#8DC61F]" />
              </div>
              <h3 className="text-xl font-black text-[#17171A]">
                Court Booked Successfully!
              </h3>
              <p className="text-xs text-slate-500 max-w-xs">
                Your reservation for <strong>{selectedCourt}</strong> at{' '}
                <strong>{selectedTime}</strong> has been confirmed. Pass sent to your wallet.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4 pt-2"
            >
              {/* Select Court */}
              <div>
                <label className="text-xs font-extrabold text-slate-700 block mb-1.5">
                  SELECT COURT & SURFACE
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {courts.map((court) => (
                    <button
                      key={court}
                      onClick={() => setSelectedCourt(court)}
                      className={`p-3 rounded-xl border text-xs font-extrabold text-left transition-all cursor-pointer ${
                        selectedCourt === court
                          ? 'border-[#8DC61F] bg-[#8DC61F]/10 text-[#172100] ring-1 ring-[#8DC61F]'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {court}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Time */}
              <div>
                <label className="text-xs font-extrabold text-slate-700 block mb-1.5">
                  AVAILABLE TIME SLOTS
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {times.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                        selectedTime === time
                          ? 'border-[#8DC61F] bg-[#8DC61F] text-[#172100]'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Fee summary */}
              <div className="rounded-xl bg-slate-50 p-3 border border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-600 font-semibold">
                  Peak Rate (Member Discount)
                </span>
                <span className="text-base font-black text-[#17171A]">
                  $45 / 90 mins
                </span>
              </div>

              {/* Confirm Button */}
              <Button
                onClick={handleBook}
                size="lg"
                className="w-full bg-[#8DC61F] text-[#172100] hover:bg-[#7eb519] font-extrabold rounded-2xl py-3 shadow-md shadow-[#8DC61F]/30"
              >
                Confirm & Pay $45
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};
