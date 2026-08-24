"use client";

import * as React from "react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from "@/app/ui/shadcn-components/sidebar";
import { Separator } from "@/app/ui/shadcn-components/separator";
import { RiRobot3Line } from "react-icons/ri";
import { RxSwitch } from "react-icons/rx";
import { GiMountains } from "react-icons/gi";
import { PiVideoConference } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";

import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";

const links = [
  {
    title: "Home",
    href: "/",
    icon: IoHomeOutline,
  },
  { title: "AI ChatBot", href: "/projects/ai-chatbot", icon: RiRobot3Line },
  {
    title: "Ask AI about me",
    href: "/projects/ask-ai-about-me",
    icon: FaUserTie,
  },
  {
    title: "Video Call",
    href: "/projects/video-call",
    icon: PiVideoConference,
  },
  {
    title: "IOT Switch",
    href: "/projects/iot-switch",
    icon: RxSwitch,
  },
  {
    title: "Travel Stories",
    href: "/projects/travel-stories",
    icon: GiMountains,
  },
];

import RRLogo from "@/app/ui/RR-Logo";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar {...props} collapsible="icon">
      <SidebarHeader className="mb-4">
        <Link
          className="flex items-end justify-center p-4. rounded-md"
          href="/"
        >
          <RRLogo />
        </Link>
      </SidebarHeader>
      <Separator
        orientation="horizontal"
        className="mr-2 h-4 text-foreground group-data-[collapsible=icon]:hidden bg-foreground"
      />
      <SidebarContent className="mt-4">
        <SidebarMenu className="group-data-[state=expanded]:px-0 py-2">
          {links.map((item) => (
            <SidebarMenuItem key={item.title}>
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "flex h-12 grow items-center justify-center gap-2 bg-brand-600 p-3 text-sm font-medium hover:bg-brand-700 hover:text-white md:flex-none md:justify-start whitespace-nowrap",
                  {
                    "bg-brand-700 text-white border-brand-800":
                      pathname === item.href,
                  },
                )}
              >
                {item.icon && <item.icon className="text-2xl" />}
                <p className="md:block group-data-[collapsible=icon]:position-absolute group-data-[collapsible=icon]:-ml-200 transition-all duration-300 ease-in-out group-data-[state=collapsed]:opacity-0">
                  {item.title}
                </p>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
