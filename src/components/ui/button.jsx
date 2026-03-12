// Generated with Claude Code assistance
import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  // Base styles shared by all variants
  'inline-flex items-center justify-center gap-2 font-bold font-sans rounded-[8px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none',
  {
    variants: {
      variant: {
        primary:   'bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-hover',
        secondary: 'bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary-soft',
        ghost:     'bg-transparent text-text-secondary border-[1.5px] border-border hover:bg-background-soft hover:text-text-primary',
        danger:    'bg-[#E57373] text-white hover:bg-[#C62828]',
        link:      'bg-transparent text-primary underline-offset-4 hover:underline',
      },
      size: {
        sm:   'text-[12px] px-[14px] py-[7px]',
        md:   'text-[13px] px-[18px] py-[9px]',
        lg:   'text-[15px] px-[28px] py-[13px]',
        icon: 'w-9 h-9 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

const Button = forwardRef(function Button(
  { className, variant, size, asChild = false, children, ...props },
  ref
) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Comp>
  )
})

Button.displayName = 'Button'
export { Button, buttonVariants }
