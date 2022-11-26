import React, { useMemo } from "react";

import { useParams } from "react-router-dom";
import { Typography, Grid } from "@mui/material";

// Components
import { Details, NavigationButton } from "components";

// Types
import { Characters, Series, Comics } from "types";

// Data
import { charactersData, seriesData, comicsData } from "mocks";

const ComicsDetails: React.FC = () => {
  const params = useParams();
  const id: string = `comics-${params.id}`;

  const comics: Comics | undefined = useMemo(() => {
    return comicsData.find((item) => item.id === id);
  }, [comicsData]);
  const characters: Characters[] = useMemo(() => {
    return comics
      ? charactersData.filter((item) => comics.characters.includes(item.id))
      : [];
  }, [charactersData]);
  const series: Series[] = useMemo(() => {
    return comics
      ? seriesData.filter((item) => comics.series.includes(item.id))
      : [];
  }, [seriesData]);

  const linkStyle = {
    color: "#4682B4",
  };
  return (
    <div>
      {comics && (
        <div>
          <Details
            key={comics.id}
            title={comics.title}
            picture={comics.picture}
            description={comics.description}
          />
          <Grid container justifyContent="space-around">
            {!!series.length && (
              <Grid item>
                <Grid container flexDirection="column" spacing={3}>
                  <Grid item>
                    <Typography variant="h5" color="primary">
                      Series
                    </Typography>
                    {series.map((item) => (
                      <Grid item>
                        <NavigationButton
                          key={item.id}
                          title={item.title}
                          linkTo={`/series/${item.id.substring(7)}`}
                          styleParams={linkStyle}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            )}
            {!!characters.length && (
              <Grid item>
                <Grid container flexDirection="column" spacing={3}>
                  <Grid item>
                    <Typography variant="h5" color="primary">
                      Characters
                    </Typography>
                    {characters.map((item) => (
                      <Grid item>
                        <NavigationButton
                          key={item.id}
                          title={item.title}
                          linkTo={`/characters/${item.id.substring(11)}`}
                          styleParams={linkStyle}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default ComicsDetails;
