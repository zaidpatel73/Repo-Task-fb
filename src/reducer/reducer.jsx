import React from 'react';
import { GET_DATA, HANDLE_LIKE } from '../action/types';

const Reducer=(display=[], action)=>{
    const {type, payload} = action;
    console.log(payload);
    switch(type){
        case GET_DATA:
            return payload;
        case HANDLE_LIKE:
            return display.map((dis)=>{
                if(dis.id==payload){
                    dis.liked = !dis.liked
                    console.log(dis);
                }
                return dis
            })
        default:
            return display;
    }
}

export default Reducer;