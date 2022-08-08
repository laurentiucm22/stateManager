import { Button, Box } from "@mui/material";
import React from "react";
import classes from "./Counter.module.css";

const Counter = ({ counter, setCounter }) => {
  return (
    <React.Fragment>
      <div className={`${classes["counter_content"]}`}>
        <h2 className={`${classes["counter_title"]}`}>Play with me</h2>
        <p className={`${classes["counter_value"]}`}>{counter}</p>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Button
            className={`${classes["counter_btn"]}`}
            variant="contained"
            size="large"
            sx={{
              marginRight: "20px",
              border: "1px solid #fff",
            }}
            onClick={() => setCounter(counter + 1)}
          >
            Increment
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={() => setCounter(counter - 1)}
            sx={{
              border: "1px solid #fff",
            }}
          >
            Decrement
          </Button>
        </Box>
      </div>
    </React.Fragment>
  );
};

export default Counter;
