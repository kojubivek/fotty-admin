import React from "react";
import { PageLayout } from "../layout/PageLayout";
import "./newUser.css";
import { Form, Button } from "react-bootstrap";

export const NewUser = () => {
  return (
    <PageLayout>
      <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <Form className="userform d-flex flex-column">
          <Form.Select
            className="mb-3"
            label="status"
            aria-label="status select"
          >
            <option>Status</option>

            <option value="active">Active</option>
            <option value="inactive">In Active</option>
          </Form.Select>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter FullName" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="your@email.com" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="number" placeholder="+61" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Address" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="m-3">Gender</Form.Label>
            <Form.Check
              inline
              type="radio"
              label="male"
              name="gender"
              id="male"
            />
            <Form.Check
              inline
              type="radio"
              label="female"
              name="gender"
              id="female"
            />
            <Form.Check
              inline
              type="radio"
              label="other"
              name="gender"
              id="other"
            />
          </Form.Group>

          <Button
            className="flex-1"
            style={{ backgroundColor: "darkblue" }}
            type="submit"
          >
            Create
          </Button>
        </Form>
      </div>
    </PageLayout>
  );
};
