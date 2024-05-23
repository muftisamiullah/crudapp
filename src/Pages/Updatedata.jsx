import React ,{useState,useEffect}from 'react'
import "../screen1/Home.css"
import {  useNavigate, useParams } from 'react-router-dom';
import axios from "axios"


const Updatedata = () => {
     const navigate = useNavigate();
     const {id}=useParams();
    //  console.log(`ubi${id}`)

    const [inputData, setInputData] = useState({
        username:"",
        name:"",
        email:""
    });

    const getMyData = async () => {
        // const res = await axios.get(`http://localhost:3000/users/${id}`);
         const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setInputData(res.data);
        // console.log(res.data);
        
    };
    console.log(inputData);
 
    const updateMyData = (event) => {
    event.preventDefault();
    //   const res =  axios.put(`http://localhost:3000/users/${id}`, inputData);
      const res =  axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, { inputData});
      alert("goback");
     navigate('/search');
//       //console.log(res.data);
      
  };
 
 
 
  useEffect(() => {
    getMyData();
  }, []);

  return (
    <div>
       <div className="container">
      <div className="wrapper">
        <div className="title"><span>Update </span></div>
        
        
        <form onSubmit={updateMyData} >
          <div className="row">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={inputData.username} placeholder="username" required
            onChange={e => setInputData({...inputData,username:e.target.value})}/>
          </div>
          
         <div className="row">
            <label htmlFor="name">Name</label>
            <input type="text" name="name"  value={inputData.name} placeholder="name" required
                onChange={e => setInputData({...inputData,name:e.target.value})}/>
            
          </div>

          <div className="row"> 
          <label htmlFor="email">Email</label>
          <input type="email" name="email"  value={inputData.email} placeholder="Email or Phone" required
            onChange={e => setInputData({...inputData, email : e.target.value})}/>
          
          </div>
          
          <div className="row button">
            <input type="submit" value="Update"/>
          </div>
          
        </form>
      </div>
    </div>
    </div>
  )
}
export default Updatedata
