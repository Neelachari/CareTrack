// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import { store } from '../Redux/store'
// import { editProduct } from '../Redux/PatientsReducer/action'

// export const EditPatient = () => {
//   const [age,setage]=useState("")
//   const [name,setname]=useState('')
//   const [Contact,setContact]=useState('')
//   const [gender,setgender]=useState('')
//   const [Hisotry,setHisotry]=useState('')
//   const {_id}=useParams()

// const products=useSelector((store)=> store.productReducer.products)
// const dispatch=useDispatch()

// useEffect(()=>{
//   const data=products.find((el)=>el._id == _id)
//   setage(data.age)
//   console.log(data)
// },[_id, products ])

  

  
//   const handleEdit =()=>{
//     const data = {name:name,age:age,Contact:Contact, gender:gender, Hisotry:Hisotry}
//     // dispatch(editProduct(_id, data))
//     console.log(data)
//   }


//   return (
//     <div style={{marginTop:"50px", border:"1px solid gray"}}>
//      <div  style={{marginTop:"50px", display:"flex", flexDirection:"column", width:"250px"}} >
//      <p>{_id}</p>
//       <input type="text" value={name} placeholder='Edit Name' onChange={(e)=>setname(e.target.value)}  />
//       <input type='number' value={age}     placeholder='Edit Age' onChange={(e)=>setage(e.target.value)} />
//       <input type='number' value={Contact} placeholder='Edit Contact' onChange={(e)=>setContact(e.target.value)} />
//       <input type='number' value={gender}  placeholder='Edit Gender' onChange={(e)=>setgender(e.target.value)} />
//       <input type='number' value={Hisotry}  placeholder='Edit Hisotry'onChange={(e)=>setHisotry(e.target.value)} />
//       <button onClick={handleEdit}>Update</button>
//      </div>
//     </div>
//   )
// }

// EditPatient.js
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editProduct } from '../Redux/PatientsReducer/action'
import axios from 'axios' // Ensure axios is imported

export const EditPatient = () => {
  const [age, setAge] = useState("");
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');
  const [history, setHistory] = useState('');
  const { _id } = useParams();

  const products = useSelector((store) => store.productReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = products.find((el) => el._id === _id);
    setAge(data.age);
    setName(data.name);
    setContact(data.Contact);
    setGender(data.gender);
    setHistory(data.Hisotry);
  }, [_id, products]);

  const handleEdit = () => {
    const data = { name, age, Contact: contact, gender, Hisotry: history };
    dispatch(editProduct(_id, data));
    console.log(data);
  };

  return (
    <div style={{ marginTop: "50px", border: "1px solid gray" }}>
      <div style={{ marginTop: "50px", display: "flex", flexDirection: "column", width: "250px" }}>
        <p>{_id}</p>
        <input type="text" value={name} placeholder="Edit Name" onChange={(e) => setName(e.target.value)} />
        <input type="number" value={age} placeholder="Edit Age" onChange={(e) => setAge(e.target.value)} />
        <input type="number" value={contact} placeholder="Edit Contact" onChange={(e) => setContact(e.target.value)} />
        <input type="text" value={gender} placeholder="Edit Gender" onChange={(e) => setGender(e.target.value)} />
        <input type="text" value={history} placeholder="Edit History" onChange={(e) => setHistory(e.target.value)} />
        <button onClick={handleEdit}>Update</button>
      </div>
    </div>
  );
};
