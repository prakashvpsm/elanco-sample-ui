import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='not-found'>
      <div className='head'>Ooops...!</div>
      <div className='desc'>The page you were looking for does not exists</div>
      <div className='co-link'>
        <Link to={'/'}>Go to home</Link>
      </div>
    </div>
  )
}
