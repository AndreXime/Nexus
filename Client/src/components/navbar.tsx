"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  const links = [
    { label: "Inicio", href: "/" },
    { label: "Funcionalidades", href: "/#funcionalidades" },
    { label: "Planos", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Sobre", href: "#sobre-nos" },
  ];

  return (
    <AppBar position='sticky'>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          padding: { sm: "0 16px", xs: "0 8px" },
        }}
      >
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          NEXUS FINNANCE
        </Typography>

        {isMobile ? (
          <IconButton color='inherit' edge='end' onClick={() => toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            {links.map((link) => (
              <Button
                key={link.label}
                component={Link}
                href={link.href}
                color='inherit'
                sx={{ textTransform: "none" }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}

        <Button component={Link} href='/acess' variant='outlined' color='secondary' sx={{ marginLeft: 2 }}>
          Começar Agora
        </Button>
      </Toolbar>

      <Drawer anchor='right' open={open} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role='presentation' onClick={() => toggleDrawer(false)}>
          <List>
            {links.map((link) => (
              <ListItem key={link.label} component={Link} href={link.href}>
                <ListItemText primary={link.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
