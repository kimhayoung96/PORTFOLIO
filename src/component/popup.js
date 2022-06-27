import React, { Component } from 'react'
import mypic from '../images/me.png'
import $ from 'jquery'

$(function(){
    console.log('popup')
    const $snsList = $('.connect_sns>li:nth-child(1)')
    const $snsList2 = $('.connect_sns>li:nth-child(2)')
    $('.contact_me').on('click',function(){
        $snsList.toggleClass('on');
        if($snsList.hasClass('on')===true){
            $snsList.animate({bottom:60})
        }else{
            $snsList.delay(100).animate({bottom:0})
        }
        $snsList2.toggleClass('on');
        if($snsList2.hasClass('on')===true){
            $snsList2.delay(100).animate({bottom:110})
        }else{
            $snsList2.animate({bottom:0})
        }
    })
})

class Popup extends Component{
    render(){
        return(
            <div className='popup_tot'>
                <div className='contact_me'>
                    <img src={mypic} alt="내사진" />
                    <p></p>
                </div>
                <ul className='connect_sns'>
                    <li><a href="mailto:6yue@kakao.com" target="_blank" rel="noopener noreferrer">6yue@kakao.com</a></li>
                    <li><a href="tel:010-7274-2701" target="_blank" rel="noopener noreferrer">010-7274-2701</a></li>
                </ul>
            </div>
        )
    }
}

export default Popup;