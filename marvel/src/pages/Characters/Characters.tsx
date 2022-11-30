import React from "react";

import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

// Data
import { charactersData } from "mocks";

// Components
import { Card, Search } from "components";

const Characters: React.FC = () => {
  const { t } = useTranslation();

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
        {charactersData.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            picture={item.picture}
            title={item.title}
            description={item.description}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Characters;
