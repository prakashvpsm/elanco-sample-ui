import React, { useEffect, useState } from 'react';
import useApplication from '../../custom-hooks/use-application';
import { useStore } from '../../store';
import Loader from '../loader';
import { Table, Modal } from 'antd';
import Details from './details';


/**
 * This file has the table items
 * 
 * @version 0.0.1
 * @author [Prakash Venkatachalam]
 */




export default function ContentTable() {

    const { options, data } = useStore();
    const { getApplication, getResource, loading } = useApplication();
    const [selectedItem, setItem] = useState({})

    useEffect(() => {
        //initial data rendering and also if the sub menus changes, the data will load again as per selection
        if (options.menu) {
            if (options.menu === 'application') {
                getApplication(options.subMenu)
            } else if (options.menu === 'resource') {
                getResource(options.subMenu)
            }
        }
    }, [options.subMenu])

    //This function will help us to view the all data items

    const changeItems = (items) => {
        setItem(prev => {
            prev = items;
            return { ...prev }
        })
    }


    //columns for table. As per Antd documents table columns is constructed
    const columns = [
      
        {
            title: 'Consumed Quantity',
            dataIndex: 'ConsumedQuantity',
            key: 'ConsumedQuantity',
        },
        {
            title: 'Cost',
            dataIndex: 'Cost',
            key: 'Cost',
        },
        {
            title: 'Date',
            dataIndex: 'Date',
            key: 'Date',
        },
        {
            title: 'Service Name',
            dataIndex: 'ServiceName',
            key: 'ServiceName',
        },
        {
            title: 'Actions',
            key: 'allDetails',
            render: (value, id, allVal) => {
                return <div className='text-primary font-bold cursor-pointer ' onClick={() => changeItems(value)}>View All Details</div>
            }
        }
    ]


    //Determines the view, whether it should show or not
    const isModalOpened = Object.keys(selectedItem).length > 0 ? true : false;


    return (
        <div className='p-10 flex flex-col gap-5'>
            <div>
                <h2 className='text-2xl font-bold'>{options.subMenu}</h2>
            </div>
            {
                loading ? <Loader ></Loader> : <div>
                    {
                        data.subMenuValue && data.subMenuValue.length > 0 ? <div>
                            <Table columns={columns} dataSource={data.subMenuValue} />
                        </div> : <div>No data available</div>
                    }
                </div>
            }

            <Modal title={options.subMenu} open={isModalOpened} onCancel={() => changeItems()}>
               <Details data={selectedItem}/>
            </Modal>
        </div>
    )
}
