import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'default' | 'outline' | 'ghost' | 'secondary' | 'dark' | 'lime';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const variantStyles = {
      default: 'bg-[#8DC61F] text-[#172100] font-bold shadow-md shadow-[#8DC61F]/20 hover:bg-[#7eb519] active:scale-[0.97]',
      lime: 'bg-[#8DC61F] text-[#172100] font-bold hover:bg-[#7eb519] active:scale-[0.97]',
      dark: 'bg-[#17171A] text-white font-semibold hover:bg-slate-800 active:scale-[0.97]',
      outline: 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-medium active:scale-[0.97]',
      secondary: 'bg-slate-100 text-slate-800 hover:bg-slate-200 font-medium active:scale-[0.97]',
      ghost: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium active:scale-[0.97]',
    };

    const sizeStyles = {
      default: 'h-10 px-4 py-2 text-sm rounded-xl',
      sm: 'h-8 px-3 text-xs rounded-lg',
      lg: 'h-12 px-6 text-base rounded-2xl',
      icon: 'h-9 w-9 p-0 rounded-xl justify-center items-center',
    };

    return (
      <Comp
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8DC61F] disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
