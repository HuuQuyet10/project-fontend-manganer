import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { getPost, createPost } from '../../../../redux/slices/Post';
import "../styles.scss";

const AddItems = (props) => {
  const checkUpdateAdd = props.dataCheckUpdateEdit;
  const states = useSelector((store) => store);
  const dataID = states.post.dataUser;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [checkButtonAddEdit, setCheckButtonAddEdit] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(states.post.post);
  const [inforUser, setInforUser] = useState({});
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  useEffect(() => {
    if (dataID && checkUpdateAdd) {
      setInforUser(dataID);
    }
  }, [dataID, checkUpdateAdd, dataUpdate]);

  useEffect(() => {
    if (inforUser) {
      Object.keys(inforUser).forEach((key) => {
        setValue(key, inforUser[key]);
      });
    }
  }, [inforUser, setValue]);
  const onSubmit = async (e) => {
    props.onClick();
    const bodyParamster = e;
    dispatch(createPost(bodyParamster));
    setIsModalVisible(false);
    dispatch(getPost());
    document.getElementById("create-course-form").reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} id="create-course-form">
        <div className="style-form-addnew">
          <div className="content-one">
            <div>
              <label>Địa chỉ khách hàng</label>
              <br></br>
              <input {...register("DiaChiKhachHang", { required: true })} className="styles__input_newinfor" />
              {errors.DiaChiKhachHang && <p>This field is required</p>}
            </div>
            <div>
              <label>Địa chỉ người chuyển tiền</label>
              <br></br>
              <input {...register("DiaChiNguoiChuyenTien", { required: true })} className="styles__input_newinfor" />
              {errors.DiaChiNguoiChuyenTien && <p>This field is required</p>}
            </div>
            <div>
              <label>Email khách</label>
              <br></br>
              <input {...register("EmailKhachHang", { required: true })} className="styles__input_newinfor" />
              {errors.EmailKhachHang && <p>This field is required</p>}
            </div>
            <div>
              <label>Giá tiền</label>
              <br></br>
              <input {...register("GiaTien", { required: true })} className="styles__input_newinfor" />
              {errors.GiaTien && <p>This field is required</p>}
            </div>
          </div>
          <div className="content-two">
            <div>
              <label>Phone khách</label>
              <br></br>
              <input {...register("SdtKhachHang", { required: true })} className="styles__input_newinfor" />
              {errors.SdtKhachHang && <p>This field is required</p>}
            </div>
            <div>
              <label>Phone người chuyển tiền</label>
              <br></br>
              <input {...register("SdtNguoiChuyenTien", { required: true })} className="styles__input_newinfor" />
              {errors.SdtNguoiChuyenTien && <p>This field is required</p>}
            </div>
            <div>
              <label>Tên đơn hàng</label>
              <br></br>
              <input {...register("TenDonHang", { required: true })} className="styles__input_newinfor" />
              {errors.TenDonHang && <p>This field is required</p>}
            </div>
            <div>
              <label>Tên khách hàng</label>
              <br></br>
              <input {...register("TenKhachHang", { required: true })} className="styles__input_newinfor" />
              {errors.TenKhachHang && <p>This field is required</p>}
            </div>
          </div>
        </div>
        <div>
          {checkUpdateAdd === "addItems" ? <button type="submit" value="Submit">Add</button> : <button type="submit" value="Submit">Update</button>}
          <button onClick={props.onClick}>Huỷ</button>
        </div>
      </form>
    </>
  );
}

export default AddItems;
