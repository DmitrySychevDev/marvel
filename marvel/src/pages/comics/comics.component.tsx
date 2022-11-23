import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { Search, Card } from "../../components";
import { comicsData } from "../../mocks/comics-data";

const Comics: React.FC = () => {
  return (
    <Box>
      <Typography
        variant="h2"
        component="h2"
        color="primary"
        sx={{ marginLeft: "15px", marginBottom: "30px" }}
      >
        Comics({comicsData.length})
      </Typography>
      <Search />
      <Grid container justifyContent="space-around">
        {comicsData.map((item) => (
          <Card
            key={item.id}
            picture={item.picture}
            title={item.title}
            description={item.description}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Comics;
