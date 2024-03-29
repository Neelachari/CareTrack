import axios from "axios"
import { DELETE_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes"

export const postProduct=(newProduct)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})

     axios.post(`https://caretrack-backend-cz6a.onrender.com/Patients/Patients`, newProduct)
    .then((res)=>{
        dispatch({type:POST_PRODUCT_SUCCESS, payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:PRODUCT_FAILURE})
    })


}


export const getProducts = (obj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.get(`https://caretrack-backend-cz6a.onrender.com/Patients/Patients`,obj)
    .then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS, payload :res.data})
    })
    .catch((err)=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}


// //Edit the product on page patch request
export const editProduct =({_id, data})=> (dispatch)=>{
    console.log(data )
    dispatch({type:PRODUCT_REQUEST})
    axios.patch(`https://caretrack-backend-cz6a.onrender.com/Patients/Patients/${_id}`, data)
    .then((res)=>{
        console.log(res)
       dispatch({type:PATCH_PRODUCT_SUCCESS})

    })
    .catch((err)=>{
        dispatch({type:PRODUCT_FAILURE})
    })

}






export const deleteproduct =(id) => (dispatch)=>{
    dispatch({type:PRODUCT_REQUEST});

    let payload =[]

   axios.get(`https://caretrack-backend-cz6a.onrender.com/Patients/Patients/`)
    .then((res)=>{
        payload= res.data.filter((el)=> el.id !== id)
    })




   return axios.delete(`https://caretrack-backend-cz6a.onrender.com/Patients/Patients/${id}`)
    .then((res)=>{
       console.log(res);
       dispatch({type:DELETE_PRODUCT_SUCCESS, payload})
    })
    .catch((err)=>{
        dispatch({type:PRODUCT_FAILURE})
    })


}

