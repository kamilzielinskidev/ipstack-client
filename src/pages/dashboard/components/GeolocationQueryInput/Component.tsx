import React, { FC, useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

export type ComponentProps = {
  submitAction: (query: string) => void;
};

export const Component: FC<ComponentProps> = ({ submitAction }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    submitAction(query);
  };

  return (
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
  );
};
