"use client";

import {
  ChartPie,
  Contact,
  LayoutDashboard,
  QrCode,
  Settings2,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { APP_INFO } from "@/constants/app-constants";

const data = {
  user: {
    name: "@jayakrishnan",
    email: "jk@example.com",
    avatar: "",
  },
  navMain: [
    {
      title: "Links",
      url: "links",
      icon: LayoutDashboard,
    },
    {
      title: "Analytics",
      url: "analytics",
      icon: ChartPie,
    },
    {
      title: "Contacts",
      url: "contacts",
      icon: Contact,
    },
    {
      title: "Settings",
      url: "settings",
      icon: Settings2,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <QrCode className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-xl leading-tight">
                  <span className="truncate font-semibold">
                    {APP_INFO.name}
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
