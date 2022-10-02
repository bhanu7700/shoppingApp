import { Button, ButtonGroup, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
export const Footer = () => {
  return (
    <Box bgcolor="#354656" mt={6} minHeight="260px">
      <Box m={2}>
        <Grid container spacing={4} p={2}>
          <Grid item xs={12} sm={4} md={4}>
            <Typography
              sx={{ color: "#CACACA", padding: "50px", pt: "0px", pl: "0px" }}
              // margin={2}
              variant="subtitle2"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores quae ipsa officia commodi magni aliquid dolore pariatur
              nostrum saepe rem expedita cupiditate animi qui odio, incidunt
              quasi totam eius voluptatibus?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2} md={2}>
            <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
              Resources
            </Typography>
            <Typography>
              <Typography sx={{ color: "#CACACA", mb: 1 }}>About Us</Typography>
            </Typography>
            <Typography>
              <Typography sx={{ color: "#CACACA", mb: 1 }}>Team</Typography>
            </Typography>
            <Typography>
              <Typography sx={{ color: "#CACACA", mb: 1 }}>Services</Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
              Contact
            </Typography>
            <Typography sx={{ color: "#CACACA", mb: 1 }}>9999999999</Typography>
            <Typography variant="subtitle1" sx={{ color: "#CACACA" }}>
              Email Id - example@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
              Connect With Us
            </Typography>
            <ButtonGroup orientation="vertical" variant="text">
              <Typography sx={{ color: "#CACACA" }}>
                {" "}
                <FacebookIcon /> Facebook
              </Typography>
              <Typography sx={{ color: "#CACACA" }}>
                {" "}
                <YouTubeIcon /> YouTube
              </Typography>
              <Typography sx={{ color: "#CACACA" }}>
                {" "}
                <TelegramIcon /> Telegram
              </Typography>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Divider />
        <Typography sx={{ color: "#CACACA", margin: 1, ml: 4 }}>
          Copyright &copy; test 2021 All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};
