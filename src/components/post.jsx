import React from 'react';

function PostInput(props) {
    return (
        <>
            <div className="feed-post">
                <div className='post-header'>
                    <div>
                        <i id='user' className="far fa-user-circle"></i>
                    </div>
                    <div>
                        <input type="text" placeholder="What's on your mind, Zaid?" />
                    </div>
                </div>

                <div className='post-footer'>
                    <div>
                        <button><i id='video' className="fas fa-video"></i> Live video</button>
                    </div>
                    <div>
                        <button><i id='pic' className="fas fa-images"></i> Photo/Video</button>
                    </div>
                    <div>
                        <button><i id='act' className="fas fa-laugh"></i> Feeling/Activity</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostInput; 