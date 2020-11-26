import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

type Props = {
  formSubmit: (login: string, password: string) => void;
};

export const LoginForm: React.FC<Props> = ({ formSubmit }) => {
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    formSubmit(userLogin, userPassword);
  };

  return (
    <form noValidate>
      <TextField
        variant="outlined"
        required
        fullWidth
        label="Email Address"
        name="email"
        margin="normal"
        autoFocus
        onChange={({ target: { value } }) => setUserLogin(value)}
      />
      <TextField
        variant="outlined"
        required
        fullWidth
        name="password"
        margin="normal"
        label="Password"
        type="password"
        onChange={({ target: { value } }) => setUserPassword(value)}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Sign In
      </Button>
    </form>
  );
};
