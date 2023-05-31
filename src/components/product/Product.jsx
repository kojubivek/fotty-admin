import React, { useEffect, useMemo, useState } from "react";
import { PageLayout } from "../../pages/layout/PageLayout";
import "./Product.css";
import { Link, useLocation } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Chart } from "../chart/Chart";
import { productData } from "../../dummyData";
import { useSelector } from "react-redux";
import { userRequest } from "../../helper/axiosHelper";
export const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  console.log(productId);
  const product = useSelector((state) =>
    state.products.product.find((p) => p._id === productId)
  );
  const [pstats, setPstats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest("/order/income/?pid=" + productId);

        res.data.income.map((item) => {
          setPstats((prevStats) => [
            ...prevStats,
            { name: MONTHS[item._id], Sales: item.total },
          ]);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [MONTHS]);
  console.log(pstats, "stasssts");
  return (
    <PageLayout>
      <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">Prodcut</h1>
          <Link to="/newProduct">
            <Button variant="success">Create</Button>
          </Link>
        </div>
        <div className="productTop">
          <div className="productTopLeft">
            <Chart data={pstats} datakey="Sales" title="Sales Performance" />
          </div>
          <div className="productTopRight shadow ">
            <div className="productInfoTop ">
              <img
                src={product.img}
                alt="product-img"
                className="productInfoImg"
              />
              <span className="productName">{product.title}</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id: </span>
                <span className="productInfoValue">{product._id}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Price:</span>
                <span className="productInfoValue">{product.price}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Active:</span>
                <span className="productInfoValue">yes</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Sales:</span>
                <span className="productInfoValue">120</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Stock:</span>
                <span className="productInfoValue">23</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom shadow">
          <h1>Edit Product</h1>
          <Form className="productEditForm">
            <div className="formLeft">
              <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  label="active"
                  placeholder={product.title}
                  id="disabledSelec"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                  label="active"
                  placeholder={product.desc}
                  id="disabledSelect"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select label="active" id="disabledSelec">
                  <option>Select</option>
                  <option value="active">Active</option>
                  <option value="inactive">In active</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  label="active"
                  placeholder={product.price}
                  id="disabledSelec"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Stock</Form.Label>
                <Form.Select label="active" id="disabledSelect">
                  <option>Select</option>
                  <option value="active">Yes</option>
                  <option value="inactive">No</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="formRight">
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>
                  Upload Your Image
                  <span>
                    <img src={product.img} alt="productimage" />
                  </span>
                </Form.Label>

                <Form.Control type="file" />
              </Form.Group>
              <Button type="submit" vairant="dark">
                Update
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </PageLayout>
  );
};
