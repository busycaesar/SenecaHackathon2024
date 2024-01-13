/*
src/components/user/login.jsx 

This component is used to login to the admin portal.
It uses the firebase auth to login and get the token.
The token is then stored in the local storage.
Set the login button to get all participants if the user is logged in.

direct link to the login page: https://registrations.senecahackathon.com/getallparticipant

*/

import React, { useState } from "react";
import Token from "../../model/TokenModel";
import { Button, TextField, Modal, Box, Slide } from "@mui/material";
import useToggle from "../CustomHooks/useToggle";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../model/firebase/config";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import CloseIcon from "@mui/icons-material/Close";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openForm, setOpenForm] = useToggle(false);
  const token = new Token();
  const [isLogin, setIsLogin] = useToggle(false);
  const [forgetPassword, togglePassword] = useToggle(false);

  const handleLoginClick = () => {
    if (isLogin) {
      // Loggedin, open new tab to get all participants
      window.open(
        "https://registrations.senecahackathon.com/getallparticipant",
        "_blank"
      );
    } else {
      setOpenForm(true);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      setIsLogin(true);
      setOpenForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    token.setToken(null);
    setIsLogin(false);
  };

  const modalStyle = {
    position: "fixed",
    top: "15%",
    left: "83%",
    transform: "translate(-50%, 0)",
    width: "100%",
    maxWidth: "300px",
    bgcolor: "#363636",
    border: "1px solid #000",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
    opacity: "90%",
    overflowY: "auto",
    zIndex: 500,
    "@media (max-width:1280px)": {
      top: "20%",
      left: "67%",
      width: "200px",
      maxWidth: "90%",
      p: 2,
    },
    "@media (max-width:1024px)": {
      top: "20%",
      left: "67%",
      width: "200px",
      maxWidth: "90%",
      p: 2,
    },

    fontWeight: "bold",
    color: "white",
  };

  return (
    <>
      <Button
        onClick={handleLoginClick}
        variant="contained"
        size="small"
        sx={{
          padding: "2px 6px",
          fontSize: "0.7rem",
          backgroundColor: "#ff2916",
          fontWeight: "bold",
          marginRight: "10px",
          "&:hover": { backgroundColor: "#d10000" },
        }}
      >
        {isLogin ? "View Participants" : "Admin"}
      </Button>

      {isLogin && (
        <Button
          onClick={handleLogout}
          variant="contained"
          size="small"
          sx={{
            padding: "2px 6px",
            fontSize: "0.7rem",
            backgroundColor: "grey",
            marginLeft: "10px",
            "&:hover": { backgroundColor: "#666" },
          }}
        >
          Logout
        </Button>
      )}

      <Slide direction="down" in={openForm} mountOnEnter unmountOnExit>
        <Box sx={modalStyle} component="form" onClick={handleLogin}>
          <Button
            sx={{
              position: "absolute",
              top: "50px",
            }}
            onClick={() => setOpenForm(false)}
          >
            <CloseIcon />
          </Button>
          <Box mb={3} textAlign="center">
            <Typography variant="h5" component="h2">
              Login
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                required
                fullWidth
                name="email"
                id="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{
                  style: { color: "#fff" }, // White color for the label text
                }}
                InputProps={{
                  style: { color: "#fff" }, // White color for the input text
                }}
                sx={{
                  "& label.Mui-focused": {
                    color: "#fff", // White color for the label when focused
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#fff", // White color for the border
                    },
                    "&:hover fieldset": {
                      borderColor: "#fff", // White color for the border on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff", // White color for the border when focused
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                required
                fullWidth
                name="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputLabelProps={{
                  style: { color: "#fff" }, // White color for the label text
                }}
                InputProps={{
                  style: { color: "#fff" }, // White color for the input text
                }}
                sx={{
                  "& label.Mui-focused": {
                    color: "#fff", // White color for the label when focused
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#fff", // White color for the border
                    },
                    "&:hover fieldset": {
                      borderColor: "#fff", // White color for the border on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff", // White color for the border when focused
                    },
                  },
                }}
              />
            </Grid>
          </Grid>
          <Box my={2}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#ff2916",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#d10000" },
              }}
            >
              Login
            </Button>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button onClick={togglePassword}>
                {forgetPassword ? "Forget Password" : "Contact admin on Teams"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Slide>
    </>
  );
}

export default Login;
