import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";

// Components
import { Details, NavigationButton } from "components";

// Store
import comicsStore from "store/comicsStore";

const getIdByUrl = (url: string) => {
  const arr = url.split("/");
  return arr[arr.length - 1];
};

const ComicsDetails: React.FC = observer(() => {
  const params = useParams();
  const idParams: number = params.id ? +params.id : 0;
  const { title, description, thumbnail, characters, series } =
    comicsStore.comic;
  const picture = `${thumbnail.path}.${thumbnail.extension}`;

  const { t } = useTranslation();

  useEffect(() => {
    comicsStore.getComic(idParams);
  }, []);

  const linkStyle = {
    color: "#4682B4",
  };
  return (
    <div>
      <div>
        <Details
          key={idParams}
          title={title}
          picture={picture}
          description={description}
        />
        <Grid container justifyContent="space-around">
          {series && (
            <Grid item>
              <Grid container flexDirection="column" spacing={3}>
                <Grid item>
                  <Typography variant="h5" color="primary">
                    {t("series")}
                  </Typography>
                  <Grid item>
                    <NavigationButton
                      key={`${getIdByUrl(series.resourceURI)}`}
                      title={series.name}
                      linkTo={`/series/${getIdByUrl(series.resourceURI)}`}
                      styleParams={linkStyle}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
          {!!characters?.items?.length && (
            <Grid item>
              <Grid container flexDirection="column" spacing={3}>
                <Grid item>
                  <Typography variant="h5" color="primary">
                    {t("characters")}
                  </Typography>
                  {characters.items.map((item) => (
                    <Grid item>
                      <NavigationButton
                        key={`${getIdByUrl(item.resourceURI)}`}
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
    </div>
  );
});

export default ComicsDetails;
