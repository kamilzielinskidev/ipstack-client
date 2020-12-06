import React, { FC } from "react";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export type ComponentProps = {
  deleteAction: () => void;
};

export const Component: FC<ComponentProps> = ({ deleteAction }) => (
  <IconButton onClick={deleteAction}>
    <DeleteIcon fontSize="large" />
  </IconButton>
);
