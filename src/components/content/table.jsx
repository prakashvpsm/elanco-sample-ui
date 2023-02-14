import React, { useEffect, useState } from 'react';
import useApplication from '../../custom-hooks/use-application';
import { useStore } from '../../store';
import Loader from '../loader';
import { Table, Modal } from 'antd';
import ApplicationDetails from './application-details';
import ResourceDetails from './resource-details';



export default function ContentTable() {

    const { options, data } = useStore();
    const { getApplication, getResource, loading } = useApplication();
    const [selectedItem, setItem] = useState({})

    useEffect(() => {
        if (options.menu) {
            if (options.menu === 'application') {
                getApplication(options.subMenu)
            } else if (options.menu === 'resource') {
                getResource(options.subMenu)
            }
        }
    }, [])

    const changeItems = (items) => {
        console.log(items, 'items')
        setItem(prev => {
            prev = items;
            return { ...prev }
        })
    }


    const applicationColumns = [
        {
            title: 'Instance Id',
            dataIndex: 'InstanceId',
            key: 'InstanceId',
        },
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
                console.log(value, id, allVal)
                return <div className='text-primary font-bold cursor-pointer ' onClick={() => changeItems(value)}>View</div>
            }
        }
    ]

    console.log(options, 'subMenuValue', data.subMenuValue);

    const isModalOpened = Object.keys(selectedItem).length > 0 ? true : false;

    console.log(isModalOpened, 'isModalOpened', selectedItem)

    return (
        <div className='p-10 flex flex-col gap-5'>
            <div>
                <h2 className='text-2xl font-bold'>{options.subMenu}</h2>
            </div>
            {
                loading ? <Loader ></Loader> : <div>
                    {
                        data.subMenuValue && data.subMenuValue.length > 0 ? <div>
                            <Table columns={applicationColumns} dataSource={data.subMenuValue} />
                        </div> : <div>No data available</div>
                    }
                </div>
            }

            <Modal title={options.subMenu} open={isModalOpened} onCancel={() => changeItems()}>
                {
                    options.menu === 'application' ? <ApplicationDetails data={selectedItem}/> : options.options.menu === 'resource' ? <ResourceDetails data={selectedItem}/> : <div>No Data Found</div>
                }
            </Modal>
        </div>
    )
}
