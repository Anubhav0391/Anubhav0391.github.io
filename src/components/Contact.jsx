import { Stack, Typography } from "@mui/material";
import React from "react";
import { LiaLinkedin } from "react-icons/lia";
import { LuGithub } from "react-icons/lu";
import {  MdOutlineEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";

const Contact = () => {
  return (
    <>
      <Stack id="contact" bgcolor={"#000214f7"} px={{ sm: 5, xs: 2 }} pt={11} overflow={'hidden'}>
        <Stack
          width={"fit-content"}
          className="slideUp"
          sx={{ animationDelay: "0.1s" }}
        >
          <Typography
            className="slideUp"
            fontSize={{ md: 100, sm: 60, xs: 35 }}
            fontWeight={900}
            letterSpacing={{ xs: 0, md: -1 }}
            lineHeight={0.9}
            color="white"
          >
            GET IN TOUCH
          </Typography>
          <Typography
            className="slideUp"
            sx={{ animationDelay: "0.3s" }}
            color="white"
            fontSize={{sm:24,xs:21}}
            fontWeight={300}
            pt={{md:4,sm:3,xs:1}}
          >
            Are you ready to create <br /> something extraordinary together?
          </Typography>
          <Stack
            component={"a"}
            direction={"row"}
            gap={{xs:0.5,sm:2}}
            alignItems={"center"}
            href="mailto:anubhavdixit268@gmail.com"
            className="slideUp"
            sx={{ animationDelay: "0.5s"}}
            color="#D1F348"
            fontSize={{sm:32,xs:20}}
            fontWeight={800}
            pt={{md:4,sm:3,xs:1}}
          >
            <MdOutlineEmail />
            <Typography whiteSpace={'nowrap'} width={'85vw'} textOverflow={'ellipsis'} color="inherit" fontWeight={'inherit'} fontSize={'inherit'} overflow={'hidden'}>anubhavdixit268@gmail.com</Typography>
          </Stack>
          <Stack
            direction={"row"}
            gap={{xs:0.5,sm:2}}
            alignItems={"center"}
            className="slideUp"
            
            sx={{ animationDelay: "0.7s" }}
            color="#D1F348"
            fontSize={{sm:32,xs:20}}
            fontWeight={800}
            pt={1}
          >
            <PiPhone />
            +91 6392185444
          </Stack>
        </Stack>
        <Stack
          component={"a"}
          direction={"row"}
          gap={{xs:0.5,sm:2}}
          alignItems={"center"}
          href="https://www.linkedin.com/in/anubhav-dixit-753b51223/"
          className="slideUp"
          sx={{ animationDelay: "0.9s" }}
          color="#D1F348"
          fontSize={{sm:32,xs:20}}
          fontWeight={800}
          pt={1}
        >
          <LiaLinkedin />
          LinkedIn
        </Stack>
        <Stack
          component={"a"}
          direction={"row"}
          gap={{xs:0.5,sm:2}}
          alignItems={"center"}
          href="https://github.com/Anubhav0391"
          className="slideUp"
          sx={{ animationDelay: "1s" }}
          color="#D1F348"
          fontSize={{sm:32,xs:20}}
          fontWeight={800}
          pt={1}
        >
          <LuGithub  />
          Github
        </Stack>
        <Stack
          width={"fit-content"}
          alignSelf={"end"}
          px={{ sm: 10, xs: 2 }}
          mb={{md:-3,sm:-2,xs:-1}}
        >
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
            JOIN THE
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
            LEGACY
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Contact;
