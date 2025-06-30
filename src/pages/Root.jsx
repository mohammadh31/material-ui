import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Appbar from "MUI-components/Appbar";
import Drawerr from "MUI-components/Drawer";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const drawerWidth = 240;
const Root = () => {
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode,
      // @ts-ignore
      ...(mode === "light"
        ? {
            ali: {
              main: "#64748B",
              // contrastText: "#fff",
            },
            favColor: {
              main: grey[300],
            },
          }
        : {
            ali: {
              main: "teal",
            },
            favColor: {
              main: grey[800],
            },
          }),
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Appbar drawerWidth={drawerWidth} />

        <Drawerr drawerWidth={drawerWidth} setmyMOde={setmyMOde} />

        <Box
          component="main"
          sx={{
            ml: `${drawerWidth}px`,
            display: " flex",
            justifyContent: "center",
            mt: "66px",
          }}
          // className="border"
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;
