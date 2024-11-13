import { Stack } from "@mui/material";
import React from "react";

const Slider = () => {
  const images = [
    "/unize.png",
    "/foodlogai.png",
    "/unize.png",
    "/foodlogai.png",
    "/unize.png",
    "/foodlogai.png",
  ];

  return (
    <Stack
      direction={"row"}
      spacing={2}
      overflow={"hidden"}
      className="slideUp"
      sx={{ animationDelay: "0.8s" }}
    >
      <Stack
        className="slider"
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "flex-start",
        }}
        
      >
        {images.map((img, i) => (
          <Stack
            key={i}
            component={"img"}
            src={img}
            sx={{ aspectRatio: "14/9" }}
            width={{ xs: 300, md: 500 }}
            border={'1px solid gainsboro'}
          />
        ))}
      </Stack>
      <Stack
        className="slider"
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "flex-start",
        }}
      >
        {images.map((img, i) => (
          <Stack
            key={i}
            component={"img"}
            src={img}
            sx={{ aspectRatio: "14/9" }}
            width={{ xs: 300, md: 500 }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Slider;
