import React, { useEffect, useState } from "react";
import { Button, Layout, Modal, message } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LayOutAdmin, { Loading } from "../../Components";
import ReactCanvasConfetti from 'react-canvas-confetti';
import clientUtils from "../../../utils/client-utils";
import PicDemoNft from "../../../assets/pic_avt_nft.png";
import { SiderBar, HeaderApp, FooterApp } from "../../Components";
import IconCheck from "../../../assets/icon_check_1.png";
import IconWarning from "../../../assets/icon_warning.png";
import "./style.scss";
import constanDomain, { DOMAIN_API, PARAMS_LIST_MY_NTF, PUBLIC_SALE_NFT } from "../../../configs/constanDomain";
import { requestGet, requestPost } from "../../../services/requestMethod";


const { Content } = Layout;

const MarketplaceNFT = () => {
  let navigate = useNavigate();
  const key = 'updatable';
  const [visible, setVisible] = useState(false);
  const [visibleDone, setVisibleDone] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);
  const [obItem, setObItem] = useState([]);
  const [loadingBtn, setLoadingBtn] = useState();
  const [dataPage, setDataPage] = useState([]);
  


  useEffect(() => {
    getData();
  }, []);

  const states = useSelector((store) => store);

  const getData = async () => {
    setLoadingPage(true)
    try {
      const url = `${constanDomain.DOMAIN_API + constanDomain.PUBLIC_SALE_NFT.GET_LIST_NFT}`;
      const respon = await requestGet(url);
      if (respon.code === 200) {
        setDataPage(respon.data);
        setLoadingPage(false);
      } else {
        console.log(respon);
        setLoadingPage(false);
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        localStorage.clear();
        window.location.reload(false);
      } else {
        setLoadingPage(false);
      }
    } 
  };
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const hideModal = () => {
    setVisible(false);
    setVisibleDone(false);
  };
  const handleBuy = (e) => {
    setObItem(e);
    setVisible(true);
  };
  const handleSubmitBuy = async () => {
    setLoadingBtn(true);
    const items = obItem;
    const data = {
      name: items.name,
      linkavatar: items.linkavatar,
      description: items.description,
      totalSell: items.totalSell,
      authornft: items.authornft,
      contractnft: items.contractnft,
      price: items.price,
      authornft: localStorage.getItem("nameUser") || "Admin",
    };
    const dataUpdate = {
      name: items.name,
      linkavatar: items.linkavatar,
      description: items.description,
      totalSell: items.totalSell,
      authornft: items.authornft,
      contractnft: items.contractnft,
      price: items.price,
      _id: items._id,
      hasCheck: false,
      authornft: localStorage.getItem("nameUser") || "Admin",
    };
    const url = `${DOMAIN_API + PARAMS_LIST_MY_NTF.NEW_NFT}`;
    const url2 = `${DOMAIN_API + PUBLIC_SALE_NFT.UPDATE_NFT_BY_ID}`;
    const respon = await requestPost(url, data);
    const respon2 = await requestPost(url2, dataUpdate);
    try {
      if (respon.code === 200) {
        getData();
        setLoadingBtn(false);
        setVisible(false);
      }
      if (respon2.code === 200) {
        setVisibleDone(true);
        // ...
      }
    } catch (error) {
      message.error({
        content: 'Error!',
        key,
        duration: 2,
      });
      setVisible(false);
      setLoadingBtn(false);
    }
  };
  const confettiRef = React.createRef();
  return (
    <Layout hasSider>
      <SiderBar />
      <Layout
        className="site-layout"
        style={{
          marginLeft: 250,
          backgroundColor: "white",
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
                    margin: "0px",
                  }}
                >
                  Top best-selling NFTs on the market
                </p>
              </div>
              <div
                style={{
                  margin: "10px 0 0 0",
                  display: "grid",
                  gridTemplateColumns: "20% 20% 20% 20% 20%",
                }}
              >
                {
                  loadingPage === true ? <Loading /> :
                    (
                      dataPage.map((item, index) => {
                        return <>
                          <div className="body_item">
                            <img
                              className="item_thumb"
                              src={item.linkavatar}
                              style={{
                                width: "81px",
                                height: "81px",
                                borderRadius: "12px",
                              }}
                              alt="demo nft"
                            />
                            <p className="item_name">{item.name}</p>
                            <p className="item_price">{item.price} ETH</p>
                            <p className="item_total_sell">Total sell: {item.totalSell}</p>
                            <p className="item_description">{item.description}</p>
                            {
                              item.hasCheck === true ? <>
                                <Button onClick={() => handleBuy(item)} type="primary" style={{marginTop: "10px", padding: "0px 45px", fontSize: "17px", fontWeight: "500"}}>Buy</Button>
                              </> : <>
                                <Button type="primary" disabled style={{marginTop: "10px", padding: "0px 45px", fontSize: "17px", fontWeight: "500"}}>Received</Button>
                              </>
                            }
                          </div>
                        </>
                      })
                    )
                }

              </div>
            </div>
            <div></div>
          </div>
        </Content>
        <Modal
          title={null}
          footer={null}
          visible={visible}
          onCancel={hideModal}
          width="500px"
          centered={true}
        >
         <div>
            <div className="box_icon">
              <img src={IconWarning} className="icon_warning"/>
            </div>
            <div>
              <p className="check_buy">Are you sure?</p>
              <p className="txt_suggest">Once purchased, this NFT will be in your NFT list</p>
            </div>
            <div className="footer_dialog_confimn">
              <Button onClick={handleSubmitBuy} loading={loadingBtn} type="primary" style={{fontSize: "15px", fontWeight: "600"}}>Yes, buy it</Button>
              <Button onClick={hideModal} type="primary" danger style={{fontSize: "15px", fontWeight: "600"}}>Cancel</Button>
            </div>
         </div>
        </Modal>
        <Modal
          title={null}
          footer={null}
          visible={visibleDone}
          onCancel={hideModal}
          width="500px"
          centered={true}
        >
         <div>
            <div className="box_icon">
              <img src={IconCheck} className="icon_warning"/>
            </div>
            <div>
              <p className="check_buy">Congratulations</p>
              <p className="txt_suggest">You have successfully purchased this NFT</p>
            </div>
            <div className="footer_dialog_confimn">
              <Button onClick={hideModal} type="primary" danger style={{fontSize: "15px", fontWeight: "600"}}>Close</Button>
            </div>
         </div>
        </Modal>
        <ReactCanvasConfetti ref={confettiRef} />
        <FooterApp />
      </Layout>
    </Layout>
  );
};

export default MarketplaceNFT;
