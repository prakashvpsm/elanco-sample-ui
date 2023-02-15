import React from 'react';
import { useStore } from '../../store';
import ContentTable from './table';

/**
 * This file has the main content of home screen as well as the table screen
 * 
 * @version 0.0.1
 * @author [Prakash Venkatachalam]
 */


export default function Content() {
    const { options } = useStore()
    return (
        <div className='h-screen '>
            <div className='h-full'>
                {options && options.subMenu ? <div>
                        <ContentTable />
                </div> : <div className='flex h-full flex-col gap-10 items-center justify-center'>
                    <div className='text-4xl'>Welcome to Elanco Sample test page</div>
                    <div className='flex flex-col gap-5 items-center justify-center'>
                        <div className='italic text-primary font-bold border-b-2 py-1 border-primary'>
                            Instructions :
                        </div>
                        <div className='italic text-sm'>1. To view the application lists please click the Application in the side menu</div>
                        <div className='text-sm italic'>2. To view the resource lists please click the Resources in the side menu</div>

                    </div>
                    <div className='flex text-xs text-red-600 gap-2'>
                        <div>*Note : </div>
                        <div>This application is only compatible with laptops and desktops.</div>
                    </div>

                </div>}
            </div>
        </div>
    )
}
