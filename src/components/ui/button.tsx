
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { designTokens } from "../../styles/design-tokens"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 uppercase",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 font-geist",
        destructive: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 font-geist",
        outline: "border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 text-gray-700 active:bg-gray-100 font-geist",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 font-geist",
        ghost: "hover:bg-gray-100 hover:text-gray-900 text-gray-700 active:bg-gray-200 font-geist",
        link: "text-blue-600 underline-offset-4 hover:underline hover:text-blue-700 font-inter font-medium normal-case",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-lg px-8",
        icon: "h-10 w-10",
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
        style={{
          height: size === 'sm' ? '36px' : size === 'lg' ? '44px' : '40px',
          fontFamily: variant === 'link' ? "'Inter', system-ui, sans-serif" : "'Geist', system-ui, sans-serif",
          fontWeight: '600',
        }}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
