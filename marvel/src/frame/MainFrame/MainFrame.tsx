import React from 'react';

import { Grid } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Outlet, RouteObject, useRoutes } from 'react-router-dom';

// Components
import { Header, Footer } from 'components/ui';
import {
  Characters,
  Comics,
  Series,
  CharacterDetails,
  ComicsDetails,
  SeriesDetails,
  Favourites
} from 'pages';

// Styles
import { styles } from './MainFrameStyles';

const useStyles = makeStyles()(styles);

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { index: true, element: <Characters /> },
      {
        path: '/comics',
        element: <Comics />
      },
      {
        path: '/series',
        element: <Series />
      },
      {
        path: '/characters/:id',
        element: <CharacterDetails />
      },
      {
        path: '/comics/:id',
        element: <ComicsDetails />
      },
      {
        path: '/series/:id',
        element: <SeriesDetails />
      },
      {
        path: '/favourites',
        element: <Favourites />
      },
      { path: '*', element: <Characters /> }
    ]
  }
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
      <Grid item className={classes.router}>
        {routesElement}
      </Grid>
      <Footer />
    </Grid>
  );
};

export default MainFrame;
