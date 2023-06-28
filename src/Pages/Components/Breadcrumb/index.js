import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const BreadcrumbC = (props) => {
    const { nameBreadcrumC } = props;
    return (
        <Breadcrumb>
            <Breadcrumb.Item>
                <Link to="/" style={{fontSize: "21px", fontWeight: "600", textDecoration: "underline"}}>Dashboard</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item style={{fontSize: "21px", fontWeight: "600", textDecoration: "underline"}}>{nameBreadcrumC}</Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default BreadcrumbC;
