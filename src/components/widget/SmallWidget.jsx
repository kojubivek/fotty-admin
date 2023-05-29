import { Avatar } from "@mui/material";
import React from "react";
import { Button, Card, ListGroup, Table } from "react-bootstrap";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
export const SmallWidget = () => {
  return (
    <div className="d-flex   justify-content-center gap-3">
      <div className="widget m-3">
        <Card className="shadow" style={{ minWidth: "75%" }}>
          <Card.Body>
            <Card.Title>New Users</Card.Title>
            <div className="d-flex justify-content between gap-3">
              <Card.Header>
                <Avatar>H</Avatar>
              </Card.Header>
              <Card.Text className="d-flex flex-column justify-content-between align-item-center gap-2">
                Hector Berellin{" "}
                <Card.Subtitle className="mb-2 text-muted">
                  Software Engineering
                </Card.Subtitle>
              </Card.Text>
              <Button className="" variant="light" size="lg">
                <VisibilityIcon /> View
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="table-widget m-3 flex-grow-1 ">
        <Card className="shadow">
          <Card.Title className="fs-2 m-3">Latest Transactions</Card.Title>
          <Table striped="columns">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="d-flex alight-item-center gap-2">
                  <Avatar className="align-item-center">M</Avatar>
                  <span className="align-item-center">Mark</span>
                </td>
                <td type="date">22-22-22</td>
                <td>$4000</td>
                <td>
                  <Button variant="dark">Edit</Button>{" "}
                  <span>
                    <DeleteOutlineIcon />
                  </span>
                </td>
              </tr>
              <tr>
                <td className="d-flex alight-item-center gap-2">
                  <Avatar className="">M</Avatar>
                  <span className="">Mark</span>
                </td>
                <td type="date">22-22-22</td>
                <td>$4000</td>
                <td>
                  <Button variant="dark">Edit</Button>{" "}
                  <span>
                    <DeleteOutlineIcon />
                  </span>
                </td>
              </tr>
              <tr>
                <td className="d-flex alight-item-center gap-2">
                  <Avatar className="align-item-center">M</Avatar>
                  <span className="align-item-center">Mark</span>
                </td>
                <td type="date">22-22-22</td>
                <td>$4000</td>
                <td>
                  <Button className="btn-" variant="success">
                    Approved
                  </Button>{" "}
                  <span>
                    <DeleteOutlineIcon />
                  </span>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </div>
    </div>
  );
};
