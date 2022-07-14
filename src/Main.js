import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';


import './Main.css';


function Main(props) {
    return (
        <section className='shop'>
            <div className='left-section'>
            <h1>Shops:</h1>
                <ul className='shop-list'>
                    <li className='shop-item'>
                        <NavLink to='Md'>
                            <button className='btn-shops'>Mc Donny</button>
                        </NavLink>
                    </li>
                    <li className='shop-item'>
                        <NavLink to='Cfk'>
                            <button className='btn-shops'>CFK</button>
                        </NavLink>
                    </li>
                    <li className='shop-item'>
                        <NavLink to=''>
                            <button className='btn-shops'>etc...</button>
                        </NavLink  >
                    </li>
                    <li className='shop-item'>
                        <NavLink to=''>
                            <button className='btn-shops'>etc...</button>
                        </NavLink>
                    </li>
                    <li className='shop-item'>
                        <NavLink to=''>
                            <button className='btn-shops'>etc...</button>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <Outlet />
        </section>
           
    );
    
}

export default Main;