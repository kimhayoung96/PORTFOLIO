import React from 'react'
function Comment({user}){
    return(
        <>
        <li>
            <span class="name">
                {user.username}
            </span>
            <span class="cmt">
                {user.usercomment}
            </span>
        </li>


        </>
    )
}
function commentList ({users}){
    return(

        <>
        <form>
            <ul class="userlist">
                {users.map(user=>(<Comment user={user} key={user.id}/>))}

            </ul>
        </form>
        </>
    )
}

export default commentList;