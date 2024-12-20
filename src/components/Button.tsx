// Tailwind Merge
import { twMerge } from "tailwind-merge";

// Class Variance Authority
import { cva, type VariantProps } from "class-variance-authority";

// clsx
import { clsx } from "clsx";

const buttonVariants = cva(
  // Base styles
  "inline-flex items-center justify-center rounded-md font-medium transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-primary hover:bg-primary-dark text-white",
        secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900",
      },
      size: {
        sm: "px-4 py-1.5 text-sm",
        md: "px-6 py-2 text-base",
        lg: "px-8 py-3 text-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export default function Button({
  children,
  variant,
  size,
  fullWidth,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        clsx(buttonVariants({ variant, size, fullWidth, className }))
      )}
      {...props}
    >
      {children}
    </button>
  );
}
