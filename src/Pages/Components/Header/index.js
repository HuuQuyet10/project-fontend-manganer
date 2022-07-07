import React from "react";
import { Layout } from "antd";
const { Header } = Layout;

const HeaderApp = () => {
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
      }}
    >
      Ant Design 2022 Created by Ant UED
    </Header>
  );
};

export default HeaderApp;
