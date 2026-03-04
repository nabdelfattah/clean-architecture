import { cn } from "@/src/lib/cn";

/**
 * Props for the Title component.
 */
interface TitleProp {
  /**
   * The HTML element type to render.
   * @default "h2"
   */
  type?: "h1" | "h2" | "h3" | "p";

  /**
   * Text color variant.
   * @default "black"
   */
  color?: "black" | "white";

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

/**
 * A reusable typography component built following the Atomic Design pattern.
 *
 * Supports multiple semantic HTML tags (`h1`, `h2`, `h3`, `p`)
 * with configurable color, alignment, and custom styling.
 *
 * @component
 *
 * @example
 * // Default usage (renders h2)
 * <Title>Section Heading</Title>
 *
 * @example
 * // Render as h1
 * <Title type="h1">Main Heading</Title>
 *
 * @example
 * // White centered title
 * <Title type="h2" color="white" isCentered>
 *   Hero Title
 * </Title>
 */

export default function Title({
  type = "h2",
  color = "black",
  isCentered = true,
  className = "",
  children,
}: TitleProp) {
  let content = (
    <h2
      className={cn(
        "ds-leading-full ds-font-playfair font-normal ds-txt-lg",
        color === "white" ? "ds-txt-white" : "ds-txt-black",
        isCentered ? "text-center" : "",
        className,
      )}
    >
      {children}
    </h2>
  );

  if (type === "h1")
    content = (
      <h1
        className={cn(
          "ds-txt-black text-center ds-font-playfair font-normal ds-txt-xl ds-leading-full",
          className,
        )}
      >
        {children}
      </h1>
    );
  else if (type === "p")
    content = (
      <p
        className={cn(
          "ds-txt-black ds-font-playfair ds-leading-full text-xl font-normal",
          className,
        )}
      >
        {children}
      </p>
    );

  return content;
}
