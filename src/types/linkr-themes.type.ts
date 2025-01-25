import { type Layouts } from "react-grid-layout";

export type LinkrComponentType =
  | "div"
  | "a"
  | "button"
  | "BlockCard"
  | "span"
  | "h1"
  | "p"
  | "QrCode"
  | "CustomComponent";

export type LinkrComponentProps = Record<string, unknown>;

export interface LinkrThemeComponent {
  id: string;
  type: LinkrComponentType;
  className?: string;
  props?: LinkrComponentProps;
  children?: LinkrThemeComponent[];
}

export interface LinkrThemeSection {
  name: string;
  id: string;
  components: LinkrThemeComponent[];
}

export type LinkrThemeLayout = Layouts;

export interface LinkrTheme {
  name: string;
  label?: string;
  description?: string;
  sections: LinkrThemeSection[];
  layouts: LinkrThemeLayout;
  style?: Record<string, unknown>;
  variables?: Record<string, unknown>;
}
