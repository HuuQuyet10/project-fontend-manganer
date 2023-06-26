import React, { useEffect, useState } from "react";
import useStateRef from "react-usestateref";
import {Layout, Button, Table, Modal, Input, Form, Pagination, Popconfirm, message, Space} from "antd";
import { EditTwoTone, DeleteOutlined, EyeTwoTone, SearchOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { formatDate, VND } from "../../../utils/formatAllMethod";
import { createPost, deletePost, getOnePost, getPanigate, getPost } from "../../../redux/slices/Post";
import { SiderBar, HeaderApp, FooterApp, BreadcrumbC, Loading } from "../../Components";
import { requestDelete, requestGet } from "../../../services/requestMethod";
import "../../../Styles/Dashboard.scss";
import constanDomain, { DOMAIN_API, PARAMS_LIST_MY_NTF } from "../../../configs/constanDomain";

const { Content } = Layout;

const Admins = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const propsToPass = {
    ADD: "ADD",
    EDIT: "EDIT",
    VIEW: "VIEW" 
  };
  const key = 'updatable';
  const itemsPerPage = 10;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [bordered, setBordered] = useState(true);
  const [loadingPage, setLoadingPage] = useState(false);
  const [paginationPage, setPaginationPage] = useState(1);
  const [updateAddItems, setUpdateAddItems] = useState("deleteItems");
  const [totalItem, setTotalItem] = useState(0);
  const logoutPage = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    const bodyParamster = 1;
    dispatch(getPost(bodyParamster));
    dispatch(getPanigate());

    getData();
  }, []);
  const [statePage, setStatePage, statePageRef] = useStateRef(1);
  const [dataPage, setDataPage] = useState();

  const states = useSelector((store) => store);

  const getData = async () => {
    setLoadingPage(true)
    try {
      const url = `${constanDomain.DOMAIN_API + constanDomain.PARAMS_LIST_MY_NTF.GET_NFT + `?page=${statePageRef.current}&size=10`}`;
      const respon = await requestGet(url);
      if (respon.code === 200) {
        setDataPage(respon.data);
        setTotalItem(respon.total)
        setLoadingPage(false);
      } else {
        console.log(respon);
        setLoadingPage(false);
      }
    } catch (error) {
      console.log(error);
      setLoadingPage(false);
    }
  };
  if (states.post.errorMessage === "Request failed with status code 401") {
    localStorage.clear()
    window.location.reload(false);
  } else {
  }
  const handlebutton = () => {
    setUpdateAddItems("addItems");
    setIsModalVisible(true);
  }
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // handle delete item
  const confirmDelete = async (e) => {
    message.loading({
      content: 'Loading...',
      key,
    });
    const url = `${DOMAIN_API + PARAMS_LIST_MY_NTF.DELETE_NFT + e}`;
    try {
      const respon = await requestDelete(url);
      if (respon.code === 200) {
        getData();
        message.success({
          content: 'Success!',
          key,
          duration: 2,
        });
      } else {
        message.error({
          content: 'Error!',
          key,
          duration: 2,
        });
      }
    } catch (error) {
      message.error({
        content: 'Error!',
        key,
        duration: 2,
      });
    }
  };

  // edit item 
  const handleEditItem = async (e) => {
    navigate(`/list-nft/update-nft/${e}`, {replace: true, state: propsToPass.EDIT});
  }

  //view item
  const handleViewItem = async (e) => {
    navigate(`/list-nft/update-nft/${e}`, {replace: true, state: propsToPass.VIEW})
  };
  const handleSearch = async (selectedKeys, confirm, dataIndex) => {
    const bodyParamster = selectedKeys[0];
    let url = '';

    if (bodyParamster === null || bodyParamster === undefined) {
      url = `${constanDomain.DOMAIN_API + constanDomain.PARAMS_LIST_MY_NTF.GET_NFT}?page=${statePageRef.current}&size=10`;
    } else {
      url = `${constanDomain.DOMAIN_API + constanDomain.PARAMS_LIST_MY_NTF.SEARCH_NFT_NAME + `${bodyParamster}`}`;
    }
    try {
      const respon = await requestGet(url);
      if (respon.code === 200) {
        setDataPage(respon.data);
        setTotalItem(respon.total)
      } else {
        console.log(respon);
      }
    } catch (error) {
      console.log(error);
      setLoadingPage(false);
    }
    // confirm();
    // setSearchText(selectedKeys[0]);
    // setSearchedColumn(dataIndex);
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          // ref={searchInput}
          placeholder={`Search name`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space style={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          <Button
            type="primary"
            // onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            type="primary"
            size="small"
            // onClick={() => {
            //   close();
            // }}
          >
            close
          </Button>
        </Space>
      </div>
    )
  });
  const columns = [
    {
      title: 'ID',
      key: 'index',
      width: '5%',
      align: "center",
      render: (text, record, index) => ((statePageRef.current - 1) * itemsPerPage) + index + 1,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '10%',
      ...getColumnSearchProps('name')
    },
    { 
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: '5%',
      align: "center"
      // render: (item, record) => {
      //   return (
      //     <>
      //       <p>{VND.format(record.GiaTien)}</p>
      //     </>
      //   )
      // }
    },
    {
      title: 'Total Sell',
      dataIndex: 'totalSell',
      key: 'totalSell',
      width: '8%',
      align: "center"
    },
    {
      title: 'Date buy',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: '8%',
      render: (item, record) => {
        return (
          <>
            <p>{formatDate(record.createdAt)}</p>
          </>
        )
      },
      align: "center"
    },
    {
      title: 'Contract',
      dataIndex: 'contractnft',
      key: 'contractnft',
      width: '10%',
      render: (item, record) => {
        return (
          <>
            <a target="_blank" href={`https://etherscan.io/address/${record.contractnft}`}>{record.contractnft}</a>
          </>
        )
      }
    },
    {
      title: 'Picture NTF',
      dataIndex: 'linkavatar',
      key: 'linkavatar',
      width: '10%',
      render: (item, record) => {
        return (
          <>
            <img
              src={record.linkavatar}
              alt="picture nft"
              style={{
                width: "81px",
                height: "81px",
                borderRadius: "12px"
              }}
            />
          </>
        )
      },
      align: "center"
    },
    {
      title: 'Action',
      dataIndex: 'createAndUpdate',
      key: 'createAndUpdate',
      width: '10%',
      align: "center",
      render: (item, record) => {
        return (
          <div>
            {/* <Button
              onClick={(e) => {
                handleEditItem(record._id)
              }}
              type="primary"
              className='styles__input_update_add'
            >
              <EditTwoTone />
            </Button> */}
            <EyeTwoTone
              onClick={() => {
                handleViewItem(record._id)
              }}
              style={{
                fontSize: "22px",
                marginRight: "10px"
              }}
            />
            <EditTwoTone
              onClick={() => {
                handleEditItem(record._id)
              }}
              style={{
                fontSize: "22px",
                marginRight: "10px"
              }}
            />
            <Popconfirm
              placement="topRight"
              title="Delete this NFT ?"
              onConfirm={(e) => {confirmDelete(record._id)}}
              okText="Ok"
              cancelText="Cancel"
            >
              <DeleteOutlined
                style={{
                  fontSize: "22px",
                  color: "red"
                }}
              />
            </Popconfirm>
          </div>
        )
      }
    }
  ]
  const tableProps = { bordered };
  const handleOk = (values) => {
    setIsModalVisible(false);
  };
  const checkOnclickPa = async (e) => {
    const bodyParamster = e;
    setPaginationPage(bodyParamster);
    setStatePage(bodyParamster)
    getData();
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
              <BreadcrumbC nameBreadcrumC="My list NFT"/>
            </div>
            <div className="styles_button_aline">
              <Link to="/list-nft/create-nft">
                <Button>Create</Button>
              </Link>
            </div>
          </div>
          <>
            {
              loadingPage === true ? <Loading /> : <>
                <Table
                  // loading={true}
                  size="small"
                  dataSource={dataPage}
                  columns={columns}
                  {...tableProps}
                  pagination={false}
                  scroll={{ x: 1800 }}
                />
                <div className="box_pagination">
                  <Pagination
                    defaultCurrent={paginationPage}
                    total={totalItem}
                    onChange={checkOnclickPa}
                  />
                </div>
              </>
            }
          </>
        </Content>
        <FooterApp />
      </Layout>
    </Layout>
  );
};

export default Admins;
