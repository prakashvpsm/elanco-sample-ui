import React, { useEffect } from 'react'
import useApplication from '../../custom-hooks/use-application'
import Loader from '../../components/loader';
import SideBar from '../../components/sidebar';
import Content from '../../components/content';
import Header from '../../components/header';

export default function Home() {

  const { loading, getAllData } = useApplication();

  useEffect(() => {
    getAllData()
  }, [])


  return (
    <div>
      {
        loading ? <div>
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
