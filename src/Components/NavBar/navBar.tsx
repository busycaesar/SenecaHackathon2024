import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import HackathonLogo from "../../svgs/hack-logo.svg";
import Line from "../../svgs/line.svg";
import SenecaLogo from "../../svgs/seneca-logo.png";
import SocialMediaIcons from "../SocialMedia/socialMedia";
import "./navBar.css";

function ResponsiveAppBar(props: { navItems: string[] }) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const convertToUrlFormat = (text: string): string => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "black",
        top: 0,
        borderBottom: "2px solid red",
        boxShadow: "none",
        paddingBottom: "0.3em",
      }}
    >
      <div className="navBarTop">
        <SocialMediaIcons />
      </div>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/" className="nav-link">
              <img
                src={HackathonLogo}
                alt="Seneca Hackathon 2024's logo"
                // width={375}
                height={70}
              />
              <img
                src={Line}
                alt="Line"
                // width={375}
                height={70}
              />
              {/* <div className="inline">hello</div> */}
              {/* <span className=" ml-4 text-sm font-gotham font-normal  ">hosted by</span> */}
              <img
                className=" ml-4"
                src={SenecaLogo}
                alt="Seneca Hackathon 2024's logo"
                // width={375}
                height={57}
              />
            </Link>
          </Box>
          <IconButton
            size="large"
            aria-label="open navigation menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ mt: 4 }}
      >
        {props.navItems.map((item, index) => (
          <Link key={index} className="nav-link" to={convertToUrlFormat(item)}>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{item}</Typography>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </AppBar>
  );
}
export default ResponsiveAppBar;
