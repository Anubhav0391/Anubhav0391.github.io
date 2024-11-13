import { Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaHtml5, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiCss3, SiMui, SiRedux, SiTypescript } from "react-icons/si";

const Skills = () => {
  const xxs = useMediaQuery("(max-width:500px)");

  return (
    <Stack
      id="my_skills"
      px={{ sm: 5, xs: 2 }}
      justifyContent={"space-between"}
      py={{md:15,xs:10}}
      direction={{ lg: "row", xs: "column" }}
      gap={8}
    >
      <Stack width={{ lg: "55%" }} gap={1} mt={{ lg: 8 }}>
        <Typography
          className="slideUp"
          fontSize={{ md: 100, sm: 60, xs: 35 }}
          fontWeight={900}
          letterSpacing={{ xs: 0, md: -1 }}
          lineHeight={0.9}
        >
          MY WEAPONS
        </Typography>
        <Typography
          className="slideUp"
          sx={{ animationDelay: "0.1s" }}
          color="#545663"
          fontSize={18}
          fontWeight={300}
          pt={{md:4,sm:3,xs:1}}
        >
          As a developer, I excel in crafting efficient solutions with a focus
          on performance and user experience.
        </Typography>
        <Typography
          className="slideUp"
          sx={{ animationDelay: "0.2s" }}
          color="#545663"
          fontSize={18}
          fontWeight={300}
        >
          While every developer brings unique skills to ensure client
          satisfaction, I specialize in key areas that enhance functionality and
          design, making sure each project is both robust and intuitive.
        </Typography>
      </Stack>
      <Stack
        gap={2}
        alignItems={"center"}
        width={{ lg: "45%",}}
        className="slideUp"
      >
        <Stack direction={"row"} spacing={{ md: 8, xs: 2 }}>
          <Stack
            className="redux"
            justifyContent={"center"}
            width={"fit-content"}
            p={{ sm: 4, xs: 3 }}
            borderRadius={5}
            alignItems={"center"}
            bgcolor={"white"}
            boxShadow={"0 18px 29px 20px rgb(183 189 212 / 16%)"}
            position={"relative"}
            height={"fit-content"}
          >
            <SiRedux size={xxs ? 60 : 80} color="#7248B6" />
          </Stack>

          <Stack
            className="css"
            justifyContent={"center"}
            width={"fit-content"}
            p={2.5}
            borderRadius={4}
            alignItems={"center"}
            bgcolor={"white"}
            boxShadow={"0 18px 29px 20px rgb(183 189 212 / 16%)"}
            position={"relative"}
            height={"fit-content"}
          >
            <SiCss3 size={35} color="#264DE4" />
          </Stack>
          <Stack
            className="mui"
            justifyContent={"center"}
            width={"fit-content"}
            p={3}
            borderRadius={5}
            alignItems={"center"}
            bgcolor={"white"}
            boxShadow={"0 18px 29px 20px rgb(183 189 212 / 16%)"}
            position={"relative"}
            height={"fit-content"}
          >
            <SiMui size={50} color="#0173E5" />
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={{ md: 8, xs: 4 }}>
          <Stack
            className="tailwind"
            justifyContent={"center"}
            width={"fit-content"}
            p={{ sm: 3, xs: 2.5 }}
            borderRadius={5}
            alignItems={"center"}
            bgcolor={"white"}
            boxShadow={"0 18px 29px 20px rgb(183 189 212 / 16%)"}
            position={"relative"}
            height={"fit-content"}
          >
            <RiTailwindCssFill size={xxs ? 35 : 45} color="#37BCF8" />
          </Stack>

          <Stack
            className="react"
            justifyContent={"center"}
            width={"fit-content"}
            p={{ sm: 5, xs: 4 }}
            borderRadius={5}
            alignItems={"center"}
            bgcolor={"white"}
            boxShadow={"0 18px 29px 20px rgb(183 189 212 / 16%)"}
            position={"relative"}
            height={"fit-content"}
          >
            <FaReact size={xxs ? 80 : 100} color="#65D9FB" />
          </Stack>

          <Stack
            className="html"
            justifyContent={"center"}
            width={"fit-content"}
            p={2}
            borderRadius={3}
            alignItems={"center"}
            bgcolor={"white"}
            boxShadow={"0 18px 29px 20px rgb(183 189 212 / 16%)"}
            position={"relative"}
            height={"fit-content"}
          >
            <FaHtml5 size={30} color="#DC4A25" />
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={{ md: 8, xs: 4 }}>
          <Stack
            className="ts"
            justifyContent={"center"}
            width={"fit-content"}
            p={{ sm: 4.5, xs: 3.5 }}
            borderRadius={5}
            alignItems={"center"}
            bgcolor={"white"}
            boxShadow={"0 18px 29px 20px rgb(183 189 212 / 16%)"}
            position={"relative"}
            height={"fit-content"}
          >
            <SiTypescript size={xxs ? 40 : 55} color="#3077C6" />
          </Stack>
          <Stack
            className="github"
            justifyContent={"center"}
            width={"fit-content"}
            p={{ sm: 3, xs: 2 }}
            borderRadius={5}
            alignItems={"center"}
            bgcolor={"white"}
            boxShadow={"0 18px 29px 20px rgb(183 189 212 / 16%)"}
            position={"relative"}
            height={"fit-content"}
          >
            <BsGithub size={xxs ? 40 : 50} color="#000000" />
          </Stack>
          <Stack
            className="js"
            justifyContent={"center"}
            width={"fit-content"}
            p={{ sm: 4, xs: 3 }}
            borderRadius={5}
            alignItems={"center"}
            bgcolor={"white"}
            boxShadow={"0 18px 29px 20px rgb(183 189 212 / 16%)"}
            position={"relative"}
            height={"fit-content"}
          >
            <RiJavascriptFill size={xxs ? 65 : 90} color="#E8D44D" />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Skills;
