import React, { useEffect } from "react";

import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";
// Data
import { charactersData } from "mocks";

// Components
import { Card, Search } from "components";

// Store
import { charactersStore } from "store";

const Characters: React.FC = observer(() => {
  const { t } = useTranslation();
  useEffect(() => {
    charactersStore.getCharactersList();
  }, []);

  return (
    <Box>
      <Typography
        variant="h2"
        component="h2"
        color="primary"
        sx={{ marginLeft: "15px", marginBottom: "30px" }}
      >
        {`${t("characters")}(${charactersData.length})`}
      </Typography>
      <Search searchParams="characters" />
      <Grid container justifyContent="space-around">
        {charactersStore.characters?.data?.results.map((item) => (
          <Card
            key={item.id}
            id={item.id.toString()}
            picture={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            title={item.name}
            description={item.description}
          />
        ))}
      </Grid>
    </Box>
  );
});

export default Characters;
