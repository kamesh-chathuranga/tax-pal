import React from 'react'
import { Link } from 'react-router-dom'
import classes from './CTA.module.css'

const CTA = () => {
  return (
    <div className={classes.background}>
        <div className={classes.wrapper}>
            <div className={classes.mainContent}>
                <h1>Get started today</h1>
                <h3>It’s time to take control of your books. Buy our software so you can feel like you’re doing something productive.</h3>
                <Link to='/register' className='btn'>Get 6 months free</Link>
            </div> 
        </div>
    </div>
  )
}

export default CTA