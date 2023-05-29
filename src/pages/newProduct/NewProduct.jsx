import React from "react";
import { PageLayout } from "../layout/PageLayout";
import "./NewProduct.css";
import { Button, Form } from "react-bootstrap";
export const NewProduct = () => {
  return (
    <PageLayout>
      {" "}
      <div class="newProduct">
        <h1>New Product</h1>
        <Form>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" placeholder="Product Name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Color</Form.Label>
            <Form.Control type="text" placeholder="Color" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Status</Form.Label>
            <Form.Select className="mb-3" required>
              <option>Status</option>
              <option value="active">Active</option>
              <option value="inactive">In Active</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Stock</Form.Label>
              <Form.Control type="text" placeholder="Stock Number" required />
            </Form.Group>
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </PageLayout>
  );
};
