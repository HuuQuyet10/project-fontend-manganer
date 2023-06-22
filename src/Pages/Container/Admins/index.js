import React, { useEffect, useState } from "react";
import {Layout, Button, Table, Modal, Input, Form, Pagination, Popconfirm, message} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formatDate, VND } from "../../../utils/formatAllMethod";
import { createPost, deletePost, getOnePost, getPanigate, getPost } from "../../../redux/slices/Post";
import { SiderBar, HeaderApp, FooterApp, BreadcrumbC } from "../../Components";
import Additems from "./AddItems";
import "../../../Styles/Dashboard.scss";

const { Content } = Layout;

const Admins = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [bordered, setBordered] = useState(true);
  const [paginationPage, setPaginationPage] = useState(1);
  const [updateAddItems, setUpdateAddItems] = useState("deleteItems");
  const logoutPage = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    const bodyParamster = 1;
    dispatch(getPost(bodyParamster));
    dispatch(getPanigate());
  }, []);


  const states = useSelector((store) => store);

  
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
    const bodyParamster = e;
    await dispatch(deletePost(bodyParamster));
    await dispatch(getPost());
  };

  // edit item 
  const handleEditItem = async (e) => {
    let paramsId = e;
    await dispatch(getOnePost(paramsId));
    setUpdateAddItems("editItems");
    setIsModalVisible(true);
  }
  const columns = [
    {
      title: 'STT',
      key: 'index',
      render: (text, record, index) => index + 1,
      width: '5%',
    },
    {
      title: 'Địa chỉ khách hàng',
      dataIndex: 'DiaChiKhachHang',
      key: 'DiaChiKhachHang',
      width: '20%',
    },
    { 
      title: 'Giá tiền',
      dataIndex: 'GiaTien',
      key: 'GiaTien',
      width: '10%',
      render: (item, record) => {
        return (
          <>
            <p>{VND.format(record.GiaTien)}</p>
          </>
        )
      }
    },
    {
      title: 'Phone khách',
      dataIndex: 'SdtKhachHang',
      key: 'SdtKhachHang',
      width: '8%',
    },
    {
      title: 'Tên đơn hàng',
      dataIndex: 'TenDonHang',
      key: 'TenDonHang',
      width: '15%',
    },
    {
      title: 'Tên khách hàng',
      dataIndex: 'TenKhachHang',
      key: 'TenKhachHang',
      width: '10%',
    },
    {
      title: 'Ngày lên đơn',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: '10%',
      render: (item, record) => {
        return (
          <>
            <p>{formatDate(record.createdAt)}</p>
          </>
        )
      }
    },
    {
      title: 'Cập nhật / Xoá',
      dataIndex: 'createAndUpdate',
      key: 'createAndUpdate',
      width: '10%',
      render: (item, record) => {
        return (
          <div>
            <Button onClick={(e) => {
              handleEditItem(record._id)
            }} type="primary" className='styles__input_update_add'>Cập nhật</Button>
            <Popconfirm
              placement="topRight"
              title="Bạn có muốn xoá đơn hàng này không?"
              description="Xoá đơn hàng"
              onConfirm={(e) => {confirmDelete(record._id)}}
              okText="Xoá"
              cancelText="Huỷ"
            >
              <Button type="primary" danger>Xoá</Button>
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
    setPaginationPage(e)
    await dispatch(getPost(bodyParamster));
  };
  return (
    <Layout hasSider>
      <SiderBar />
      <Layout
        className="site-layout"
        style={{
          marginLeft: 250,
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
              <BreadcrumbC nameBreadcrumC="Quản lý đơn hàng"/>
            </div>
            <div className="styles_button_aline">
              <Button onClick={handlebutton}>Thêm mới</Button>
            </div>
          </div>
          <div>
            <Modal
              title={[
                <h2>{updateAddItems === "addItems" ? "Thêm mới" : "Cập nhật"}</h2>
              ]}
              visible={isModalVisible}
              onCancel={handleCancel}
              width={1000}
              footer={null}
            >
              <Additems onClick={handleCancel} dataCheckUpdateEdit={updateAddItems}/>
            </Modal>
          </div>
          <>
            {
              states.post.loading === false ? <p>Loading...</p> : <>
                <Table
                  // loading={true}
                  size="small"
                  dataSource={states.post.post}
                  columns={columns}
                  {...tableProps}
                  pagination={false}
                  scroll={{ x: 1800 }}
                />
                <div className="box_pagination">
                  <Pagination defaultCurrent={paginationPage} total={states.post.panigatePost.length} onChange={checkOnclickPa}/>
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
