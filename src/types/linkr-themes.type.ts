import { type Layouts } from "react-grid-layout";

/**
 * Defines the kinds of components we can render from the theme definition.
 * - 'LucideIcon' is a special type for any Lucide icon (e.g., QrCode, User, etc.)
 */
export type LinkrNodeType =
  | "div"
  | "a"
  | "button"
  | "BlockCard"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "p"
  | "LucideIcon"
  | "CustomComponent";

/**
 * Props each node might have.
 * - We include 'content' for text
 * - 'iconName' for specifying which Lucide icon to render
 */
export interface LinkrNodeProps {
  content?: string;
  iconName?: string; // e.g. "QrCode", "User", etc.
  [key: string]: unknown;
}

/**
 * A single node in the theme. Each node has:
 * - a unique `id` (which we also use as the layout `i`)
 * - a `type` telling us what to render
 * - optional CSS `className`
 * - optional `props` (like content, href, etc.)
 * - optional `children` for nested elements
 */
export interface LinkrNode {
  id: string;
  type: LinkrNodeType;
  className?: string;
  props?: LinkrNodeProps;
  children?: LinkrNode[];
}

/**
 * The main theme interface.
 * - `name` for identifying the theme
 * - `nodes` is a flat array of top-level nodes
 * - `layout` is a react-grid-layout config that matches node IDs
 */
export interface LinkrTheme {
  name: string;
  nodes: LinkrNode[];
  layout: Layouts;
}
