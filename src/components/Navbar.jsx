import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import { Link ,NavLink} from "react-router-dom";

import DrawerComponent from "./DrawerComponent";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { clearToken, selectToken } from '.././pages/store/reducers/userSlice'; // Import the selector for the authentication token
import { useDispatch, useSelector } from "react-redux";

const pages = [
  { label: "Home", to: "/" },
  { label: "Favorites", to: "/favorite" },
];
const auth = [
  { label: "Login", to: "/login" },
  { label: "Register", to: "/register" },
];
const settings = [
  {
    label: "Profile",
    to: "/profile",
  },
  {
    label: "Settings",
    to: "/settings",
  }
];

function Navbar() {
  const [navDrawer, setNavDrawer] = React.useState(false);
  const [settingsDrawer, setSettingsDrawer] = React.useState(false);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const userToken = useSelector(selectToken);
  console.log("userToken from nav",userToken)
const dispatch =useDispatch();
  const handelLogout =()=>{
dispatch(clearToken())
  }

  const handleOpenNavDrawer = () => {
    setNavDrawer(true);
  };

  const handleCloseNavDrawer = () => {
    setNavDrawer(false);
  };

  const handleOpenSettingsDrawer = () => {
    setSettingsDrawer(true);
  };

  const handleCloseSettingsDrawer = () => {
    setSettingsDrawer(false);
  };

  return (
    <AppBar
      position="static"
      sx={{ boxShadow: "none", backgroundColor: "white", color: "black" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              height: { xs: 53, md: 70 },
              width: { xs: 53, md: 70 },
              display: { xs: "none", md: "flex" },
            }}
            alt="Descriptive Alt Text"
            src="public/assets/logo.png"
          />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#521ce4",
              textDecoration: "none",
            }}
          >
            Zetaton
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open drawer"
              onClick={handleOpenNavDrawer}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            component="img"
            sx={{
              height: { xs: 53, md: 70 },
              width: { xs: 53, md: 70 },
              display: { xs: "flex", md: "none" },
            }}
            alt="Descriptive Alt Text"
            src="public/assets/logo.png"
          />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#521ce4",
              textDecoration: "none",
            }}
          >
            Zetaton
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ label, to }) => (
              <Button
                key={label}
                sx={{ my: 2, color: "black", display: "block" ,mx:1,"&:hover":{
                    backgroundColor:'#c677e8',
                    borderRadius:'8px'
                  }}}
                component={NavLink}
                to={to}
                exact
                activeClassName="active"
              >
                {label}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex" }}>
{!userToken?     <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                marginRight: "8px",
              }}
            >
              {auth.map((item) => (
                <Button
                  key={item.label}
                  sx={{ my: 2, color: "black", display: "block" ,mx:1 ,"&:hover":{
                    backgroundColor:'#c677e8',
                    borderRadius:'8px'
                  }}}
                  component={NavLink}
                  to={item.to}
                  exact
                  activeClassName="active"
                >
                  {item.label}
                </Button>
              ))}
            </Box>:    <>
            <Button
                 onClick={handelLogout}
                  sx={{ my: 2, color: "black", display: "block" ,mx:1 ,"&:hover":{
                    backgroundColor:'#c677e8',
                    borderRadius:'8px'
                  }}}
               
                  
                >
Logout                </Button>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenSettingsDrawer} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/public/assets/profile.png" />
              </IconButton>
            </Tooltip></>
            }
  
            <DrawerComponent
              anchor="right"
              open={settingsDrawer}
              onClose={handleCloseSettingsDrawer}
              items={isMd ? [...settings, ...auth] : settings}   
                          />
  
          </Box>
        </Toolbar>
        <DrawerComponent
          anchor="left"
          open={navDrawer}
          onClose={handleCloseNavDrawer}
          items={pages} 
        />
  
      </Container>
    </AppBar>
  );
}

export default Navbar;
