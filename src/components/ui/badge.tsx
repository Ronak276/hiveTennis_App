import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'lime' | 'dark' | 'outline' | 'secondary' | 'live' | 'alert' | 'ghost';
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variantStyles = {
    default: 'bg-slate-100 text-slate-800 border-transparent',
    lime: 'bg-[#8DC61F]/20 text-[#172100] font-bold border-[#8DC61F]/30',
    dark: 'bg-[#17171A] text-white font-bold border-transparent',
    outline: 'border-slate-200 text-slate-700 bg-white',
    secondary: 'bg-slate-100 text-slate-700 border-transparent',
    live: 'bg-red-500 text-white font-extrabold animate-pulse border-transparent',
    alert: 'bg-amber-100 text-amber-800 border-amber-200',
    ghost: 'bg-transparent text-slate-600 border-transparent',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
