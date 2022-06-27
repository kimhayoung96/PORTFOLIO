import React ,{useState, useEffect}from 'react';


function User ({user, onRemove}){

    const { username, usercomment, id} = user;
        return (
            <>
                <form >
                    <ul>
                        <li><span></span><span>{username}</span>{usercomment}</li>
                    </ul>
                </form>
                <button onClick={()=>onRemove(id)}>삭제</button>
            </>
        )
    }
 
function removeComment({users, onRemove}) {
    return (
        <div>
          {
              users.map(
                  user => (<User user={user} key={user.id} onRemove={onRemove}/>)
              )
          }
        </div>
    )
}

export default removeComment;