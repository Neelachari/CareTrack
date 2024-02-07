import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { deleteproduct, getProducts } from '../Redux/PatientsReducer/action'

export const PatientCard = ({_id,name,image,age,Contact,gender,Hisotry}) => {

    const dispatch=useDispatch()

    //from action.js
    const handleDelete=()=>{
      dispatch(deleteproduct(_id))
      .then(()=>{
        dispatch(getProducts({}))
      })
  
    }
  


  return (
    <DIV key={_id}>
        <img  src={image} alt={name} />
        <h4>Patient Name:{name}</h4>
        {/* <h5>Brand:{brand}</h5> */}
        <h3>Age: {age}</h3>
        <h6>Contact:{Contact}</h6>
        <h6>Gender:{gender}</h6>
        <h6>Patient Hisotry:{Hisotry}</h6>
        <button id="edit">
          <Link to={`/EditPatient/${_id}`}>Edit</Link>
        </button>
        <button id="delete" onClick={handleDelete} >
              Delete
        </button>
    </DIV>
  )
}


// image:String,
//     name :String,
//     age:Number,
//     Contact:Number,
//     gender:String,
//     Hisotry:String

const DIV=styled.div`
border: 1px solid gray;
padding: 10px;
box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
 img{
  width: "100%";
 }
 button{
    background-color : #e03e59;
    margin-top: "30px";
    width: 80px;
    color: white;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
 }
 button:hover{
    background-color: #e27587;
    color: black;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
 }
 /* #del{
  background-color: red;
 } */
 /* #edit{
  background-color : #404140;
   
  
 }  */
 #delete{
    width: 80px;
    margin-left: 10px;
 }
 h3{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
 }
 h4{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
 }
 h6{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
 }
 h5{
    font-weight: 100px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
 }
`