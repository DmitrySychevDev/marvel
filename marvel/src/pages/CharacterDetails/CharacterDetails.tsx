import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";

// Components
import { Details, NavigationButton } from "components";

// Store
import { charactersStore } from "store";

const getIdByUrl = (url: string) => {
  const arr = url.split("/");
  return arr[arr.length - 1];
};

const CharactersDetails: React.FC = observer(() => {
  const params = useParams();
  const idParams: number = params.id ? +params.id : 0;
  const { name, description, thumbnail, comics, series } =
    charactersStore.character;
  const picture = `${thumbnail.path}.${thumbnail.extension}`;

  const { t } = useTranslation();

  useEffect(() => {
    charactersStore.getCharacter(idParams);
  }, []);

  const linkStyle = {
    color: "#4682B4",
  };
  return (
    <div>
      <div>
        <Details title={name} picture={picture} description={description} />
        <Grid container justifyContent="space-around">
          {series.items.length !== 0 && (
            <Grid item>
              <Grid container flexDirection="column" spacing={3}>
                <Grid item>
                  <Typography variant="h5" color="primary">
                    {t("series")}
                  </Typography>
                  {series.items.map((item) => (
                    <Grid item>
                      <NavigationButton
                        key={getIdByUrl(item.resourceURI)}
                        title={item.name}
                        linkTo={`/series/${getIdByUrl(item.resourceURI)}`}
                        styleParams={linkStyle}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          )}
          {comics.items.length !== 0 && (
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
        </Grid>
      </div>
    </div>
  );
});

export default CharactersDetails;
