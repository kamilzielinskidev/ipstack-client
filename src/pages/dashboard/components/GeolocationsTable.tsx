import React from "react";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { Geolocations } from "../helpers";

type Props = {
  geolocations: Geolocations;
  actions: (query: string) => React.ReactNode;
};

export const GeolocationTable: React.FC<Props> = ({
  geolocations,
  actions,
}) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Adress</TableCell>
          <TableCell align="right">IP</TableCell>
          <TableCell>Country Name</TableCell>
          <TableCell>City</TableCell>
          <TableCell align="right">Longitude</TableCell>
          <TableCell align="right">Latitude</TableCell>
          <TableCell>Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {geolocations.map(
          ({ ip, adress, country_name, city, longitude, latitude }) => (
            <TableRow key={ip}>
              <TableCell>{adress}</TableCell>
              <TableCell align="right">{ip}</TableCell>
              <TableCell>{country_name}</TableCell>
              <TableCell>{city}</TableCell>
              <TableCell align="right">{longitude.toFixed(3)}</TableCell>
              <TableCell align="right">{latitude.toFixed(3)}</TableCell>
              <TableCell>{actions(ip)}</TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  </TableContainer>
);
