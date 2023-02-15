import React from 'react'
import { Alert, Space, Spin } from 'antd';


/**
 * This file has the loader component
 * 
 * @version 0.0.1
 * @author [Prakash Venkatachalam]
 */

export default function Loader() {
    return (
        <div className=''>
            <Spin size="large">
                <div className="content"></div>
            </Spin>
        </div>
    )
}
