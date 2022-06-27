import React, { Component } from 'react'
import pp1 from '../../../images/pp1.png'

class PP1 extends Component{

    render(){
        return(
            <div className='job_tot uk-card uk-card-default'>
                <div className="uk-card-media-top">
                    <img src={pp1} alt="logo"/>
                </div>
                <div className="job job1 uk-card-body">
                    <ul>
                        <li>이름 : 바이오벌트</li>
                        <li>소개 : 모바일 페이지 퍼블리싱 작업 및 기존 프론트엔드 수정</li>
                        <li>기간 : 약 7일</li>
                        <li>기여도 : 모바일 100%</li>
                        <li>사용한 프로그램 : 고도몰, editplus, photoshop, illustrator</li>
                    </ul>
                    <div className='btn'>
                        <a href="{()=>false}" target="_blank" rel="noopener noreferrer">작업과정</a>
                        <a href="http://m.abamexasia2.godomall.com/" target="_blank" rel="noopener noreferrer">바로가기</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default PP1;