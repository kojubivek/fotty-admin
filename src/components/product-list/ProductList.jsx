import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import { Button } from "react-bootstrap";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { PageLayout } from "../../pages/layout/PageLayout";

import { deleteProducts, getProducts } from "../../redux/apiCall";
import { useDispatch, useSelector } from "react-redux";
export const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const product = useSelector((state) => state.products);

  const handleDelete = (id) => {
    dispatch(deleteProducts(id));
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
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
      field: "images",
      headerName: "Image",
      type: "file",
      width: 110,
    },
    {
      field: "qty",
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
            <Link to={"/product/" + params.row._id}>
              <Button variant="info">Edit</Button>
            </Link>
            <DeleteOutline
              className="iconDelete "
              onClick={() => handleDelete(params.row._id)}
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
        <Link to={"/newProduct/"}>
          <Button variant="info">Create New Product</Button>
        </Link>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            disableSelectionOnClick
            rows={product?.product}
            columns={columns}
            getRowId={(row) => row._id}
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
