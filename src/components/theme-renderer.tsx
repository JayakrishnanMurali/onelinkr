"use client";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import { BlockCard } from "@/components/blocks/block-card";
import { Button } from "@/components/ui/button";
import {
  getLucideIconByName,
  type LucideIconNameType,
} from "@/helper/get-lucide-icon";
import { type LinkrNode } from "@/types/linkr-themes.type";
import { Responsive, WidthProvider } from "react-grid-layout";
import { useThemeStore } from "@/stores/useThemeStore";
import { useAtomValue } from "jotai";
import { screenSizeAtom } from "@/atoms/themeAtoms";
import { cn } from "@/lib/utils";

const ResponsiveGridLayout = WidthProvider(Responsive);

export const ThemeRenderer = () => {
  const theme = useThemeStore((state) => state.theme);
  const updateLayout = useThemeStore((state) => state.updateLayout);
  const screenSize = useAtomValue(screenSizeAtom);

  return (
    <div
      className={cn("min-h-[100vh] flex-1 rounded-md bg-black md:min-h-min", {
        "mx-auto max-w-sm": screenSize === "small",
        "w-full": screenSize === "large",
      })}
    >
      <ResponsiveGridLayout
        className="layout"
        layouts={theme.layout}
        breakpoints={{ lg: 1200, md: 992, sm: 768 }}
        cols={{
          lg: 12, // Desktop
          md: 8, // Tablet
          sm: 4, // Mobile
        }}
        rowHeight={40}
        margin={[10, 10]}
        containerPadding={{
          lg: [20, 20], // More padding for desktop
          md: [15, 15], // Medium padding for tablet
          sm: [10, 10], // Less padding for mobile
        }}
        isResizable
        isDraggable
        compactType="vertical"
        preventCollision={false}
        onLayoutChange={(_, allLayouts) => {
          updateLayout(allLayouts);
        }}
      >
        {theme.nodes.map((node) => renderNode(node))}
      </ResponsiveGridLayout>
    </div>
  );
};

/**
 * Recursively renders a node.
 * Each node is wrapped in a `<div data-grid={{ i: node.id }}>`
 * so react-grid-layout can position it using the node’s ID.
 */
function renderNode(node: LinkrNode): JSX.Element {
  const { id, type, className, props, children } = node;
  const { content, iconName, ...restProps } = props ?? {};

  switch (type) {
    case "BlockCard":
      return (
        <BlockCard
          key={id}
          className={className}
          isTransparent={!!props?.isTransparent}
        >
          {children?.map(renderNode)}
        </BlockCard>
      );

    case "button":
      return (
        <Button key={id} className={className} {...restProps}>
          {content}
          {children?.map(renderNode)}
        </Button>
      );

    case "a":
      return (
        <a key={id} className={className} {...restProps}>
          {content}
          {children?.map(renderNode)}
        </a>
      );

    case "LucideIcon": {
      const IconComponent = getLucideIconByName(iconName as LucideIconNameType);
      return <IconComponent key={id} className={className} />;
    }

    default: {
      // Fallback for standard HTML elements like div, span, h1, p, etc.
      const Tag = type as keyof JSX.IntrinsicElements;
      return (
        <Tag key={id} className={className} {...restProps}>
          {content}
          {children?.map(renderNode)}
        </Tag>
      );
    }
  }
}
