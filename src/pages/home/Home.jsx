import { Box, useTheme } from "@mui/system";
import "./Home.css";
import React from "react";
// @ts-ignore
import { Paper, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const Home = () => {
  const theme = useTheme();
  return (
    <Box>
      <Paper
        sx={{
          position: "relative",
          width: "366px",
          display: "flex",
          justifyContent: "space-between",
          mt: "22px",
          pt: "27px",
          pb: "7px",
        }}
      >
        <Typography sx={{ ml: "16px", fontSize: "1.3em" }} variant="h6">
          GYM
        </Typography>
        <Typography
          sx={{
            mr: "33px",
            fontWeight: 500,
            fontSize: "1.4em",
            opacity: "0.8",
          }}
          variant="h6"
        >
          $100
        </Typography>

        <IconButton sx={{ position: "absolute", top: "0", right: "0" }}>
          <Close sx={{ fontSize: "20px" }} />
        </IconButton>
      </Paper>

      <Typography variant="h5" color={theme.palette.favColor.main}>
        MHD Hawaj
      </Typography>
    </Box>
  );
};

export default Home;
