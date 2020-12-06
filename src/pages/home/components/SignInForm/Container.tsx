import React, { FC } from "react";
import { useHistory } from "react-router-dom";

import { AuthFormProps } from "../../../../components";
import { authorizeUser } from "../../service";

type ContainerProps = {
  component: React.ComponentType<AuthFormProps>;
};

export const Container: FC<ContainerProps> = ({ component: Component }) => {
  const history = useHistory();
  const goToDashboard = () => history.push("/dashboard");

  const handleSubmit = (login: string, password: string) => {
    authorizeUser(login, password).then(goToDashboard);
  };
  return <Component submitAction={handleSubmit} />;
};
