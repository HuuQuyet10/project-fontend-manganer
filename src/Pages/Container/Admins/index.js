import React, { useEffect, useState } from "react";
import { Layout, Button, Table, Modal, Input, Form } from "antd";
import { DownOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LayOutAdmin from "../../Components";
import clientUtils from "../../../utils/client-utils";
import { getPost } from "../../../redux/slices/Post";
import { SiderBar, HeaderApp, FooterApp } from "../../Components";
import "./styles.scss";

const { Content } = Layout;

const Admins = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [bordered, setBordered] = useState(true);
  const logoutPage = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    dispatch(getPost());
  }, []);
  const states = useSelector((store) => store);
  if (states.post.errorMessage === "Request failed with status code 401") {
    localStorage.clear()
    window.location.reload(false);
  } else {
    console.log(states.post);
  }
  const handlebutton = () => {
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
  const handleEditItem = () => {
    console.log("edit")
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
      title: 'Email khách',
      dataIndex: 'EmailKhachHang',
      key: 'EmailKhachHang',
    },
    {
      title: 'Giá tiền',
      dataIndex: 'GiaTien',
      key: 'GiaTien',
    },
    {
      title: 'Mã đơn hàng',
      dataIndex: 'MaDonHang',
      key: 'MaDonHang',
    },
    {
      title: 'Ngày tháng',
      dataIndex: 'NgayThang',
      key: 'NgayThang',
    },
    {
      title: 'Phương thức thanh toán',
      dataIndex: 'PhuongThucThanhToan',
      key: 'PhuongThucThanhToan',
    },
    {
      title: 'Quà tặng',
      dataIndex: 'QuaTang',
      key: 'QuaTang',
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
    {
      title: 'Tên người chuyển tiền',
      dataIndex: 'TenNguoiChuyenTien',
      key: 'TenNguoiChuyenTien',
    },
    {
      title: 'Tên nhân viên sale',
      dataIndex: 'TenNhanVienSale',
      key: 'TenNhanVienSale',
    },
    {
      title: 'Tên quản lý',
      dataIndex: 'TenQuanLy',
      key: 'TenQuanLy',
    },
    {
      title: 'Tracking URL',
      dataIndex: 'TrackingURL',
      key: 'TrackingURL',
    },
    {
      title: 'Ngày tạo đơn',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Update',
      dataIndex: 'createAndUpdate',
      key: 'createAndUpdate',
      width: 120,
      render: () => {
        return (
          <div>
            <Button onClick={handleEditItem} type="primary">Update</Button>
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
              footer={[
                <>
                  <Button type="danger" key="back" onClick={() => handleCancel()}>Hủy</Button>
                  <Button key="submit" type="primary" htmlType="submit">Lưu </Button>
                </>
              ]}
            // onOk={handleOk}
            >
              <div className="style-form-addnew">
                <div className="content-one">
                  <div>
                    <label>Địa chỉ khách hàng</label>
                    <Input/>
                  </div>
                  <div>
                    <label>Địa chỉ người chuyển tiền</label>
                    <Input />
                  </div>
                  <div>
                    <label>Email khách</label>
                    <Input />
                  </div>
                  <div>
                    <label>Giá tiền</label>
                    <Input />
                  </div>
                  <div>
                    <label>Mã đơn hàng</label>
                    <Input />
                  </div>
                  <div>
                    <label>Ngày tháng</label>
                    <Input />
                  </div>
                  <div>
                    <label>Phương thức thanh toán</label>
                    <Input />
                  </div>
                  <div>
                    <label>Quà tặng</label>
                    <Input />
                  </div>
                </div>
                <div className="content-two">
                  <div>
                    <label>Phone khách</label>
                    <Input />
                  </div>
                  <div>
                    <label>Phone người chuyển tiền</label>
                    <Input />
                  </div>
                  <div>
                    <label>Tên đơn hàng</label>
                    <Input />
                  </div>
                  <div>
                    <label>Tên khách hàng</label>
                    <Input />
                  </div>
                  <div>
                    <label>Tên người chuyển tiền</label>
                    <Input />
                  </div>
                  <div>
                    <label>Tên nhân viên sale</label>
                    <Input />
                  </div>
                  <div>
                    <label>Tên quản lý</label>
                    <Input />
                  </div>
                  <div>
                    <label>Tracking URL</label>
                    <Input />
                  </div>
                </div>
              </div>
            </Modal>
          </div>
          <>
            {
              states.post.loading === false ? <p>Loading...</p> :
                <Table dataSource={states.post.post} columns={columns} {...tableProps} />
            }
            {/* <p>kkkkkkkkk</p> */}
          </>
        </Content>
        {/* <FooterApp /> */}
      </Layout>
    </Layout>
  );
};

export default Admins;
