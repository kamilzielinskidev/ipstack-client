import React, { FC } from "react";
import { useHistory } from "react-router-dom";

import { AuthFormProps } from "../../../../components";
import { registerUser } from "../../service";

type ContainerProps = {
  component: React.ComponentType<AuthFormProps>;
};

export const Container: FC<ContainerProps> = ({ component: Component }) => {
  const history = useHistory();
  const goToHome = () => history.push("/");

  const handleSubmit = (login: string, password: string) => {
    registerUser(login, password).then(goToHome);
  };
  return <Component submitAction={handleSubmit} />;
};
