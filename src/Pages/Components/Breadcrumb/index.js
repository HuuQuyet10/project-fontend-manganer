import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const BreadcrumbC = (props) => {
    const { nameBreadcrumC } = props;
    return (
        <Breadcrumb>
            <Breadcrumb.Item>
                <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{nameBreadcrumC}</Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default BreadcrumbC;
