interface TextProp {
  /**
   * Text color variant.
   * @default "black"
   */
  color?: "black" | "gray";
  /**
   * Text font size.
   * @default "md"
   */
  size?: "sm" | "md" | "lg";

  /**
   * Centers the text horizontally.
   * @default true
   */
  isCentered?: boolean;

  /**
   * Additional custom class names.
   */
  className?: string;

  /**
   * The content to be displayed inside the title.
   */
  children: React.ReactNode;
}

export default function Text({
  color = "gray",
  size = "md",
  isCentered = true,
  className = "",
  children,
}: TextProp) {
  const colors = {
    black: "ds-txt-gray",
    gray: "ds-txt-gray-light",
  };
  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "ds-text-lg",
  };
  return (
    <p
      className={`ds-font-montserrat ${colors[color]} ${sizes[size]} ${isCentered ? "text-center" : ""} ${className}`}
    >
      {children}
    </p>
  );
}
