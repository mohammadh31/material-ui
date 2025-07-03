import { Box } from "@mui/system";
import "./Home.css";
import React, { useEffect, useState } from "react";
// @ts-ignore
import { Paper, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const Home = () => {
  const [myData, setMyData] = useState([]);
  console.log(myData);

  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => setMyData(data));
    return () => {};
  }, []);
  const handleDelete = (item) => {
    fetch(`http://localhost:3100/mydata/${item.id}`, {
      method: "DELETE",
    });
    const newArray = myData.filter((myObject) => {
      return myObject.id !== item.id;
    });
    setMyData(newArray);
  };
  let totalPrice = 0;

  return (
    <Box>
      {myData.map((item) => {
        // @ts-ignore
        totalPrice += item.price;
        return (
          <Paper
            key={item.id}
            sx={{
              position: "relative",
              width: "366px",
              display: "flex",
              justifyContent: "space-between",
              mt: { xs: 3, sm: 5 },
              pt: "27px",
              pb: "7px",
            }}
          >
            <Typography sx={{ ml: "16px", fontSize: "1.3em" }} variant="h6">
              {item.title}
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
              $ {item.price}
            </Typography>

            <IconButton
              onClick={() => {
                handleDelete(item);
              }}
              sx={{ position: "absolute", top: "0", right: "0" }}
            >
              <Close sx={{ fontSize: "20px" }} />
            </IconButton>
          </Paper>
        );
      })}
      <Typography variant="h6" mt={4} textAlign={"center"}>
        You spend $ {totalPrice}
      </Typography>
    </Box>
  );
};

export default Home;
