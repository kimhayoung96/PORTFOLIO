import React, { useState, useRef } from 'react';

function CommentInput({onChange, username, usercomment, onCreate}){

    return(
        <>
        <div className='commentInput'>
            <div className="input_cont">
                <input name='username' placeholder="이름" onChange={onChange} value={username} ></input>
                <input name= 'usercomment' placeholder="내용을 남겨주세요" onChange={onChange} value={usercomment} ></input>
            </div>
            <button type='button' onClick={onCreate}>등록</button>
        </div>
        </>
    )

}

export default CommentInput;