import React, { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  makeStyles,
  TextField,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";

import { GeolocationTable } from "./components/GeolocationsTable";
import { deleteOne, Geolocations, getAll, postOne } from "./helpers";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(8),
  },
}));

export const Dashboard = () => {
  const [geolocations, setGeolocations] = useState<Geolocations>([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getGeolocations();
  }, []);

  const getGeolocations = () => getAll().then(setGeolocations);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    postOne(query)
      .then(getGeolocations)
      .then(() => setIsLoading(false));
  };

  const handleDelete = (query: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    deleteOne(query)
      .then(getGeolocations)
      .then(() => setIsLoading(false));
  };

  return (
    <Container component="main" maxWidth="lg" className={useStyles().container}>
      {isLoading ? (
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>
      ) : (
        <>
          <Grid container spacing={2} wrap="wrap" alignItems="center">
            <Grid item xs={8} sm={10}>
              <TextField
                label="Adress query"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={({ target: { value } }) => setQuery(value)}
              />
            </Grid>
            <Grid item xs={4} sm={2}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
                onClick={handleSubmit}
              >
                Save
              </Button>
            </Grid>
          </Grid>

          <GeolocationTable
            geolocations={geolocations}
            actions={(query) => (
              <IconButton onClick={handleDelete(query)}>
                <DeleteIcon fontSize="large" />
              </IconButton>
            )}
          />
        </>
      )}
    </Container>
  );
};
