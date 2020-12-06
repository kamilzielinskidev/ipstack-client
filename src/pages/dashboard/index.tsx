import React, { FC, useEffect } from "react";
import { Container } from "@material-ui/core";

import { CenteredSpinner } from "../../components";
import { GeolocationData, GeolocationInputQuery } from "./components/";
import { fetchGeolocations } from "./service";
import { useDashboardState } from "./state";

export const Dashboard: FC = () => {
  const { loading } = useDashboardState();

  useEffect(() => {
    fetchGeolocations();
  }, []);

  return (
    <Container component="main" maxWidth="lg" style={{ paddingTop: 100 }}>
      {loading ? (
        <CenteredSpinner />
      ) : (
        <>
          <GeolocationInputQuery />
          <GeolocationData />
        </>
      )}
    </Container>
  );
};
