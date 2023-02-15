import React from 'react'
import { useStore } from '../../store';
import { setOptions } from '../../store/actions';


/**
 * This file has the sub sidebar
 * 
 * @version 0.0.1
 * @author [Prakash Venkatachalam]
 */


export default function SubSidebar() {
    const { options, data, dispatch } = useStore();


    const getMenuDatas = data[options.menu];

    const goBack = () => {
        dispatch(setOptions({ type: 'menu', value: null }))
    }

    const changeType = (value) => {
        dispatch(setOptions({ type: 'subMenu', value: value }))
    }

    return (
        <div className='h-screen overflow-auto'>
            <div className='px-5 mt-10  font-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 text-primary cursor-pointer' onClick={() => goBack()}> {"<"}  Back </div>
            <div className='py-5 flex flex-col'>
                {

                    getMenuDatas && getMenuDatas.length > 0 ? <div>
                        {getMenuDatas.map(d => {
                           return <div onClick={() => changeType(d)} className={`px-5 py-4 hover:bg-primary hover:text-white cursor-pointer flex items-center ${options.subMenu && options.subMenu === d ? 'bg-primary text-white' : ''}`}>
                                <div>{d}</div>
                                <div className='ml-auto'>{">"}</div>
                            </div>
                        })}
                    </div> : <div>----</div>
                }
            </div>
        </div>
    )
}
