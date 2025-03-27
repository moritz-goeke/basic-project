import { AppBar, Button, Toolbar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function MenuBar() {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => navigate("/")}
          color="inherit"
          sx={{ mr: 2, color: "white" }}
        >
          Home
        </Button>
        <Button onClick={() => navigate("/page1")} sx={{ color: "white" }}>
          Page 1
        </Button>
      </Toolbar>
    </AppBar>
  );
}
