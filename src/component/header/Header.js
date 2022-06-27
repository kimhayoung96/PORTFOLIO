import React, { Component } from 'react'

class Header extends Component{
    render(){
        return(
            <div className='header_tot'>
                <div className="head_div">
                    <h2 className='logo'>logo</h2>
                    <ul className='gnb'>
                        <li><a href="{()=>false}">Profile</a></li>
                        <li><a href="{()=>false}">Aboutme</a></li>
                        <li><a href="{()=>false}">Portfolio</a></li>
                        <li><a href="{()=>false}">Contact</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;