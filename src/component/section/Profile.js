import React, { Component } from 'react'

class Profile extends Component{
    render(){
        return(
            <div className='profile_tot'>
                <div className="profile_space space">
                    <h3>안녕하세요! <br /> 웹퍼블리셔 <span>김하영</span> 입니다.</h3>
                    <p>
                        정확한 마크업과 견고한 시멘틱 웹을 구현하는 웹퍼블리셔 김하영 입니다. <br />
                        웹퍼블리싱 영역을 넘어 프론트엔드 개발을 학습 해 나가며 역량을 쌓아 나가고 있습니다. <br />
                        새로운 변화와 도전을 즐겁게 받아들일 준비가 되어 있습니다!
                    </p>
                </div>

            </div>
        )
    }

}

export default Profile;