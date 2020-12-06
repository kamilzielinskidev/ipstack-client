import React, { FC, ReactElement } from "react";

import { CellParams, ColDef, DataGrid, RowsProp } from "@material-ui/data-grid";

import { Geolocations } from "../../dao";

export type ComponentProps = {
  geolocations: Geolocations;
  actions: (params: CellParams) => ReactElement;
};

const columns = (actions: ComponentProps["actions"]): ColDef[] => [
  { field: "adress", headerName: "Adress", width: 150 },
  { field: "country_name", headerName: "Country", width: 150 },
  { field: "city", headerName: "City", width: 150 },
  { field: "longitude", headerName: "Longitude", width: 150 },
  { field: "latutide", headerName: "Latitude", width: 150 },
  {
    field: "Delete",
    headerName: "Delete",
    width: 150,
    renderCell: actions,
  },
];

const rows = (geolocations: Geolocations): RowsProp =>
  geolocations.map(
    ({ adress, country_name, city, longitude, latitude }, id) => ({
      id,
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
