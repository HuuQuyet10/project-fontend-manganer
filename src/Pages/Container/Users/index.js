import React from 'react';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import LayOutAdmin from '../../Components';
import clientUtils from '../../../utils/client-utils';
import { SiderBar, HeaderApp, FooterApp } from "../../Components";


const { Content } = Layout;


const User = () => {
    let navigate = useNavigate();
    const logoutPage = () => {
        localStorage.clear();
        navigate("/");
    }
    const states = useSelector((store) => store);
    console.log(states, "kkkkkkkk");
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
                        margin: '24px 16px 0',
                        overflow: 'initial',
                    }}
                >
                    <p>user</p>
                </Content>
                <FooterApp />
            </Layout>
        </Layout>
    );
}

export default User;
