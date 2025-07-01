import { Box, useTheme } from "@mui/material";
import FuzzyText from "help/FuzzyText/FuzzyText";
import React from "react";

function NotFound() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <FuzzyText
        color={theme.palette.error.main}
        baseIntensity={0.02}
        hoverIntensity={0.44}
        enableHover={false}
        fontSize="20rem"
      >
        404
      </FuzzyText>
      <br />
      <br />
      <FuzzyText
        color={theme.palette.error.main}
        fontSize="3.5rem"
        baseIntensity={0.01}
        hoverIntensity={0.44}
        enableHover={false}
      >
        not found
      </FuzzyText>
    </Box>
  );
}

export default NotFound;
