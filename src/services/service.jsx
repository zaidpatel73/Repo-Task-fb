
export const getData=()=>{
   return JSON.parse(window.localStorage.getItem('data') ? window.localStorage.getItem('data'):[])
} 

export const setData =(Data)=>{
    window.localStorage.setItem('data',JSON.stringify(Data));
    console.log(Data);
}

