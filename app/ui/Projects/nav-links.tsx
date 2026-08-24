'use client';

import { SiProbot } from "react-icons/si";
import { RxSwitch } from "react-icons/rx";
import { GiMountains } from "react-icons/gi";
import { MdOutlineVideoCall } from "react-icons/md";



import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'AI ChatBot', href: '/projects/ai-chatbot', icon: SiProbot },
  { name: 'Ask AI about me', href: '/projects/ask-ai-about-me', icon: SiProbot },
  {
    name: 'IOT Switch',
    href: '/projects/iot-switch',
    icon: RxSwitch,
  },
  { name: 'Travel Stories', href: '/projects/travel-stories', icon: GiMountains },
  { name: 'Video Call', href: '/projects/video-call', icon: MdOutlineVideoCall },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-brand-600 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-white text-foreground': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="text-2xl" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
