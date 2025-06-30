import React from "react";
import {
  Toolbar,
  AppBar,
  Avatar,
  Link,
  Typography,
  IconButton,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

const Appbar = ({ drawerWidth, showDrawer }) => {
  return (
    <AppBar
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { xs: "0px", sm: `${drawerWidth}px` },
      }}
      position="static"
    >
      <Toolbar>
        <IconButton
          sx={{ mr: "9px", display: { xs: "block", sm: "none" } }}
          color="inherit"
          onClick={() => {
            showDrawer();
          }}
        >
          <Menu sx={{ alignItems: "center", display: "flex" }} />
        </IconButton>
        <Link
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            "&:hover": { textShadow: "0px 0px 11px black" },
          }}
          color="inherit"
          href="/"
        >
          My expenses
        </Link>

        <Typography mr={2} variant="body1" color="inherit">
          Ali Hassan
        </Typography>

        <Avatar alt="Remy Sharp" src="./imges/Ali Hassan.JPG" />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
