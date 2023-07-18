import React from "react";
import { Typography, Container } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center">
          My Website
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          © {new Date().getFullYear()} All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
