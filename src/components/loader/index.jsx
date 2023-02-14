import React from 'react'
import { Alert, Space, Spin } from 'antd';

export default function Loader() {
    return (
        <div>
            <Spin tip="Loading" size="large">
                <div className="content"></div>
            </Spin>
        </div>
    )
}
