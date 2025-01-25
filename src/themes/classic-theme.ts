"use client";

import { type LinkrTheme } from "@/types/linkr-themes.type";
import { type Layouts } from "react-grid-layout";
import { v4 as uuid } from "uuid";

// 1) Directly use your original layout config:
const classicLayout: Layouts = {
  lg: [
    { w: 8, h: 1, x: 0, y: 0, i: "1", moved: false, static: false },
    { w: 4, h: 13, x: 4, y: 1, i: "5", moved: false, static: false },
    { w: 4, h: 8, x: 0, y: 1, i: "2", moved: false, static: false },
    { w: 2, h: 5, x: 0, y: 9, i: "3", moved: false, static: false },
    { w: 2, h: 5, x: 2, y: 9, i: "4", moved: false, static: false },
  ],
  md: [
    { i: "1", x: 0, y: 0, w: 4, h: 5 },
    { i: "2", x: 4, y: 0, w: 4, h: 5 },
    { i: "3", x: 8, y: 0, w: 4, h: 5 },
    { i: "4", x: 8, y: 0, w: 4, h: 5 },
    { i: "5", x: 8, y: 0, w: 4, h: 5 },
  ],
  sm: [
    { i: "1", x: 0, y: 0, w: 6, h: 5 },
    { i: "2", x: 6, y: 0, w: 6, h: 5 },
    { i: "3", x: 0, y: 2, w: 6, h: 5 },
    { i: "4", x: 0, y: 2, w: 6, h: 5 },
    { i: "5", x: 0, y: 2, w: 6, h: 5 },
  ],
  xs: [
    { i: "1", x: 0, y: 0, w: 12, h: 5 },
    { i: "2", x: 0, y: 2, w: 12, h: 5 },
    { i: "3", x: 0, y: 4, w: 12, h: 5 },
    { i: "4", x: 0, y: 4, w: 12, h: 5 },
    { i: "5", x: 0, y: 4, w: 12, h: 5 },
  ],
  xxs: [
    { i: "1", x: 0, y: 0, w: 12, h: 5 },
    { i: "2", x: 0, y: 2, w: 12, h: 5 },
    { i: "3", x: 0, y: 4, w: 12, h: 5 },
    { i: "4", x: 0, y: 4, w: 12, h: 5 },
    { i: "5", x: 0, y: 4, w: 12, h: 5 },
  ],
};

export const LinkrClassicTheme: LinkrTheme = {
  name: "ClassicTheme",
  sections: [
    {
      // You can break into multiple sections if needed. For now, we'll place
      // everything in a single "Main" section with an ID of "main"
      name: "Main",
      id: "main",
      components: [
        {
          id: "1",
          type: "BlockCard",
          className: "flex flex-row items-center bg-transparent p-2",
          // Each "BlockCard" can contain children representing
          // anchors, divs, icons (QrCode), etc.
          children: [
            {
              id: "1a",
              type: "a",
              className: "flex items-center gap-2",
              props: {
                href: "#",
              },
              children: [
                {
                  id: "1a1",
                  type: "div",
                  className:
                    "bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg",
                  children: [
                    {
                      id: "1a1a",
                      type: "QrCode",
                      className: "size-4",
                    },
                  ],
                },
                {
                  id: "1a2",
                  type: "div",
                  className: "grid flex-1 text-left text-sm leading-tight",
                  children: [
                    {
                      id: "1a2a",
                      type: "span",
                      className: "truncate font-semibold",
                      // In practice, you might store dynamic text in a variable or pass it in props
                      props: {
                        content: "APP_INFO.name", // or the actual text
                      },
                    },
                  ],
                },
              ],
            },
            {
              id: "1b",
              type: "button", // if your <Button> is a custom component, you could define a "Button" type
              children: [
                {
                  id: "1b1",
                  type: "span",
                  className: "hidden md:inline",
                  props: {
                    content: "Join now",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "2",
          type: "BlockCard",
          className: "p-10",
          children: [
            {
              id: "2a",
              type: "h1",
              className: "text-7xl font-bold",
              props: {
                content: "Lorem ipsum dolor sit amet consectetur.",
              },
            },
            {
              id: "2b",
              type: "p",
              props: {
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
              },
            },
          ],
        },
        {
          id: "5",
          type: "BlockCard",
          className:
            "bg-[url('https://images.unsplash.com/photo-1650667955633-df9d498a8e6b?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat",
          children: [
            {
              id: "5a",
              type: "div",
              // No visible content in your snippet, but you can store placeholders here
            },
            {
              id: "5b",
              type: "div",
              className: "flex items-center justify-end gap-2",
              children: [
                {
                  id: "5b1",
                  type: "button",
                  props: {
                    variant: "outline",
                    content: "Learn More",
                  },
                },
                {
                  id: "5b2",
                  type: "button",
                  props: {
                    content: "Contact Us",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "3",
          type: "BlockCard",
          className:
            "bg-[url('https://images.unsplash.com/photo-1605369572399-05d8d64a0f6e?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat",
          children: [
            {
              id: "3a",
              type: "div",
              // same placeholder approach
            },
            {
              id: "3b",
              type: "h1",
              className: "text-4xl font-bold text-white",
              props: {
                content: "#LOREM",
              },
            },
          ],
        },
        {
          id: "4",
          type: "BlockCard",
          className:
            "bg-[url('https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat",
          children: [
            {
              id: "4a",
              type: "div",
            },
            {
              id: "4b",
              type: "h1",
              className: "text-4xl font-bold text-white",
              props: {
                content: "#IPSUM",
              },
            },
          ],
        },
      ],
    },
  ],
  layouts: classicLayout,
  // Optional global style or variables:
  style: {},
  variables: {},
};
