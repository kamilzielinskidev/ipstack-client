import React, { useEffect, useState } from "react";
import { Container, makeStyles } from "@material-ui/core";

import { getAll, Geolocations } from "./helpers";
import { GeolocationTable } from "./components/GeolocationsTable";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(8),
  },
}));

export const Dashboard = () => {
  const [geolocations, setGeolocations] = useState<Geolocations>([]);
  useEffect(() => {
    getAll().then(setGeolocations);
  }, []);
  return (
    <Container component="main" maxWidth="lg" className={useStyles().container}>
      <GeolocationTable geolocations={geolocations} />
    </Container>
  );
};
