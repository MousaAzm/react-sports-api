import { useNavigate } from "react-router";
import { useState } from "react";
import RoutingPath from "../../routes/RoutingPath";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  MenuItem,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const Navigation = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <header>
        <AppBar position="static" style={{ background: "#2e7d32" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                LOGO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button
                  onClick={() => navigate(RoutingPath.homeView)}
                  sx={{ ml: "auto", my: 2, color: "white", display: "block" }}
                >
                  Home
                </Button>
                <Button
                  onClick={() => navigate(RoutingPath.SportView)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Sports
                </Button>
                <Button
                  onClick={() => navigate(RoutingPath.leagueView)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  League
                </Button>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                LOGO close
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                  sx={{ ml: "auto" }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem>
                    <Typography
                      onClick={() => navigate(RoutingPath.homeView)}
                      textAlign="center"
                    >
                      Home
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography
                      onClick={() => navigate(RoutingPath.SportView)}
                      textAlign="center"
                    >
                      Sports
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
    </>
  );
};
