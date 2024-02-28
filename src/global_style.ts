import {createGlobalStyle} from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
 body{
  font-family: "Roboto", sans-serif;
  background: ${theme.colors.primary_color};
  padding: 0;
  margin: 0;
 }

 * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 }
`;