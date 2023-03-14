import React, { useEffect, useState } from "react";
import { Layout, Button, Table, Modal, Input, Form, Pagination } from "antd";
import { DownOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LayOutAdmin from "../../Components";
import clientUtils from "../../../utils/client-utils";
import { createPost, getOnePost, getPanigate, getPost } from "../../../redux/slices/Post";
import { SiderBar, HeaderApp, FooterApp } from "../../Components";
import Additems from "./AddItems";
import "./styles.scss";

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
  // console.log(states)

  
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
  const handleDeleteItem = () => {
    console.log("delete")
  }

  // edit item 
  const handleEditItem = (e) => {
    let paramsId = e;
    dispatch(getOnePost(paramsId));
    setUpdateAddItems("editItems");
    setIsModalVisible(true);
  }
  const columns = [
    {
      title: 'STT',
      key: 'index',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Địa chỉ khách hàng',
      dataIndex: 'DiaChiKhachHang',
      key: 'DiaChiKhachHang',
    },
    {
      title: 'Địa chỉ người chuyển tiền',
      dataIndex: 'DiaChiNguoiChuyenTien',
      key: 'DiaChiNguoiChuyenTien',
    },
    { 
      title: 'Giá tiền',
      dataIndex: 'GiaTien',
      key: 'GiaTien',
    },
    {
      title: 'Phone khách',
      dataIndex: 'SdtKhachHang',
      key: 'SdtKhachHang',
    },
    {
      title: 'Phone người chuyển tiền',
      dataIndex: 'SdtNguoiChuyenTien',
      key: 'SdtNguoiChuyenTien',
    },
    {
      title: 'Tên đơn hàng',
      dataIndex: 'TenDonHang',
      key: 'TenDonHang',
    },
    {
      title: 'Tên khách hàng',
      dataIndex: 'TenKhachHang',
      key: 'TenKhachHang',
    },
    // {
    //   title: 'Ngày tạo đơn',
    //   dataIndex: 'createdAt',
    //   key: 'createdAt',
    // },
    {
      title: 'Update',
      dataIndex: 'createAndUpdate',
      key: 'createAndUpdate',
      width: 120,
      render: (item, record) => {
        return (
          <div>
            <Button onClick={(e) => {
              handleEditItem(record._id)
            }} type="primary">Update</Button>
            <Button onClick={handleDeleteItem} type="error">Delete</Button>
          </div>
        )
      }
    }
  ]
  const tableProps = { bordered };
  const handleOk = (values) => {
    setIsModalVisible(false);
  };
  const checkOnclickPa = (e) => {
    const bodyParamster = e;
    setPaginationPage(e)
    dispatch(getPost(bodyParamster));
  };
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
          <div className="styles_button_aline">
            <Button onClick={handlebutton}>Thêm mới</Button>
          </div>
          <div>
            <Modal
              title={[
                <h2>THÊM MỚI</h2>
              ]}
              visible={isModalVisible}
              onCancel={handleCancel}
              width={1000}
              footer={null}
              // footer={[
              //   <>
              //     <Button type="danger" key="back" onClick={() => handleCancel()}>Hủy</Button>
              //     <Button key="submit"  type="submit">Lưu </Button>
              //   </>
              // ]}
            // onOk={handleOk}
            >
              {/* {
                console.log(states.post.dataUser.QuaTang)
              } */}
                
              <Additems onClick={handleCancel} dataCheckUpdateEdit={updateAddItems}/>
            </Modal>
          </div>
          <>
            {
              states.post.loading === false ? <p>Loading...</p> : <>
                <Table dataSource={states.post.post} columns={columns} {...tableProps} pagination={false}/>
                <div><Pagination defaultCurrent={paginationPage} total={states.post.panigatePost.length} onChange={checkOnclickPa}/></div>
              </>
            }
          </>
        </Content>
        {/* <FooterApp /> */}
      </Layout>
    </Layout>
  );
};

export default Admins;
