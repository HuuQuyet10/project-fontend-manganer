import React from "react";
import Marquee from "react-fast-marquee";
import { Dropdown, Layout, Space } from "antd";
import { DownOutlined, LogoutOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import "./style.scss";
import { useNavigate } from "react-router-dom";


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
        {/* <Marquee
          pauseOnHover={true}
          speed={90}
        >
          <p className="text-heightLine">Đây là một dự án cá nhân dài hạn nhằm để củng cố kiến thức cá nhân cũng như tích góp những thứ hay ho lên project này chứ không phải mục đích để kinh doanh!!</p>
        </Marquee> */}
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
