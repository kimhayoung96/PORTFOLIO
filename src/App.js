import React from 'react';
import './App.css';
import $ from 'jquery'
// 헤더영역1
import Header from './component/header/Header';
import './css/uikit-3.14.3/css/uikit.css'
import logoImg from './images/hlogo.png'
// 섹션영역
import Profile from './component/section/Profile';
import Portfolio from './component/portfolio/Portfolio';
// 팝업영역
import Popup from './component/popup';
// ----------------------------------------------------------------
$(function(){
  window.onresize = function(e){
    let innerWidth = window.innerWidth;
    let innerHeight = window.innerHeight;
    //console.log(innerHeight)
  }
  window.onload = function(e){
    let innerWidthe = window.innerWidth;
    console.log(innerWidthe)
  }
  const list = document.querySelector('.portfolio_tot');
  const listScrollWidth = list.scrollWidth;
  const listClientWidth = list.clientWidth;
  let startX = 0;
  let nowX = 0;
  let endX = 0;
  let listX = 0;
  const onScrollStart = (e) => {
    startX = getClientX(e);
    window.addEventListener('mousemove', onScrollMove);
    window.addEventListener('touchmove', onScrollMove);
    window.addEventListener('mouseup', onScrollEnd);
    window.addEventListener('touchend', onScrollEnd);

  };
  const onScrollMove = (e) => {
    nowX = getClientX(e);
    setTranslateX(listX + nowX - startX);
  };
  const onScrollEnd = (e) => {
    endX = getClientX(e);
    listX = getTranslateX();
    if (listX > 0) {
      setTranslateX(0);
      list.style.transition = `all 0.3s ease`;
      listX = 0;
    } else if (listX < listClientWidth - listScrollWidth) {
      setTranslateX(listClientWidth - listScrollWidth);
      list.style.transition = `all 0.3s ease`;
      listX = listClientWidth - listScrollWidth;
    }
  
    window.removeEventListener('mousedown', onScrollStart);
    window.removeEventListener('touchstart', onScrollStart);
    window.removeEventListener('mousemove', onScrollMove);
    window.removeEventListener('touchmove', onScrollMove);
    window.removeEventListener('mouseup', onScrollEnd);
    window.removeEventListener('touchend', onScrollEnd);
    window.removeEventListener('click', onClick);
  
    setTimeout(() => {
      bindEvents();
      list.style.transition = '';
    }, 500);
  };
  const onClick = (e) => {
    if (startX - endX !== 0) {
      e.preventDefault();
    }
  };
  const getClientX = (e) => {
    const isTouches = e.touches ? true : false;
    return isTouches ? e.touches[0].clientX : e.clientX;
  };
  
  const getTranslateX = () => {
    return parseInt(getComputedStyle(list).transform.split(/[^\-0-9]+/g)[5]);
  };
  
  const setTranslateX = (x) => {
    list.style.transform = `translateX(${x}px)`;
  };
  const bindEvents = () => {
    list.addEventListener('mousedown', onScrollStart);
    list.addEventListener('touchstart', onScrollStart);
    list.addEventListener('click', onClick);
  };
  bindEvents();
  ////출처: https://nohack.tistory.com/123 [lucid_dream:티스토리1234]

  $(window).on('load',function(){
    $('.loading').delay(8000).fadeOut()
    $('.App').delay(9000).fadeIn()
  })
})
// ----------------------------------------------------------------
function App() {

  return (
    <>
      <div className="loading">
        <img src={logoImg} alt="img"/>
        <p>로딩중입니다. 잠시만 기다려 주세요.</p>
      </div>
      <div className="App">
        <header id="head_tot">
          <Header />
        </header>
        <section id="profile">
          <Profile />
          <Portfolio />
        </section>
        <footer>
          <Popup />
        </footer>
      </div>
    </>
  );
}

export default App;
