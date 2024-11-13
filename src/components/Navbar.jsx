import { Button, IconButton, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TbBrandAirbnb } from "react-icons/tb";
import { Sling } from "hamburger-react";

const Navbar = () => {
  const links = ["about_me", "my_skills", "my_works", "contact"];
  const [height, setHeight] = useState(0);
  const [open, setOpen] = useState(false);
  const [curr, setCurr] = useState("home");

  useEffect(() => {
    if (open) setHeight("200px");
    else setHeight("0px");
  }, [open]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setCurr(visibleSections[0].target.id); // set the most visible section
        }
      },
      { threshold: [0.5, 0.75, 1.0] }
    );

    const elements = document.querySelectorAll(
      "#about_me, #my_skills, #my_works, #contact",
      "#home"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Stack
        className="nav"
        position={"fixed"}
        width={"100%"}
        direction={"row"}
        p={2}
        px={{ sm: 5, xs: 2 }}
        justifyContent={"space-between"}
        alignItems={"center"}
        zIndex={2}
      >
        <Stack
          direction={"row"}
          color={"#A3C420"}
          alignItems={"center"}
          sx={{ cursor: "pointer" }}
          component={"a"}
          href="#home"
        >
          <TbBrandAirbnb size={60} className="loader" />
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={0}
          bgcolor={"white"}
          height={{ md: "45px", xs: "auto" }}
          borderRadius={"60px"}
          px={"3px"}
          py={{ xs: 0.4, md: 0 }}
          boxShadow={{
            xs: !open ? "rgba(209, 243, 72, 0.4) 0px 0px 4px 0px;" : "none",
            md: "rgba(209, 243, 72, 0.4) 0px 0px 4px 0px;",
          }}
        >
          {links.map((btn) => (
            <Button
              className="nav-link"
              component="a"
              href={`#${btn}`}
              key={btn}
              sx={{
                borderRadius: "60px",
                textTransform: "uppercase",
                fontWeight: 600,
                ":hover": { bgcolor: "#B3D32A1A" },
                display: { xs: "none", md: "block" },
                color: curr === btn ? "#A3C420" : "black",
                bgcolor: curr === btn ? "#B3D32A1A" : "",
              }}
            >
              {btn.split("_").join(" ")}
            </Button>
          ))}
          <Button
            className="shake"
            sx={{
              borderRadius: "60px",
              fontWeight: 700,
              textTransform: "uppercase",
              ml: { md: 1, xs: 0 },
            }}
            variant="contained"
            href={`https://drive.google.com/file/d/1urkYjnfWG6iIJOXwwQEZnTmzdkHnMub-/view?usp=sharing`}
            target="_blank"
            component={"a"}
          >
            Resume
          </Button>
          <IconButton
            sx={{
              ml: 2,
              color: "black",
              borderRadius: `20px 20px 20px ${open ? 3 : 20}px`,
              ":hover": { bgcolor: "#B3D32A1A" },
              height: "35px",
              display: { md: "none" },
              boxShadow: open
                ? "rgba(209, 243, 72, 0.4) 0px 0px 4px 0px;"
                : "none",
            }}
          >
            <Sling
              direction="right"
              size={"16"}
              toggle={setOpen}
              toggled={open}
            />
          </IconButton>
        </Stack>

        <Stack
          overflow={"hidden"}
          sx={{
            position: "absolute",
            top: 75,
            right: { xs: 80, sm: 107 },
            transition: "height 0.5s ease-in-out",
            display: { md: "none" },
          }}
          width={150}
          bgcolor={"white"}
          zIndex={2}
          borderRadius={"25px 3px 25px 25px"}
          boxShadow={"rgba(209, 243, 72, 0.4) 0px 0px 4px 0px;"}
          height={height}
        >
          {links.map((btn) => (
            <Button
              key={btn}
              component="a"
              href={`#${btn}`}
              onClick={() => setOpen(false)}
              sx={{
                textTransform: "uppercase",
                color: curr === btn ? "#A3C420" : "black",
                bgcolor: curr === btn ? "#B3D32A1A" : "",
                ":hover": { bgcolor: "#B3D32A1A" },
                mt: 2,
                mb: -1.2,
              }}
            >
              {btn.split("_").join(" ")}
            </Button>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default Navbar;
