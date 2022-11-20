import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { Outlet, RouteObject, useRoutes } from "react-router-dom";
import { styles } from "./main-frame.style";

import { Characters, Comics, Series } from "../../pages";
import { Header, Footer } from "../../components/ui";

const useStyles = makeStyles()(styles);

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      { index: true, element: <Characters /> },
      {
        path: "/comics",
        element: <Comics />,
      },
      {
        path: "/series",
        element: <Series />,
      },
      { path: "*", element: <Characters /> },
    ],
  },
];

const MainFrame: React.FC = () => {
  const { classes } = useStyles(undefined);

  const routesElement = useRoutes(routes);

  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="space-between"
      className={classes.root}
    >
      <Header />
      <Grid item>{routesElement}</Grid>
      <Footer />
    </Grid>
  );
};

export default MainFrame;
