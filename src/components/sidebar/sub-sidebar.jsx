import React from 'react'
import { useStore } from '../../store';
import { setOptions } from '../../store/actions';


export default function SubSidebar() {
    const { options, data, dispatch } = useStore();


    const getMenuDatas = data[options.menu];

    const goBack = () => {
        dispatch(setOptions({ type: 'menu', value: null }))
    }

    const changeType = (value) => {
        dispatch(setOptions({ type: 'subMenu', value: value }))
    }

    console.log(getMenuDatas, 'menuasas')

    return (
        <div className='h-screen overflow-auto'>
            <div onClick={() => goBack()}> {"<"}  Back </div>
            <div className='py-10 flex flex-col'>
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
