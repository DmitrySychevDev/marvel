import React from "react";

import { Typography, Box, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

// Componets
import { Search, Card } from "components";

// Data
import { seriesData } from "mocks";

const Series: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography
        variant="h2"
        component="h2"
        color="primary"
        sx={{ marginLeft: "15px", marginBottom: "30px" }}
      >
        {`${t("series")}(${seriesData.length})`}
      </Typography>
      <Search searchParams="series" searchEvent={(params: string) => {}} />
      <Grid container justifyContent="space-around">
        {seriesData.map((item) => (
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

export default Series;
