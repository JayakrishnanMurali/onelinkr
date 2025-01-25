"use client";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import { Card, CardContent } from "@/components/ui/card";
import { type Layouts, Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const LinkCardsWrapper = () => {
  const layouts: Layouts = {
    lg: [
      { i: "1", x: 0, y: 0, w: 3, h: 5 },
      { i: "2", x: 3, y: 0, w: 3, h: 5 },
      { i: "3", x: 6, y: 0, w: 3, h: 5 },
    ],
    md: [
      { i: "1", x: 0, y: 0, w: 4, h: 5 },
      { i: "2", x: 4, y: 0, w: 4, h: 5 },
      { i: "3", x: 8, y: 0, w: 4, h: 5 },
    ],
    sm: [
      { i: "1", x: 0, y: 0, w: 6, h: 5 },
      { i: "2", x: 6, y: 0, w: 6, h: 5 },
      { i: "3", x: 0, y: 2, w: 6, h: 5 },
    ],
    xs: [
      { i: "1", x: 0, y: 0, w: 12, h: 5 },
      { i: "2", x: 0, y: 2, w: 12, h: 5 },
      { i: "3", x: 0, y: 4, w: 12, h: 5 },
    ],
    xxs: [
      { i: "1", x: 0, y: 0, w: 12, h: 5 },
      { i: "2", x: 0, y: 2, w: 12, h: 5 },
      { i: "3", x: 0, y: 4, w: 12, h: 5 },
    ],
  };

  return (
    <div>
      <ResponsiveReactGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={30}
        margin={[10, 10]}
        containerPadding={[20, 20]}
        isResizable={true}
        isDraggable={true}
        compactType="vertical"
        preventCollision={false}
        onLayoutChange={(currentLayout, allLayouts) => {
          console.log("Current Layout:", currentLayout);
          console.log("All Layouts:", allLayouts);
        }}
      >
        <Card key="1">
          <CardContent>
            <p>Card 1 Content</p>
          </CardContent>
        </Card>

        <Card key="2" className="w-[350px]">
          <CardContent>
            <p>Card 2 Content</p>
          </CardContent>
        </Card>

        <Card key="3" className="w-[350px]">
          <CardContent>
            <p>Card 3 Content</p>
          </CardContent>
        </Card>
      </ResponsiveReactGridLayout>
    </div>
  );
};
