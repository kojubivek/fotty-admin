import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { userRequest } from "../../helper/userRequests";
import { format } from "timeago.js";

const LargeWidget = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("/order");
        console.log(res, "responseorder");
        setOrders(res.data.orders);
      } catch (error) {
        console.log(error);
      }
    };

    getOrders();
  }, []);
  console.log(orders);

  return (
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
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.userId}</td>

                <td className="d-flex alight-item-center gap-2">
                  <Avatar className="align-item-center">M</Avatar>
                  <span className="align-item-center">{order.customer}</span>
                </td>
                <td type="date">format({order.createdAt})</td>
                <td>{order.amount}</td>

                <td>
                  <Button variant={order.status}>{order.status}</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default LargeWidget;
