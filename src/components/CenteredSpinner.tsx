import React, { FC } from "react";
import { CircularProgress, Grid } from "@material-ui/core";

export const CenteredSpinner: FC = () => (
  <Grid container justify="center">
    <CircularProgress />
  </Grid>
);
