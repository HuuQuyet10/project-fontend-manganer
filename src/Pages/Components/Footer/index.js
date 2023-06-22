import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

const FooterApp = () => {
  return (
    <Footer
      style={{
        position: "fixed",
            left: 250,
            bottom: 0,
            width: "calc(100% - 250px)", // Đặt width cho Footer là 100% trừ đi 200px
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
      }}
    >
      @Copyright 2023 QuyetPH, All rights reserved
    </Footer>
  );
};

export default FooterApp;
