import { cn } from "@/src/lib/cn";
import Link from "next/link";

/**
 * Props for the Button component.
 */
interface ButtonProp {
  /**
   * Determines whether the component renders a native <button>
   * or a Next.js <Link>.
   *
   * @default "button"
   */
  type?: "button" | "link";

  /**
   * Visual style variant of the button.
   *
   * - `primary`   → Main brand button
   * - `outline`   → Transparent with border
   * - `secondary` → Neutral background
   * - `black`     → Dark background variant
   *
   * @default "primary"
   */
  variant?: "primary" | "outline" | "secondary" | "black";

  /**
   * Controls text size of the button.
   *
   * - `sm`   → Small
   * - `md`   → Medium
   * - `full` → Large
   *
   * @default "md"
   */
  size?: "sm" | "md" | "full";

  /**
   * Target URL when `type="link"`.
   *
   * @default "/"
   */
  href?: string;

  /**
   * Click handler when rendered as a native button.
   */
  onClick?: () => void;

  /**
   * Additional custom class names.
   */
  className?: string;

  /**
   * Content displayed inside the button.
   */
  children: React.ReactNode;
}

/**
 * Reusable Button component built following the Atomic Design pattern.
 *
 * Supports rendering as either:
 * - A native `<button>`
 * - A Next.js `<Link>`
 *
 * Includes size and variant customization for consistent design system usage.
 *
 * @component
 *
 * @example
 * // Primary button
 * <Button onClick={handleClick}>
 *   Submit
 * </Button>
 *
 * @example
 * // Outline large button
 * <Button variant="outline" size="full">
 *   Learn More
 * </Button>
 *
 * @example
 * // Link button
 * <Button type="link" href="/about">
 *   Go to About
 * </Button>
 */
export default function Button({
  type = "button",
  variant = "primary",
  size = "md",
  href = "/",
  onClick = () => {},
  className = "",
  children,
}: ButtonProp) {
  const sizes = {
    sm: "ds-text-sm",
    md: "ds-text-base",
    full: "ds-text-lg",
  };
  const variants = {
    primary: "ds-txt-white ds-bg-primary hover:ds-bg-blue-hover",
    outline: "ds-txt-blue ds-border-primary ds-border hover:ds-bg-primary",
    secondary: "ds-txt-black ds-bg-gray-light hover:ds-bg-gray-dark",
    black: "ds-txt-white ds-bg-blue-dark hover:ds-bg-gray-dark",
  };
  let content = (
    <button
      className={cn(
        "p-3 ds-radius-sm flex gap-2 items-center justify-center cursor-pointer transition-all duration-300",
        sizes[size],
        variants[variant],
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
  if (type === "link")
    content = (
      <Link
        href={href}
        className={cn(
          "p-3 ds-radius-sm flex gap-2 items-center justify-center transition-all duration-300",
          sizes[size],
          variants[variant],
          className,
        )}
      >
        {children}
      </Link>
    );
  return content;
}
