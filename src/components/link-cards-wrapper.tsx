"use client";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import { BlockCard } from "@/components/blocks/block-card";
import { Button } from "@/components/ui/button";
import { APP_INFO } from "@/constants/app-constants";
import { QrCode } from "lucide-react";
import { type Layouts, Responsive, WidthProvider } from "react-grid-layout";
import { LinkrClassicTheme } from "@/themes/classic-theme";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const LinkCardsWrapper = () => {
  // const theme1Layout: Layouts = {
  //   lg: [
  //     {
  //       w: 8,
  //       h: 1,
  //       x: 0,
  //       y: 0,
  //       i: "1",
  //       moved: false,
  //       static: false,
  //     },
  //     {
  //       w: 4,
  //       h: 13,
  //       x: 4,
  //       y: 1,
  //       i: "5",
  //       moved: false,
  //       static: false,
  //     },
  //     {
  //       w: 4,
  //       h: 8,
  //       x: 0,
  //       y: 1,
  //       i: "2",
  //       moved: false,
  //       static: false,
  //     },
  //     {
  //       w: 2,
  //       h: 5,
  //       x: 0,
  //       y: 9,
  //       i: "3",
  //       moved: false,
  //       static: false,
  //     },
  //     {
  //       w: 2,
  //       h: 5,
  //       x: 2,
  //       y: 9,
  //       i: "4",
  //       moved: false,
  //       static: false,
  //     },
  //   ],
  //   md: [
  //     {
  //       i: "1",
  //       x: 0,
  //       y: 0,
  //       w: 4,
  //       h: 5,
  //     },
  //     {
  //       i: "2",
  //       x: 4,
  //       y: 0,
  //       w: 4,
  //       h: 5,
  //     },
  //     {
  //       i: "3",
  //       x: 8,
  //       y: 0,
  //       w: 4,
  //       h: 5,
  //     },
  //     {
  //       i: "4",
  //       x: 8,
  //       y: 0,
  //       w: 4,
  //       h: 5,
  //     },
  //     {
  //       i: "5",
  //       x: 8,
  //       y: 0,
  //       w: 4,
  //       h: 5,
  //     },
  //   ],
  //   sm: [
  //     {
  //       i: "1",
  //       x: 0,
  //       y: 0,
  //       w: 6,
  //       h: 5,
  //     },
  //     {
  //       i: "2",
  //       x: 6,
  //       y: 0,
  //       w: 6,
  //       h: 5,
  //     },
  //     {
  //       i: "3",
  //       x: 0,
  //       y: 2,
  //       w: 6,
  //       h: 5,
  //     },
  //     {
  //       i: "4",
  //       x: 0,
  //       y: 2,
  //       w: 6,
  //       h: 5,
  //     },
  //     {
  //       i: "5",
  //       x: 0,
  //       y: 2,
  //       w: 6,
  //       h: 5,
  //     },
  //   ],
  //   xs: [
  //     {
  //       i: "1",
  //       x: 0,
  //       y: 0,
  //       w: 12,
  //       h: 5,
  //     },
  //     {
  //       i: "2",
  //       x: 0,
  //       y: 2,
  //       w: 12,
  //       h: 5,
  //     },
  //     {
  //       i: "3",
  //       x: 0,
  //       y: 4,
  //       w: 12,
  //       h: 5,
  //     },
  //     {
  //       i: "4",
  //       x: 0,
  //       y: 4,
  //       w: 12,
  //       h: 5,
  //     },
  //     {
  //       i: "5",
  //       x: 0,
  //       y: 4,
  //       w: 12,
  //       h: 5,
  //     },
  //   ],
  //   xxs: [
  //     {
  //       i: "1",
  //       x: 0,
  //       y: 0,
  //       w: 12,
  //       h: 5,
  //     },
  //     {
  //       i: "2",
  //       x: 0,
  //       y: 2,
  //       w: 12,
  //       h: 5,
  //     },
  //     {
  //       i: "3",
  //       x: 0,
  //       y: 4,
  //       w: 12,
  //       h: 5,
  //     },
  //     {
  //       i: "4",
  //       x: 0,
  //       y: 4,
  //       w: 12,
  //       h: 5,
  //     },
  //     {
  //       i: "5",
  //       x: 0,
  //       y: 4,
  //       w: 12,
  //       h: 5,
  //     },
  //   ],
  // };

  return (
    <div>
      <ResponsiveReactGridLayout
        className="layout"
        layouts={LinkrClassicTheme.layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 8, md: 4, sm: 2, xs: 2, xxs: 2 }}
        rowHeight={50}
        margin={[10, 10]}
        containerPadding={{
          lg: [20, 20],
          md: [20, 20],
          sm: [20, 20],
          xs: [20, 20],
          xxs: [20, 20],
        }}
        isResizable={true}
        isDraggable={true}
        compactType="vertical"
        preventCollision={false}
        onLayoutChange={(currentLayout, allLayouts) => {
          console.log("Current Layout:", currentLayout);
          console.log("All Layouts:", allLayouts);
        }}
      >
        <BlockCard
          key="1"
          className="flex flex-row items-center bg-transparent p-2"
        >
          <a href="#" className="flex items-center gap-2">
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <QrCode className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{APP_INFO.name}</span>
            </div>
          </a>

          <Button>
            <span className="hidden md:inline">Join now</span>
          </Button>
        </BlockCard>
        <BlockCard key="2" className="p-10">
          <h1 className="text-7xl font-bold">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </p>
        </BlockCard>

        <BlockCard
          key="5"
          className="bg-[url('https://images.unsplash.com/photo-1650667955633-df9d498a8e6b?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat"
        >
          <div></div>
          <div className="flex items-center justify-end gap-2">
            <Button variant="outline">Learn More</Button>
            <Button>Contact Us</Button>
          </div>
        </BlockCard>

        <BlockCard
          key="3"
          className="bg-[url('https://images.unsplash.com/photo-1605369572399-05d8d64a0f6e?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat"
        >
          <div></div>
          <h1 className="text-4xl font-bold text-white">#LOREM</h1>
        </BlockCard>

        <BlockCard
          key="4"
          className="bg-[url('https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat"
        >
          <div></div>
          <h1 className="text-4xl font-bold text-white">#IPSUM</h1>
        </BlockCard>
      </ResponsiveReactGridLayout>
    </div>
  );
};
