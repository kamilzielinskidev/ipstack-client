import React, { FC } from "react";

import { useAlertState } from "../../state";
import { ComponentProps } from "./Component";

type Props = {
  component: React.ComponentType<ComponentProps>;
};

export const Container: FC<Props> = ({ component: Component }) => {
  const {
    alert: { message, severity },
    clear,
  } = useAlertState();

  return <Component message={message} severity={severity} onClose={clear} />;
};
