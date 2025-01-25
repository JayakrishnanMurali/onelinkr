"use client";
import { BlockCard } from "@/components/blocks/block-card";
import { Button } from "@/components/ui/button";
import { APP_INFO } from "@/constants/app-constants";
import { type LinkrTheme } from "@/types/linkr-themes.type";
import { QrCode } from "lucide-react";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export function ThemeRenderer({ theme }: { theme: LinkrTheme }) {
  return (
    <ResponsiveReactGridLayout
      layouts={theme.layouts}
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
      {theme?.sections?.flatMap((section) =>
        section?.components?.map((component) => {
          console.log(
            component.id,
            "-hey-",
            theme.layouts.lg?.map((item) => item.i),
          );
          return (
            <div key="1" data-grid={{ i: component.id }}>
              {renderThemeComponent(component)}
              <BlockCard className="flex flex-row items-center bg-transparent p-2">
                <a href="#" className="flex items-center gap-2">
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <QrCode className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">oi</span>
                  </div>
                </a>

                <Button>
                  <span className="hidden md:inline">Join now</span>
                </Button>
              </BlockCard>
            </div>
          );
        }),
      )}
    </ResponsiveReactGridLayout>
  );
}

// A simple recursive renderer that looks at LinkrThemeComponent
function renderThemeComponent(
  component: LinkrTheme["sections"][number]["components"][number],
): JSX.Element {
  // Destructure basics
  const { type, className, props, children, id } = component;

  switch (type) {
    case "BlockCard":
      return (
        <BlockCard key={id} className={className}>
          {children?.map((child) => renderThemeComponent(child))}
        </BlockCard>
      );
    case "button":
      return (
        <Button key={id} className={className} {...props}>
          {children?.map((child) => renderThemeComponent(child))}
        </Button>
      );
    case "a":
      return (
        <a key={id} className={className} {...props}>
          {children?.map((child) => renderThemeComponent(child))}
        </a>
      );
    case "QrCode":
      // e.g. your lucide-react QrCode
      return <QrCode key={id} className={className} />;
    default:
      // fallback for "div", "span", "h1", "p", etc.
      const Tag = type as keyof JSX.IntrinsicElements;
      return (
        <Tag key={id} className={className} {...props}>
          {children?.map((child) => renderThemeComponent(child))}
        </Tag>
      );
  }
}
