import React from 'react'
import MainSidebar from './main-sidebar'
import { useStore } from '../../store'
import SubSidebar from './sub-sidebar'


/**
 * This file has the sidebar components. Based on selection we will render which one should be visible
 * 
 * @version 0.0.1
 * @author [Prakash Venkatachalam]
 */

export default function SideBar() {

    const { options } = useStore();

    return (
        <div className='bg-gray-50 h-screen'>
            {
                options && options.menu ? <SubSidebar /> :  <MainSidebar />
            }
           
        </div>
    )
}
