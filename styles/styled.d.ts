import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    label: string;
    bg: { primary: string };
    hr: { primary: string };
    text: { primary: string };
    link: { primary: string };
  }
}
