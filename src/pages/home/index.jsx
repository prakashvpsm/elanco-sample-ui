import React, { useEffect } from 'react'
import useApplication from '../../custom-hooks/use-application'
import Loader from '../../components/loader';
import SideBar from '../../components/sidebar';
import Content from '../../components/content';
import Header from '../../components/header';

/**
 * This file has all the main component for home pages including header, sidebar and content
 * 
 * @version 0.0.1
 * @author [Prakash Venkatachalam]
 */


export default function Home() {

  const { loading, getAllData } = useApplication();

  useEffect(() => {
    getAllData()
  }, [])


  return (
    <div>
      {
        loading ? <div className='h-screen flex items-center justify-center'>
          <Loader />
        </div> : <div className='w-full'>
          <div className='w-full'>
            <Header />
          </div>

          <div className='w-full flex'>

            <div className='w-1/6'>
              <SideBar />
            </div>
            <div className='w-5/6'>
              <Content />
            </div>
          </div>
        </div>
      }
    </div>
  )
}
