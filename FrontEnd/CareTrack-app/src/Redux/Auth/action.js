import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"


//Login post request 
export const login=(userData)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
     axios.post(`http://localhost:9191/users/login`,userData)
    .then((res)=>{
        dispatch({type:LOGIN_SUCCESS, paylaod: res.data.token})
        //console.log(res.data)
    })
    .catch((err)=>{
        dispatch({type:LOGIN_FAILURE, paylaod: err.message})
    })

}