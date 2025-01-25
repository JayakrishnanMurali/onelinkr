"use client";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import { BlockCard } from "@/components/blocks/block-card";
import { Button } from "@/components/ui/button";
import {
  getLucideIconByName,
  type LucideIconNameType,
} from "@/helper/get-lucide-icon";
import { type LinkrNode, type LinkrTheme } from "@/types/linkr-themes.type";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

export const ThemeRenderer = ({ theme }: { theme: LinkrTheme }) => {
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={theme.layout}
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
        <BlockCard key={id} className={className}>
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
