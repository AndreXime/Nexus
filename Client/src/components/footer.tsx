"use client";
import { Box, Typography, Link, Divider } from "@mui/material";
import NextLink from "next/link";
import { useTheme } from "@mui/material/styles";

const Footer: React.FC = () => {
  const theme = useTheme(); // Usar o tema atual
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: theme.palette.background.default, // Usando a cor de fundo do tema
        color: theme.palette.text.primary, // Usando a cor do texto definida no tema
        py: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: 3 }}>
          <Link component={NextLink} href='/' color='inherit' underline='none'>
            Home
          </Link>
          <Link component={NextLink} href='#' color='inherit' underline='none'>
            Features
          </Link>
          <Link component={NextLink} href='#' color='inherit' underline='none'>
            Pricing
          </Link>
          <Link component={NextLink} href='#' color='inherit' underline='none'>
            FAQs
          </Link>
          <Link component={NextLink} href='#' color='inherit' underline='none'>
            About
          </Link>
        </Box>

        <Divider sx={{ my: 2, width: "100%", backgroundColor: "white" }} />

        <Typography variant='body2' sx={{ mb: 2 }}>
          &copy; 2022 NEXUS FINNANCE, Inc
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
