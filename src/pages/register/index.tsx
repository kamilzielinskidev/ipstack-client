import React, { FC, useEffect } from "react";
import { useHistory, Link as RouterLink } from "react-router-dom";
import { Container, Link, Typography } from "@material-ui/core";

import { CenteredSpinner } from "../../components";
import { ifTokenValid } from "../../helpers/token";
import { SignUpForm } from "./components";
import { useRegisterState } from "./state";

export const Register: FC = () => {
  const history = useHistory();
  const { loading } = useRegisterState();

  const goToDashboard = () => history.push("/dashboard");

  useEffect(() => {
    ifTokenValid(goToDashboard);
  }, []);

  return (
    <Container component="main" maxWidth="xs" style={{ paddingTop: 100 }}>
      {loading ? (
        <CenteredSpinner />
      ) : (
        <div>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <SignUpForm />
          <Link variant="body2" component={RouterLink} to="/">
            Already have an account?
          </Link>
        </div>
      )}
    </Container>
  );
};
