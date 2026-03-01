import { cn } from "@/src/lib/cn";

interface TitleProp {
  type?: "h1" | "h2" | "h3" | "p";
  color?: "black" | "white";
  isCentered?: boolean;
  className?: string;
  children: React.ReactNode;
}

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
