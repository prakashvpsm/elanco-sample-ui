import React from 'react'
import MainSidebar from './main-sidebar'
import { useStore } from '../../store'
import SubSidebar from './sub-sidebar'

export default function SideBar() {

    const { options } = useStore();

    console.log(options, 'options')

    return (
        <div className='bg-gray-50 h-screen'>
            {
                options && options.menu ? <SubSidebar /> :  <MainSidebar />
            }
           
        </div>
    )
}
