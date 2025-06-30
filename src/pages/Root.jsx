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
  const [noneOrBlock, setNoneOrBlock] = useState("none");
  const [drawerType, setDrawerType] = useState("permanent");

  const showDrawer = () => {
    setDrawerType("temporary");
    setNoneOrBlock("bolck");
  };

  const hideDrawer = () => {
    setDrawerType("permanent");
    setNoneOrBlock("none");
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Appbar
          // @ts-ignore
          showDrawer={showDrawer}
          // @ts-ignore
          setNoneOrBlock={setNoneOrBlock}
          drawerWidth={drawerWidth}
          setDrawerType={setDrawerType}
        />

        <Drawerr
          // @ts-ignore
          noneOrBlock={noneOrBlock}
          drawerWidth={drawerWidth}
          setmyMOde={setmyMOde}
          drawerType={drawerType}
          hideDrawer={hideDrawer}
        />

        <Box
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px` },
            display: " flex",
            justifyContent: "center",
            mt: { xs: 5, sm: 8 },
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
