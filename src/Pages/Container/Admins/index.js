import React, { useEffect } from "react";
import { Layout } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LayOutAdmin from "../../Components";
import clientUtils from "../../../utils/client-utils";
import { getPost } from "../../../redux/slices/Post";
import { SiderBar, HeaderApp, FooterApp } from "../../Components";

const { Content } = Layout;

const Admins = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const logoutPage = () => {
    localStorage.clear();
    navigate("/");
  };
  const states = useSelector((store) => store);
  console.log(states, "kkkkkkkk");
  useEffect(() => {
    dispatch(getPost());
  }, []);
  return (
    <Layout hasSider>
      <SiderBar />
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <HeaderApp />
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <p>admin</p>
        </Content>
        {/* <FooterApp /> */}
      </Layout>
    </Layout>
  );
};

export default Admins;
