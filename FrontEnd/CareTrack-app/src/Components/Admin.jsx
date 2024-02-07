import React, { useState } from 'react'
import { styled } from 'styled-components'
import { useDispatch } from 'react-redux'
import { postProduct } from '../redux/products/action'

const initialState={
    image:"",
    name:"",
    brand:"",
    price:"",
    category:"",
    gender:""
}

export const Admin = () => {
   const [product,setProduct]=useState(initialState)
   const dispatch= useDispatch()

   
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(postProduct(product))
       
    }

    const handleChange =(e)=>{
    const {name,value}=e.target
        setProduct(prev => {
            return {...prev, [name] : name=== "price" ? +value :value}
        })
        
    }


  return (
    <DIV>
    <form onSubmit={handleSubmit}>
        <h2>Add New Product</h2>
        <input type="text" placeholder='Add Image'  value={product.image}  name='image' onChange={(e)=>handleChange(e)} />
        <input type="text" placeholder='Add Name' value={product.name} name='name' onChange={(e)=>handleChange(e)}/>
        <input type="text" placeholder='Add Brand' value={product.brand}  name='brand'onChange={(e)=>handleChange(e)}/>
        <input type="number" placeholder='Add Price' value={product.price}  name='price'onChange={(e)=>handleChange(e)}/>
        <select onChange={(e)=>handleChange(e)} value={product.category} name='category'>
            <option value="">Select category</option>
            <option value="top-wear">Top Wear</option>
            <option value="bottom-wear">Bottom Wear</option>
            <option value="shoes">Shoes</option>
        </select>
        <select  onChange={(e)=>handleChange(e)} value={product.gender} name='gender'>
            <option value="">Select Gender</option>
            <option value="male">Men</option>
            <option value="female">Women</option>
            <option value="kids">Kids</option>
        </select>
        <button type='submit'>Add Product</button>
    </form>
    </DIV>
  )
}


const DIV=styled.div`
 width: 400px;
margin: auto;
padding: 2%;
border: 1px solid gray;
border-radius: 5px;
form{
    display: flex;
    flex-direction: column;
    gap: 15px;
}
form h2{
    color: #e03e59;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}
input{
    height: 30px;
    font-size: large;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}
select{
    height: 30px;
    font-size: large;
   
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}
option{
    height: 50px;
    font-size: large;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif

}
button{
    height: 40px;
    background-color: #e03e59;
   
    color: white;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
    
}
button:hover{
    background-color: #eb8495;
    color: black;
   
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
    
}

`