
import type { ReactNode, ButtonHTMLAttributes } from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "light" | "outline";
  showArrow?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  showArrow = true,
  className = "",
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-[#142B22] text-white hover:bg-[#254B39]",
    light: "bg-[#D7C7A4] text-[#142B22] hover:bg-white",
    outline:
      "border border-[#142B22] text-[#142B22] hover:bg-[#142B22] hover:text-white",
  };

  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-4 px-7 py-4 text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
      {showArrow && <ArrowUpRight size={18} />}
    </button>
  );
};

export default Button;
