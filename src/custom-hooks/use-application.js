import React, { useState } from 'react'
import { getRequest } from '../services'
import { getApplications, getResources, getApplicationsByApplicationName, getResourcesByResourceName } from '../services/uri'
import { useStore } from '../store'
import { setData } from '../store/actions'


export default function useApplication() {

    const { dispatch } = useStore();
    const [loading, setloading] = useState()

    const getAllData = () => {
        setloading(true);

        getRequest(getApplications).then(res => {
            if (res) {
                dispatch(setData({ type: 'application', value: res.data }))
                getRequest(getResources).then(res1 => {
                    if (res) {
                        dispatch(setData({ type: 'resource', value: res1.data }))
                        setloading(false)
                    } else {
                        setloading(false)
                    }
                })
            } else {
                setloading(false)
            }
        }).catch(err => {
            setloading(false)
        })
    }

    const getApplication = (name) => {
        setloading(true);

        getRequest(getApplicationsByApplicationName(name)).then(res => {
            if (res) {
                setloading(false);
                dispatch(setData({ type: 'subMenuValue', value: res.data }))
            } else {
                setloading(false);

            }
        }).catch(err => {
            setloading(false);

        })
    }

    const getResource = (name) => {
        setloading(true);

        getRequest(getResourcesByResourceName(name)).then(res => {
            if (res) {
                setloading(false);
                dispatch(setData({ type: 'subMenuValue', value: res.data }))
            } else {
                setloading(false);
            }
        }).catch(err => {
            setloading(false);

        })
    }

    return {
        getAllData,
        loading,
        getResource,
        getApplication
    }
}
