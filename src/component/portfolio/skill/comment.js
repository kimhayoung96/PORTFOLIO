import React from 'react';

function CommentComponent({username, usercomment, onChange, onCreated, callData, onCreate}){
    
    return(
        <>
            <h3>방명록을 남겨주세요!</h3>
            <div>
                <input 
                    name="username"
                    placeholder="이름"
                    value={username}
                    onChange={onChange}
                />
                <input 
                    name="usercomment"
                    placeholder="여기에 입력 해 주세요"
                    value={usercomment}
                    onChange={onChange}
                />
                <button type="submit" onClick={onCreated}>입력s</button>
                <button type="submit" onClick={callData}>가져오기</button>

            </div>
        </>
    )

}

export default CommentComponent;