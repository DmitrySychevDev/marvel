import React, { useState, useEffect } from "react";

import { Typography, Box, Grid, Pagination } from "@mui/material";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";

// Components
import { Search, Card } from "components";

// Store
import { comicsStore } from "store";

const Comics: React.FC = observer(() => {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    comicsStore.getComicsList();
    return () => {
      comicsStore.setOffset(0);
      comicsStore.setSearchQuery(undefined);
    };
  }, []);
  useEffect(() => {
    comicsStore.getComicsList();
  }, [comicsStore.offset, comicsStore.searchQuery]);

  useEffect(() => {
    setPage(1);
    comicsStore.setOffset(0);
  }, [comicsStore.searchQuery]);

  const count = comicsStore.comics.data.total ?? 0;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    comicsStore.setOffset((value - 1) * 20);
    setPage(value);
  };
  const search = (searchStr: string | undefined) => {
    comicsStore.setSearchQuery(searchStr);
  };
  return (
    <Box>
      <Typography
        variant="h2"
        component="h2"
        color="primary"
        sx={{ marginLeft: "15px", marginBottom: "30px" }}
      >
        {`${t("comics")}(${count})`}
      </Typography>

      <Search searchParams="comics" searchEvent={search} />
      <Pagination
        count={Math.ceil(count / 20)}
        color="primary"
        page={page}
        onChange={handleChange}
        sx={{
          "& .MuiPagination-ul>li": {
            "& button": { color: "text.secondary" },
          },
        }}
      />
      <Grid container justifyContent="space-around">
        {comicsStore.comics?.data?.results.map((item) => (
          <Card
            key={item.id}
            id={item.id.toString()}
            picture={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            title={item.title}
            description={item.description}
            type="comics"
          />
        ))}
      </Grid>
    </Box>
  );
});

export default Comics;
