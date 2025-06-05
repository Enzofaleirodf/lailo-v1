
import * as React from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface InputWithIconProps extends Omit<React.ComponentProps<"input">, "className"> {
  icon: LucideIcon
  className?: string
  containerClassName?: string
}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(
  ({ icon: Icon, className, containerClassName, ...props }, ref) => {
    return (
      <div className={cn(
        "flex items-center w-full rounded-lg border border-gray-200 bg-white transition-colors focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500",
        containerClassName
      )}>
        <Icon className="w-4 h-4 text-gray-400 ml-3 flex-shrink-0" />
        <input
          className={cn(
            "flex-1 h-10 bg-transparent px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
InputWithIcon.displayName = "InputWithIcon"

export { InputWithIcon }
