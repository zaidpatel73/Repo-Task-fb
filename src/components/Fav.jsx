import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Card from './Card';
import Nav from './nav';
import { setData } from '../services/service';
import { handleLike } from '../action/action';
function Fav(props) {
    const display = useSelector(state=>state)
    const dispatch = useDispatch();
    useEffect(()=>{
        setData(display)
    },[display])

    const handleFav=(id)=>{
        dispatch(handleLike(id))
    }
    return (
        <>
            <div>

                <Nav/>
                {display.filter(({liked}) => liked == true).map((dis)=>{
                  return  <Card key={dis.id} id={dis.id} userName={dis.userName} post={dis.post} likes={dis.likes} liked={dis.liked} handleLike={handleFav}/>    

                })}

            
            </div>  
        </>
    );
}

export default Fav;