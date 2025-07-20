import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 touch-manipulation active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // TC Shine Custom Variants
        whatsapp: "bg-gradient-to-r from-tc-whatsapp-500 to-tc-whatsapp-600 text-white hover:from-tc-whatsapp-600 hover:to-tc-whatsapp-700 hover:scale-105 hover:shadow-lg focus:ring-tc-whatsapp-500 focus:ring-offset-2 animate-pulse-whatsapp hover:animate-none",
        primary: "bg-gradient-to-r from-tc-primary-500 to-tc-primary-600 text-white hover:from-tc-primary-600 hover:to-tc-primary-700 hover:scale-105 hover:shadow-lg focus:ring-tc-primary-500 focus:ring-offset-2",
        hero: "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:scale-105 backdrop-blur-sm focus:ring-white/50 focus:ring-offset-2",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 min-h-[40px]",
        lg: "h-12 rounded-lg px-8 text-base min-h-[48px]",
        xl: "h-14 rounded-xl px-10 text-lg min-h-[56px]",
        icon: "h-10 w-10",
        full: "w-full h-12 px-6 min-h-[48px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

// Specialized WhatsApp Button
interface WhatsAppButtonProps extends Omit<ButtonProps, 'variant'> {
  phoneNumber?: string
  message?: string
}

const WhatsAppButton = React.forwardRef<HTMLButtonElement, WhatsAppButtonProps>(
  ({ children, phoneNumber = "15615231300", message, onClick, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(e)
      } else {
        const url = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`
        window.open(url, '_blank', 'noopener,noreferrer')
      }
    }
    
    return (
      <Button
        variant="whatsapp"
        onClick={handleClick}
        ref={ref}
        {...props}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
        </svg>
        {children}
      </Button>
    )
  }
)

WhatsAppButton.displayName = "WhatsAppButton"

export { Button, buttonVariants, WhatsAppButton }
