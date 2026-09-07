import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  programTitle: string;
}

export const EnrollModal: React.FC<EnrollModalProps> = ({
  isOpen,
  onClose,
  programTitle,
}) => {
  const [playerName, setPlayerName] = useState('Alex Mercer Jr.');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          <DialogTitle className="text-xl font-extrabold text-[#17171A]">
            Enroll in Program
          </DialogTitle>
          <DialogDescription>
            You are registering for <strong>{programTitle || 'Tennis Clinic'}</strong>.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="py-8 flex flex-col items-center justify-center text-center space-y-3"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#8DC61F]/20 text-[#172100]">
              <CheckCircle2 className="h-10 w-10 text-[#8DC61F]" />
            </div>
            <h3 className="text-xl font-black text-[#17171A]">
              Registration Confirmed!
            </h3>
            <p className="text-xs text-slate-500 max-w-xs">
              <strong>{playerName}</strong> is registered for {programTitle}. Welcome kit sent via email!
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleEnrollSubmit} className="space-y-4 pt-2">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                PLAYER FULL NAME
              </label>
              <Input
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Enter player name..."
                required
                className="h-11 rounded-xl text-xs"
              />
            </div>

            <div className="rounded-xl bg-slate-50 p-3 border border-slate-200 text-xs space-y-1">
              <div className="flex justify-between font-bold text-slate-800">
                <span>Tuition / Session Fee</span>
                <span>$450.00</span>
              </div>
              <div className="flex justify-between text-slate-500 text-[11px]">
                <span>Hive Member Discount</span>
                <span className="text-[#8DC61F] font-bold">-$50.00</span>
              </div>
              <div className="flex justify-between text-base font-black text-[#17171A] pt-2 border-t border-slate-200">
                <span>Total Due</span>
                <span>$400.00</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-[11px] text-slate-500">
              <ShieldCheck className="h-4 w-4 text-[#8DC61F]" />
              <span>Full refund available up to 48h before start</span>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#8DC61F] text-[#172100] hover:bg-[#7eb519] font-extrabold rounded-2xl py-3 shadow-md shadow-[#8DC61F]/30"
            >
              Complete Enrollment ($400)
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
