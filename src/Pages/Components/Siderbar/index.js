import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../../Styles/Dashboard.scss";
import {
  UserOutlined,
  UnorderedListOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import listRouters from "../../../routes/listRouters";

const { Header, Content, Footer, Sider } = Layout;

const items2 = [
  {
    urlpath: "/admin",
    icon: React.createElement(UnorderedListOutlined),
    label: "Quản lý đơn hàng",
  },
  {
    urlpath: "/user-details",
    icon: React.createElement(UserOutlined),
    label: "user",
  },
];

const SiderBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  return (
    <>
      <Sider
        // collapsible
        // collapsed={collapsed}
        // onCollapse={(value) => setCollapsed(value)}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
          {
            listRouters.map((item, index) => {
              return item.publicSiderBar === true ? (
                <Menu.Item key={item.urlpath} icon={item.icon}>
                  <Link to={item.urlpath}>{item.label}</Link>
                </Menu.Item>
              ) : null;
            })
          }
          {/* <Menu.Item key="/admin" icon={<UnorderedListOutlined />}>
            <Link to="/admin">Quản lý đơn hàng</Link>
          </Menu.Item>
          <Menu.Item key="/user-details" icon={<UserOutlined />}>
            <Link to="/user-details">User</Link>
          </Menu.Item> */}
        </Menu>
      </Sider>
    </>
  );
};

export default SiderBar;
