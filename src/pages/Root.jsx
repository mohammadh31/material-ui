import { useState } from "react";
import { Outlet } from "react-router-dom";
import Appbar from "MUI-components/Appbar";
import Drawerr from "MUI-components/Drawer";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import getDesignTokens from "styles/myTheme";
import { useMemo } from "react";

const drawerWidth = 240;
const Root = () => {
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
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

  // @ts-ignore
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Appbar
          {...{
            showDrawer,
            setNoneOrBlock,
            drawerWidth,
            setDrawerType,
          }}
        />

        <Drawerr
          {...{
            noneOrBlock,
            drawerWidth,
            setmyMOde,
            drawerType,
            hideDrawer,
          }}
        />

        <Box
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px` },
            display: " flex",
            justifyContent: "center",
            mt: { xs: 5, sm: 8 },
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;
