import React from "react";
import {
  Container,
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
  MailLockOutlined,
  MailOutlined,
  ManageAccounts,
  MessageSharp,
  Report,
  ScaleSharp,
  StoreMallDirectoryOutlined,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
export const CustomSidebar = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
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
              href="#link1"
            >
              <Home />
              <span>Home</span>
            </ListGroup.Item>
            <ListGroup.Item
              className="d-flex alight-item-center gap-2"
              variant="light"
              action
              href="#link2"
            >
              <AnalyticsOutlined />
              <span>Analytics</span>
            </ListGroup.Item>
            <ListGroup.Item
              className="d-flex alight-item-center gap-2"
              variant="light"
              action
              href="#link3"
            >
              <ScaleSharp />
              <span>Sales</span>
            </ListGroup.Item>
            <hr />

            <hr />
            <h4>Quick Menu</h4>
            <hr />
            <ListGroup.Item
              className="d-flex alight-item-center gap-2"
              variant="light"
              action
              href="#link4"
            >
              <PersonIcon />
              <span>User</span>
            </ListGroup.Item>
            <ListGroup.Item
              className="d-flex alight-item-center gap-2"
              variant="light"
              action
              href="#link5"
            >
              <StoreMallDirectoryOutlined />
              <span>Product</span>
            </ListGroup.Item>
            <ListGroup.Item
              className="d-flex alight-item-center gap-2"
              variant="light"
              action
              href="#link6"
            >
              <AttachMoneyOutlined />
              <span>Transaction</span>
            </ListGroup.Item>
            <ListGroup.Item
              className="d-flex alight-item-center gap-2"
              variant="light"
              action
              href="#link7"
            >
              <ArticleOutlined />
              <span>Reports</span>
            </ListGroup.Item>
            <hr />

            <hr />
            <h4>Notifications</h4>
            <hr />
            <ListGroup.Item
              className="d-flex alight-item-center gap-2"
              variant="light"
              action
              href="#link8"
            >
              <MailOutlined />
              <span>Mail</span>
            </ListGroup.Item>
            <ListGroup.Item
              className="d-flex alight-item-center gap-2"
              variant="light"
              action
              href="#link9"
            >
              <FeedbackOutlined />
              <span>Feedback</span>
            </ListGroup.Item>
            <ListGroup.Item
              className="d-flex alight-item-center gap-2"
              variant="light"
              action
              href="#link10"
            >
              <MessageSharp />
              <span>Message</span>
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
