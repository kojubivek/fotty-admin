import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import { Button } from "react-bootstrap";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { PageLayout } from "../../pages/layout/PageLayout";
import { productRows } from "../../dummyData";

export const ProductList = () => {
  const [data, setData] = useState(productRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "img",
      headerName: "Image",
      type: "file",
      width: 110,
    },
    {
      field: "stock",
      headerName: "Stock",

      width: 110,
    },
    {
      field: "price",
      headerName: "Price",
      type: "currency",

      width: 110,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {" "}
            <Link to={"/product/" + params.row.id}>
              <Button variant="info">Edit</Button>
            </Link>
            <DeleteOutline
              className="iconDelete "
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <PageLayout>
      <div className="user">
        {" "}
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            disableSelectionOnClick
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[8]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </PageLayout>
  );
};
