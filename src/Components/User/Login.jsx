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
import { Button, TextField, Modal, Box } from "@mui/material";
import useToggle from "../CustomHooks/useToggle";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../model/firebase/config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openModal, setOpenModal] = useToggle(false);
  const token = new Token();
  const [isLogin, setIsLogin] = useToggle(false);

  const handleLoginClick = () => {
    if (isLogin) {
      // Loggedin, open new tab to get all participants
      window.open(
        "https://registrations.senecahackathon.com/getallparticipant",
        "_blank"
      );
    } else {
      setOpenModal(true);
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
      const user = userCredential.user;
      console.log(user);
      token.setToken("test");
      setIsLogin(true);
      setOpenModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    token.setToken(null);
    setIsLogin(false);
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
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
        {isLogin ? "View Participants" : "Login"}
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

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle} component="form" onClick={handleLogin}>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="small"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="small"
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            size="small"
            sx={{
              padding: "2px 6px",
              fontSize: "0.7rem",
              backgroundColor: "#ff2916",
              "&:hover": { backgroundColor: "#d10000" },
            }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default Login;
