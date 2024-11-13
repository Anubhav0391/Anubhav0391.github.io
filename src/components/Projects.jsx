import React, { useEffect, useState } from "react";
import { BsInfo } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import projects from "../db.json";
import { IoIosLink, IoMdClose } from "react-icons/io";
import {
  Button,
  Chip,
  Grid2,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";

const Projects = () => {
  const [open, setOpen] = useState(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    if (open) setTimeout(() => setScale(1), 50);
  }, [open]);

  useEffect(() => {
    if (!scale) setTimeout(() => setOpen(null), 300);
  }, [scale]);

  return (
    <Stack
      id="my_works"
      px={{ sm: 5, xs: 2 }}
      justifyContent={"space-between"}
      pb={10}
      gap={{ md: 8, sm: 5, xs: 3 }}
      boxShadow={
        "rgba(50, 50, 93, 0.25) 0px 50px 100px -25px, rgba(0, 0, 0, 0.3) 0px 30px 60px -300px;;"
      }
    >
      <Stack gap={1} overflow={"hidden"}>
        <Stack
          mt={{ md: -3, sm: -2, xs: -1 }}
          width={"fit-content"}
          alignSelf={"end"}
        >
          <Typography
            sx={{ opacity: 0.3 }}
            fontSize={{ md: 150, sm: 100, xs: 60 }}
            fontWeight={900}
            lineHeight={0.8}
            letterSpacing={{ md: -5, xs: -2 }}
          >
            CODE
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
            VENTURES
          </Typography>
        </Stack>
        <Typography
          className="slideUp"
          fontSize={{ md: 100, sm: 60, xs: 35 }}
          fontWeight={900}
          letterSpacing={{ xs: 0, md: -1 }}
          lineHeight={0.9}
        >
          MY WORKS
        </Typography>
        <Typography
          className="slideUp"
          sx={{ animationDelay: "0.1s" }}
          color="#545663"
          fontSize={18}
          fontWeight={300}
          pt={{ md: 4, sm: 3, xs: 1 }}
        >
          Dive into my collection of projects, where creativity meets
          functionality. Each piece reflects my commitment to quality and
          innovation, showcasing diverse designs that elevate user experiences.
          Explore the work that brings ideas to life and transforms concepts
          into reality.
        </Typography>
      </Stack>
      <Grid2 container spacing={{ md: 4, sm: 3, xs: 2 }}>
        {projects.map((proj) => (
          <Grid2
            className={"project-card"}
            size={{ md: 6, xs: 16 }}
            key={proj.id}
          >
            <Stack
              border={"2px solid rgb(2, 2, 42)"}
              bgcolor={"rgb(2, 2, 42)"}
              borderRadius={"25px"}
              overflow={"hidden"}
              position={"relative"}
              boxShadow={
                "rgba(2, 2, 42, 0.25) 0px 54px 55px, rgba(2, 2, 42, 0.12) 0px -12px 30px, rgba(2, 2, 42, 0.12) 0px 4px 6px, rgba(2, 2, 42, 0.17) 0px 12px 13px, rgba(2, 2, 42, 0.09) 0px -3px 5px;"
              }
            >
              <Stack overflow={"hidden"}>
                <Stack
                  width={"100%"}
                  sx={{
                    "&:hover": { transform: "scale(1.1)" },
                    transition: "transform 0.5s",
                    aspectRatio: "16/9",
                  }}
                  component={"img"}
                  src={proj.thumbnail}
                />
              </Stack>
              <Stack
                direction={"row"}
                p={1.5}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Stack direction={"row"} alignItems={"center"} gap={1.5}>
                  <Stack component={"img"} src={proj?.logo} width={30} />
                  <Typography color="white" fontSize={20} fontWeight={300}>
                    {proj.title}
                  </Typography>
                </Stack>
                <Button
                  onClick={() => window.open(proj.hostedUrl, "_blank")}
                  variant="contained"
                  sx={{
                    p: "5px 10px",
                    minWidth: 0,
                    color: "#ffffff7f",
                    bgcolor: "rgba(0,45,65,0.8)",
                    borderRadius: "50px",
                    boxShadow:
                      "rgba(0,45,70, 1) 0px 0px 0px 1px, rgba(0,45,70, 0.5) 0px 2px 5px 1px, rgba(0, 45, 75, 1) 1px 2px 3px 0px inset, rgba(0, 45, 75, 1) -2px -2px 3px 0px inset",
                    "&:hover": { bgcolor: "rgb(0, 35, 55,1)" },
                  }}
                >
                  <GoArrowUpRight size={30} />
                </Button>
              </Stack>
              <IconButton
                variant="contained"
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  bgcolor: "rgb(2, 2, 42,0.07)",
                  fontSize: 30,
                  p: 0,
                  color: "rgba(0,45,65)",
                }}
                onClick={() => setOpen(proj)}
              >
                <BsInfo />
              </IconButton>
            </Stack>
          </Grid2>
        ))}
      </Grid2>
      <Modal
        open={!!open}
        onClose={() => setScale(0)}
        sx={{
          background: "#0000007f",
          visibility: open ? "visible" : "hidden",
        }}
      >
        <Stack
          width={"100%"}
          height={"100%"}
          sx={{ scale, transition: "all 0.3s" }}
          onClick={() => setScale(0)}
        >
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { sm: "80%", xs: "100%" },
              height: { sm: "90vh", xs: "100vh" },
            }}
            overflow={"hidden"}
            borderRadius={{ sm: 8 }}
          >
            <Stack
              sx={{
                bgcolor: "white",
                p: { sm: 5, xs: 2 },
                minHeight: "100%",
                overflow: "scroll",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <IconButton
                onClick={() => setScale(0)}
                sx={{
                  position: "absolute",
                  fontSize: { sm: 27, xs: 20 },
                  right: { sm: 10, xs: 5 },
                  top: { sm: 10, xs: 5 },
                }}
              >
                <IoMdClose />
              </IconButton>
              <Stack direction={"row"} alignItems={"center"} mb={3} gap={1}>
                <Stack component={"img"} src={open?.logo} width={45} />
                <Typography
                  fontSize={40}
                  fontWeight={600}
                  letterSpacing={{ xs: 0, md: -1 }}
                  lineHeight={0.9}
                >
                  {open?.title}
                </Typography>
                <Stack
                  component={"a"}
                  href={open?.hostedUrl}
                  target="_blank"
                  style={{ textDecoration: "none", color: "#A3B420" }}
                  ml={5}
                >
                  <IoIosLink fontSize={35} />
                </Stack>
              </Stack>
              <Stack direction={"row"} gap={1} flexWrap={"wrap"} mb={2}>
                {open?.tools.map((tool) => (
                  <Chip
                    sx={{
                      backgroundImage:
                        "linear-gradient(90deg, rgba(163,179,33, 0.2) 0%, rgba(2,2,42, 0.05) 100%)",
                    }}
                    label={tool}
                  />
                ))}
              </Stack>
              <Typography color="#545663" fontWeight={300} mb={1.5}>
                {open?.description}
              </Typography>
              <Typography fontSize={22}>Features :</Typography>
              <Stack component={"ul"} pl={2} mb={1.5} gap={0.5}>
                {open &&
                  Object?.entries(open?.features)?.map(([title, desc]) => (
                    <Typography
                      component={"li"}
                      key={title}
                      color="#545663"
                      fontWeight={300}
                    >
                      <Typography color="rgb(2, 2, 42)" component={"b"}>
                        {title}:{" "}
                      </Typography>
                      {desc}
                    </Typography>
                  ))}
              </Stack>
              <Typography fontSize={22}>Areas of responsibility :</Typography>
              <Stack component={"ul"} pl={2} mb={1.5} gap={0.5}>
                {open?.responsibilities?.map((resp) => (
                  <Typography
                    component={"li"}
                    key={resp}
                    color="#545663"
                    fontWeight={300}
                  >
                    {resp}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Modal>
    </Stack>
  );
};

export default Projects;
