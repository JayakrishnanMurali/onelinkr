import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

export const BlockCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { isTransparent?: boolean }
>(({ className, isTransparent, ...props }, ref) => (
  <Card
    ref={ref}
    className={cn("overflow-hidden rounded-2xl", {
      "border-none shadow-none": isTransparent,
    })}
    {...props}
  >
    <CardContent
      className={cn(
        "flex h-full flex-col justify-between gap-2 bg-gray-200 p-4",
        className,
      )}
    >
      {props.children}
    </CardContent>
  </Card>
));

BlockCard.displayName = "BlockNavbar";
