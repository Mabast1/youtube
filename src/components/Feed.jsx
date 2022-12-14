import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sm: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sm: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "gray" }}
        >
          Copyright 2022{" "}
          <a
            href="https://mabastahmad.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Mabast Ahmad
          </a>
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          sx={{ color: "white" }}
          variant="h4"
          fontWeight="bold"
          mb={2}
        >
          {selectedCategory} <span style={{ color: "#634abe" }}>videos</span>
        </Typography>
        <Videos videos={videos} direction="row" />
      </Box>
    </Stack>
  );
};

export default Feed;
