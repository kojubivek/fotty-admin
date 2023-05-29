import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { PageLayout } from "../layout/PageLayout";
import "./userList.css";
import { Button } from "react-bootstrap";
import { DeleteOutline } from "@mui/icons-material";
import "./userList.css";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";

export const UserList = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "User",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      type: "string",
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
            <Link to={"/users/" + params.row.id}>
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
