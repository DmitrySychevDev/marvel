import React, { useMemo } from "react";

import { useParams } from "react-router-dom";
import { Typography, Grid } from "@mui/material";

// Components
import { Details, NavigationButton } from "components";

// Types
import { Characters, Series, Comics } from "types";

// Data
import { charactersData, seriesData, comicsData } from "mocks";

const SeriesDetails: React.FC = () => {
  const params = useParams();
  const id: string = `series-${params.id}`;

  const series: Series | undefined = useMemo(() => {
    return seriesData.find((item) => item.id === id);
  }, [seriesData]);
  const characters: Characters[] = useMemo(() => {
    return series
      ? charactersData.filter((item) => series.characters.includes(item.id))
      : [];
  }, [charactersData]);
  const comics: Comics[] = useMemo(() => {
    return series
      ? comicsData.filter((item) => series.comics.includes(item.id))
      : [];
  }, [comicsData]);

  const linkStyle = {
    color: "#4682B4",
  };
  return (
    <div>
      {series && (
        <div>
          <Details
            title={series.title}
            picture={series.picture}
            description={series.description}
          />
          <Grid container justifyContent="space-around">
            {!!comics.length && (
              <Grid item>
                <Grid container flexDirection="column" spacing={3}>
                  <Grid item>
                    <Typography variant="h5" color="primary">
                      Series
                    </Typography>
                    {comics.map((item) => (
                      <Grid item>
                        <NavigationButton
                          key={item.id}
                          title={item.title}
                          linkTo={`/comics/${item.id.substring(7)}`}
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

export default SeriesDetails;
