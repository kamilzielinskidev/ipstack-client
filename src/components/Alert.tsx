import React from 'react';

import { Alert as MuiAlert, AlertProps, Snackbar as MaterialSnackbar } from '@material-ui/core';

type Props = {
  message: string;
  onClose: () => void;
  severity: AlertProps["severity"];
};

export const Alert = ({ message, onClose, severity }: Props) => {
  return (
    <MaterialSnackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={!!message}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={onClose}
        severity={severity}
      >
        {message}
      </MuiAlert>
    </MaterialSnackbar>
  );
};
