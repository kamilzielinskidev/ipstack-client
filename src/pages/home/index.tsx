import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, makeStyles, Typography } from "@material-ui/core";

import { isTokenValid } from "../../auth";
import { pluck } from "../../utils";
import { LoginForm } from "./components";
import { login } from "./helpers";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(8),
  },
}));

export const Home = () => {
  const history = useHistory();
  useEffect(() => {
    validateToken();
  }, []);

  const validateToken = () => {
    isTokenValid() && history.push("/dashboard");
  };

  const handleSubmit = (userLogin: string, userPassword: string) => {
    login(userLogin, userPassword)
      .then(pluck("token"))
      .then((token) => localStorage.setItem("auth_token", token))
      .then(() => history.push("dashboard"))
      .catch(console.error);
  };

  return (
    <Container component="main" maxWidth="xs" className={useStyles().container}>
      <div>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <LoginForm formSubmit={handleSubmit}></LoginForm>
      </div>
    </Container>
  );
};
