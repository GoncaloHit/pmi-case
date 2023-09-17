import { LightTheme } from "."

declare module "styled-components" {
  export interface DefaultTheme extends LightTheme { }
}