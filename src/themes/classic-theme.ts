import { type LinkrTheme } from "@/types/linkr-themes.type";

export const LinkrClassicTheme: LinkrTheme = {
  name: "ClassicTheme",
  nodes: [
    {
      id: "1",
      type: "BlockCard",
      className: "flex flex-row items-center bg-transparent p-2",
      props: {
        isTransparent: true,
      },
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
                  type: "LucideIcon",
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
                  props: {
                    content: "Classic",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "1b",
          type: "button",
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
  layout: {
    lg: [
      {
        w: 12,
        h: 1,
        x: 0,
        y: 0,
        i: "1",
        moved: false,
        static: false,
      },
      {
        w: 6,
        h: 11,
        x: 0,
        y: 1,
        i: "2",
        moved: false,
        static: false,
      },
      {
        w: 6,
        h: 16,
        x: 6,
        y: 1,
        i: "5",
        moved: false,
        static: false,
      },
      {
        w: 3,
        h: 5,
        x: 0,
        y: 12,
        i: "3",
        moved: false,
        static: false,
      },
      {
        w: 3,
        h: 5,
        x: 3,
        y: 12,
        i: "4",
        moved: false,
        static: false,
      },
    ],
    md: [
      {
        i: "1",
        x: 0,
        y: 0,
        w: 4,
        h: 2,
        static: false,
      },
      {
        i: "2",
        x: 0,
        y: 2,
        w: 4,
        h: 2,
        static: false,
      },
      {
        i: "5",
        x: 0,
        y: 4,
        w: 4,
        h: 2,
        static: false,
      },
      {
        i: "3",
        x: 0,
        y: 6,
        w: 4,
        h: 2,
        static: false,
      },
      {
        i: "4",
        x: 0,
        y: 8,
        w: 4,
        h: 2,
        static: false,
      },
    ],
    sm: [
      {
        i: "1",
        x: 0,
        y: 0,
        w: 4,
        h: 2,
        static: false,
      },
      {
        i: "2",
        x: 0,
        y: 2,
        w: 4,
        h: 2,
        static: false,
      },
      {
        i: "5",
        x: 0,
        y: 4,
        w: 4,
        h: 2,
        static: false,
      },
      {
        i: "3",
        x: 0,
        y: 6,
        w: 4,
        h: 2,
        static: false,
      },
      {
        i: "4",
        x: 0,
        y: 8,
        w: 4,
        h: 2,
        static: false,
      },
    ],
    xs: [
      {
        w: 2,
        h: 2,
        x: 0,
        y: 0,
        i: "1",
        moved: false,
        static: false,
      },
      {
        w: 2,
        h: 2,
        x: 0,
        y: 2,
        i: "2",
        moved: false,
        static: false,
      },
      {
        w: 2,
        h: 2,
        x: 0,
        y: 4,
        i: "5",
        moved: false,
        static: false,
      },
      {
        w: 2,
        h: 2,
        x: 0,
        y: 6,
        i: "3",
        moved: false,
        static: false,
      },
      {
        w: 2,
        h: 2,
        x: 0,
        y: 8,
        i: "4",
        moved: false,
        static: false,
      },
    ],
    xxs: [
      {
        i: "1",
        x: 0,
        y: 0,
        w: 4,
        h: 2,
        static: false,
      },
      {
        i: "2",
        x: 0,
        y: 2,
        w: 4,
        h: 2,
        static: false,
      },
      {
        i: "5",
        x: 0,
        y: 4,
        w: 4,
        h: 2,
        static: false,
      },
      {
        i: "3",
        x: 0,
        y: 6,
        w: 4,
        h: 2,
        static: false,
      },
      {
        i: "4",
        x: 0,
        y: 8,
        w: 4,
        h: 2,
        static: false,
      },
    ],
  },
};
