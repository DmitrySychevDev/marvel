import { Theme } from "@mui/material";

export interface ThemeProps {
  color: string;
}
export const styles = (theme: Theme, params: ThemeProps) => ({
  root: {
    color: params.color,
    textDecoration: "none",
  },
  activeLink: {
    textDecoration: "underline",
    color: params.color,
  },
});
