import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";

// Components
import { Details, NavigationButton } from "components";

// Store
import { seriesStore } from "store";

const getIdByUrl = (url: string) => {
  const arr = url.split("/");
  return arr[arr.length - 1];
};

const SeriesDetails: React.FC = observer(() => {
  const params = useParams();
  const idParams: number = params.id ? +params.id : 0;
  const { title, description, thumbnail, comics, characters } =
    seriesStore.series;
  const picture = `${thumbnail.path}.${thumbnail.extension}`;

  const { t } = useTranslation();

  useEffect(() => {
    seriesStore.getSeries(idParams);
  }, []);

  const linkStyle = {
    color: "#4682B4",
  };
  return (
    <div>
      {seriesStore.series && (
        <div>
          <Details title={title} picture={picture} description={description} />
          <Grid container justifyContent="space-around">
            {!!comics.items.length && (
              <Grid item>
                <Grid container flexDirection="column" spacing={3}>
                  <Grid item>
                    <Typography variant="h5" color="primary">
                      {t("comics")}
                    </Typography>
                    {comics.items.map((item) => (
                      <Grid item>
                        <NavigationButton
                          key={getIdByUrl(item.resourceURI)}
                          title={item.name}
                          linkTo={`/comics/${getIdByUrl(item.resourceURI)}`}
                          styleParams={linkStyle}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            )}
            {!!characters.items.length && (
              <Grid item>
                <Grid container flexDirection="column" spacing={3}>
                  <Grid item>
                    <Typography variant="h5" color="primary">
                      {t("characters")}
                    </Typography>
                    {characters.items.map((item) => (
                      <Grid item>
                        <NavigationButton
                          key={getIdByUrl(item.resourceURI)}
                          title={item.name}
                          linkTo={`/characters/${getIdByUrl(item.resourceURI)}`}
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
});

export default SeriesDetails;
