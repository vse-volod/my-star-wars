import React from "react";
import { Box, Container } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      width="100%"
      bgcolor="#f0f0f0"
      padding="2rem"
    >
      <Container
        sx={{
          maxWidth: "1280px",
          width: "100%",
          margin: "0 auto",
          textAlign: "center",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
