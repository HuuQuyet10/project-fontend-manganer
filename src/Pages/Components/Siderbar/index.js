import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../../Styles/Dashboard.scss";
import {
  UserOutlined,
  UnorderedListOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const items2 = [
  {
    key: "2",
    icon: React.createElement(UnorderedListOutlined),
    label: <Link to="/admin">Quản lý đơn hàng</Link>,
  },
  {
    key: "3",
    icon: React.createElement(UserOutlined),
    label: <Link to="/user-details">user</Link>,
  },
];

const SiderBar = () => {
  const location = useLocation();
  return (
    <>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Menu
          theme="dark"
          mode="inline"
          // defaultSelectedKeys={[location.pathname]}
          items={items2}
        />
      </Sider>
    </>
  );
};

export default SiderBar;
