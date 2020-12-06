import React, { FC } from "react";

import { Geolocation } from "../../dao";
import { deleteGeolocation } from "../../service";
import { ComponentProps } from "./Component";

export type ContainerProps = {
  adress: Geolocation["adress"];
  component: React.ComponentType<ComponentProps>;
};

export const Container: FC<ContainerProps> = ({
  adress,
  component: Component,
}) => {
  const handleDelete = () => {
    deleteGeolocation(adress);
  };

  return <Component deleteAction={handleDelete} />;
};
