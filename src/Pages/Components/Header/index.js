import React from "react";
import Marquee from "react-fast-marquee";
import { Layout } from "antd";
const { Header } = Layout;

const HeaderApp = () => {
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
      </div>
    </Header>
  );
};

export default HeaderApp;
