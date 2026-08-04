import { InstagramIcon, TikTokIcon } from "@/components/SocialIcons";
import { SOCIAL_LINKS } from "@/lib/social";

const icons = {
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
} as const;

type SocialLinksProps = {
  className?: string;
  linkClassName?: string;
  iconClassName?: string;
  showLabels?: boolean;
};

export function SocialLinks({
  className = "",
  linkClassName = "",
  iconClassName = "h-5 w-5",
  showLabels = false,
}: SocialLinksProps) {
  return (
    <div className={className}>
      {SOCIAL_LINKS.map((link) => {
        const Icon = icons[link.label];
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={linkClassName}
          >
            <Icon className={iconClassName} />
            {showLabels ? <span>{link.label}</span> : null}
          </a>
        );
      })}
    </div>
  );
}
