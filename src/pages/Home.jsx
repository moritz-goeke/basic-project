import { Box, Typography } from "@mui/material";
import * as React from "react";
import Banner from "../assets/home.png";

export default function Home() {
  return (
    <Box sx={{ width: 1, display: "flex", justifyContent: "center", mt: 10 }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography sx={{ fontSize: 22 }}>Home</Typography>
        <Box
          component="img"
          src={Banner}
          sx={{
            height: 250,
            width: "auto",
            maxWidth: "85vw",
            borderRadius: 3,
            userSelect: "none",
          }}
        />
      </Box>
    </Box>
  );
}
