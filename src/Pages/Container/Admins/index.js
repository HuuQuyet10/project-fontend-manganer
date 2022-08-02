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
import "./styles.scss";

const { Content } = Layout;

const Admins = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [bordered, setBordered] = useState(true);
  const [paginationPage, setPaginationPage] = useState(1);
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
  console.log(states)
  if (states.post.errorMessage === "Request failed with status code 401") {
    localStorage.clear()
    window.location.reload(false);
  } else {
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
  const handleEditItem = (e) => {
    let paramsId = e;
    dispatch(getOnePost(paramsId))
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
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (e) => {
    const bodyParamster = e;
    dispatch(createPost(bodyParamster));
    setIsModalVisible(false);
    dispatch(getPost());
    // document.getElementById("create-course-form").reset();
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
              footer="null"
              // footer={[
              //   <>
              //     <Button type="danger" key="back" onClick={() => handleCancel()}>Hủy</Button>
              //     <Button key="submit"  type="submit">Lưu </Button>
              //   </>
              // ]}
            // onOk={handleOk}
            >
              <form onSubmit={handleSubmit(onSubmit)} id="create-course-form">
                <div className="style-form-addnew">
                  <div className="content-one">
                    <div>
                      <label>Địa chỉ khách hàng</label>
                      <br></br>
                      <input {...register("DiaChiKhachHang", { required: true })} className="styles__input_newinfor"/>
                      {errors.DiaChiKhachHang && <p>This field is required</p>}
                    </div>
                    <div>
                      <label>Địa chỉ người chuyển tiền</label>
                      <br></br>
                      <input {...register("DiaChiNguoiChuyenTien", { required: true })} className="styles__input_newinfor"/>
                      {errors.DiaChiNguoiChuyenTien && <p>This field is required</p>}
                    </div>
                    <div>
                      <label>Email khách</label>
                      <br></br>
                      <input {...register("EmailKhachHang", { required: true })} className="styles__input_newinfor"/>
                      {errors.EmailKhachHang && <p>This field is required</p>}
                    </div>
                    <div>
                      <label>Giá tiền</label>
                      <br></br>
                      <input {...register("GiaTien", { required: true })} className="styles__input_newinfor"/>
                      {errors.GiaTien && <p>This field is required</p>}
                    </div>
                    <div>
                      <label>Mã đơn hàng</label>
                      <br></br>
                      <input {...register("MaDonHang", { required: true })} className="styles__input_newinfor"/>
                      {errors.MaDonHang && <p>This field is required</p>}
                    </div>
                    <div>
                      <label>Ngày tháng</label>
                      <br></br>
                      <input {...register("NgayThang", { required: true })} className="styles__input_newinfor"/>
                      {errors.NgayThang && <p>This field is required</p>}
                    </div>
                    <div>
                      <label>Phương thức thanh toán</label>
                      <br></br>
                      <input {...register("PhuongThucThanhToan", { required: true })} className="styles__input_newinfor"/>
                      {errors.PhuongThucThanhToan && <p>This field is required</p>}
                    </div>
                    <div>
                      <label>Quà tặng</label>
                      <br></br>
                      <input {...register("QuaTang", { required: true })} className="styles__input_newinfor"/>
                      {errors.QuaTang && <p>This field is required</p>}
                    </div>
                  </div>
                  <div className="content-two">
                    <div>
                      <label>Phone khách</label>
                      <br></br>
                      <input {...register("SdtKhachHang", { required: true })} className="styles__input_newinfor"/>
                      {errors.SdtKhachHang && <p>This field is required</p>}
                    </div>
                    <div>
                      <label>Phone người chuyển tiền</label>
                      <br></br>
                      <input {...register("SdtNguoiChuyenTien", { required: true })} className="styles__input_newinfor"/>
                      {errors.SdtNguoiChuyenTien && <p>This field is required</p>}
                    </div>
                    <div>
                      <label>Tên đơn hàng</label>
                      <br></br>
                      <input {...register("TenDonHang", { required: true })} className="styles__input_newinfor"/>
                      {errors.TenDonHang && <p>This field is required</p>}
                    </div>
                    <div>
                      <label>Tên khách hàng</label>
                      <br></br>
                      <input {...register("TenKhachHang", { required: true })} className="styles__input_newinfor"/>
                      {errors.TenKhachHang && <p>This field is required</p>}
                    </div>
                    <div>
                      <label>Tên người chuyển tiền</label>
                      <br></br>
                      <input {...register("TenNguoiChuyenTien", { required: true })} className="styles__input_newinfor"/>
                      {errors.TenNguoiChuyenTien && <p>This field is required</p>}
                    </div>
                    <div>
                      <label>Tên nhân viên sale</label>
                      <br></br>
                      <input {...register("TenNhanVienSale", { required: true })} className="styles__input_newinfor"/>
                      {errors.TenNhanVienSale && <p>This field is required</p>}
                    </div>
                    <div>
                      <label>Tên quản lý</label>
                      <br></br>
                      <input {...register("TenQuanLy", { required: true })} className="styles__input_newinfor"/>
                      {errors.TenQuanLy && <p>This field is required</p>}
                    </div>
                    <div>
                      <label>Tracking URL</label>
                      <br></br>
                      <input {...register("TrackingURL", { required: true })} className="styles__input_newinfor"/>
                      {errors.TrackingURL && <p>This field is required</p>}
                    </div>
                  </div>
                </div>
                <div>
                  <button type="submit" value="Submit">Submit</button>
                  <button>Huỷ</button>
                </div>
              </form>
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
