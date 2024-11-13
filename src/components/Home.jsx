import { Stack, Typography } from "@mui/material";
import Slider from "./Slider";

const Home = () => {
  return (
    <>
      <Stack id="home" px={{ sm: 5, xs: 2 }} pt={10}>
        <Typography
          className="slideUp"
          fontSize={25}
          fontWeight={700}
          letterSpacing={-1}
        >
          HEY, I'M
        </Typography>
        <Stack
          width={"fit-content"}
          className="slideUp"
          sx={{ animationDelay: "0.1s" }}
        >
          <Typography
            fontSize={{ md: 100, sm: 60, xs: 35 }}
            fontWeight={900}
            letterSpacing={{ xs: 0, md: -1 }}
            lineHeight={0.9}
          >
            ANUBH
            <Typography
              fontSize={{ md: 100, sm: 60, xs: 35 }}
              fontWeight={900}
              component={"span"}
              letterSpacing={{ xs: -5, md: -10 }}
              lineHeight={0.9}
            >
              AV
            </Typography>
          </Typography>
          <Typography
            fontSize={{ md: 100, sm: 60, xs: 35 }}
            fontWeight={900}
            component={"span"}
            letterSpacing={{ xs: 0, md: -1 }}
            lineHeight={0.9}
          >
            DIXIT
          </Typography>
        </Stack>
        <Stack
          width={"fit-content"}
          className="slideUp"
          sx={{ animationDelay: "0.3s" }}
        >
          <Typography
            mt={2}
            sx={{ opacity: 0.3 }}
            fontSize={{ md: 150, sm: 100, xs: 60 }}
            fontWeight={900}
            lineHeight={0.8}
            letterSpacing={{ md: -5, xs: -2 }}
          >
            FULL STACK WEB
          </Typography>
          <Typography
            fontSize={{ md: 150, sm: 100, xs: 60 }}
            fontWeight={900}
            lineHeight={0.8}
            letterSpacing={{ md: -5, xs: -2 }}
            sx={{
              opacity: 0.3,
              background: "linear-gradient(rgb(2, 2, 42), #eee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            DEVELOPER
          </Typography>
        </Stack>
      </Stack>
      <Stack
        position={"relative"}
        top={{md:-20,sm:-15,xs:-10}}
        pb={{md:12,xs:8}}
      >
        <Slider />
      </Stack>
    </>
  );
};

export default Home;
