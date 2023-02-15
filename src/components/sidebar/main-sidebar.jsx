import React from 'react'
import { useStore } from '../../store';
import { setOptions } from '../../store/actions';



/**
 * This file has the main sidebar
 * 
 * @version 0.0.1
 * @author [Prakash Venkatachalam]
 */

const types = [
    {
        name: 'Applications',
        path: 'application'
    },
    {
        name: 'Resources',
        path: 'resource'
    }
]

export default function MainSidebar() {

    const { dispatch } = useStore();

    const changeType = (value) => {
        dispatch(setOptions({type : 'menu', value : value}))
    }

    return (
        <div>
            <div className='py-10 flex flex-col '>
                {
                    types.map(d => {
                        return <div onClick={() => changeType(d.path)} className='px-5 py-4 hover:bg-primary hover:text-white cursor-pointer flex items-center'>
                            <div>{d.name}</div>
                            <div className='ml-auto'>{">"}</div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
