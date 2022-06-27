import React, { useState, useRef } from 'react'
import { useEffect } from 'react';
import PP1 from './list/PP1';
import CommentComponent from './skill/comment';
import CommentList from './skill/commentlist';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import $ from 'jquery';

function Portfolio (){
    
    const [inputs, setInputs] = useState({
        username: '',
        usercomment: '',
    })
    useEffect(()=>{
        document.title=`이건 username : ${username}`
    })

    const {username, usercomment} = inputs;
    const onChange = e => {
    const {name, value} = e.target;
    setInputs({
        ...inputs,
        [name]: value
    })
    }
    const [users, setUsers] = useState([]);
    
    const nextId = useRef(0);
    
    const onCreate = () =>{
        const user = {
            id: nextId.current,
            username,
            usercomment,
        }
        setUsers([...users, user])
        setInputs({
            username: '',
            usercomment: ''
    })
    //console.log(nextId.current);
    nextId.current += 1;
    }
    const onRemove = id=>{
        setUsers(users.filter(user=>user.id !== id));
    }

    const [check, setCheck] = useState(false);
    
    const onCreated = ()=>{
        const userObj = {name : username};
        window.localStorage.setItem("userName",JSON.stringify(userObj));
        const user = {
            id: nextId.current,
            username,
            usercomment,
        }
        setUsers([...users, user])
        setInputs({
            username: '',
            usercomment: ''
        })
        //console.log(nextId.current);
        nextId.current += 1;
    }
    const callData = ()=>{
        setCheck(true);
    };

  
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
            <div className='ppoverflow'>
                <h3>Comment<span></span></h3>
                <div className='comment'>
                    <CommentComponent username={username} usercomment={usercomment} onChange={onChange} onCreate={onCreate} />
                    <CommentList users={users} onRemove={onRemove} />
                </div>
            </div>

        </>
    )

}

export default Portfolio;