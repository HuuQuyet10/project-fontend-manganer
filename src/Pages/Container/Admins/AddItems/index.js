import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { getPost, createPost } from '../../../../redux/slices/Post';
import "../styles.scss";

const AddItems = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch();
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
    const states = useSelector((store) => store);
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} id="create-course-form">
                <div className="style-form-addnew">
                  <div className="content-one">
                    <div>
                      <label>Địa chỉ khách hàng</label>
                      <br></br>
                      <input {...register("DiaChiKhachHang", { required: true })} className="styles__input_newinfor" placeholder={states.post.dataUser.DiaChiKhachHang}/>
                      {errors.DiaChiKhachHang && <p>This field is required</p>}
                    </div>
                    <div>
                      <label>Địa chỉ người chuyển tiền</label>
                      <br></br>
                      <input {...register("DiaChiNguoiChuyenTien", { required: true })} className="styles__input_newinfor" value="ksdkaks"/>
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
                    {/* <div>
                      <label>Mã đơn hàng</label>
                      <br></br>
                      <input {...register("MaDonHang", { required: true })} className="styles__input_newinfor"/>
                      {errors.MaDonHang && <p>This field is required</p>}
                    </div> */}
                    {/* <div>
                      <label>Ngày tháng</label>
                      <br></br>
                      <input {...register("NgayThang", { required: true })} className="styles__input_newinfor"/>
                      {errors.NgayThang && <p>This field is required</p>}
                    </div> */}
                    {/* <div>
                      <label>Phương thức thanh toán</label>
                      <br></br>
                      <input {...register("PhuongThucThanhToan", { required: true })} className="styles__input_newinfor"/>
                      {errors.PhuongThucThanhToan && <p>This field is required</p>}
                    </div> */}
                    {/* <div>
                      <label>Quà tặng</label>
                      <br></br>
                      <input {...register("QuaTang", { required: true })} className="styles__input_newinfor"/>
                      {errors.QuaTang && <p>This field is required</p>}
                    </div> */}
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
                    {/* <div>
                      <label>Tên người chuyển tiền</label>
                      <br></br>
                      <input {...register("TenNguoiChuyenTien", { required: true })} className="styles__input_newinfor"/>
                      {errors.TenNguoiChuyenTien && <p>This field is required</p>}
                    </div> */}
                    {/* <div>
                      <label>Tên nhân viên sale</label>
                      <br></br>
                      <input {...register("TenNhanVienSale", { required: true })} className="styles__input_newinfor"/>
                      {errors.TenNhanVienSale && <p>This field is required</p>}
                    </div> */}
                    {/* <div>
                      <label>Tên quản lý</label>
                      <br></br>
                      <input {...register("TenQuanLy", { required: true })} className="styles__input_newinfor"/>
                      {errors.TenQuanLy && <p>This field is required</p>}
                    </div> */}
                    {/* <div>
                      <label>Tracking URL</label>
                      <br></br>
                      <input {...register("TrackingURL", { required: true })} className="styles__input_newinfor"/>
                      {errors.TrackingURL && <p>This field is required</p>}
                    </div> */}
                  </div>
                </div>
                <div>
                  <button type="submit" value="Submit">Submit</button>
                  <button onClick={props.onClick}>Huỷ</button>
                </div>
              </form>
        </>
    );
}

export default AddItems;
