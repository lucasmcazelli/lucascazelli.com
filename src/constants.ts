import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import { SITE } from "@/config";
import IconCloud from "@/assets/icons/IconCloud.svg";
import IconBookOpen from "@/assets/icons/IconBookOpen.svg";
import IconHelpCircle from "@/assets/icons/IconHelpCircle.svg";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/lucasmcazelli",
    linkTitle: `${SITE.title} on GitHub`,
    icon: IconGitHub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/lucascazelli",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "X",
    href: "https://twitter.com/othelucas",
    linkTitle: `${SITE.title} on X (Twitter)`,
    icon: IconBrandX,
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/lucascazelli.bsky.social",
    linkTitle: `${SITE.title} on Bluesky`,
    icon: IconCloud,
  },
  {
    name: "Medium",
    href: "https://medium.com/@lucas.mcazelli",
    linkTitle: `${SITE.title} on Medium`,
    icon: IconBookOpen,
  },
  {
    name: "Quora",
    href: "https://www.quora.com/profile/Lucas-Mischiatti-Cazelli",
    linkTitle: `${SITE.title} on Quora`,
    icon: IconHelpCircle,
  },
  {
    name: "Mail",
    href: "mailto:lucascazelli@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: IconWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
    icon: IconFacebook,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Share this post via Telegram`,
    icon: IconTelegram,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: `Share this post on Pinterest`,
    icon: IconPinterest,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
