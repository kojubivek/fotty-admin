import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import "./FeaturedItem.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { userRequest } from "../../helper/axiosHelper";
export const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = userRequest.get(`/order/income`);
      } catch (error) {
        console.log(error);
      }
    };
  }, []);
  return (
    <div className="fea d-flex justify-content-between  gap-5">
      <div className="featured  ">
        <Card className="shadow" style={{ minWidth: "75%" }}>
          <Card.Body>
            <Card.Title>Revenue</Card.Title>

            <Card.Text className="fs-3  d-flex justify-content-between align-item-center gap-2">
              $2,415{" "}
              <span
                className=" d-flex
              fs-6"
              >
                -11.4
                <ArrowDownward sx={{ color: "red" }} />{" "}
              </span>
            </Card.Text>

            <Card.Subtitle className="mb-2 text-muted">
              Compared To Last Month Sales
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
      <div className="featured  ">
        <Card className="shadow" style={{ minWidth: "75%" }}>
          <Card.Body>
            <Card.Title>Profit</Card.Title>

            <Card.Text className="fs-3  d-flex justify-content-between align-item-center gap-2">
              $2,415{" "}
              <span
                className=" d-flex
              fs-6"
              >
                -11.4
                <ArrowUpward sx={{ color: "green" }} />{" "}
              </span>
            </Card.Text>

            <Card.Subtitle className="mb-2 text-muted">
              Compared To Last Month Sales
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
      <div className="featured  ">
        <Card className="shadow" style={{ minWidth: "75%" }}>
          <Card.Body>
            <Card.Title>Sales</Card.Title>

            <Card.Text className="fs-3  d-flex justify-content-between align-item-center gap-2">
              $2,415{" "}
              <span
                className=" d-flex
              fs-6"
              >
                -11.4
                <ArrowDownward sx={{ color: "red" }} />{" "}
              </span>
            </Card.Text>

            <Card.Subtitle className="mb-2 text-muted">
              Compared To Last Month Sales
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
