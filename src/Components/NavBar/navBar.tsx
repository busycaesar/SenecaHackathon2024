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
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import HackathonLogo from "../../svgs/hack-logo.svg";
import ListItemText from "@mui/material/ListItemText";
import Line from "../../svgs/line.svg";
import { Link as MuiLink } from "@mui/material";
import SenecaLogo from "../../svgs/seneca-polytechnic.png";
import SocialMediaIcons from "../SocialMedia/socialMedia";
import "./navBar.css";
import { Row, Col } from "react-bootstrap";
import data from "../../Data/Challengesets/challengeSets.json";
import Collapsible from "./useDropdown";

function ResponsiveAppBar(props: {
  mainNavItems: string[];
  otherNavItems: string[];
}) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const [anchorElChallengeSets, setAnchorElChallengeSets] =
    React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const convertToUrlFormat = (text: string): string => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };

  const handleChallengeSetsMenuOpen = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    event.stopPropagation();
    setAnchorElChallengeSets(event.currentTarget);
  };

  const handleCloseChallengeSetsMenu = () => {
    setAnchorElChallengeSets(null);
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
          <Box sx={{ flexGrow: 1 }} className="flex">
            <a href="/" className="flex">
              <img
                src={HackathonLogo}
                alt="Seneca Hackathon 2024's logo"
                className="w-[180px] md:w-[215px]"
              />
            </a>
            <img className="mx-3 h-[70px]" src={Line} alt="Line" />
            <div className="flex flex-col">
              <span className=" mb-0 text-xs pt-2">hosted by</span>
              <a
                href="https://www.senecapolytechnic.ca/home.html"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={SenecaLogo}
                  alt="Seneca's logo"
                  className=" h-[40px] md:h-[40px]"
                />
              </a>
            </div>
          </Box>
          <Hidden mdDown>
            {props.mainNavItems.map((item) =>
              item === "Challenge Sets" ? (
                <>
                  <Box
                    sx={{
                      marginBottom: "0.2em",
                    }}
                  >
                    {anchorElChallengeSets ? (
                      <ArrowDropDownIcon />
                    ) : (
                      <ArrowRightIcon />
                    )}
                  </Box>
                  <Button
                    key={item}
                    sx={{ my: 2, color: "black", display: "block" }}
                    onMouseEnter={handleChallengeSetsMenuOpen}
                  >
                    {item}
                  </Button>
                </>
              ) : (
                <Link
                  to={`/${convertToUrlFormat(item)}`}
                  key={item}
                  style={{ textDecoration: "none" }}
                >
                  <Button sx={{ my: 2, color: "black", display: "block" }}>
                    {item}
                  </Button>
                </Link>
              )
            )}
          </Hidden>
          <Hidden mdUp>
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
          </Hidden>
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
      <Menu
        id="challenge-set-menu"
        anchorEl={anchorElChallengeSets}
        keepMounted
        open={Boolean(anchorElChallengeSets)}
        onClose={handleCloseChallengeSetsMenu}
        onMouseLeave={handleCloseChallengeSetsMenu}
      >
        {data[0].challengeSets.map((set) => (
          <Collapsible key={set.id} header={set.name}>
            {set.challenges.map((challenge) => (
              <MenuItem
                key={challenge.categoryName}
                onClick={handleCloseChallengeSetsMenu}
              >
                <span
                  className="hover-text-myred"
                  style={{ marginLeft: "20px" }}
                >
                  <MuiLink
                    component={Link}
                    to={{
                      pathname: `/challenge-sets/${challengeSet.id}/${challenge.categoryName}`,
                    }}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      fontSize: "0.8rem",
                    }}
                  >
                    {challenge.categoryName}
                  </MuiLink>
                </span>
              </MenuItem>
            ))}
          </Collapsible>
        ))}
      </Menu>
    </AppBar>
  );
}
export default ResponsiveAppBar;
