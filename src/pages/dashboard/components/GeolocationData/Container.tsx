import React, { FC } from "react";

import { useDashboardState } from "../../state";
import { GeolocationDelete } from "../GeolocationDelete";
import { ComponentProps } from "./Component";

type ContainerProps = {
  component: React.ComponentType<ComponentProps>;
};

export const Container: FC<ContainerProps> = ({ component: Component }) => {
  const { geolocations } = useDashboardState();

  return (
    <Component
      geolocations={geolocations}
      actions={(params) => (
        <GeolocationDelete adress={`${params.getValue("adress")}`} />
      )}
    />
  );
};
