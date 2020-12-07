import React, { FC, ReactElement } from "react";

import { CellParams, ColDef, DataGrid, RowsProp } from "@material-ui/data-grid";

import { Geolocations } from "../../dao";

export type ComponentProps = {
  geolocations: Geolocations;
  actions: (params: CellParams) => ReactElement;
};

const columns = (actions: ComponentProps["actions"]): ColDef[] => [
  { field: "adress", headerName: "Adress", flex: 1 },
  { field: "ip", headerName: "IP", flex: 1 },
  { field: "country_name", headerName: "Country", flex: 1 },
  { field: "city", headerName: "City", flex: 1 },
  { field: "longitude", headerName: "Longitude", flex: 1 },
  { field: "latitude", headerName: "Latitude", flex: 1 },
  {
    field: "Delete",
    headerName: "Delete",
    width: 100,
    renderCell: actions,
  },
];

const rows = (geolocations: Geolocations): RowsProp =>
  geolocations.map(
    ({ adress, ip, country_name, city, longitude, latitude }, id) => ({
      id,
      ip,
      adress,
      country_name,
      city,
      longitude,
      latitude,
    })
  );

export const Component: FC<ComponentProps> = ({ geolocations, actions }) => (
  <div style={{ height: 400, width: "100%" }}>
    <DataGrid rows={rows(geolocations)} columns={columns(actions)} />
  </div>
);
