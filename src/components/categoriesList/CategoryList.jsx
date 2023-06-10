import { DeleteOutline } from "@mui/icons-material";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { delCatById, getCategory } from "../../redux/category/categoryAction";

const CategoryList = () => {
  const dispatch = useDispatch();

  const { category } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(delCatById(id));
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
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
      field: "image",
      headerName: "Image",
      type: "file",
      width: 110,
    },
    {
      field: "slug",
      headerName: "Slug",

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
            <Link to={"/category/" + params?.row?._id}>
              <Button variant="info">Edit</Button>
            </Link>
            <DeleteOutline
              className="iconDelete "
              onClick={() => handleDelete(params?.row?._id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="m-5">
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          disableSelectionOnClick
          rows={category}
          columns={columns}
          getRowId={(row) => row._id}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default CategoryList;
