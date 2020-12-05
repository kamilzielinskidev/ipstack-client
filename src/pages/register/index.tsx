import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import {
  CircularProgress,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AlertProps } from "@material-ui/lab/Alert";

import { AuthForm } from "../../components";
import { Alert } from "../../components/Alert";
import { getToken, isTokenValid } from "../../services/authService";
import { registerRequest } from "./helpers";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(8),
  },
}));

type AlertState = {
  alertMessage: string;
  alertSeverity: AlertProps["severity"];
};

export const Register = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [
    { alertMessage, alertSeverity },
    setAlertMessage,
  ] = useState<AlertState>({ alertMessage: "", alertSeverity: undefined });
  useEffect(() => {
    validateToken();
  }, []);

  const closeAlert = () => {
    setAlertMessage({ alertMessage: "", alertSeverity: undefined });
  };

  const validateToken = () => {
    const token = getToken();
    token && isTokenValid(token) && history.push("/dashboard");
  };

  const handleSubmit = (userLogin: string, userPassword: string) => {
    setIsLoading(true);
    registerRequest(userLogin, userPassword)
      .then(() =>
        setAlertMessage({
          alertMessage: "Account created",
          alertSeverity: "success",
        })
      )
      .then(() => {
        history.push("/");
        setIsLoading(false);
      })
      .catch(({ error: { message } }) => {
        setAlertMessage({ alertMessage: message, alertSeverity: "error" });
        setIsLoading(false);
      });
  };

  return (
    <Container component="main" maxWidth="xs" className={useStyles().container}>
      {isLoading ? (
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>
      ) : (
        <div>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <AuthForm formSubmit={handleSubmit}></AuthForm>
        </div>
      )}
      <Alert
        message={alertMessage}
        severity={alertSeverity}
        onClose={closeAlert}
      ></Alert>
    </Container>
  );
};
