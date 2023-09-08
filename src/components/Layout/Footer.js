import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover" :{
                color:'goldenrod',
                transform:'translateX(5px)',
                transition:'all 400ms'
            }
          }}
        >
          <a href="https://www.instagram.com/_utkarsh_sharma_179/" target="_blank" ><InstagramIcon /></a>
          <a href="https://twitter.com/utkarsh43734297" target="_blank" ><TwitterIcon /></a>
          <a href="https://github.com/Uttu32"><GitHubIcon /></a> 
          <a href="https://www.linkedin.com/in/utkarsh-sharma-1a9006191/"><LinkedInIcon /></a>
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; UTKARSH SHARMA
        </Typography>
      </Box>
    </>
  );
}
