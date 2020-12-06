import { FC } from "react";
import { Geolocation } from "../../dao";
import { Component } from "./Component";
import { Container } from "./Container";

export const GeolocationDelete: FC<{ adress: Geolocation["adress"] }> = ({
  adress,
}) => <Container component={Component} adress={adress}></Container>;
