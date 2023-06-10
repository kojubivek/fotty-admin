import React, { useEffect, useState } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import "./Custombar.css";
import {
  AnalyticsOutlined,
  ArticleOutlined,
  AttachMoneyOutlined,
  CategoryOutlined,
  CategorySharp,
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
import { Link, useLocation } from "react-router-dom";
const menuItems = [
  {
    name: "Home",
    icon: <Home />,
    value: "home",
    path: "/home",
    category: "Dashboard",
  },
  {
    name: "Analytics",
    icon: <AnalyticsOutlined />,
    value: "analytics",
    path: "/analytics",
    category: "Dashboard",
  },
  {
    name: "Sales",
    icon: <ScaleSharp />,
    value: "sales",
    path: "/sales",
    category: "Dashboard",
  },

  {
    name: "User",
    icon: <PersonIcon />,
    value: "user",
    path: "/users",
    category: "Quick Menu",
  },

  {
    name: "Product",
    icon: <StoreMallDirectoryOutlined />,
    value: "product",
    path: "/productlists",
    category: "Quick Menu",
  },
  {
    name: "Category",
    icon: <CategorySharp />,
    value: "category",
    path: "/category",
    category: "Quick Menu",
  },
  {
    name: "Transaction",
    icon: <AttachMoneyOutlined />,
    value: "transaction",
    path: "/transaction",
    category: "Quick Menu",
  },
  {
    name: "Reports",
    icon: <ArticleOutlined />,
    value: "reports",
    path: "/reports",
    category: "Quick Menu",
  },
  {
    name: "Mail",
    icon: <MailOutlined />,
    value: "mail",
    path: "/mail",
    category: "Notifications",
  },
  {
    name: "Feedback",
    icon: <FeedbackOutlined />,
    value: "feedback",
    path: "/feedback",
    category: "Notifications",
  },
  {
    name: "Message",
    icon: <MessageSharp />,
    value: "message",
    path: "/message",
    category: "Notifications",
  },
  {
    name: "Manage",
    icon: <ManageAccounts />,
    value: "manage",
    path: "#link11",
    category: "Staff",
  },
  {
    name: "Analytics",
    icon: <AnalyticsOutlined />,
    value: "analytics",
    path: "#link12",
    category: "Staff",
  },
  {
    name: "Report",
    icon: <Report />,
    value: "report",
    path: "#link13",
    category: "Staff",
  },
];

export const CustomSidebar = () => {
  const location = useLocation();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const path = location.pathname;
    const menuItem = menuItems.find((item) => item.path === path);
    if (menuItem) {
      setSelected(menuItem.value);
    }
  }, [location.pathname]);

  const handleMenuItemClick = (value) => {
    setSelected(value);
  };

  // Get unique categories
  const categories = Array.from(
    new Set(menuItems.map((item) => item.category))
  );

  return (
    <div className="sidebar">
      <Row>
        <Col sm={12}>
          {categories.map((category) => (
            <React.Fragment key={category}>
              <hr />
              <h4>{category}</h4>
              <hr />
              <ListGroup>
                {menuItems
                  .filter((item) => item.category === category)
                  .map((menuItem) => (
                    <Link
                      key={menuItem.value}
                      className="sidebarMenuTitle"
                      style={{ textDecoration: "none" }}
                      to={menuItem.path}
                      onClick={() => handleMenuItemClick(menuItem.value)}
                    >
                      <ListGroup.Item
                        className="d-flex align-items-center gap-2"
                        variant="light"
                        active={selected === menuItem.value}
                        action
                      >
                        {menuItem.icon}
                        <span className="sidebarMenuTitle">
                          {menuItem.name}
                        </span>
                      </ListGroup.Item>
                    </Link>
                  ))}
              </ListGroup>
            </React.Fragment>
          ))}
        </Col>
      </Row>
    </div>
  );
};
