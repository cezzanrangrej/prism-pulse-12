import { Hexagon } from "lucide-react";

const PrismLogo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const iconSizes = {
    sm: 20,
    md: 28,
    lg: 36,
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`${sizes[size]} relative flex items-center justify-center`}>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan to-purple opacity-20 blur-xl rounded-lg" />
        <div className="relative bg-gradient-to-br from-cyan to-purple p-2 rounded-lg">
          <Hexagon className="text-background" size={iconSizes[size]} fill="currentColor" />
        </div>
      </div>
      <span className={`font-bold bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent ${
        size === "sm" ? "text-xl" : size === "md" ? "text-2xl" : "text-3xl"
      }`}>
        Project Prism
      </span>
    </div>
  );
};

export default PrismLogo;
