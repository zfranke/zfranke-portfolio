import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function AboutPage() {
  return (
    <Box
      sx={{
        backgroundColor: "#1F1F1F",
        color: "#232323",
        minHeight: "85vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2.5rem",
        paddingLeft: "15rem",
        paddingRight: "15rem",
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
        I am an experienced cloud services professional with a solid background in AWS cloud services. As a Cloud Services Engineer, I have gained a moderate understanding of various AWS cloud services and their usage in fulfilling clients' needs. My expertise lies in setting up and maintaining analytics reporting tools, enforcing security policies for PCI Level 1 Compliance, and integrating third-party applications to enhance system integration. In addition, I have also maintained and set up microservices using AWS to streamline development processes.
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
        In my free time, I enjoy cooking, which allows me to explore new recipes and experiment with ingredients. I find it fulfilling to volunteer on service projects and events that benefit my local community. In addition, I also work on various side development projects to further enhance my technical skills and stay up-to-date with the latest technologies. There is never a moment to not stop learning, especially with how much technology can change in a short period of time.
      </Typography>
    </Box>
  );
}

export default AboutPage;
