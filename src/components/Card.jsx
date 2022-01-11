import React, { useState } from 'react';
// import FeedData from './data/post.jsx';


function Card(props) {
    // console.log(props.liked);
    // const [clicked, setClicked] = useState(false);
    // const [liked, setLiked] = useState(true);
    // const [local, setLocal] = useState({id:props.id, userName:props.userName, post:props.post ,likes:props.likes});
    // let localData=[];
    // function handleLike() {
    //     setClicked(!clicked);
    //     setLiked(!liked);
    //     if(clicked !== true){
    //         setLocal({id:props.id, userName:props.userName, post:props.post ,likes:props.likes})
    //         localData = (JSON.parse(window.localStorage.getItem('Local'))!=null ? JSON.parse(window.localStorage.getItem('Local')):[]);
    //         localData.push(local);
    //         window.localStorage.setItem("Local", JSON.stringify(localData));    
    // }
    // }
    return (
        <>
            <div className='feed-card'>
                <div className='card-header'>
                    <div>
                        {/* Profile Pic can be added */}
                        <i id='user' className="far fa-user-circle"></i>
                    </div>
                    <div>
                        <a href="#">{props.userName}</a>
                    </div>
                </div>
                <div className='card-content'>
                    <img src={props.post} alt="" />
                    {/* <div className={props.liked ? 'card-liked':'dispn'}>
                    <i className="fas fa-thumbs-up"></i> {props.likes}
                    </div> */}
                    <div className={!props.liked ? 'dispn':'card-liked'}>
                        <i className="fas fa-thumbs-up"></i> You and {props.likes} others
                    </div>
                </div>

                <div className="card-footer">
                    <div>
                        <button id={props.liked ? 'liked' : 'disliked'} onClick={()=>props.handleLike(props.id)}><i className="fas fa-thumbs-up"></i>Like</button>
                    </div>
                    <div>
                        <button id='comment'><i className="fas fa-comment-alt"></i> Comment</button>
                    </div>
                    <div>
                        <button id='share'><i className="fas fa-share"></i> Share</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Card;