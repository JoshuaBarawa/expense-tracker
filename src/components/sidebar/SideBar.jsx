import { React } from 'react';
import './sidebar.css'

import { NavLink } from 'react-router-dom';

const SideBar = () => {

    return (
        <div className='sidebar'>

            <div className='logo-section'>
                <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt='logo' id='logo-icon' />
                <p className='app-name'>EXPENSE TRACKER</p>
            </div>


            <div className='profile-section'>
                <div>
                    <img src={process.env.PUBLIC_URL + "/images/profile.jpg"} alt='profile' id='profile-logo' />
                    <p className='user-name'>John Doe</p>
                </div>

                <div className='balance-section'>
                    <p className='balance'>
                        <span id="balance-icon" class="material-symbols-outlined">account_balance_wallet</span>
                        Ksh 200,000</p>
                </div>
            </div>



                <ul className='list-menu-items'>
                    <li id='menu-item'><NavLink id="link-item" to="/dashboard" >Dashboard</NavLink></li>
                    <li id='menu-item'><NavLink id="link-item" to="/transactions">Transactions</NavLink></li>
                    <li id='menu-item'><NavLink id="link-item" to="/profile">Profile</NavLink></li>
                    <li id='menu-item-logout'>Logout</li>
                </ul>
            

        </div>
    )

}

export default SideBar;