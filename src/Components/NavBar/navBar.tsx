import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Hidden } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import HackathonLogo from "../../svgs/hack-logo.svg";
import Line from "../../svgs/line.svg";
import SenecaLogo from "../../svgs/seneca-logo.png";
import SocialMediaIcons from "../SocialMedia/socialMedia";
import "./navBar.css";

function ResponsiveAppBar(props: {
  mainNavItems: string[];
  otherNavItems: string[];
}) {
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
                width={200}
              />
              <Hidden smDown>
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
              </Hidden>
            </Link>
          </Box>
          <Hidden mdDown>
            {props.mainNavItems.map((item) => (
              <Link
                key={item}
                className="nav-link"
                style={{ display: "flex" }}
                to={convertToUrlFormat(item)}
              >
                <Button key={item} sx={{ color: "black" }}>
                  {item}
                </Button>
              </Link>
            ))}
          </Hidden>
          {props.otherNavItems.length > 0 && (
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
          )}
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
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ mt: 5, p: 50 }}
      >
        <Hidden mdUp>
          {props.mainNavItems.map((item, index) => (
            <>
              <Link
                key={index}
                className="nav-link"
                to={convertToUrlFormat(item)}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{item}</Typography>
                </MenuItem>
              </Link>
              {index < props.otherNavItems.length - 1 && (
                <hr style={{ margin: "0" }} />
              )}
            </>
          ))}
          <hr style={{ margin: "0" }} />
        </Hidden>
        {props.otherNavItems.map((item, index) => (
          <>
            <Link
              key={index}
              className="nav-link"
              to={convertToUrlFormat(item)}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{item}</Typography>
              </MenuItem>
            </Link>
            {index < props.otherNavItems.length - 1 && (
              <hr style={{ margin: "0" }} />
            )}
          </>
        ))}
      </Menu>
    </AppBar>
  );
}
export default ResponsiveAppBar;
