import React from 'react'


/**
 * This file has view details page. This is dynamic table data rendering based on the single response object
 * 
 * @param {data}
 * @version 0.0.1
 * @author [Prakash Venkatachalam]
 */


export default function DetailsPage({ data }) {
    return (
        <div className='py-10'>
            <div>
                <div>
                    <table class="table-fixed">

                        <tbody>
                            {
                                Object.keys(data).length > 0 ? Object.keys(data).map(key => {
                                  
                                    return <tr className='border-b'>
                                        <td className='p-2 text-gray-800 text-md font-bold'>{key}</td>
                                        <td className='p-2'>{typeof data[key] === 'object' ? <div>
                                            {
                                                <table>
                                                    <tbody>
                                                        {
                                                            Object.keys(data[key]).map(m => {
                                                                return <tr className='border-b '>
                                                                    <td className='p-2 text-gray-800 text-sm font-bold'>{m}</td>
                                                                    <td className='p-2 text-xs'>{data[key][m]}</td>
                                                                </tr>
                                                            })
                                                        }
                                                    </tbody>
                                                </table>

                                            }
                                        </div> : <div>{data[key]}</div>}</td>
                                    </tr>
                                }) : <></>
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
