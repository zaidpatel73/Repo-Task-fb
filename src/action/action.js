import { GET_DATA, HANDLE_LIKE } from "./types";
import {getData} from '../services/service';


export const displayData=()=>{
    const payload=getData()
    return({type:GET_DATA, payload:payload})
}

export const handleLike=(id)=>{
    return({type:HANDLE_LIKE, payload:id})
}