import React from "react";
import { Typography, Box } from "@mui/material";
import { Search, Card } from "../../components";

const Series: React.FC = () => {
  return (
    <Box>
      <Typography
        variant="h2"
        component="h2"
        color="primary"
        sx={{ marginLeft: "15px", marginBottom: "30px" }}
      >
        Series
      </Typography>
      <Search />
    </Box>
  );
};

export default Series;
