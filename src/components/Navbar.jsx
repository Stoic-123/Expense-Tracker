import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import SunnyIcon from "@mui/icons-material/Sunny";
import { IconButton } from "@mui/material";
const Navbar = ({ bgColor = "#1F2937", click, changeIcon }) => {
  return (
    <div
      className="position-sticky top-0 z-3 text-end text-white"
      style={{
        backgroundColor: bgColor,
        width: "100%",
        transition: "all .2s ease-in-out",
        padding: "25px 35px",
        borderBottom: "1px solid #2B3544",
      }}
    >
      <IconButton
        className="btn text-white border-0"
        type="button"
        onClick={click}
      >
        {changeIcon ? (
          <BedtimeIcon fontSize="small" />
        ) : (
          <SunnyIcon fontSize="small" />
        )}
      </IconButton>
    </div>
  );
};

export default Navbar;
