import { Box, Typography } from "@mui/material";
import * as React from "react";

export default function NoPage() {
  return (
    <Box sx={{ width: 1, display: "flex", justifyContent: "center", mt: 10 }}>
      <Typography sx={{ fontSize: 22 }}>Page not found!</Typography>
    </Box>
  );
}
