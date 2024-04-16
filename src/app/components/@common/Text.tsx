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
      href={href}
      className={cn(
        "hover:underline hover:text-font_link_hover_color text-content_size text-font_link_color ",
        className
      )}
    >
      {children}
    </a>
  );
};

export const DocumentHyperLinkText = ({
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
        "hover:underline hover:text-font_link_hover_color text-content_size text-font_link_color ",
        className
      )}
    >
      {children}
    </a>
  );
};
