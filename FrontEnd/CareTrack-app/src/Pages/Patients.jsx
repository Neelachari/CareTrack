import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { getProducts, postProduct } from '../Redux/PatientsReducer/action'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PatientCard } from '../Components/PatientCard'
// import { useDispatch } from 'react-redux'
// import { postProduct } from '../redux/products/action'

const initialState={
    image:"",
    name:"",
    age:"",
    Contact:"",
    gender:"",
    Hisotry:"",
    
    // category:"",
    
}

export const Patients = () => {
   const [product,setProduct]=useState(initialState)
   const [searchParms]=useSearchParams()
   const disptch=useDispatch()
   const products=useSelector((store)=> store.productReducer.products)
   const [page,setPage]=useState(1)
 
   console.log(searchParms.getAll('category'))
   console.log(searchParms.getAll('gender'));
 
   let obj={
     params: {
       category:searchParms.getAll('category'),
       gender:searchParms.getAll('gender'),
       _sort:searchParms.get("order") && "price",
       _order:searchParms.get("order"),
      
   
     }
 
  }

  const dispatch= useDispatch()

   
  const handleSubmit=(e)=>{
      e.preventDefault()
      dispatch(postProduct(product))
      disptch(getProducts(obj))
     
  }
 
   
  
    useEffect(()=>{
    disptch(getProducts(obj))
 
    },[searchParms])
 
   
 

    const handleChange =(e)=>{
    const {name,value}=e.target
        setProduct(prev => {
            return {...prev, [name] : name=== "age" && name==="Contact" ? +value :value}
        })
        
    }


  return (
    <DIV>
     <div id="div1">
     <form onSubmit={handleSubmit}>
        <h2>Add New Patient</h2>
        <input type="text" placeholder='Add Image'  value={product.image}  name='image' onChange={(e)=>handleChange(e)} />
        <input type="text" placeholder='Add Name' value={product.name} name='name' onChange={(e)=>handleChange(e)}/>
        <input type="text" placeholder='Add Age' value={product.age}  name='age'onChange={(e)=>handleChange(e)}/>
        <input type="number" placeholder='Add Contact Number' value={product.Contact}  name='Contact'onChange={(e)=>handleChange(e)}/>
        <select  onChange={(e)=>handleChange(e)} value={product.gender} name='gender'>
            <option value="">Select Gender</option>
            <option value="male">Men</option>
            <option value="female">Women</option>
            <option value="Children">Children</option>
        </select>
        <input type="text" placeholder='Add Medical Hisotry' value={product.Hisotry}  name='Hisotry'onChange={(e)=>handleChange(e)}/>
        
        {/* <select onChange={(e)=>handleChange(e)} value={product.category} name='category'>
            <option value="">Select category</option>
            <option value="top-wear">Top Wear</option>
            <option value="bottom-wear">Bottom Wear</option>
            <option value="shoes">Shoes</option>
        </select> */}
       
        <button type='submit'>Add Patient</button>
    </form>
     </div>
     <div id="div2">
     {
        products.length>0 && products.map((e)=>{
          return <PatientCard key={e.id} {...e}/>
        }  )
      }
     </div>
    </DIV>
  )
}


const DIV=styled.div`
 width: 95vw;
 display: flex;
 /* margin: auto; */
margin: auto;
margin-top: 30px;
/* padding: 2%; */
/* border: 1px solid gray; */
border-radius: 5px;
#div1{
    width: 20%;

}
#div2{
    width: 80%;
    border: 1px solid gray;
    margin-left: 10px;
    display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 20px;
  /* padding: 10px; */
}
form{
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    border: 1px solid gray;
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