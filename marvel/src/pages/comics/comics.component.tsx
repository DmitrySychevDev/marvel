import React from "react";
import { Typography, Box } from "@mui/material";
import { Search, Card } from "../../components";

const Comics: React.FC = () => {
  return (
    <Box>
      <Typography
        variant="h2"
        component="h2"
        color="primary"
        sx={{ marginLeft: "15px", marginBottom: "30px" }}
      >
        Comics
      </Typography>
      <Search />
    </Box>
  );
};

export default Comics;
