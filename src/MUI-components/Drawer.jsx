import { Divider, Drawer, List, useTheme, IconButton } from "@mui/material";
import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import {
  Brightness4,
  Brightness7,
  Create,
  Home,
  Logout,
  Person2,
  Settings,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

const Drawerr = ({
  drawerWidth,
  setmyMOde,
  noneOrBlock,
  drawerType,
  hideDrawer,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const currentLocateion = useLocation();

  const myList = [
    { text: "Home", id: 1, icon: <Home />, path: "/" },
    { text: "Create", id: 2, icon: <Create />, path: "/create" },
    { text: "Profile", id: 3, icon: <Person2 />, path: "/profile" },
    { text: "Settings", id: 4, icon: <Settings />, path: "/settings" },
  ];

  return (
    <Drawer
      sx={{
        display: { xs: noneOrBlock, sm: "block" },
        width: `${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}px`,
          boxSizing: "border-box",
        },
      }}
      variant={drawerType}
      anchor="left"
      open={true}
      onClose={() => {
        hideDrawer();
      }}
    >
      <List>
        <ListItem
          sx={{ display: "flex", justifyContent: "center", mb: "14px" }}
          disablePadding
        >
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "currentMode",
                theme.palette.mode === "light" ? "dark" : "light"
              );
              setmyMOde(theme.palette.mode === "light" ? "dark" : "light");
            }}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7 sx={{ color: "orange" }} />
            ) : (
              <Brightness4 />
            )}
          </IconButton>
        </ListItem>

        <Divider />
        {myList.map((param) => {
          return (
            <ListItem disablePadding key={param.id}>
              <ListItemButton
                sx={{
                  bgcolor:
                    currentLocateion.pathname === `${param.path}`
                      ? // @ts-ignore
                        theme.palette.favColor.main
                      : null,
                }}
                onClick={() => {
                  navigate(`${param.path}`);
                }}
              >
                <ListItemIcon>{param.icon}</ListItemIcon>
                <ListItemText primary={param.text} />
              </ListItemButton>
            </ListItem>
          );
        })}

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Drawerr;
