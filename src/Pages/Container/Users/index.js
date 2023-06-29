import React from "react";
import { Layout } from "antd";
import { SiderBar, HeaderApp, FooterApp } from "../../Components";

const { Content } = Layout;

const User = () => {
  return (
    <Layout hasSider>
      <SiderBar />
      <Layout
        className="site-layout"
        style={{
          marginLeft: 250,
          backgroundColor: "white"
        }}
      >
        <HeaderApp />
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <p>user</p>
        </Content>
        <FooterApp />
      </Layout>
    </Layout>
  );
};

export default User;
