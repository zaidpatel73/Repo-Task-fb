import React, { useEffect } from 'react';
import Card from './Card';
import PostInput from './post';
import Nav from './nav';
import { useDispatch, useSelector } from 'react-redux';
import { displayData, handleLike } from '../action/action';
import { setData } from '../services/service';
import Data from '../data/data';
// import Service from '../services/service';
function Home(props) {
    const display = useSelector(state=>state)
    const dispatch = useDispatch();
    // console.log(display);
    useEffect(()=>{
        setData(display)
    },[display])

    const handleFav=(id)=>{
        dispatch(handleLike(id))
    }
    return (
        <>
            <Nav/>
            <PostInput/>
            {display.map(dis=>{
            return <Card key={dis.id} id={dis.id} userName={dis.userName} post={dis.post} likes={dis.likes} liked={dis.liked} handleLike={handleFav}/>

            })}
        </>
    );
}

export default Home;