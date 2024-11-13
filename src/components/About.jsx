import { Stack, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Stack bgcolor={"#000214f7"} px={{ sm: 5, xs: 2 }} id='about_me' overflow={'hidden'}>
      <Stack position={"relative"} top={{md:-37,sm:-30,xs:-25}} width={"fit-content"} mx={"auto"}>
        <Typography
          mt={2}
          sx={{
            opacity: 0.2,
            background: "linear-gradient(#eee,#eeeeee7c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          fontSize={{ md: 150, sm: 100, xs: 60 }}
          fontWeight={900}
          lineHeight={0.8}
          letterSpacing={{ md: -5, xs: -2 }}
        >
          BEYOND
        </Typography>
        <Typography
          fontSize={{ md: 150, sm: 100, xs: 60 }}
          fontWeight={900}
          lineHeight={0.8}
          letterSpacing={{ md: -5, xs: -2 }}
          sx={{
            opacity: 0.15,
            background: "linear-gradient(#eee,#eeeeee7c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          CODE
        </Typography>
      </Stack>
      <Stack
        direction={{ lg: "row", xs: "column" }}
        pb={12}
        gap={4}
        position={"relative"}
      >
        <Stack
          width={{ lg: "55%" }}
          mt={-3}
          spacing={1}
        >
          <Typography
            className="slideUp"
            fontSize={{ md: 100, sm: 60, xs: 35 }}
            fontWeight={900}
            letterSpacing={{ xs: 0, md: -1 }}
            lineHeight={0.9}
            color="white"
          >
            KNOW ME
          </Typography>
          <Typography
            className="slideUp"
            sx={{ animationDelay: "0.1s" }}
            color="white"
            fontSize={{sm:24,xs:21}}
            fontWeight={300}
            pt={{md:4,sm:3,xs:1}}
          >
            I am Anubhav Dixit, a passionate Full Stack Web Developer with hands
            on experience working with modern frontend technologies, including
            React.js, Redux, RTK Query, Material UI, Tailwind, Typescript and
            libraries like React Router, React Flow, AntV G6, and Cytoscape. My
            journey has been driven by curiosity and a dedication to creating
            innovative digital solutions.
          </Typography>
          <Typography
            className="slideUp"
            sx={{ animationDelay: "0.2s" }}
            color="#b1b3bd"
            fontSize={18}
            fontWeight={300}
          >
            My expertise also includes a foundational understanding of Jest,
            React Testing Library, CI/CD using GitHub Actions, Webpack, and
            Node.js, and I am continually expanding my backend knowledge to grow
            as a well-rounded developer.
          </Typography>
          <Typography
            className="slideUp"
            sx={{ animationDelay: "0.3s" }}
            color="#b1b3bd"
            fontSize={18}
            fontWeight={300}
          >
            I take pride in delivering high-quality results and collaborating
            effectively, as demonstrated in projects like Unize API, FoodLogAI,
            Video Voiceover and Beengy where I contributed to intuitive user
            experiences.
          </Typography>
          <Typography
            className="slideUp"
            sx={{ animationDelay: "0.4s" }}
            color="#b1b3bd"
            fontSize={18}
            fontWeight={300}
          >
            With a background in Full Stack Web Development, I stay current with
            industry best practices. My earlier studies have sharpened my
            analytical and problem-solving skills, which I apply in every
            project.
          </Typography>
          <Typography
            className="slideUp"
            sx={{ animationDelay: "0.5s" }}
            color="#b1b3bd"
            fontSize={18}
            fontWeight={300}
          >
            I thrive on challenges and continuously seek opportunities to grow.
            I am excited to bring my expertise to an innovative tech company and
            contribute to impactful web solutions.
          </Typography>
        </Stack>
        <Stack
          width={{ lg: "45%" }}
          position={'relative'}
          top={-10}
          overflow={"hidden"}
        >
            <Stack
              border={"1px solid #6EC3DF"}
              component={"img"}
              className="slideUp"
              animationDelay='0.5s'
              src="/about.png"
              height={"100%"}
              width={"100%"}
            />
            
        </Stack>
      </Stack>
    </Stack>
  );
};

export default About;
