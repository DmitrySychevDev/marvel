import { Theme } from "@mui/material";

export interface ThemeProps {
  color: string;
}

const hoverColor: string = "#FFA500";
export const styles = (theme: Theme, params: ThemeProps) => ({
  root: {
    color: params.color,
    textDecoration: "none",
    "&:hover": {
      color: hoverColor,
    },
  },
  activeLink: {
    textDecoration: "underline",
    color: params.color,
    "&:hover": {
      color: hoverColor,
    },
  },
});
