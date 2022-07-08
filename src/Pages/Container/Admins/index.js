import React, { useEffect, useState } from "react";
import { Layout, Form, Radio, Space, Switch, Table } from "antd";
import { DownOutlined } from '@ant-design/icons';
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
  const [dataTables, setDataTables] = useState([]);
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
    }
  ]
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
          <>
            {
              states.post.loading === false ? <p>Loading...</p> : 
              <Table dataSource={states.post.post} columns={columns} />
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
