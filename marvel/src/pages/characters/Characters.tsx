import React from "react";
import { Box, Grid, Typography } from "@mui/material";

// Data
import { charactersData } from "mocks/characters-data";

// Components
import { Card, Search } from "components";

const Characters: React.FC = () => {
  return (
    <Box>
      <Typography
        variant="h2"
        component="h2"
        color="primary"
        sx={{ marginLeft: "15px", marginBottom: "30px" }}
      >
        Characters({charactersData.length})
      </Typography>
      <Search />
      <Grid container justifyContent="space-around">
        {charactersData.map((item) => (
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

export default Characters;
