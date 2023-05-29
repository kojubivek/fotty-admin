import React from "react";
import { PageLayout } from "../../pages/layout/PageLayout";
import "./Product.css";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Chart } from "../chart/Chart";
import { productData } from "../../dummyData";

export const Product = () => {
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
            <Chart
              data={productData}
              datakey="Sales"
              title="Sales Performance"
            />
          </div>
          <div className="productTopRight shadow ">
            <div className="productInfoTop ">
              <img
                src="https://www.pexels.com/photo/woman-wearing-white-soccer-jersey-shirt-and-black-shorts-while-standing-on-soccer-field-3653335/"
                alt="product-img"
                className="productInfoImg"
              />
              <span className="productName">Jersey</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">123</span>
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
                  placeholder="Enter New Product Name"
                  id="disabledSelec"
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
                <Form.Label>Upload Your Image</Form.Label>

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
