import React, { FC } from "react";

import { saveGeolocation } from "../../service";
import { ComponentProps } from "./Component";

type ContainerProps = {
  component: React.ComponentType<ComponentProps>;
};

export const Container: FC<ContainerProps> = ({ component: Component }) => {
  const handleSubmit = (query: string) => {
    saveGeolocation(query);
  };

  return <Component submitAction={handleSubmit} />;
};
