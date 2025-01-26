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

const ResponsiveGridLayout = WidthProvider(Responsive);

export const ThemeRenderer = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className="min-h-[100vh] flex-1 rounded-xl bg-white md:min-h-min">
      <ResponsiveGridLayout
        className="layout"
        layouts={theme.layout}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{
          lg: 12, // Large screens (1200px and above) - allows fine-grained control
          md: 8, // Medium screens (996px and above) - for tablet landscape mode
          sm: 6, // Small screens (768px and above) - for smaller tablets
          xs: 4, // Extra-small screens (480px and above) - for phones
          xxs: 2, // Very small screens (below 480px) - minimal layout
        }}
        rowHeight={40}
        margin={[10, 10]}
        containerPadding={{
          lg: [20, 20],
          md: [15, 15],
          sm: [10, 10],
          xs: [5, 5],
          xxs: [5, 5],
        }}
        isResizable
        isDraggable
        compactType="vertical"
        preventCollision={false}
        onLayoutChange={(currentLayout, allLayouts) => {
          console.log("Current Layout:", currentLayout);
          console.log("All Layouts:", allLayouts);
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
