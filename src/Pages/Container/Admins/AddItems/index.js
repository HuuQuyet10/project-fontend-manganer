import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { getPost, createPost, updatePost } from '../../../../redux/slices/Post';
import "../../../../Styles/Dashboard.scss";

const AddItems = (props) => {
  console.log(props.onClick)
  const checkUpdateAdd = props.dataCheckUpdateEdit;
  const states = useSelector((store) => store);
  const dataID = states.post.dataUser;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [checkButtonAddEdit, setCheckButtonAddEdit] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(states.post.post);
  const [inforUser, setInforUser] = useState({});
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();



  // vì hàm này luôn chạy để check xem là form edit hay add, nên sẽ ko có Dependencies
  useEffect(() => {
    if (checkUpdateAdd === "addItems") {
      document.getElementById("create-course-form").reset();
    } 
  })

  // 2 hàm này chạy để cập nhật state cho input, 1 hàm sẽ get và set data cho inforUser
  // hàm còn lại sẽ lấy ra 1 inforUser duy nhất mà đang select để đổ ra input
  useEffect(() => {
    if (dataID) {
      setInforUser(dataID);
    }
  }, [dataID]);
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
    setIsModalVisible(false);
    if (checkUpdateAdd === "addItems") {
      await dispatch(createPost(bodyParamster));
    } else {
      await dispatch(updatePost(bodyParamster));
    }
    dispatch(getPost());
    document.getElementById("create-course-form").reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} id="create-course-form">
        <div className="style-form-addnew">
          <div className="content-one">
            <div>
              <label>Tên khách hàng</label>
              <br></br>
              <input {...register("TenKhachHang", { required: true })} className="styles__input_newinfor" />
              {errors.TenKhachHang && <p>Đây là trường bắt buộc</p>}
            </div>
            <div>
              <label>Địa chỉ khách hàng</label>
              <br></br>
              <input {...register("DiaChiKhachHang", { required: true })} className="styles__input_newinfor" />
              {errors.DiaChiKhachHang && <p>Đây là trường bắt buộc</p>}
            </div>
            <div>
              <label>Giá tiền</label>
              <br></br>
              <input {...register("GiaTien", { required: true })} className="styles__input_newinfor" />
              {errors.GiaTien && <p>Đây là trường bắt buộc</p>}
            </div>
          </div>
          <div className="content-two">
            <div>
              <label>Phone khách</label>
              <br></br>
              <input {...register("SdtKhachHang", { required: true })} className="styles__input_newinfor" />
              {errors.SdtKhachHang && <p>Đây là trường bắt buộc</p>}
            </div>
            <div>
              <label>Tên đơn hàng</label>
              <br></br>
              <input {...register("TenDonHang", { required: true })} className="styles__input_newinfor" />
              {errors.TenDonHang && <p>Đây là trường bắt buộc</p>}
            </div>
            <div className='group-button'>
              {checkUpdateAdd === "addItems" ? <button type="submit" value="Submit" className='btn-update-addNews'>Thêm mới</button> : <button type="submit" value="Submit" className='btn-update-addNews'>Cập nhật</button>}
              <button type="reset" onClick={props.onClick} className='btn-close-box'>Huỷ</button>
            </div>
          </div>
        </div>
      </form>
      
    </>
  );
}

export default AddItems;
