import React from "react";
import { Button, Layout } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LayOutAdmin from "../../Components";
import clientUtils from "../../../utils/client-utils";
import PicDemoNft from "../../../assets/pic_avt_nft.png";
import { SiderBar, HeaderApp, FooterApp } from "../../Components";

const { Content } = Layout;

const MarketplaceNFT = () => {
  let navigate = useNavigate();
  const logoutPage = () => {
    localStorage.clear();
    navigate("/");
  };
  const states = useSelector((store) => store);
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
          <div className="body-content">
            <div>
              <div>
                <p
                  style={{
                    fontSize: "19px",
                    fontWeight: "bold",
                    margin: "0px"
                  }}
                >Top 10 best-selling NFTs on the floor</p>
              </div>
              <div style={{ margin: "10px 0 0 0", display: "grid", gridTemplateColumns: "20% 20% 20% 20% 20%" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src={PicDemoNft}
                    style={{
                      width: "81px",
                      height: "81px",
                      borderRadius: "12px"
                    }}
                    alt="demo nft"
                  />
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "15px",
                      margin: "10px 0 0 0",
                      lineHeight: "nornal",

                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitLineClamp: "1",
                      WebkitBoxOrient: "vertical"
                    }}
                  >Azuki #9833</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "red",
                      margin: "0px",
                      lineHeight: "nornal"
                    }}
                  >0.001</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      margin: "0px",
                      lineHeight: "nornal"
                    }}
                  >5500/9000</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      margin: "0px",
                      lineHeight: "nornal",
                      textAlign: "left",

                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitLineClamp: "3",
                      WebkitBoxOrient: "vertical"
                    }}
                  >khi chúng được định vị , không tạo thành các câu với một ý nghĩa hoàn chỉnh, nhưng hãy tạo sức sống cho một văn bản thử nghiệm hữu ích để lấp đ</p>
                  <Button type="primary" style={{
                    backgroundColor: "#04AA6D",
                    border: "none",
                    width: "55%",
                    margin: "10px 0 0 0"
                  }}>Buy</Button>
                </div>
                {/* ------------------------------------------------------------------ */}
                <div style={{ textAlign: "center" }}>
                  <img
                    src={PicDemoNft}
                    style={{
                      width: "81px",
                      height: "81px",
                      borderRadius: "12px"
                    }}
                    alt="demo nft"
                  />
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "15px",
                      margin: "10px 0 0 0",
                      lineHeight: "nornal",

                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitLineClamp: "1",
                      WebkitBoxOrient: "vertical"
                    }}
                  >Azuki #9833</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "red",
                      margin: "0px",
                      lineHeight: "nornal"
                    }}
                  >0.001</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      margin: "0px",
                      lineHeight: "nornal"
                    }}
                  >5500/9000</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      margin: "0px",
                      lineHeight: "nornal",
                      textAlign: "left",

                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitLineClamp: "3",
                      WebkitBoxOrient: "vertical"
                    }}
                  >khi chúng được định vị , không tạo thành các câu với một ý nghĩa hoàn chỉnh, nhưng hãy tạo sức sống cho một văn bản thử nghiệm hữu ích để lấp đ</p>
                  <Button type="primary" style={{
                    backgroundColor: "#04AA6D",
                    border: "none",
                    width: "55%",
                    margin: "10px 0 0 0"
                  }}>Buy</Button>
                </div>
                {/* ------------------------------------------------------------------ */}
                <div style={{ textAlign: "center" }}>
                  <img
                    src={PicDemoNft}
                    style={{
                      width: "81px",
                      height: "81px",
                      borderRadius: "12px"
                    }}
                    alt="demo nft"
                  />
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "15px",
                      margin: "10px 0 0 0",
                      lineHeight: "nornal",

                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitLineClamp: "1",
                      WebkitBoxOrient: "vertical"
                    }}
                  >Azuki #9833</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "red",
                      margin: "0px",
                      lineHeight: "nornal"
                    }}
                  >0.001</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      margin: "0px",
                      lineHeight: "nornal"
                    }}
                  >5500/9000</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      margin: "0px",
                      lineHeight: "nornal",
                      textAlign: "left",

                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitLineClamp: "3",
                      WebkitBoxOrient: "vertical"
                    }}
                  >khi chúng được định vị , không tạo thành các câu với một ý nghĩa hoàn chỉnh, nhưng hãy tạo sức sống cho một văn bản thử nghiệm hữu ích để lấp đ</p>
                  <Button type="primary" style={{
                    backgroundColor: "#04AA6D",
                    border: "none",
                    width: "55%",
                    margin: "10px 0 0 0"
                  }}>Buy</Button>
                </div>
                {/* ------------------------------------------------------------------ */}
                <div style={{ textAlign: "center" }}>
                  <img
                    src={PicDemoNft}
                    style={{
                      width: "81px",
                      height: "81px",
                      borderRadius: "12px"
                    }}
                    alt="demo nft"
                  />
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "15px",
                      margin: "10px 0 0 0",
                      lineHeight: "nornal",

                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitLineClamp: "1",
                      WebkitBoxOrient: "vertical"
                    }}
                  >Azuki #9833</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "red",
                      margin: "0px",
                      lineHeight: "nornal"
                    }}
                  >0.001</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      margin: "0px",
                      lineHeight: "nornal"
                    }}
                  >5500/9000</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      margin: "0px",
                      lineHeight: "nornal",
                      textAlign: "left",

                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitLineClamp: "3",
                      WebkitBoxOrient: "vertical"
                    }}
                  >khi chúng được định vị , không tạo thành các câu với một ý nghĩa hoàn chỉnh, nhưng hãy tạo sức sống cho một văn bản thử nghiệm hữu ích để lấp đ</p>
                  <Button type="primary" style={{
                    backgroundColor: "#04AA6D",
                    border: "none",
                    width: "55%",
                    margin: "10px 0 0 0"
                  }}>Buy</Button>
                </div>
                {/* ------------------------------------------------------------------ */}
                <div style={{ textAlign: "center" }}>
                  <img
                    src={PicDemoNft}
                    style={{
                      width: "81px",
                      height: "81px",
                      borderRadius: "12px"
                    }}
                    alt="demo nft"
                  />
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "15px",
                      margin: "10px 0 0 0",
                      lineHeight: "nornal",

                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitLineClamp: "1",
                      WebkitBoxOrient: "vertical"
                    }}
                  >Azuki #9833</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "red",
                      margin: "0px",
                      lineHeight: "nornal"
                    }}
                  >0.001</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      margin: "0px",
                      lineHeight: "nornal"
                    }}
                  >5500/9000</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      margin: "0px",
                      lineHeight: "nornal",
                      textAlign: "left",

                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitLineClamp: "3",
                      WebkitBoxOrient: "vertical"
                    }}
                  >khi chúng được định vị , không tạo thành các câu với một ý nghĩa hoàn chỉnh, nhưng hãy tạo sức sống cho một văn bản thử nghiệm hữu ích để lấp đ</p>
                  <Button type="primary" style={{
                    backgroundColor: "#04AA6D",
                    border: "none",
                    width: "55%",
                    margin: "10px 0 0 0"
                  }}>Buy</Button>
                </div>
                {/* ------------------------------------------------------------------ */}
                <div style={{ textAlign: "center" }}>
                  <img
                    src={PicDemoNft}
                    style={{
                      width: "81px",
                      height: "81px",
                      borderRadius: "12px"
                    }}
                    alt="demo nft"
                  />
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "15px",
                      margin: "10px 0 0 0",
                      lineHeight: "nornal",

                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitLineClamp: "1",
                      WebkitBoxOrient: "vertical"
                    }}
                  >Azuki #9833</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "red",
                      margin: "0px",
                      lineHeight: "nornal"
                    }}
                  >0.001</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      margin: "0px",
                      lineHeight: "nornal"
                    }}
                  >5500/9000</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      margin: "0px",
                      lineHeight: "nornal",
                      textAlign: "left",

                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitLineClamp: "3",
                      WebkitBoxOrient: "vertical"
                    }}
                  >khi chúng được định vị , không tạo thành các câu với một ý nghĩa hoàn chỉnh, nhưng hãy tạo sức sống cho một văn bản thử nghiệm hữu ích để lấp đ</p>
                  <Button type="primary" style={{
                    backgroundColor: "#04AA6D",
                    border: "none",
                    width: "55%",
                    margin: "10px 0 0 0"
                  }}>Buy</Button>
                </div>
                {/* ------------------------------------------------------------------ */}
                <div style={{ textAlign: "center" }}>
                  <img
                    src={PicDemoNft}
                    style={{
                      width: "81px",
                      height: "81px",
                      borderRadius: "12px"
                    }}
                    alt="demo nft"
                  />
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "15px",
                      margin: "10px 0 0 0",
                      lineHeight: "nornal",

                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitLineClamp: "1",
                      WebkitBoxOrient: "vertical"
                    }}
                  >Azuki #9833</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "red",
                      margin: "0px",
                      lineHeight: "nornal"
                    }}
                  >0.001</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      margin: "0px",
                      lineHeight: "nornal"
                    }}
                  >5500/9000</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      margin: "0px",
                      lineHeight: "nornal",
                      textAlign: "left",

                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitLineClamp: "3",
                      WebkitBoxOrient: "vertical"
                    }}
                  >khi chúng được định vị , không tạo thành các câu với một ý nghĩa hoàn chỉnh, nhưng hãy tạo sức sống cho một văn bản thử nghiệm hữu ích để lấp đ</p>
                  <Button type="primary" style={{
                    backgroundColor: "#04AA6D",
                    border: "none",
                    width: "55%",
                    margin: "10px 0 0 0"
                  }}>Buy</Button>
                </div>
                {/* ------------------------------------------------------------------ */}
                <div style={{ textAlign: "center" }}>
                  <img
                    src={PicDemoNft}
                    style={{
                      width: "81px",
                      height: "81px",
                      borderRadius: "12px"
                    }}
                    alt="demo nft"
                  />
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "15px",
                      margin: "10px 0 0 0",
                      lineHeight: "nornal",

                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitLineClamp: "1",
                      WebkitBoxOrient: "vertical"
                    }}
                  >Azuki #9833</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "red",
                      margin: "0px",
                      lineHeight: "nornal"
                    }}
                  >0.001</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      margin: "0px",
                      lineHeight: "nornal"
                    }}
                  >5500/9000</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      margin: "0px",
                      lineHeight: "nornal",
                      textAlign: "left",

                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitLineClamp: "3",
                      WebkitBoxOrient: "vertical"
                    }}
                  >khi chúng được định vị , không tạo thành các câu với một ý nghĩa hoàn chỉnh, nhưng hãy tạo sức sống cho một văn bản thử nghiệm hữu ích để lấp đ</p>
                  <Button type="primary" style={{
                    backgroundColor: "#04AA6D",
                    border: "none",
                    width: "55%",
                    margin: "10px 0 0 0"
                  }}>Buy</Button>
                </div>
                {/* ------------------------------------------------------------------ */}
                <div style={{ textAlign: "center" }}>
                  <img
                    src={PicDemoNft}
                    style={{
                      width: "81px",
                      height: "81px",
                      borderRadius: "12px"
                    }}
                    alt="demo nft"
                  />
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "15px",
                      margin: "10px 0 0 0",
                      lineHeight: "nornal",

                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitLineClamp: "1",
                      WebkitBoxOrient: "vertical"
                    }}
                  >Azuki #9833</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "red",
                      margin: "0px",
                      lineHeight: "nornal"
                    }}
                  >0.001</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      margin: "0px",
                      lineHeight: "nornal"
                    }}
                  >5500/9000</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      margin: "0px",
                      lineHeight: "nornal",
                      textAlign: "left",

                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitLineClamp: "3",
                      WebkitBoxOrient: "vertical"
                    }}
                  >khi chúng được định vị , không tạo thành các câu với một ý nghĩa hoàn chỉnh, nhưng hãy tạo sức sống cho một văn bản thử nghiệm hữu ích để lấp đ</p>
                  <Button type="primary" style={{
                    backgroundColor: "#04AA6D",
                    border: "none",
                    width: "55%",
                    margin: "10px 0 0 0"
                  }}>Buy</Button>
                </div>
                {/* ------------------------------------------------------------------ */}
                <div style={{ textAlign: "center" }}>
                  <img
                    src={PicDemoNft}
                    style={{
                      width: "81px",
                      height: "81px",
                      borderRadius: "12px"
                    }}
                    alt="demo nft"
                  />
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "15px",
                      margin: "10px 0 0 0",
                      lineHeight: "nornal",

                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitLineClamp: "1",
                      WebkitBoxOrient: "vertical"
                    }}
                  >Azuki #9833</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "red",
                      margin: "0px",
                      lineHeight: "nornal"
                    }}
                  >0.001</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      margin: "0px",
                      lineHeight: "nornal"
                    }}
                  >5500/9000</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      margin: "0px",
                      lineHeight: "nornal",
                      textAlign: "left",

                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitLineClamp: "3",
                      WebkitBoxOrient: "vertical"
                    }}
                  >khi chúng được định vị , không tạo thành các câu với một ý nghĩa hoàn chỉnh, nhưng hãy tạo sức sống cho một văn bản thử nghiệm hữu ích để lấp đ</p>
                  <Button type="primary" style={{
                    backgroundColor: "#04AA6D",
                    border: "none",
                    width: "55%",
                    margin: "10px 0 0 0"
                  }}>Buy</Button>
                </div>
                {/* ------------------------------------------------------------------ */}
               
              </div>
            </div>
            <div></div>
          </div>
        </Content>
        <FooterApp />
      </Layout>
    </Layout>
  );
};

export default MarketplaceNFT;