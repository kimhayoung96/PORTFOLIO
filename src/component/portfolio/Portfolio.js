import React, { useState, useRef } from 'react'
import { useEffect } from 'react';
import PP1 from './list/PP1';
import CommentInput from './skill/comment';
import CommentList from './skill/commentlist'


function Portfolio (){
    const [inputs, setInputs] = useState({
        username:'',
        usercomment:''
    })
    const {username, usercomment} = inputs;
    const onChange = e =>{
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]:value
        })
    }
    const [users, setUsers] = useState([
        {
          id:1,
          username:'김하영',
          usercomment:'반가워요'
        },
        {
          id:2,
          username:'방흥위',
          usercomment:'신기해요'
        }
    ])   
    const nextId = useRef(3);
    const onCreate = ()=>{
        const user = {
            id:nextId.current,
            username,
            usercomment
        }
        setUsers([...users, user])
        setInputs({
            username:'',
            usercomment:''
        })
        nextId.current += 1;
    }
    return(
        <>  
            <div className='ppoverflow'>
                <h3>PORTFOLIO<span></span></h3>
                <div className="portfolio_tot">
                    <PP1></PP1>
                    <PP1></PP1>
                    <PP1></PP1>
                    <PP1></PP1>
                    <PP1></PP1>
                </div>
            </div>
            <div className='ppoverflow comment_area'>
                <h3>Comment<span></span></h3>
                <div className='comment'>
                    <CommentInput onChange={onChange} username={username} usercomment={usercomment} onCreate={onCreate}/>
                    <CommentList users={users}/>
                </div>
            </div>

        </>
    )

}

export default Portfolio;