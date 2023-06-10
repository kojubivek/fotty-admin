import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Card, ListGroup, Table } from "react-bootstrap";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { userRequest } from "../../helper/userRequests";
import LargeWidget from "./LargeWidget";
export const SmallWidget = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");

        setUsers(res.data.users);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="d-flex   justify-content-center gap-3">
      <div className="widget m-3">
        <Card className="shadow" style={{ minWidth: "75%" }}>
          <Card.Body>
            <Card.Title>New Users</Card.Title>
            {users?.map((user) => (
              <div
                key={user.id}
                className="d-flex justify-content between gap-3"
              >
                <Card.Header>
                  <Avatar img={user?.img}>H</Avatar>
                </Card.Header>
                <Card.Text className="d-flex flex-column justify-content-between align-item-center gap-2">
                  {user.username}{" "}
                </Card.Text>
                <Button className="" variant="light" size="lg">
                  <VisibilityIcon /> View
                </Button>
              </div>
            ))}
          </Card.Body>
        </Card>
      </div>
      <div className="table-widget m-3 flex-grow-1 ">
        <LargeWidget />
      </div>
    </div>
  );
};
