import React from "react";
import { Dropdown, Layout, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { LogoutOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import "./style.scss";


const { Header } = Layout;
const HeaderApp = () => {
  let navigate = useNavigate();

  const handleSettings = () => {
    navigate("/user")
  }
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login")
  }

  const items = [
    {
      label: <a  onClick={() => handleSettings()} className="action_user"><SettingOutlined /> <span>Settings</span></a>,
      key: '0',
    },
    {
      label: <a onClick={() => handleLogout()} className="action_user"><LogoutOutlined /> <span>LogOut</span></a>,
      key: '1',
    },
  ];
  
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        height: "74px"
      }}
    >
      <div className="box_header_attention">
        <Dropdown
          menu={{
            items,
          }}
          // trigger={['click']}
        >
          <div className="user_top">
            <a onClick={(e) => e.preventDefault()}><UserOutlined /> Admin</a>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default HeaderApp;
