interface BadgeProps {
  variant?: "primary" | "secondary" | "success" | "warning" | "danger";
  label: string;
  size?: "small" | "medium" | "large";
  className?: string;
}

const Badge = ({ variant, label, size, className }: BadgeProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-primary text-white";
      case "secondary":
        return "bg-accent text-black";
      case "success":
        return "bg-[#89FF41] text-black";
      case "warning":
        return "bg-yellow-500 text-black";
      case "danger":
        return "bg-destructive text-black";
      default:
        return "bg-primary text-white";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "text-xs py-1 px-2";
      case "medium":
        return "text-sm py-1 px-3";
      case "large":
        return "text-lg py-2 px-4";
      default:
        return "text-sm py-1 px-3";
    }
  };

  return (
    <span
      className={`inline-block rounded-full ${getVariantClasses()} ${getSizeClasses()} ${className}`}
    >
      {label}
    </span>
  );
};

export default Badge;
