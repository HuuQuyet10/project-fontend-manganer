import React, { useState } from "react";
import { Button, Col, Form, Input, Layout, Row, Tooltip, message  } from "antd";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import clientUtils from "../../../../utils/client-utils";
import { SiderBar, HeaderApp, FooterApp, BreadcrumbC } from "../../../Components";
import { ArrowLeftOutlined } from "@ant-design/icons";
import PidcDemo from "../../../../assets/pic_demo.png";
import "../index.scss";
import { requestPost } from "../../../../services/requestMethod";
import { DOMAIN_API, PARAMS_LIST_MY_NTF } from "../../../../configs/constanDomain";
import TextArea from "antd/lib/input/TextArea";

const { Content } = Layout;

const AddNft = () => {
  let navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(null);
  const key = 'updatable';
  const handleInputChange = (event) => {
    setImageUrl(event.target.value);
  };
  const onFinish = async (values) => {
    message.loading({
      content: 'Loading...',
      key,
    });
    const data = {
      name: values.name,
      linkavatar: values.linkavatar,
      description: values.description,
      totalSell: values.totalSell,
      authornft: localStorage.getItem("nameUser") || "Admin",
      contractnft: values.contractnft,
      price: values.price,
    }
    const url = `${DOMAIN_API + PARAMS_LIST_MY_NTF.NEW_NFT}`
    const respon = await requestPost(url, data);
    try {
      if (respon.code === 200) {
        message.success({
          content: 'Success!',
          key,
          duration: 2,
        });
        navigate("/list-nft");
      }
    } catch (error) {
      message.error({
        content: 'Error!',
        key,
        duration: 2,
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
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
          <div style={{
            display: "flex",
            justifyContent: "space-between"
          }}>
            <div>
              <BreadcrumbC nameBreadcrumC="Create My NFT" />
            </div>
            <Link to="/list-nft">
              <Button type="primary" danger icon={<ArrowLeftOutlined />}>Back</Button>
            </Link>
          </div>
          <div className="body_Content">
            <Row>
              <Col span={12}>
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item label="Name" name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your name!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item label="Description" name="description"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your description!',
                      },
                    ]}
                  >
                    <TextArea />
                  </Form.Item>
                  <Form.Item label="Price" name="price"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your price!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item label="Total Sell" name="totalSell"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your total sell!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item label="Contract NFT" name="contractnft"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your contract NFT!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item label="Picture NTF" name="linkavatar"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your picture NFT!',
                        },
                      ]}
                    >
                      <Input onChange={handleInputChange} placeholder="Please input link picture (not upload, file)" />
                    </Form.Item>
                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" style={{ marginRight: "15px"}}>Submit</Button>
                    <Link to="/list-nft">
                      <Button type="primary" danger>Cancel</Button>
                    </Link>
                  </Form.Item>
                </Form>
              </Col>
              <Col span={12}>
                <Tooltip placement="top" title="Pic demo">
                  <img
                    src={imageUrl === null ? PidcDemo : imageUrl}
                    style={{
                      marginLeft: "20px",
                      maxWidth: "22vh",
                      maxHeight: "auto"
                    }}
                  />
                </Tooltip>

              </Col>
            </Row>

          </div>
        </Content>
        <FooterApp />
      </Layout >
    </Layout >
  );
};

export default AddNft;
