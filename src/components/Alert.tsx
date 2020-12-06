import React, { FC } from "react";
import { Snackbar as MaterialSnackbar } from "@material-ui/core";
import { Alert as MuiAlert, AlertProps } from "@material-ui/lab";

type Props = {
  message: string;
  onClose: () => void;
  severity: AlertProps["severity"];
};

export const Alert: FC<Props> = ({ message, onClose, severity }) => (
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
