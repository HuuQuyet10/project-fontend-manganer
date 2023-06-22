import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bgTop from "../../../assets/bg_top.png"
import "../../../Styles/Dashboard.scss";
import {
  UserOutlined,
  UnorderedListOutlined,
  SettingOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import listRouters from "../../../routes/listRouters";
import SubMenu from "antd/lib/menu/SubMenu";

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
        <div className="logo">
          <img
            alt="bg top"
            src={bgTop}
            style={{
              width: "100%",
              padding: "17px 10px 8px 10px"
            }}
          />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
          {
            listRouters.map((item, index) => {
              if (item.publicSiderBar === true) {
                if (item.submenu && item.submenu.length > 0) {
                  return (
                    <SubMenu key={item.urlpath} icon={item.icon} title={item.label}>
                      {item.submenu.map((subItem, subIndex) => (
                        <Menu.Item key={subItem.urlpath} icon={subItem.icon}>
                          <Link to={subItem.urlpath}>{subItem.label}</Link>
                        </Menu.Item>
                      ))}
                    </SubMenu>
                  );
                } else {
                  return (
                    <Menu.Item key={item.urlpath} icon={item.icon}>
                      <Link to={item.urlpath}>{item.label}</Link>
                    </Menu.Item>
                  );
                }
              }
              return null;
            })
          }
        </Menu>
      </Sider>
    </>
  );
};

export default SiderBar;
