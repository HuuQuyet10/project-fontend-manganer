import React, { useEffect, useState } from "react";
import { Layout, Select } from "antd";
import { FieldTimeOutlined, MoneyCollectOutlined, TransactionOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { SiderBar, HeaderApp, FooterApp, ColumnChart, BreadcrumbC, Loading } from "../../Components";
import constanDomain from "../../../configs/constanDomain";
import { requestGet } from "../../../services/requestMethod";
import { IconEth, IconSong, Icongold, Iconblue, PicChartDemo, Iconred } from "../../../assets";
import { priceETH } from "../../../utils/formatAllMethod";
import "./style.scss";

const { Content } = Layout;

const User = () => {
  const [loadingPage, setLoadingPage] = useState(false);
  const [dataPage, setDataPage] = useState([]);
  const [dataListNft, setDataListNft] = useState([]);
  const [ethAmount, setEthAmount] = useState([]);
  const [itemDate, setItemDate] = useState('1m');

  useEffect(() => {
    getData();
    getListNftOwned();
  }, [itemDate]);

  const getData = async () => {
    setLoadingPage(true)
    try {
      const url = `${constanDomain.DOMAIN_API + constanDomain.GET_DASHBOARD.GET_CHART_DATA}?timeRange=${itemDate}`;
      const urlSum = `${constanDomain.DOMAIN_API + constanDomain.GET_DASHBOARD.TOTAL_NUMBER_ETH}`;
      const respon = await requestGet(url);
      const responSum = await requestGet(urlSum);
      if (respon.code === 200) {
        setDataPage(respon.data);
        setLoadingPage(false);
      }
      if (responSum) {
        setEthAmount(responSum.totalValue);
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

  const getListNftOwned = async () => {
    setLoadingPage(true)
    try {
      const url = `${constanDomain.DOMAIN_API + constanDomain.PARAMS_LIST_MY_NTF.GET_NFT}?page=1&size=4`;
      const responListNft = await requestGet(url);
      if (responListNft.code === 200) {
        setDataListNft(responListNft.data);
        setLoadingPage(false);
      } else {
        console.log(responListNft);
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
  }

  const handleChange = (e) => {
    setItemDate(e);
  };

  return (
    <Layout hasSider>
      <SiderBar />
      <Layout
        className="site-layout"
        style={{
          marginLeft: 250,
          // backgroundColor: "white"
        }}
      >
        <HeaderApp />
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <div>
            <BreadcrumbC />
          </div>
          <div className="box_sort_date_show_chart">
            <p>Show the amount of NFT you have purchased under:</p>
            <Select
              defaultValue="1 month"
              style={{
                width: 120,
              }}
              onChange={handleChange}
              options={[
                {
                  value: '1w',
                  label: '1 week',
                },
                {
                  value: '2w',
                  label: '2 week',
                },
                {
                  value: '3w',
                  label: '3 week',
                },
                {
                  value: '1m',
                  label: '1 month',
                }
              ]}
            />
          </div>
          <div>
            {
              loadingPage === true ? <Loading /> : <>
                <div className="body_main_dashboard">
                  <div>
                    <ColumnChart data={dataPage} />
                    <div className="body_owned">
                      <div className="body_nft_owned">
                        <div className="owned_title">
                          <p>NFTs owned</p>
                          <Link to={"/list-nft"}>
                            <a href="/list-nft">...</a>
                          </Link>
                        </div>
                        <div className="list_item_nft_owned">
                          {
                            dataListNft.map((item, index) => {
                              return (
                                <Link to={`/list-nft/update-nft/${item._id}`}>
                                  <a href={`/list-nft/update-nft/${item._id}`}>
                                    <div className="item_nft_owned">
                                      <div className="top_nft_owned">
                                        <p>{item.name}</p>
                                        <img src={IconSong} alt="icon_eth" />
                                      </div>
                                      <div className="nft_chart_target">
                                        <div className="nft_owned_content">
                                          <img src={IconEth} alt="icon_eth" />
                                          <p className="volumn_eth">{item.price} Ether</p>
                                        </div>
                                        <p className="profit_eth">+10%</p>
                                      </div>
                                    </div>
                                  </a>
                                </Link>
                              )
                            })
                          }
                        </div>
                      </div>
                      <div className="body_investment_stats">
                        <p className="title_invest_star">Investment Stats</p>
                        <div className="content_invest_start">
                          <div>
                            <div className="body_invest">
                              <div className="invest_icon">
                                <TransactionOutlined style={{ fontSize: "29px", color: "white" }} />
                              </div>
                              <div className="invest_number">
                                <p className="title_number_invest">Total Investement</p>
                                <div className="content_invest_number">
                                  <img src={Icongold} />
                                  <p className="value_eth_gold">0.01 Ether</p>
                                </div>
                              </div>
                            </div>
                            <div className="body_invest">
                              <div className="invest_icon_time">
                                <FieldTimeOutlined style={{ fontSize: "29px", color: "white" }} />
                              </div>
                              <div className="invest_number">
                                <p className="title_number_invest">Total Investement</p>
                                <div className="content_invest_number">
                                  <img src={Iconblue} />
                                  <p className="value_eth_blue">0.01 Ether</p>
                                </div>
                              </div>
                            </div>
                            <div className="body_invest">
                              <div className="invest_icon_money">
                                <MoneyCollectOutlined style={{ fontSize: "29px", color: "white" }} />
                              </div>
                              <div className="invest_number">
                                <p className="title_number_invest">Total Investement</p>
                                <div className="content_invest_number">
                                  <img src={Iconred} />
                                  <p className="value_eth_red">0.01 Ether</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="pic_chart_demo">
                              <img src={PicChartDemo} alt="pic demo" />
                              <div className="min_max_chart">
                                <p>Max</p>
                                <p>Min</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col_infor_card">
                    <div>
                      <p className="title_my_card">My card</p>
                      <div className="my_card_dashboard">
                        <p className="title_balance">Balance</p>
                        <p className="balance_number">$ {priceETH(ethAmount).toFixed(3)} <span>({Number(ethAmount).toFixed(5)} ETH)</span></p>
                        <p className="title_profit">Monthly Profit</p>
                        <div className="box_profit">
                          <p>$1,225</p>
                          <p>+10%</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="title_top_picks">Top Picks</p>
                      <div>
                        <div className="body_top_picks">
                          <p className="title_top_item">Azuki #2100</p>
                          <div className="item_targer_price">
                            <p>$ 1522,27</p>
                            <p>0.8299931 Ether</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="body_top_picks">
                          <p className="title_top_item">BeanZ #9329</p>
                          <div className="item_targer_price">
                            <p>$ 1410,88</p>
                            <p>0.7644287 Ether</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="body_top_picks">
                          <p className="title_top_item">Avenue Blue #9943</p>
                          <div className="item_targer_price">
                            <p>$ 948,63</p>
                            <p>0.51100009 Ether</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="body_top_picks">
                          <p className="title_top_item">Liqui Cool #9949</p>
                          <div className="item_targer_price">
                            <p>$ 915,06</p>
                            <p>0.4929129 Ether</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="body_top_picks">
                          <p className="title_top_item">Roma Avenue</p>
                          <div className="item_targer_price">
                            <p>$ 604,57</p>
                            <p>0.3256660 Ether</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          </div>
        </Content>
        <FooterApp />
      </Layout>
    </Layout>
  );
};

export default User;
