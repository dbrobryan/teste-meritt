import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Icon,
} from "@mui/material";

export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  color="primary" position="static" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Icon>menu</Icon>
          </IconButton>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            Somos
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
