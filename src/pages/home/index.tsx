import React, { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Link, Typography } from "@material-ui/core";

import { CenteredSpinner } from "../../components";
import { SignInForm } from "./components";
import { useHomeState } from "./state";

export const Home: FC = () => {
  const { loading } = useHomeState();

  return (
    <Container component="main" maxWidth="xs" style={{ paddingTop: 100 }}>
      {loading ? (
        <CenteredSpinner />
      ) : (
        <div>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <SignInForm />
          <Link variant="body2" component={RouterLink} to="/register">
            No account?
          </Link>
        </div>
      )}
    </Container>
  );
};
