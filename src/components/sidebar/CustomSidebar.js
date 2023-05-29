import React from "react";
import {
  Row,
  Col,
  Button,
  ButtonGroup,
  Nav,
  Offcanvas,
  ListGroup,
  TabContainer,
  Tab,
} from "react-bootstrap";
import "./Custombar.css";
import {
  AnalyticsOutlined,
  ArticleOutlined,
  AttachMoneyOutlined,
  FeedbackOutlined,
  Home,
  MailOutlined,
  ManageAccounts,
  MessageSharp,
  Report,
  ScaleSharp,
  StoreMallDirectoryOutlined,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
export const CustomSidebar = () => {
  return (
    <div className="sidebar">
      <Row>
        <Col sm={12}>
          <ListGroup defaultActiveKey="none">
            <hr />
            <h4>DashBoard</h4>
            <hr />
            <ListGroup.Item
              className="d-flex alight-item-center gap-2"
              variant="light"
              action
            >
              <Link
                className="sidebarMenuTitle"
                style={{ textDecoration: "none" }}
                to="/"
              >
                <Home />
                <span className="sidebarMenuTitle">Home</span>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item
              className="d-flex alight-item-center gap-2"
              variant="light"
              action
            >
              <Link
                className="sidebarMenuTitle"
                style={{ textDecoration: "none" }}
              >
                <AnalyticsOutlined />
                <span>Analytics</span>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item
              className="d-flex alight-item-center gap-2"
              variant="light"
              action
            >
              <Link
                className="sidebarMenuTitle"
                style={{ textDecoration: "none" }}
                to="/sales"
              >
                <ScaleSharp />
                <span>Sales</span>
              </Link>
            </ListGroup.Item>
            <hr />

            <hr />
            <h4>Quick Menu</h4>
            <hr />
            <ListGroup.Item
              className="d-flex alight-item-center gap-2"
              variant="light"
              action
            >
              <Link
                className="sidebarMenuTitle"
                style={{ textDecoration: "none" }}
                to="/users"
              >
                <PersonIcon />
                <span>User</span>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item
              className="d-flex alight-item-center gap-2"
              variant="light"
              action
            >
              <Link
                className="sidebarMenuTitle"
                style={{ textDecoration: "none" }}
                to="/productlists"
              >
                <StoreMallDirectoryOutlined />
                <span>Product</span>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item
              className="d-flex alight-item-center gap-2"
              variant="light"
              action
            >
              <Link
                className="sidebarMenuTitle"
                style={{ textDecoration: "none" }}
                to="/transaction"
              >
                <AttachMoneyOutlined />
                <span>Transaction</span>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item
              className="d-flex alight-item-center gap-2"
              variant="light"
              action
            >
              <Link
                className="sidebarMenuTitle"
                style={{ textDecoration: "none" }}
                to="/reports"
              >
                {" "}
                <ArticleOutlined />
                <span>Reports</span>
              </Link>
            </ListGroup.Item>
            <hr />

            <hr />
            <h4>Notifications</h4>
            <hr />
            <ListGroup.Item
              className="d-flex alight-item-center gap-2"
              variant="light"
              action
            >
              <Link
                className="sidebarMenuTitle"
                style={{ textDecoration: "none" }}
                to="/mail"
              >
                <MailOutlined />
                <span>Mail</span>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item
              className="d-flex alight-item-center gap-2"
              variant="light"
              action
            >
              <Link
                className="sidebarMenuTitle"
                style={{ textDecoration: "none" }}
                to="/feedback"
              >
                <FeedbackOutlined />
                <span>Feedback</span>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item
              className="d-flex alight-item-center gap-2"
              variant="light"
              action
            >
              <Link
                className="sidebarMenuTitle"
                style={{ textDecoration: "none" }}
                to="/message"
              >
                {" "}
                <MessageSharp />
                <span>Message</span>
              </Link>
            </ListGroup.Item>
            <hr />

            <hr />
            <h4>Staff</h4>
            <hr />
            <ListGroup.Item
              className="d-flex alight-item-center gap-2"
              variant="light"
              action
              href="#link11"
            >
              <ManageAccounts />
              <span>Manage</span>
            </ListGroup.Item>
            <ListGroup.Item
              className="d-flex alight-item-center gap-2"
              variant="light"
              action
              href="#link12"
            >
              <AnalyticsOutlined />
              <span>Analytics</span>
            </ListGroup.Item>
            <ListGroup.Item
              className="d-flex alight-item-center gap-2"
              variant="light"
              action
              href="#link13"
            >
              <Report />
              <span>Report</span>
            </ListGroup.Item>
            <hr />
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};
