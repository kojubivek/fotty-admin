import { Avatar } from "@mui/material";
import { PageLayout } from "../layout/PageLayout";
import "./user.css";

import React from "react";
import {
  CalendarTodayOutlined,
  EmailOutlined,
  LocationCityOutlined,
  PermIdentityOutlined,
  PhoneOutlined,
} from "@mui/icons-material";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Link } from "react-router-dom";
export const User = () => {
  return (
    <PageLayout>
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="useredit">
          <div className="userContainer shadow">
            <div className="userShowTop ">
              <Avatar className="userShowImg"></Avatar>
              <div className="userShowTopTitle">
                <span className="userShowUserName">Hectore Berellin</span>
                <span className="userShowUserTitle">Software Engineering</span>
              </div>
            </div>

            <div className="userShowBottom">
              <div className="userShowTitle">Account Details</div>
              <div className="userShowInfo">
                <PermIdentityOutlined className="userShowIcon" />
                <span className="userShowInfoTitle">Hecto09</span>
              </div>
              <div className="userShowInfo">
                <CalendarTodayOutlined className="userShowIcon" />
                <span className="userShowInfoTitle">10.13.1999</span>
              </div>
              <div className="userShowTitle">Contact Details</div>
              <div className="userShowInfo">
                <PhoneOutlined className="userShowIcon" />
                <span className="userShowInfoTitle">+9 123 456</span>
              </div>
              <div className="userShowInfo">
                <EmailOutlined className="userShowIcon" />
                <span className="userShowInfoTitle">Hecto09@email.com</span>
              </div>
              <div className="userShowInfo">
                <LocationCityOutlined className="userShowIcon" />
                <span className="userShowInfoTitle">SYD\\AUS</span>
              </div>
            </div>
          </div>
          <div className="userUpdate shadow">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="hecto09"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Hector Berelline"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    placeholder="dd/mm/yyyy"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>email</label>
                  <input
                    type="email"
                    placeholder="hecto@email.com"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="hecto09"
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://www.pexels.com/photo/serious-woman-with-her-hands-on-her-face-9489163/"
                    alt="profile-img"
                  />
                  <label htmlFor="file">
                    <FileUploadIcon className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
