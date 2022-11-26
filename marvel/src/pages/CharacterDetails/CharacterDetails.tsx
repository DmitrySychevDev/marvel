import React, { useMemo } from "react";

import { useParams } from "react-router-dom";
import { Typography, Grid } from "@mui/material";

// Components
import { Details, NavigationButton } from "components";

// Types
import { Characters, Series, Comics } from "types";

// Data
import { charactersData, seriesData, comicsData } from "mocks";

const CharactersDetails: React.FC = () => {
  const params = useParams();
  const id: string = `characters-${params.id}`;

  const character: Characters | undefined = useMemo(() => {
    return charactersData.find((item) => item.id === id);
  }, [charactersData]);
  const series: Series[] = useMemo(() => {
    return character
      ? seriesData.filter((item) => character.series.includes(item.id))
      : [];
  }, [seriesData]);
  const comics: Comics[] = useMemo(() => {
    return character
      ? comicsData.filter((item) => character.comics.includes(item.id))
      : [];
  }, [comicsData]);

  const linkStyle = {
    color: "#4682B4",
  };
  return (
    <div>
      {character && (
        <div>
          <Details
            title={character.title}
            picture={character.picture}
            description={character.description}
          />
          <Grid container justifyContent="space-around">
            {series.length !== 0 && (
              <Grid item>
                <Grid container flexDirection="column" spacing={3}>
                  <Grid item>
                    <Typography variant="h5" color="primary">
                      Series
                    </Typography>
                    {series.map((item) => (
                      <Grid item>
                        <NavigationButton
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
            {comics.length !== 0 && (
              <Grid item>
                <Grid container flexDirection="column" spacing={3}>
                  <Grid item>
                    <Typography variant="h5" color="primary">
                      Comics
                    </Typography>
                    {comics.map((item) => (
                      <Grid item>
                        <NavigationButton
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
          </Grid>
        </div>
      )}
    </div>
  );
};

export default CharactersDetails;
