import React, { FC, useState } from "react";

import { Button, TextField } from "@material-ui/core";

export type AuthFormProps = {
  submitAction: (login: string, password: string) => void;
};

export const AuthForm: FC<AuthFormProps> = ({ submitAction }) => {
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    submitAction(userLogin, userPassword);
  };

  return (
    <form noValidate>
      <TextField
        variant="outlined"
        required
        fullWidth
        label="Login"
        name="login"
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
        submit
      </Button>
    </form>
  );
};
