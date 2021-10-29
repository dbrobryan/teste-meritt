import { useState, ReactNode, useCallback } from "react";

import { useHistory } from 'react-router-dom';

import { useTheme } from "@mui/material/styles";

import {
  Box, 
  Drawer,
  Toolbar,
  CssBaseline,
  List,
  Typography,
  Divider,
  Icon,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';

import { AppBar, DrawerHeader, Main } from "./styles";

const drawerWidth = 240;

interface AppLayoutProps {
  children: ReactNode;
  title?: string;
}

export function AppLayout({
  children,
  title,
}: AppLayoutProps) {
  const theme = useTheme();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNavigate = useCallback((path: string) => () => {
    history.push(path);
    handleDrawerClose();
  }, [history]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar color="primary" position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <Icon>menu</Icon>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {title || "SOMOS"}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {
              <Icon>
                {theme.direction === "ltr" ? "chevron_left" : "chevron_right"}
              </Icon>
            }
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <Icon>{index % 2 === 0 ? "inbox" : "mail"}</Icon>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
          <ListItem button onClick={handleNavigate('/exams')}>
            <ListItemIcon>
              <Icon>add_task</Icon>
            </ListItemIcon>
            <ListItemText primary="Exams" />
          </ListItem>
          <ListItem button onClick={handleNavigate('/')}>
            <ListItemIcon>
              <Icon>home</Icon>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader/>
        {children}
      </Main>
    </Box>
  );
}
