import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function AboutPage() {
  return (
    <Box
      sx={{
        backgroundColor: "#1F1F1F",
        color: "#232323",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        "@media (max-width:600px)": {
          padding: "1rem",
        },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: "3rem",
          fontWeight: 600,
          color: "#04702c",
          marginBottom: "2rem",
          "@media (max-width:600px)": {
            fontSize: "2rem",
          },
        }}
      >
        About Me
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "1.5rem",
          color: "#666",
          marginBottom: "2rem",
          "@media (max-width:600px)": {
            fontSize: "1.25rem",
          },
        }}
      >
        Hi, I'm Zach Franke, a software engineering professional with over 4 years experience. 
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "1.5rem",
          color: "#666",
          marginBottom: "2rem",
          "@media (max-width:600px)": {
            fontSize: "1.25rem",
          },
        }}
      >
        Throughout my career, I have worked on a variety of projects covering frontend development, devops, and cloud services.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "1.5rem",
          color: "#666",
          marginBottom: "2rem",
          "@media (max-width:600px)": {
            fontSize: "1.25rem",
          },
        }}
      >
        W
      </Typography>
    </Box>
  );
}

export default AboutPage;
