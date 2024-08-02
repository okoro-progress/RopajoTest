import React from 'react'
import './DashboardAccount.css'
import GuestDashBoard from '../GuestDashBoard/GuestDashBoard'
import { Link } from 'react-router-dom'
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader'
import roll_icon from '../../assets/play-icon.svg'

const DashboardAccount = () => {
return (
<div className='dashboardAccount'>    
    <div className='dashboardAccount-web'>
        <div className='dashAccount-guest-section'>
            <GuestDashBoard/>
        </div>
        

        <div className='dashAccount-content-section'>
            <div className='dashAccount-content-head'>
                <Link>Back to Homepage</Link>
            </div>
            <div className='dashAccount-content-body'>
                <p>Account </p>
                <div>
                <div className='dashAccount-content-table-section'>
                    <div className='dashAccount-web-table-holder'>
                    <table className='dashAccount-web-table'>
                        <thead>
                        <div>
                            <span>Date</span>
                            <span>Category</span>
                            <span>Bill</span>
                            <span>Paid</span>
                            <span>Balance</span>
                        </div>
                    </thead>
                    <tbody>
                        <div>
                            <span>03.02.2023</span>
                            <span>Room</span>
                            <span>90,000.00</span>
                            <span>40,000.00</span>
                            <span>50,000.00</span>
                        </div>
                        <div>
                            <span>03.02.2023</span>
                            <span>Laundry</span>
                            <span>25,200.00</span>
                            <span>15,000.00</span>
                            <span>10,000.00</span>
                        </div>
                        <div>
                            <span>03.02.2023</span>
                            <span>Restaurant</span>
                            <span>9,500.00</span>
                            <span>9,500.00</span>
                            <span>0.00</span>
                        </div>
                        <div>
                            <span>03.02.2023</span>
                            <span>Pool</span>
                            <span>5,000.00</span>
                            <span>15,000.00</span>
                            <span>10,000.00</span>
                        </div>
                        <div>
                            <span>03.02.2023</span>
                            <span>Room</span>
                            <span>30,000.00</span>
                            <span>00.00</span>
                            <span>30,000.00</span>
                        </div>
                        <div>
                            <span></span>
                            <span><h3 className='dashAccount-total'>TOTAL</h3></span>
                            <span><span className='dashAccount-total-amount bill-red'>216,500.00</span></span>
                            <span ><span className='dashAccount-total-amount paid-green'>216,500.00</span></span>
                            <span><span className='dashAccount-total-amount'>216,500.00</span></span>
                        </div>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>

    {/* mobile deign start here */}
    <div className='mobile-dasboardAccount'>
        <div className='mobile-dasboardAccount-head'>
            <DashBoardHeader/>
        </div>
        
    </div>
</div>    
)
}

export default DashboardAccount
