import { cn } from "@/app/lib/utils";

export const HyperLinkText = ({
  className,
  href,
  children,
}: {
  className?: string;
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href="https://www.naver.com"
      className={cn(
        "text-font_link_color hover:underline hover:text-font_link_hover_color",
        className
      )}
    >
      {children}
    </a>
  );
};
